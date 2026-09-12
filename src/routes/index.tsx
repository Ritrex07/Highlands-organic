import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedMarqueeHero } from "@/components/AnimatedMarqueeHero";
import { newImages } from "@/lib/new-images";
import { siteImages } from "@/lib/site-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Highlands Organic — Organic Avocados, Honey & Chillies from Tanzania",
      },
      {
        name: "description",
        content:
          "Highlands Organic Co. Ltd exports certified organic avocados, honey and chillies from Tanzania's highlands, grown in partnership with smallholder farmers.",
      },
      {
        property: "og:title",
        content: "Highlands Organic — From Tanzania's Highlands to the World",
      },
      {
        property: "og:description",
        content:
          "Certified organic avocados, honey and chillies, grown with NSHDA farmers and exported worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Avocados",
    varieties: "Hass · Fuerte · Local",
    description:
      "Organically grown at highland altitude, hand-picked and carefully graded for export.",
    image: siteImages.avocados,
    alt: "Freshly harvested Hass avocados in a wooden crate at the HOC packhouse",
    href: "#avocados",
  },
  {
    name: "Honey",
    varieties: "Organic Honey",
    description:
      "Pure, certified-organic honey harvested from the forests of the southern highlands.",
    image: siteImages.honey,
    alt: "Golden organic HOC honey being drizzled into a glass jar",
    href: "#honey",
  },
  {
    name: "Chillies",
    varieties: "Aji Limo · Aji Amarillo · Aji Escabeche · Demon · Habanero Red",
    description:
      "A spectrum of premium chillies, grown to specification for fresh and processing markets.",
    image: siteImages.chillies,
    alt: "A basket of freshly picked red and yellow HOC chillies in the field",
    href: "#chillies",
  },
];

const heroSlides = [
  { src: newImages.avocadoHarvest, alt: "Fresh avocados in yellow harvest crates", label: "Harvest / Avocado" },
  { src: newImages.farmerTeam, alt: "Highlands Organic farmers in an avocado orchard", label: "People / Partnership" },
  { src: newImages.avocadoTree, alt: "Avocados growing on a partner farm tree", label: "Field / Avocado" },
  { src: newImages.exportBoxes, alt: "Highlands Organic avocado boxes stacked for export", label: "Packhouse / Export" },
  { src: newImages.beekeeping, alt: "Beekeepers working in the highlands", label: "Field / Honey" },
  { src: newImages.honeyBuckets, alt: "Highlands Organic honey buckets prepared for market", label: "Product / Honey" },
  { src: newImages.stinglessBeeHoney, alt: "Highlands Organic Stingless Bee Honey packaging", label: "Product / Honey" },
  { src: newImages.chilliSauce, alt: "Highlands Organic chilli sauce bottles", label: "Product / Chilli" },
  { src: newImages.brandedUniform, alt: "Highlands Organic branded field uniform", label: "People / HOC" },
];

function Index() {
  const loopSlides = [...heroSlides, heroSlides[0]];

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <AnimatedMarqueeHero
          tagline="HOC / Origin-led agricultural export"
          title="Certified produce, grown with purpose."
          description="Highlands Organic partners with smallholder farmers to grow premium certified-organic produce: avocados, forest honey and chillies, harvested at altitude and prepared for buyers who care where their produce comes from."
          ctaText="View products"
          ctaHref="#products"
          images={heroSlides}
        />
        <section className="hidden relative overflow-hidden border-b border-border bg-background">
          <div className="mx-auto grid min-h-[min(760px,calc(100svh-1rem))] w-full max-w-7xl items-center gap-12 px-4 pb-14 pt-32 sm:px-6 sm:pb-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1fr)] lg:gap-20 lg:px-8 lg:py-28">
            <div className="relative z-10 max-w-xl">
            <p
              className="animate-fade-up font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary"
              style={{ animationDelay: "0.1s" }}
            >
              HOC / Origin-led agricultural export
            </p>
            <h1
              className="mt-5 max-w-4xl animate-fade-up font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.25s" }}
            >
              Certified produce, grown with purpose.
            </h1>
            <p
              className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "0.4s" }}
            >
              Highlands Organic partners with smallholder farmers to grow
              premium certified-organic produce — avocados, forest honey and
              chillies — harvested at altitude and exported to markets across
              the globe.
            </p>
            <div
              className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Talk to HOC
              </a>
            </div>
            </div>

            <aside
              className="w-full max-w-[22rem] justify-self-end animate-fade-up overflow-hidden rounded-2xl border border-primary-foreground/25 bg-foreground/20 shadow-2xl shadow-foreground/20 backdrop-blur-sm lg:mb-1"
              style={{ animationDelay: "0.45s" }}
              aria-label="Highlands Organic field and product photography"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700"
                  style={{ transform: "translateX(0)" }}
                >
                  {loopSlides.map((slide, index) => (
                    <img
                      key={`${slide.src}-${index}`}
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full min-w-full object-cover"
                    />
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent px-4 pb-4 pt-16 text-primary-foreground">
                  <p className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                    01 / {String(heroSlides.length).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{heroSlides[0].label}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-primary-foreground/15 px-4 py-3">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-primary-foreground/60">
                  Field notes / HOC
                </p>
                <div className="flex gap-1.5" aria-label="Photo slides">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show ${slide.label} photo`}
                      aria-current={index === 0 ? "true" : undefined}
                      onClick={() => undefined}
                      className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground ${index === 0 ? "w-5 bg-accent" : "w-1.5 bg-primary-foreground/45 hover:bg-primary-foreground/80"}`}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Who We Are */}
        <section id="story" className="border-b border-border/70 bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Who We Are
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Organic farming, rooted in partnership.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Highlands Organic Co. Ltd is a Tanzanian organic exporter
                  working hand in hand with smallholder farmers across the
                  southern highlands. We grow, harvest and prepare premium
                  produce with care — building trusted partnerships from the
                  farm gate to markets around the world.
                </p>
                <a
                  href="/about#story"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-2 shadow-sm">
                <img
                      src={siteImages.packhouse}
                  alt="Freshly harvested avocados being weighed at the Highlands Organic packhouse"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Produce */}
        <section id="products" className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                What We Produce
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Three harvests, one standard of quality.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      width={1365}
                      height={1024}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
                      {product.varieties}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Our Reach */}
        <section
          id="export"
          className="rounded-[2rem] bg-primary text-primary-foreground"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
                Our Reach
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Connecting Tanzania&rsquo;s harvest to local and international
                markets.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                From the highlands of Tanzania, Highlands Organic prepares and
                exports premium produce to buyers at home and abroad — with
                quality, traceability and care at every step.
              </p>
              <a
                href="#export"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore Export
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="quote" className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Looking for quality agricultural products from Tanzania?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us what you need — our team will help you source the right
                produce, volumes and specifications.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#order"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Order Products
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
