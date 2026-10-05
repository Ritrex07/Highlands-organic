import { createFileRoute } from "@tanstack/react-router";
import { OurApproachPage } from "@/components/ContentPage";

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title: "Responsible Agriculture & Farmer Partnerships | HOC" },
      {
        name: "description",
        content:
          "See how HOC supports smallholder farmers, responsible agriculture, quality assurance and sustainable food value chains in Tanzania.",
      },
    ],
  }),
  component: OurApproachPage,
});
