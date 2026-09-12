import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Leaf, Sprout, Sun } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { newImages } from "@/lib/new-images";
import { siteImages } from "@/lib/site-images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Highlands Organic Co. Ltd" },
      {
        name: "description",
        content:
          "The story of Highlands Organic Co. Ltd — a Tanzanian organic exporter established in 2010, growing avocados, honey and chillies in partnership with smallholder farmers.",
      },
      {
        property: "og:title",
        content: "About Highlands Organic — Growing With Purpose",
      },
      {
        property: "og:description",
        content:
          "Established in 2010 in Tanzania's southern highlands, HOC partners with smallholder farmers to grow certified organic avocados, honey and chillies for the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  {
    year: "2010",
    title: "Highlands Organic is established",
    text: "HOC is founded in Tanzania's southern highlands with a simple conviction: smallholder farmers can grow world-class organic produce.",
  },
  {
    year: "Growing together",
    title: "Partnering with NSHDA farmers",
    text: "Working side by side with smallholder farmers through the Newala Smallholder Development Association, improving production, quality and farming practices.",
  },
  {
    year: "Certified organic",
    title: "Control Union & GlobalGAP",
    text: "HOC's production earns internationally recognised organic and good agricultural practice certification — opening doors to global markets.",
  },
  {
    year: "Today",
    title: "From the highlands to the world",
    text: "Avocados, forest honey and premium chillies travel from Njombe's farms to buyers across local and international markets.",
  },
];

