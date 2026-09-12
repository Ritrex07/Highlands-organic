import { createFileRoute } from "@tanstack/react-router";
import { OurApproachPage } from "@/components/ContentPage";

export const Route = createFileRoute("/our-approach")({
  head: () => ({ meta: [{ title: "Our Approach | Highlands Organic" }, { name: "description", content: "Discover how Highlands Organic works with farmers, approaches production and supports responsible agriculture." }] }),
  component: OurApproachPage,
});
