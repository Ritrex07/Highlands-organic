const DEFAULT_HOC_WHATSAPP_NUMBER = "255754536107";

export const HOC_WHATSAPP_NUMBER = (
  import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_HOC_WHATSAPP_NUMBER
).replace(/\D/g, "");

export function whatsappHref(message: string) {
  if (!HOC_WHATSAPP_NUMBER) return "#whatsapp-number-needed";
  return `https://wa.me/${HOC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function hasWhatsAppNumber() {
  return Boolean(HOC_WHATSAPP_NUMBER);
}
