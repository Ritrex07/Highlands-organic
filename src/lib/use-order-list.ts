import { useCallback, useEffect, useState } from "react";

const KEY = "hoc-order-list";
const EVENT = "hoc-order-list-change";
const ORDER_ADDED_EVENT = "hoc-order-added";
type OrderAddSource = {
  left: number;
  top: number;
  width: number;
  height: number;
};
type OrderQuantities = Record<string, number>;

const MAX_QUANTITY = 100_000;
const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidQuantity(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isSafeInteger(value) &&
    value > 0 &&
    value <= MAX_QUANTITY
  );
}

function isValidSlug(value: unknown): value is string {
  return typeof value === "string" && VALID_SLUG.test(value);
}

function read(): OrderQuantities {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.reduce<OrderQuantities>(
        (result, slug) => {
          if (!isValidSlug(slug)) return result;
          result[slug] = Math.min((result[slug] ?? 0) + 1, MAX_QUANTITY);
          return result;
        },
        Object.create(null) as OrderQuantities,
      );
    }
    if (!parsed || typeof parsed !== "object") return {};

    return Object.entries(parsed).reduce<OrderQuantities>(
      (result, [slug, quantity]) => {
        if (isValidSlug(slug) && isValidQuantity(quantity)) {
          result[slug] = quantity;
        }
        return result;
      },
      Object.create(null) as OrderQuantities,
    );
  } catch {
    return {};
  }
}

function write(items: OrderQuantities) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useOrderList() {
  const [quantities, setQuantities] = useState<OrderQuantities>({});

  useEffect(() => {
    const sync = () => setQuantities(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback((slug: string, quantity: number) => {
    if (!isValidSlug(slug)) return;
    const next = { ...read() };
    if (!Number.isFinite(quantity)) return;
    const normalized = Math.floor(quantity);
    if (normalized <= 0) delete next[slug];
    else next[slug] = Math.min(normalized, MAX_QUANTITY);
    write(next);
  }, []);
  const add = useCallback(
    (slug: string, quantity = 1, source?: OrderAddSource) => {
      update(slug, (read()[slug] ?? 0) + quantity);
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent(ORDER_ADDED_EVENT, { detail: { slug, source } }),
        );
      }
    },
    [update],
  );
  const remove = useCallback((slug: string) => update(slug, 0), [update]);
  const setQuantity = useCallback(
    (slug: string, quantity: number) => update(slug, quantity),
    [update],
  );
  const getQuantity = useCallback(
    (slug: string) => quantities[slug] ?? 0,
    [quantities],
  );
  const has = useCallback(
    (slug: string) => (quantities[slug] ?? 0) > 0,
    [quantities],
  );
  const clear = useCallback(() => write({}), []);

  return {
    items: Object.keys(quantities),
    quantities,
    add,
    remove,
    setQuantity,
    getQuantity,
    has,
    clear,
    totalUnits: Object.values(quantities).reduce(
      (sum, value) => sum + value,
      0,
    ),
  };
}
