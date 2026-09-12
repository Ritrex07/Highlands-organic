import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { getProductPricing, type Product } from "@/lib/products";
import { useOrderList } from "@/lib/use-order-list";

export function ProductCard({ product }: { product: Product }) {
  const { add, has } = useOrderList();
  const added = has(product.slug);
  const pricing = getProductPricing(product.slug);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {product.categoryLabel} · {product.variety}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.short}
        </p>

        <div className="mt-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Indicative price
            </p>
            <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-primary">
              TZS {pricing.price.toLocaleString("en-TZ")}
              <span className="ml-1 font-sans text-xs font-medium text-muted-foreground">
                / {pricing.unit}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            View Product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              add(product.slug, 1, {
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height,
              });
            }}
            className="ml-auto rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            {added ? "In your order" : "Add to Order"}
          </button>
        </div>
      </div>
    </article>
  );
}
