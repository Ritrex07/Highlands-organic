import { useMemo, useState } from "react";
import { Check, Clipboard, Minus, Plus, Send, Trash2 } from "lucide-react";

import { getProductPricing, products } from "@/lib/products";
import { useOrderList } from "@/lib/use-order-list";

const money = (value: number) => `TZS ${Math.round(value).toLocaleString("en-TZ")}`;

export function OrderBuilder() {
  const { items, getQuantity, setQuantity, remove, clear, totalUnits } =
    useOrderList();
  const [copied, setCopied] = useState(false);
  const selected = items
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] =>
      Boolean(product),
    );
  const subtotal = useMemo(
    () =>
      selected.reduce(
        (sum, product) =>
          sum +
          getProductPricing(product.slug).price * getQuantity(product.slug),
        0,
      ),
    [getQuantity, selected],
  );

  const copyOrder = async () => {
    const lines = selected.map((product) => {
      const pricing = getProductPricing(product.slug);
      return `${product.name} — ${getQuantity(product.slug)} ${pricing.unit} — ${money(pricing.price * getQuantity(product.slug))}`;
    });
    const summary = `Highlands Organic order request\n\n${lines.join("\n")}\n\nEstimated product total: ${money(subtotal)}\nFinal freight and wholesale pricing to be confirmed.`;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="order"
      className="scroll-mt-24 border-y border-border/70 bg-white py-20 text-foreground sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:px-8">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Your order
          </p>
          <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Build a harvest that fits your market.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose products and quantities, then prepare a request for our team.
            Prices shown are indicative per kilogram; freight and final
            wholesale terms are confirmed with every order.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <span className="rounded-full border border-primary/20 px-4 py-2">
              Organic supply
            </span>
            <span className="rounded-full border border-primary/20 px-4 py-2">
              Export ready
            </span>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-background p-5 text-foreground shadow-2xl shadow-black/10 sm:p-7">
          {selected.length === 0 ? (
            <div className="rounded-[1.25rem] border border-dashed border-border px-6 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Plus className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                Your order is empty
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Add a product above to see quantities, indicative pricing and
                your estimated total here.
              </p>
              <a
                href="#all"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Browse products
              </a>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Selected produce
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">
                    {totalUnits} {totalUnits === 1 ? "unit" : "units"} requested
                  </h3>
                </div>
                <button
                  onClick={clear}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-destructive"
                  type="button"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Clear all
                </button>
              </div>

              <div className="divide-y divide-border">
                {selected.map((product) => {
                  const pricing = getProductPricing(product.slug);
                  const quantity = getQuantity(product.slug);
                  return (
                    <div key={product.slug} className="flex gap-4 py-5">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-display text-lg font-semibold">
                              {product.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {money(pricing.price)} / {pricing.unit}
                            </p>
                          </div>
                          <p className="font-semibold text-primary">
                            {money(pricing.price * quantity)}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-border bg-card">
                            <button
                              type="button"
                              aria-label={`Decrease ${product.name} quantity`}
                              onClick={() =>
                                setQuantity(product.slug, quantity - 1)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span
                              className="w-8 text-center text-sm font-semibold"
                              aria-live="polite"
                            >
                              {quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${product.name} quantity`}
                              onClick={() =>
                                setQuantity(product.slug, quantity + 1)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(product.slug)}
                            className="text-xs font-medium text-muted-foreground hover:text-destructive"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-border pt-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Estimated product total
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Before freight, packaging and final quote
                    </p>
                  </div>
                  <p className="font-display text-3xl font-semibold text-primary">
                    {money(subtotal)}
                  </p>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={copyOrder}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Clipboard className="h-4 w-4" />
                    )}
                    {copied ? "Copied" : "Copy order details"}
                  </button>
                  <a
                    href="/#quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Send className="h-4 w-4" /> Request final quote
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