const gallery = [
  {
    src: siteImages.avocadoTreeLegacy,
    alt: "Hass avocados ripening on the tree at an HOC partner farm",
    label: "On the farm",
  },
  {
    src: siteImages.packhouse,
    alt: "Weighing freshly harvested avocados at the HOC packhouse",
    label: "At the packhouse",
  },
  {
    src: siteImages.honeyBucket,
    alt: "HOC Stinging Bee Honey from forest farming in Njombe, packed for export",
    label: "Njombe forest honey",
  },
  {
    src: siteImages.chilliField,
    alt: "Red chillies ripening in an HOC field",
    label: "Chilli harvest",
  },
  {
    src: siteImages.avocados,
    alt: "Freshly harvested HOC avocados in a wooden crate",
    label: "Export-grade avocados",
  },
  {
    src: siteImages.honey,
    alt: "Golden organic HOC honey being drizzled into a jar",
    label: "Pure organic honey",
  },
  {
    src: siteImages.chillies,
    alt: "A basket of freshly picked red and yellow HOC chillies",
    label: "Premium chillies",
  },
  {
    src: siteImages.exportPallets,
    alt: "Branded Highlands Organic avocado boxes ready for shipment",
    label: "Packed for market",
  },
  {
    src: siteImages.exportPallets,
    alt: "Pallets of HOC produce prepared for export",
    label: "Ready for export",
  },
  {
    src: newImages.exportBoxes,
    alt: "Highlands Organic avocado boxes stacked for export",
    label: "Export boxes",
  },
  {
    src: newImages.beekeeping,
    alt: "HOC beekeepers working with honey hives in the highlands",
    label: "Forest beekeeping",
  },
  {
    src: newImages.honeyBuckets,
    alt: "Highlands Organic honey buckets ready for processing",
    label: "Honey production",
  },
  {
    src: newImages.brandedUniform,
    alt: "Highlands Organic branded field uniform",
    label: "Our people",
  },
  {
    src: newImages.avocadoTree,
    alt: "Avocados growing on a Highlands Organic partner farm tree",
    label: "Growing at altitude",
  },
  {
    src: newImages.chilliSauce,
    alt: "Highlands Organic Pilpili Mbuz chilli sauce",
    label: "Value-added products",
  },
  {
    src: newImages.stinglessBeeHoney,
    alt: "Highlands Organic Stingless Bee Honey packaging",
    label: "Packaged honey",
  },
  {
    src: newImages.farmerTeam,
    alt: "Highlands Organic farmers and partners in an avocado orchard",
    label: "Farmer partnerships",
  },
  {
    src: newImages.avocadoHarvest,
    alt: "Freshly harvested avocados in yellow field crates",
    label: "Harvest day",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* 1. About hero */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={newImages.farmerTeam}
              alt="A farmer's hand inspecting ripening chillies in an HOC field"
              className="h-full w-full animate-hero-zoom object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/20" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-24 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="animate-fade-up flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70"
              style={{ animationDelay: "0.1s" }}
            >
              <Link
                to="/"
                className="transition-colors hover:text-primary-foreground"
              >
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-primary-foreground">About</span>
            </nav>
            <h1
              className="mt-5 max-w-3xl animate-fade-up font-display text-4xl font-semibold leading-[1.08] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.25s" }}
            >
              Growing With Purpose.
            </h1>
            <p
              className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
              style={{ animationDelay: "0.4s" }}
            >
              Highlands Organic Company Limited is a Tanzanian organic producer
              and exporter — cultivating avocados, forest honey and premium
              chillies in partnership with smallholder farmers across the
              southern highlands.
            </p>
          </div>
        </section>

        {/* 2. Our story */}
        <section id="story" className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Our Story
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Rooted in the highlands since 2010.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Highlands Organic Company Limited was established in 2010 in
                    the fertile southern highlands of Tanzania, where rich
                    volcanic soils, cool mountain air and reliable rainfall
                    create exceptional conditions for organic agriculture.
                  </p>
                  <p>
                    From the beginning, our work has been built on partnership
                    with smallholder farmers. Together we grow avocados, harvest
                    stinging-bee honey from the forests of Njombe, and cultivate
                    premium chillies — all under certified organic practices.
                  </p>
                  <p>
                    Today, HOC&rsquo;s produce reaches local and international
                    markets, carrying with it the care of the farmers who grew
                    it and the character of the land it comes from.
                  </p>
                </div>

                {/* Timeline */}
                <ol className="mt-10 space-y-0 border-l-2 border-border">
                  {milestones.map((m) => (
                    <li key={m.title} className="relative pb-8 pl-8 last:pb-0">
                      <span
                        className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background"
                        aria-hidden="true"
                      />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
                        {m.year}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                        {m.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {m.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={siteImages.avocadoTreeLegacy}
                    alt="Hass avocados growing on the tree at an HOC partner farm"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={siteImages.chilliField}
                    alt="Red chillies ripening in a Highlands Organic field"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision */}
        <section id="mission" className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Mission &amp; Vision
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                Why we grow.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sprout className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                  Our Mission
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To produce and supply high-quality organic agricultural
                  products — avocados, honey and chillies — while improving the
                  livelihoods of the smallholder farmers we work with and
                  upholding the highest standards of organic production.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/25 text-accent-foreground">
                  <Sun className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                  Our Vision
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To be a trusted name in organic agriculture — connecting
                  Tanzania&rsquo;s highlands to markets around the world through
                  quality, integrity and lasting farmer partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our farmers */}
        <section id="farmers" className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 overflow-hidden rounded-2xl border border-border lg:order-1">
                <img
                  src={siteImages.fieldHillside}
                  alt="Lush green chilli fields on a hillside farm in Tanzania's southern highlands"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Our Farmers
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Partnerships that begin in the field.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Everything we export begins with the smallholder farmers of
                    the southern highlands. HOC works directly with farming
                    communities — including growers organised through NSHDA — to
                    strengthen production, raise quality and embed sound organic
                    agricultural practices.
                  </p>
                  <p>
                    We invest in long-term relationships rather than one-off
                    purchases, so farmers can plan, grow and harvest with
                    confidence — and buyers receive produce they can trust.
                  </p>
                </div>
                <a
                  href="/#approach"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn About Our Approach
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sustainability */}
        <section id="sustainability" className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Sustainability
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Responsible by nature.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Organic production is not a label for us — it is how we
                    farm. HOC&rsquo;s work is guided by responsible production
                    methods, certified organic practices and internationally
                    recognised standards including Control Union and GlobalGAP.
                  </p>
                  <p>
                    We believe sustainability is built on quality, care for the
                    land and long-term relationships with the farmers who tend
                    it — practices designed to endure for the next harvest, and
                    the generation after that.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                  Certified organic production
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={siteImages.honeyBucket}
                  alt="HOC forest honey from Njombe, harvested through responsible forest farming"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Stories & gallery */}
        <section id="stories" className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Stories &amp; Gallery
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Life at Highlands Organic.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  From hillside farms to the packhouse floor — a glimpse of our
                  fields, our products and the people behind them.
                </p>
              </div>
              <a
                href="/#stories"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                View All Stories
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {gallery.map((item, i) => (
                <figure
                  key={item.label}
                  className={`group relative overflow-hidden rounded-xl border border-border ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      i === 0
                        ? "aspect-square sm:aspect-auto sm:h-full"
                        : "aspect-square"
                    }`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-4 pb-3 pt-8 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Let&rsquo;s Grow Something Better Together.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Discover our certified-organic produce, or tell us what your
                market needs — we&rsquo;ll grow it with you.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-shadow hover:shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/#quote"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/70 hover:bg-primary-foreground/10"
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
