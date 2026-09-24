import { useEffect, useState, type CSSProperties } from "react";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

import { logoUrl } from "@/lib/assets";
import { getProduct } from "@/lib/products";
import { useOrderList } from "@/lib/use-order-list";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const ORDER_ADDED_EVENT = "hoc-order-added";

const aboutLinks = [
  { label: "Our Story", href: "/about#story" },
  { label: "Mission & Vision", href: "/about#mission" },
  { label: "Farmers", href: "/about#farmers" },
  { label: "Sustainability", href: "/about#sustainability" },
  { label: "Stories", href: "/about#stories" },
];

const productLinks = [
  {
    label: "Avocados",
    description: "Hass, Fuerte and local varieties, organically grown.",
    href: "/products#avocados",
  },
  {
    label: "Honey",
    description: "Certified organic stinging-bee honey from Njombe forests.",
    href: "/products#honey",
  },
  {
    label: "Chillies",
    description: "Aji limo, habanero and more — grown to your specification.",
    href: "/products#chillies",
  },
];

const productActions = [
  { label: "Order Products", href: "/products#order" },
  { label: "Request a Quote", href: "/#quote" },
];

const topLinks = [
  { label: "Our Approach", href: "/our-approach" },
  { label: "Export", href: "/export" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [addedProduct, setAddedProduct] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [flyingProduct, setFlyingProduct] = useState<{
    image: string;
    left: number;
    top: number;
    x: number;
    y: number;
  } | null>(null);
  const [basketPulse, setBasketPulse] = useState(false);
  const { totalUnits } = useOrderList();

  useEffect(() => {
    let timeout: number | undefined;
    const handleAdded = (event: Event) => {
      const detail = (
        event as CustomEvent<{
          slug: string;
          source?: { left: number; top: number; width: number; height: number };
        }>
      ).detail;
      const slug = detail?.slug;
      const product = slug ? getProduct(slug) : undefined;
      if (!product) return;

      setAddedProduct({ name: product.name, image: product.image });
      if (detail.source) {
        const baskets = Array.from(
          document.querySelectorAll<HTMLElement>("[data-order-basket]"),
        );
        const basket = baskets.find((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        if (basket) {
          const basketRect = basket.getBoundingClientRect();
          const startX = detail.source.left + detail.source.width / 2;
          const startY = detail.source.top + detail.source.height / 2;
          const endX = basketRect.left + basketRect.width / 2;
          const endY = basketRect.top + basketRect.height / 2;
          setFlyingProduct({
            image: product.image,
            left: startX - 22,
            top: startY - 22,
            x: endX - startX,
            y: endY - startY,
          });
          window.setTimeout(() => {
            setFlyingProduct(null);
            setBasketPulse(true);
            window.setTimeout(() => setBasketPulse(false), 450);
          }, 720);
        }
      }
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setAddedProduct(null), 1600);
    };

    window.addEventListener(ORDER_ADDED_EVENT, handleAdded);
    return () => {
      window.removeEventListener(ORDER_ADDED_EVENT, handleAdded);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  const toggleSection = (section: string) =>
    setOpenSection((current) => (current === section ? null : section));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-primary-foreground/10 bg-primary/95 text-primary-foreground shadow-lg shadow-primary/10 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Highlands Organic logo"
              className="h-10 w-10 rounded-full border border-primary-foreground/30 object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold tracking-tight text-primary-foreground">
                Highlands Organic
              </span>
              <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/65">
                Tanzania
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {/* About dropdown */}
            <div className="relative">
              <a
                href="/about"
                className="rounded-full px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                About
              </a>
              <div className="hidden absolute left-0 top-full w-56">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg shadow-primary/5">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block rounded-lg px-3.5 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Products mega-menu */}
            <div className="relative">
              <a
                href="/products"
                className="rounded-full px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Products
              </a>
              <div className="hidden absolute left-1/2 top-full w-[32rem] -translate-x-1/2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-lg shadow-primary/5">
                  <div className="grid gap-1 sm:grid-cols-3">
                    {productLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="rounded-lg p-3.5 transition-colors hover:bg-secondary"
                      >
                        <span className="block text-sm font-semibold text-foreground">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                          {link.description}
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2 border-t border-border px-2 pb-1 pt-3">
                    {productActions.map((action) => (
                      <a
                        key={action.label}
                        href={action.href}
                        className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground ${location.pathname === link.href ? "bg-primary-foreground/15 text-primary-foreground" : "text-primary-foreground/80"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/products#order"
            data-order-basket
            aria-label={`View order${totalUnits ? `, ${totalUnits} ${totalUnits === 1 ? "item" : "items"}` : ""}`}
            className={`group relative hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white hover:shadow-md lg:inline-flex ${basketPulse ? "animate-basket-pulse" : ""}`}
          >
            <ShoppingBasket className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span>Order</span>
            {totalUnits > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[0.65rem] font-bold text-primary-foreground transition-colors duration-200 group-hover:bg-orange-100 group-hover:text-orange-900">
                {totalUnits > 99 ? "99+" : totalUnits}
              </span>
            )}
          </a>

          {/* Mobile toggle */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="/products#order"
              data-order-basket
              aria-label={`View order${totalUnits ? `, ${totalUnits} ${totalUnits === 1 ? "item" : "items"}` : ""}`}
              className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-200 hover:bg-orange-500 hover:text-white ${basketPulse ? "animate-basket-pulse" : ""}`}
            >
              <ShoppingBasket className="h-4 w-4" />
              {totalUnits > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[0.55rem] font-bold text-white">
                  {totalUnits > 99 ? "99+" : totalUnits}
                </span>
              )}
            </a>
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

      {addedProduct && (
        <div className="pointer-events-none fixed right-4 top-24 z-[60] flex items-center gap-3 rounded-2xl border border-border bg-background px-3 py-2 text-foreground shadow-lg animate-order-pop sm:right-8">
          <img
            src={addedProduct.image}
            alt=""
            className="h-10 w-10 rounded-xl object-cover"
          />
          <div className="pr-2">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Added to order
            </p>
            <p className="text-sm font-semibold">{addedProduct.name}</p>
          </div>
        </div>
      )}

      {flyingProduct && (
        <img
          src={flyingProduct.image}
          alt=""
          className="pointer-events-none fixed z-[70] h-11 w-11 rounded-full border-2 border-white object-cover shadow-xl animate-fly-to-basket"
          style={
            {
              left: flyingProduct.left,
              top: flyingProduct.top,
              "--fly-x": `${flyingProduct.x}px`,
              "--fly-y": `${flyingProduct.y}px`,
            } as CSSProperties
          }
        />
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background lg:hidden">
          <nav
            className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {/* About section */}
            <a
              href="/about"
              className="block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            {openSection === "about" && (
              <div className="space-y-1 pb-2 pl-3">
                {aboutLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Products section */}
            <a
              href="/products"
              className="block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </a>
            {openSection === "products" && (
              <div className="space-y-1 pb-2 pl-3">
                {[...productLinks, ...productActions].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
                className={`block rounded-lg px-3 py-3 text-sm font-semibold transition-colors hover:bg-secondary ${location.pathname === link.href ? "bg-secondary text-foreground" : "text-foreground"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/products#order"
              data-order-basket
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-orange-500 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <ShoppingBasket className="h-4 w-4" />
              View Order{totalUnits > 0 ? ` (${totalUnits})` : ""}
            </a>
          </nav>
        </div>
      )}
      <WhatsAppButton />
    </header>
  );
}
