import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { OrderBuilder } from "@/components/OrderBuilder";
import {
  categories,
  products,
  productsByCategory,
  type CategoryId,
} from "@/lib/products";
import productHeroImage from "@/assets/product-hero-tanzania.png";
import { CurrencySelector } from "@/lib/use-currency";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      {
        title:
          "Our Products — Organic Avocados, Honey & Chillies | Highlands Organic",
      },
      {
        name: "description",
        content:
          "Browse Highlands Organic products from Tanzania: Hass, Fuerte and Local avocados, organic honey, and Aji Limo, Aji Amarillo, Aji Escabeche, Demon and Habanero Red chillies.",
      },
      { property: "og:title", content: "Our Products — Highlands Organic" },
      {
        property: "og:description",
        content:
          "Organic avocados, honey and chillies grown in Tanzania's southern highlands with our partner farmers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const visible = active === "all" ? products : productsByCategory(active);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-16">
          <div className="absolute inset-0">
            <img
              src={productHeroImage}
              alt="Fresh HOC avocados graded and packed in branded boxes, ready for market"
              className="h-full w-full animate-hero-zoom object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-foreground/25" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex animate-fade-in items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70"
            >
              <Link
                to="/"
                className="transition-colors hover:text-primary-foreground"
              >
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary-foreground">Products</span>
            </nav>

            <h1 className="mt-6 max-w-3xl animate-fade-up font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Organic avocados, honey and chillies grown across Tanzania's
              southern highlands with the farmers we work alongside, and
              prepared for buyers at home and abroad.
            </p>
          </div>
        </section>

        {/* Category navigation + grid */}
        <section id="all" className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div
              role="tablist"
              aria-label="Product categories"
              className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap gap-2 overflow-x-auto">
                {categories.map((category) => {
                  const isActive = active === category.id;
                  return (
                    <button
                      key={category.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(category.id)}
                      className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
              <CurrencySelector />
            </div>

            <div
              key={active}
              className="mt-10 grid animate-fade-up gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {visible.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <CategorySection
          id="avocados"
          eyebrow="Avocados"
          title="Grown high, picked by hand."
          text="Hass, Fuerte and local varieties from orchards across the highlands, graded and packed at our own packhouse."
          category="avocados"
        />

        <CategorySection
          id="honey"
          eyebrow="Honey"
          title="Straight from the forest hives."
          text="Organic honey harvested in the southern highlands and handled with minimal processing."
          category="honey"
          tone="honey"
        />

        <CategorySection
          id="chillies"
          eyebrow="Chillies"
          title="Five varieties, one standard."
          text="Compare our chilli varieties — each grown to the specification agreed with the buyer."
          category="chillies"
        />

        <OrderBuilder />

        {/* Final CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="mx-auto max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              Looking for quality agricultural products from Tanzania?
            </h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="#all"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Products
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CategorySection({
  id,
  eyebrow,
  title,
  text,
  category,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  category: CategoryId;
  tone?: "honey";
}) {
  const items = productsByCategory(category);

  return (
    <section id={id} className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${
              tone === "honey" ? "text-accent-foreground" : "text-primary"
            }`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {text}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
