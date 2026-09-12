import { PhoneCall } from "lucide-react";

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(
  /\D/g,
  "",
);
const message = encodeURIComponent(
  "Hello Highlands Organic, I would like to enquire about your products.",
);
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${message}`
  : `https://wa.me/?text=${message}`;

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Highlands Organic on WhatsApp"
      title="Chat with Highlands Organic on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center sm:bottom-7 sm:right-7"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]/45 animate-whatsapp-ring"
        aria-hidden="true"
      />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-gradient-to-br from-[#2BEA72] to-[#18B957] text-white shadow-xl shadow-[#25D366]/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-focus-visible:-translate-y-1 group-focus-visible:scale-105 group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-[#25D366] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background">
        <PhoneCall
          className="h-6 w-6 animate-whatsapp-phone"
          strokeWidth={2.4}
          aria-hidden="true"
        />
        <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#B7F34A]" />
      </span>
      <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-full bg-foreground px-3.5 py-2 text-xs font-semibold text-background opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
