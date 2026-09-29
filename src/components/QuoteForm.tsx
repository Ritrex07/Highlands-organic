import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import { hasWhatsAppNumber, whatsappHref } from "@/lib/whatsapp";

type QuoteFormProps = { productName?: string };

export function QuoteForm({ productName = "" }: QuoteFormProps) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello Tanzania Highland Organic Co. Ltd, I would like to request a quote.\n\nName: ${data.get("name")}\nCompany: ${data.get("company") || "Not provided"}\nProduct: ${data.get("product")}\nQuantity: ${data.get("quantity")}\nDestination: ${data.get("destination")}\n\nAdditional requirements:\n${data.get("message") || "None"}\n\nPlease provide your quotation.`;
    if (!hasWhatsAppNumber()) return;
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <form
      onSubmit={submit}
      className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-border bg-card p-5 text-left shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-foreground">
          Name *
          <input className={inputClass} name="name" required />
        </label>
        <label className="text-sm font-semibold text-foreground">
          Company <span className="font-normal text-muted-foreground">(optional)</span>
          <input className={inputClass} name="company" />
        </label>
        <label className="text-sm font-semibold text-foreground">
          Product *
          <input className={inputClass} name="product" defaultValue={productName} required />
        </label>
        <label className="text-sm font-semibold text-foreground">
          Quantity *
          <input className={inputClass} name="quantity" placeholder="e.g. 100 kg" required />
        </label>
        <label className="text-sm font-semibold text-foreground sm:col-span-2">
          Destination *
          <input className={inputClass} name="destination" placeholder="Country, city or delivery point" required />
        </label>
        <label className="text-sm font-semibold text-foreground sm:col-span-2">
          Message
          <textarea className={`${inputClass} min-h-28 resize-y`} name="message" placeholder="Tell us about your requirements" />
        </label>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={!hasWhatsAppNumber()}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1fbd5b] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          <MessageCircle className="h-4 w-4" />
          {sent ? "Enquiry opened in WhatsApp" : "Send enquiry via WhatsApp"}
        </button>
        {!hasWhatsAppNumber() && (
          <p className="text-xs text-muted-foreground">
            WhatsApp is not configured yet. Set VITE_WHATSAPP_NUMBER to enable this button.
          </p>
        )}
      </div>
    </form>
  );
}
