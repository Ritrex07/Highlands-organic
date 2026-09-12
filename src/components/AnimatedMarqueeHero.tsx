import { ArrowRight } from "lucide-react";

export type HeroImage = {
  src: string;
  alt: string;
  label: string;
};

type AnimatedMarqueeHeroProps = {
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  images: HeroImage[];
};

export function AnimatedMarqueeHero({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  images,
}: AnimatedMarqueeHeroProps) {
  const loopImages = [...images, ...images];

  return (
    <section className="relative flex min-h-[min(760px,calc(100svh-1rem))] flex-col items-center justify-center overflow-hidden border-b border-border bg-background px-4 pb-52 pt-32 text-center sm:px-6 md:pb-64 lg:pb-72">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <p className="animate-fade-up rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary shadow-sm">
          {tagline}
        </p>
        <h1 className="mt-7 animate-fade-up font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <div className="mt-8 animate-fade-up">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-56 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_84%,transparent)] sm:h-64 md:h-72">
        <div className="flex h-full w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {loopImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`relative h-48 w-36 flex-shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-56 sm:w-42 md:h-64 md:w-48 ${index % 2 ? "rotate-[3deg]" : "rotate-[-2deg]"}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index > 5 ? "lazy" : undefined}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent px-3 pb-3 pt-8 text-left font-mono text-[0.55rem] uppercase tracking-[0.15em] text-primary-foreground">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
