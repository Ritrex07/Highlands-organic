export type CurrencyCode = "TZS" | "USD" | "EUR" | "GBP" | "KES" | "ZAR";

export const supportedCurrencies: CurrencyCode[] = [
  "TZS",
  "USD",
  "EUR",
  "GBP",
  "KES",
  "ZAR",
];

export const currencyLabels: Record<CurrencyCode, string> = {
  TZS: "Tanzanian Shilling",
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  KES: "Kenyan Shilling",
  ZAR: "South African Rand",
};

const countryCurrency: Record<string, CurrencyCode> = {
  TZ: "TZS",
  KE: "KES",
  ZA: "ZAR",
  US: "USD",
  CA: "USD",
  GB: "GBP",
  AU: "USD",
  NZ: "USD",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  IE: "EUR",
  PT: "EUR",
};

export function currencyForCountry(countryCode?: string): CurrencyCode {
  return countryCode
    ? (countryCurrency[countryCode.toUpperCase()] ?? "USD")
    : "TZS";
}

export function formatCurrency(value: number, currency: CurrencyCode): string {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "TZS" || currency === "KES" ? 0 : 2,
  }).format(value);
}
