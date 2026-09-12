import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Minus, Plus } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, getProductPricing, products } from "@/lib/products";
import { useOrderList } from "@/lib/use-order-list";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Highlands Organic" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.categoryLabel} | Highlands Organic`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductMissing,
});

function ProductMissing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          We couldn't find that product
        </h1>
        <Link
          to="/products"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Back to all products
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const pricing = getProductPricing(product.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { add, has } = useOrderList();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);
  const fallback = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const relatedItems = related.length ? related : fallback;
  const gallery = product.gallery.length
    ? product.gallery
    : [{ src: product.image, alt: product.alt }];
  const current = gallery[Math.min(activeImage, gallery.length - 1)] ?? {
    src: product.image,
    alt: product.alt,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              to="/products"
              className="transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-8 grid animate-fade-up gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="aspect-[4/3] w-full animate-fade-in object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {gallery.map((image, index) => (
                    <button
                      key={image.src + index}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`overflow-hidden rounded-md border transition-colors ${
                        index === activeImage
                          ? "border-primary"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-20 w-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {product.categoryLabel}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {product.variety}
              </p>
              <p className="mt-5 font-display text-3xl font-semibold text-primary">
                TZS {pricing.price.toLocaleString("en-TZ")}
                <span className="ml-2 font-sans text-sm font-medium text-muted-foreground">
                  / {pricing.unit} · indicative price
                </span>
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                {product.short}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {product.detail}
              </p>

              <dl className="mt-8 border-t border-border pt-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Availability
                </dt>
                <dd className="mt-2 text-sm text-foreground">
                  {product.availability}
                </dd>
              </dl>

              {product.quantity && (
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Quantity
                  </p>
                  <div className="mt-3 inline-flex items-center rounded-full border border-border">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span
                      aria-live="polite"
                      className="w-10 text-center text-sm font-semibold"
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    add(product.slug, quantity, {
                      left: rect.left,
                      top: rect.top,
                      width: rect.width,
                      height: rect.height,
                    });
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {has(product.slug) ? "Added to your order" : "Add to Order"}
                </button>
                <a
                  href="/#quote"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Related products
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {relatedItems.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
