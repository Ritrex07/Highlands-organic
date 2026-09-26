import { Link } from "@tanstack/react-router";

import { logoUrl } from "@/lib/assets";

const footerLinks = {
  Company: [
    { label: "Our Story", href: "/about#story" },
    { label: "Mission & Vision", href: "/about#mission" },
    { label: "Farmers", href: "/about#farmers" },
    { label: "Sustainability", href: "/about#sustainability" },
  ],
  Products: [
    { label: "Avocados", href: "/products#avocados" },
    { label: "Honey", href: "/products#honey" },
    { label: "Chillies", href: "/products#chillies" },
    { label: "Order Products", href: "/products#order" },
  ],
  Explore: [
    { label: "Our Approach", href: "/our-approach" },
    { label: "Export", href: "/export" },
    { label: "Stories", href: "/about#stories" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Highlands Organic logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold tracking-tight">
                  Highlands Organic
                </span>
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
                  Tanzania
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Certified organic avocados, honey and chillies from
              Tanzania&rsquo;s highlands — grown with smallholder farmers,
              exported worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Highlands Organic Co. Ltd. All
            rights reserved.
          </p>
          <a
            href="/privacy"
            className="text-xs font-semibold text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            Privacy & Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
