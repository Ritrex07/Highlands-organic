import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

import { logoUrl } from "@/lib/assets";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const topLinks = [
  { label: "Our Approach", href: "/our-approach" },
  { label: "Export", href: "/export" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCurrent = (href: string) => location.pathname === href;
  const desktopLinkClass = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isCurrent(href) ? "bg-accent text-accent-foreground" : "text-primary-foreground/80"}`;
  const mobileLinkClass = (href: string) =>
    `block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isCurrent(href) ? "bg-accent text-accent-foreground" : "text-foreground"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-primary-foreground/10 bg-primary/95 text-primary-foreground shadow-lg shadow-primary/10 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Tanzania Highland Organic Co. Ltd logo"
              className="h-10 w-10 rounded-full border border-primary-foreground/30 object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold tracking-tight text-primary-foreground">
                Tanzania Highland Organic Co. Ltd
              </span>
              <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/65">
                Tanzania
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <a
              href="/about"
              aria-current={isCurrent("/about") ? "page" : undefined}
              className={desktopLinkClass("/about")}
            >
              About
            </a>
            <a
              href="/products"
              aria-current={isCurrent("/products") ? "page" : undefined}
              className={desktopLinkClass("/products")}
            >
              Products
            </a>

            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
                className={desktopLinkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background lg:hidden">
          <nav
            className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            <a
              href="/about"
              aria-current={isCurrent("/about") ? "page" : undefined}
              className={mobileLinkClass("/about")}
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <a
              href="/products"
              aria-current={isCurrent("/products") ? "page" : undefined}
              className={mobileLinkClass("/products")}
              onClick={() => setMobileOpen(false)}
            >
              Products
            </a>
            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
                className={mobileLinkClass(link.href)}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
      <WhatsAppButton />
    </header>
  );
}
