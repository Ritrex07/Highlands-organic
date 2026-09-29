import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/ContentPage";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | Tanzania Highland Organic Co. Ltd" }, { name: "description", content: "Get in touch with Tanzania Highland Organic Co. Ltd about our products, orders, partnerships and export opportunities." }] }),
  component: ContactPage,
});
