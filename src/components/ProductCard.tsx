import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import {
  formatProductPrice,
  getProductPricing,
  type Product,
} from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
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
            {pricing.price > 0 ? (
              <>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Price
                </p>
                <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-primary">
                  {formatProductPrice(pricing.price)}
                  <span className="ml-1 font-sans text-xs font-medium text-muted-foreground">
                    / {pricing.unit}
                  </span>
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold text-primary">
                Price available on enquiry.
              </p>
            )}
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
        </div>
      </div>
    </article>
  );
}
