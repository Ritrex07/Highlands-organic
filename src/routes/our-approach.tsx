import { createFileRoute } from "@tanstack/react-router";
import { OurApproachPage } from "@/components/ContentPage";

export const Route = createFileRoute("/our-approach")({
  head: () => ({ meta: [{ title: "Our Approach | Tanzania Highland Organic Co. Ltd" }, { name: "description", content: "Discover how Tanzania Highland Organic Co. Ltd works with farmers, approaches production and supports responsible agriculture." }] }),
  component: OurApproachPage,
});
