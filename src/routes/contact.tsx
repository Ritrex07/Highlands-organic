import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/ContentPage";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | Highlands Organic Tanzania" }, { name: "description", content: "Get in touch with Highlands Organic Tanzania about our organic products, orders, partnerships and export opportunities." }] }),
  component: ContactPage,
});
