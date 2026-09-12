import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Leaf, Sprout, Users } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { newImages } from "@/lib/new-images";
import { siteImages } from "@/lib/site-images";

function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
      <Link to="/" className="transition-colors hover:text-primary-foreground">Home</Link>
      <ChevronRight className="h-3 w-3" aria-hidden="true" />
      <span className="text-primary-foreground">{current}</span>
    </nav>
  );
}

function Hero({ title, intro, image, current }: { title: string; intro: string; image: string; current: string }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden rounded-b-[2rem]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-24 lg:px-8">
        <Breadcrumb current={current} />
        <h1 className="mt-6 max-w-4xl animate-fade-up font-display text-5xl font-semibold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-primary-foreground/85 sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}

function SplitSection({ eyebrow, title, children, image, imageAlt, reverse = false }: { eyebrow: string; title: string; children: React.ReactNode; image: string; imageAlt: string; reverse?: boolean }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className={reverse ? "order-2 lg:order-1" : "order-1"}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
        </div>
        <div className={`overflow-hidden rounded-2xl border border-border ${reverse ? "order-1 lg:order-2" : "order-2"}`}>
          <img src={image} alt={imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </div>
    </section>
  );
}

export function OurApproachPage() {
  return <div className="min-h-screen bg-background"><Navbar /><main>
    <Hero title="Our Approach" intro="We bring together farmer partnerships, careful production and responsible practices to grow agricultural products people can trust." image={newImages.farmerTeam} current="Our Approach" />
    <SplitSection eyebrow="Farmer partnerships" title="Partnerships that begin in the field." image={siteImages.fieldHillside} imageAlt="A hillside farm in Tanzania's southern highlands">
      <p>HOC works with smallholder farmers across Tanzania's southern highlands to improve production and support the people who grow our products.</p><p>We believe long-term relationships create better outcomes for farmers, the land and the customers who rely on our produce.</p>
    </SplitSection>
    <SplitSection eyebrow="Quality & production" title="A better harvest is built step by step." image={siteImages.packhouse} imageAlt="Produce being handled at the HOC packhouse" reverse>
      <p>Our approach connects what happens in the field with careful handling and continuous improvement through the production process.</p><p>From growing to grading, we focus on consistent quality and products that reflect their origin.</p>
    </SplitSection>
    <section className="bg-secondary/50"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Support & knowledge</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Knowledge that keeps improving the next harvest.</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">HOC's documented approach includes farmer support, extension and technical assistance, feedback and learning. These practical conversations help turn experience into stronger production over time.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-3">{[[Sprout,"Production support"],[Users,"Farmer relationships"],[Leaf,"Responsible practice"]].map(([Icon, label]) => <div key={String(label)} className="border-t-2 border-primary/20 pt-5"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-4 font-display text-xl font-semibold">{String(label)}</h3></div>)}</div></div></section>
    <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8"><h2 className="font-display text-3xl font-semibold sm:text-5xl">Grow something better together.</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary">Explore Our Products <ArrowRight className="h-4 w-4" /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold">Request a Quote</Link></div></div></section>
  </main><Footer /></div>;
}

export function ExportPage() {
  const products = [[avocadoImage.url, "Avocados", "Highland-grown avocados, handled with care from partner farms."], [honeyImage.url, "Honey", "Organic honey harvested from the forests of the southern highlands."], [chilliImage.url, "Chillies", "Premium chillies grown to specification for fresh and processing markets."]];
  return <div className="min-h-screen bg-background"><Navbar /><main>
    <Hero title="From Tanzania's Highlands to the World" intro="We connect agricultural products from Tanzania's southern highlands with customers looking for quality, care and a clear relationship to origin." image={newImages.avocadoHarvest} current="Export" />
    <section className="border-b border-border bg-background"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Products for markets</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Products with a sense of place.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{products.map(([image, name, description]) => <article key={name} className="group overflow-hidden rounded-2xl border border-border bg-card"><img src={image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="p-6"><h3 className="font-display text-2xl font-semibold">{name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></div></article>)}</div></div></section>
    <SplitSection eyebrow="Quality" title="Care in every stage of production." image={siteImages.packhouse} imageAlt="Produce prepared at the HOC packhouse"><p>HOC focuses on quality agricultural production, from the work done with farmer partners through to careful handling of the finished product.</p><p>Product requirements can be discussed with customers depending on their needs.</p></SplitSection>
    <section className="bg-secondary/50"><div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Farmer network</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">The network behind every product.</h2></div><p className="text-base leading-relaxed text-muted-foreground">Our farmer partnerships are central to sourcing agricultural products responsibly. By working with growers and supporting better production, HOC builds a supply relationship grounded in the field.</p></div></section>
    <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">Business enquiry</p><h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold sm:text-5xl">Looking for agricultural products from Tanzania?</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground">Request a Quote <ArrowRight className="h-4 w-4" /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold">Contact Us</Link></div></div></section>
  </main><Footer /></div>;
}

export function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { setError("Please complete the required fields before sending your message."); setSent(false); form.reportValidity(); return; } setError(""); setSent(true); form.reset(); }
  return <div className="min-h-screen bg-background"><Navbar /><main>
    <Hero title="Let's Talk" intro="Tell us what you are looking for, and the HOC team will have a clear place to start the conversation." image={newImages.brandedUniform} current="Contact" />
    <section className="border-b border-border"><div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact information</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Start a conversation.</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">Our verified contact details are being prepared. Replace the editable placeholders below when the preferred business contact is confirmed.</p><div className="mt-8 space-y-4 border-l-2 border-accent pl-5 text-sm"><p><span className="block text-xs font-semibold uppercase tracking-[0.15em] text-primary">Email</span><span className="text-muted-foreground">[Add verified HOC email]</span></p><p><span className="block text-xs font-semibold uppercase tracking-[0.15em] text-primary">Phone</span><span className="text-muted-foreground">[Add verified HOC phone]</span></p><p><span className="block text-xs font-semibold uppercase tracking-[0.15em] text-primary">Location</span><span className="text-muted-foreground">[Add verified HOC location]</span></p></div></div><form onSubmit={submit} noValidate className="rounded-2xl border border-border bg-card p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input name="name" required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none ring-primary/30 transition focus:ring-2" /></label><label className="text-sm font-semibold">Email<input name="email" type="email" required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none ring-primary/30 transition focus:ring-2" /></label><label className="text-sm font-semibold">Phone<input name="phone" type="tel" className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none ring-primary/30 transition focus:ring-2" /></label><label className="text-sm font-semibold">Subject<input name="subject" required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none ring-primary/30 transition focus:ring-2" /></label></div><label className="mt-5 block text-sm font-semibold">Message<textarea name="message" required rows={6} className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none ring-primary/30 transition focus:ring-2" /></label>{error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}{sent && <p role="status" className="mt-4 text-sm font-semibold text-primary">Thanks — your message is ready to be connected to the HOC team.</p>}<button type="submit" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Send Message</button></form></div></section>
    <section className="bg-secondary/50"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Business enquiry</p><h2 className="mt-3 font-display text-3xl font-semibold">Have a larger order in mind?</h2></div><Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Request a Quote <ArrowRight className="h-4 w-4" /></Link></div></section>
  </main><Footer /></div>;
}
