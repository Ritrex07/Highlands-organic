import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  currencyForCountry,
  currencyLabels,
  formatCurrency,
  type CurrencyCode,
  supportedCurrencies,
} from "@/lib/currency";

type CurrencyContextValue = {
  currency: CurrencyCode;
  rates: Partial<Record<CurrencyCode, number>>;
  detected: boolean;
  setCurrency: (currency: CurrencyCode) => void;
  locationConsent: "unknown" | "accepted" | "declined";
  acceptLocationDetection: () => void;
  declineLocationDetection: () => void;
  formatPrice: (tzsValue: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);
const COOKIE_NAME = "hoc_currency";
const CONSENT_COOKIE_NAME = "hoc_location_consent";

function readCurrencyCookie(): CurrencyCode | null {
  if (typeof document === "undefined") return null;
  const value = document.cookie
    .split(";")
    .map((part) => part.trim().split("="))
    .find(([name]) => name === COOKIE_NAME)?.[1];
  return supportedCurrencies.includes(value as CurrencyCode)
    ? (value as CurrencyCode)
    : null;
}

function writeCurrencyCookie(currency: CurrencyCode) {
  document.cookie = `${COOKIE_NAME}=${currency}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

function readConsentCookie(): "unknown" | "accepted" | "declined" {
  if (typeof document === "undefined") return "unknown";
  const value = document.cookie
    .split(";")
    .map((part) => part.trim().split("="))
    .find(([name]) => name === CONSENT_COOKIE_NAME)?.[1];
  return value === "accepted" || value === "declined" ? value : "unknown";
}

function writeConsentCookie(value: "accepted" | "declined") {
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("TZS");
  const [rates, setRates] = useState<Partial<Record<CurrencyCode, number>>>({
    TZS: 1,
  });
  const [detected, setDetected] = useState(false);
  const [locationConsent, setLocationConsent] = useState<
    "unknown" | "accepted" | "declined"
  >("unknown");

  useEffect(() => {
    setLocationConsent(readConsentCookie());
  }, []);

  useEffect(() => {
    let cancelled = false;
    const saved = readCurrencyCookie();
    if (saved) {
      setCurrencyState(saved);
      setDetected(true);
    }

    fetch("https://open.er-api.com/v6/latest/TZS", {
      signal: AbortSignal.timeout(5000),
    })
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject(new Error("Rate request failed")),
      )
      .then((data: { rates?: Record<string, number> }) => {
        if (cancelled || !data.rates) return;
        const nextRates: Partial<Record<CurrencyCode, number>> = { TZS: 1 };
        for (const code of supportedCurrencies) {
          if (typeof data.rates[code] === "number")
            nextRates[code] = data.rates[code];
        }
        setRates(nextRates);
      })
      .catch(() => undefined);

    if (!saved && locationConsent === "accepted") {
      fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) })
        .then((response) =>
          response.ok
            ? response.json()
            : Promise.reject(new Error("Location request failed")),
        )
        .then((data: { country_code?: string }) => {
          if (cancelled) return;
          const nextCurrency = currencyForCountry(data.country_code);
          setCurrencyState(nextCurrency);
          writeCurrencyCookie(nextCurrency);
          setDetected(true);
        })
        .catch(() => setDetected(true));
    } else if (!saved && locationConsent === "declined") {
      setDetected(true);
    }

    return () => {
      cancelled = true;
    };
  }, [locationConsent]);

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      rates,
      detected,
      setCurrency: (nextCurrency) => {
        setCurrencyState(nextCurrency);
        writeCurrencyCookie(nextCurrency);
        setDetected(true);
      },
      locationConsent,
      acceptLocationDetection: () => {
        writeConsentCookie("accepted");
        setLocationConsent("accepted");
      },
      declineLocationDetection: () => {
        writeConsentCookie("declined");
        setLocationConsent("declined");
        setDetected(true);
      },
      formatPrice: (tzsValue) =>
        formatCurrency(
          tzsValue * (rates[currency] ?? 1),
          rates[currency] ? currency : "TZS",
        ),
    }),
    [currency, detected, locationConsent, rates],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
      {locationConsent === "unknown" && <LocationConsentBanner />}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context)
    throw new Error("useCurrency must be used inside CurrencyProvider");
  return context;
}

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <label className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Currency
      </span>
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value as CurrencyCode)}
        className="rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        aria-label="Choose display currency"
      >
        {supportedCurrencies.map((code) => (
          <option key={code} value={code}>
            {code} — {currencyLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}

function LocationConsentBanner() {
  const { acceptLocationDetection, declineLocationDetection } = useCurrency();

  return (
    <div className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-2xl rounded-2xl border border-border bg-background p-5 text-foreground shadow-2xl sm:inset-x-auto sm:right-6 sm:p-6">
      <p className="text-sm font-semibold">Personalise displayed prices</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Allow approximate country detection to suggest your currency. We do not
        store your precise location, and you can choose a currency manually at
        any time. Read our{" "}
        <a
          href="/privacy"
          className="font-semibold text-primary hover:underline"
        >
          Privacy & Cookies notice
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={acceptLocationDetection}
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Allow approximate location
        </button>
        <button
          type="button"
          onClick={declineLocationDetection}
          className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:bg-secondary"
        >
          Keep TZS
        </button>
      </div>
    </div>
  );
}

export { currencyLabels };
