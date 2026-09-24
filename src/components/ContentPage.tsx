import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Sprout,
  Users,
  Youtube,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { newImages } from "@/lib/new-images";
import { siteImages } from "@/lib/site-images";

function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70"
    >
      <Link to="/" className="transition-colors hover:text-primary-foreground">
        Home
      </Link>
      <ChevronRight className="h-3 w-3" aria-hidden="true" />
      <span className="text-primary-foreground">{current}</span>
    </nav>
  );
}

function Hero({
  title,
  intro,
  image,
  current,
}: {
  title: string;
  intro: string;
  image: string;
  current: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden rounded-b-[2rem]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-24 lg:px-8">
        <Breadcrumb current={current} />
        <h1 className="mt-6 max-w-4xl animate-fade-up font-display text-5xl font-semibold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}

function SplitSection({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className={reverse ? "order-2 lg:order-1" : "order-1"}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
        <div
          className={`overflow-hidden rounded-2xl border border-border ${reverse ? "order-1 lg:order-2" : "order-2"}`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export function OurApproachPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero
          title="Our Approach"
          intro="We bring together farmer partnerships, careful production and responsible practices to grow agricultural products people can trust."
          image={newImages.farmerTeam}
          current="Our Approach"
        />
        <SplitSection
          eyebrow="Farmer partnerships"
          title="Partnerships that begin in the field."
          image={siteImages.fieldHillside}
          imageAlt="A hillside farm in Tanzania's southern highlands"
        >
          <p>
            HOC works with smallholder farmers across Tanzania's southern
            highlands to improve production and support the people who grow our
            products.
          </p>
          <p>
            We believe long-term relationships create better outcomes for
            farmers, the land and the customers who rely on our produce.
          </p>
        </SplitSection>
        <SplitSection
          eyebrow="Quality & production"
          title="A better harvest is built step by step."
          image={siteImages.packhouse}
          imageAlt="Produce being handled at the HOC packhouse"
          reverse
        >
          <p>
            Our approach connects what happens in the field with careful
            handling and continuous improvement through the production process.
          </p>
          <p>
            From growing to grading, we focus on consistent quality and products
            that reflect their origin.
          </p>
        </SplitSection>
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Support & knowledge
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Knowledge that keeps improving the next harvest.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                HOC's documented approach includes farmer support, extension and
                technical assistance, feedback and learning. These practical
                conversations help turn experience into stronger production over
                time.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                [Sprout, "Production support"],
                [Users, "Farmer relationships"],
                [Leaf, "Responsible practice"],
              ].map(([Icon, label]) => (
                <div
                  key={String(label)}
                  className="border-t-2 border-primary/20 pt-5"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {String(label)}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              Grow something better together.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary"
              >
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function ExportPage() {
  const products = [
    [
      avocadoImage.url,
      "Avocados",
      "Highland-grown avocados, handled with care from partner farms.",
    ],
    [
      honeyImage.url,
      "Honey",
      "Organic honey harvested from the forests of the southern highlands.",
    ],
    [
      chilliImage.url,
      "Chillies",
      "Premium chillies grown to specification for fresh and processing markets.",
    ],
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero
          title="From Tanzania's Highlands to the World"
          intro="We connect agricultural products from Tanzania's southern highlands with customers looking for quality, care and a clear relationship to origin."
          image={newImages.avocadoHarvest}
          current="Export"
        />
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Products for markets
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Products with a sense of place.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {products.map(([image, name, description]) => (
                <article
                  key={name}
                  className="group overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold">
                      {name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SplitSection
          eyebrow="Quality"
          title="Care in every stage of production."
          image={siteImages.packhouse}
          imageAlt="Produce prepared at the HOC packhouse"
        >
          <p>
            HOC focuses on quality agricultural production, from the work done
            with farmer partners through to careful handling of the finished
            product.
          </p>
          <p>
            Product requirements can be discussed with customers depending on
            their needs.
          </p>
        </SplitSection>
        <section className="bg-secondary/50">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Farmer network
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                The network behind every product.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our farmer partnerships are central to sourcing agricultural
              products responsibly. By working with growers and supporting
              better production, HOC builds a supply relationship grounded in
              the field.
            </p>
          </div>
        </section>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
              Business enquiry
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold sm:text-5xl">
              Looking for agricultural products from Tanzania?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function LegacyContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero
          title="Let's Talk"
          intro="Tell us what you are looking for, and the HOC team will have a clear place to start the conversation."
          image={newImages.brandedUniform}
          current="Contact"
        />
        <section className="border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Call us
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <a
                href="tel:+255754341236"
                className="transition-colors hover:text-primary"
              >
                +255 754 341 236
              </a>
              <a
                href="tel:+255754536107"
                className="transition-colors hover:text-primary"
              >
                +255 754 536 107
              </a>
              <a
                href="tel:+255743247478"
                className="transition-colors hover:text-primary"
              >
                0743 247 478
              </a>
            </div>
          </div>
        </section>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Contact information
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Start a conversation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Reach the Highlands Organic team directly using any of the
                numbers below.
              </p>
              <div className="mt-8 space-y-4 border-l-2 border-accent pl-5 text-sm">
                <p>
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Email
                  </span>
                  <span className="text-muted-foreground">
                    [Add verified HOC email]
                  </span>
                </p>
                <p>
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Phone
                  </span>
                  <span className="mt-2 block space-y-1 text-muted-foreground">
                    <a
                      href="tel:+255754341236"
                      className="block transition-colors hover:text-foreground"
                    >
                      +255 754 341 236
                    </a>
                    <a
                      href="tel:+255754536107"
                      className="block transition-colors hover:text-foreground"
                    >
                      +255 754 536 107
                    </a>
                    <a
                      href="tel:+255743247478"
                      className="block transition-colors hover:text-foreground"
                    >
                      0743 247 478
                    </a>
                  </span>
                </p>
                <p>
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Location
                  </span>
                  <span className="text-muted-foreground">
                    [Add verified HOC location]
                  </span>
                </p>
              </div>
            </div>
            {/*
              <p
                role="status"
                className="mt-4 text-sm font-semibold text-primary"
              >
                Thanks — your message is ready to be connected to the HOC team.
              </p>
            */}
          </div>
        </section>
        <section className="bg-secondary/50">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Business enquiry
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Have a larger order in mind?
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function ContactPage() {
  const contactCards = [
    {
      label: "Phone",
      title: "Call or WhatsApp us",
      icon: Phone,
      content: (
        <div className="space-y-1.5">
          <a
            href="tel:+255754341236"
            className="block transition-colors hover:text-primary"
          >
            +255 754 341 236
          </a>
          <a
            href="tel:+255754536107"
            className="block transition-colors hover:text-primary"
          >
            +255 754 536 107
          </a>
          <a
            href="tel:+255743247478"
            className="block transition-colors hover:text-primary"
          >
            0743 247 478
          </a>
        </div>
      ),
    },
    {
      label: "Email",
      title: "Send us an email",
      icon: Mail,
      content: (
        <a
          href="mailto:info@highlandsorganic.co.tz"
          className="transition-colors hover:text-primary"
        >
          info@highlandsorganic.co.tz
        </a>
      ),
    },
    {
      label: "Location",
      title: "Visit us at our office",
      icon: MapPin,
      content: (
        <address className="not-italic leading-relaxed">
          Njombe, Tanzania
          <br />
          P.O. Box 710, Songea Road, Mjimwema Street, Njombe, Tanzania
        </address>
      ),
    },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: Instagram,
      color: "text-[#E4405F]",
      hover: "hover:bg-[#E4405F]",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@TANZANIAHIGHLANDSORGANICTV",
      icon: Youtube,
      color: "text-[#FF0000]",
      hover: "hover:bg-[#FF0000]",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Highlands-Organic-TZ/100070179648485/",
      icon: Facebook,
      color: "text-[#1877F2]",
      hover: "hover:bg-[#1877F2]",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative flex min-h-[680px] items-end overflow-hidden rounded-b-[2.5rem] bg-primary text-primary-foreground">
          <img
            src={newImages.avocadoTree}
            alt="Avocados growing on a Highlands Organic farm"
            className="absolute inset-0 h-full w-full object-cover object-center animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-primary/55 to-primary/20" />
          <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
          <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-40 sm:px-6 sm:pb-28 lg:px-8">
            <div className="max-w-3xl animate-fade-up">
              <Breadcrumb current="Contact" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                Highlands Organic Tanzania
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                Get in <span className="text-accent">Touch</span>
              </h1>
              <div className="mt-7 h-1 w-20 rounded-full bg-accent" />
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-xl">
                We&rsquo;d love to hear from you. Whether you have a question
                about our products, want to place an order, or are interested in
                partnering with us, our team is here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Contact information
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Reach Us Directly
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Feel free to contact us through any of the following channels.
                We are always ready to assist you.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {contactCards.map(({ label, title, icon: Icon, content }) => (
                  <div
                    key={label}
                    className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/60">
                        {label}
                      </span>
                    </div>
                    <h3 className="mt-7 text-base font-semibold">{title}</h3>
                    <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/15">
              <img
                src={newImages.avocadoHarvest}
                alt="Organic produce prepared for export from Tanzania"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-primary/10" />
              <Leaf
                className="absolute right-8 top-8 h-20 w-20 rotate-45 text-accent/25"
                strokeWidth={1}
                aria-hidden="true"
              />
              <Leaf
                className="absolute bottom-28 left-8 h-12 w-12 -rotate-45 text-accent/25"
                strokeWidth={1}
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  From Tanzania to the world
                </p>
                <h2 className="mt-4 max-w-sm font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-primary-foreground sm:text-5xl">
                  Let&rsquo;s Build a Greener Future Together
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                  We are committed to delivering high-quality organic products
                  from Tanzania to the world.
                </p>
                <Link
                  to="/products"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white hover:shadow-xl"
                >
                  Explore Our Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-primary/10 bg-primary px-8 py-10 text-primary-foreground shadow-xl shadow-primary/10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Stay connected
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Follow our journey from farm to world.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                Follow Highlands Organic for a closer look at our farmers,
                products, partnerships, and the work we do to grow a greener
                future from Tanzania.
              </p>
            </div>
            <div
              className="flex shrink-0 items-center gap-3"
              aria-label="Social media"
            >
              {socialLinks.map(({ label, href, icon: Icon, color, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow Highlands Organic on ${label}`}
                  title={label}
                  className={`group inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/25 bg-background/10 transition-all duration-200 hover:-translate-y-1 hover:border-transparent ${hover} hover:text-white hover:shadow-lg`}
                >
                  <Icon
                    className={`h-5 w-5 transition-transform group-hover:scale-110 ${color}`}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
