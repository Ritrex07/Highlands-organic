import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/ContentPage";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | Highlands Organic" }, { name: "description", content: "Start a conversation with Highlands Organic about products, partnerships and business enquiries." }] }),
  component: ContactPage,
});
