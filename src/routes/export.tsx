import { createFileRoute } from "@tanstack/react-router";
import { ExportPage } from "@/components/ContentPage";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: "Agricultural Export & Sourcing from Tanzania | HOC" },
      {
        name: "description",
        content:
          "Source export-ready agricultural products from Tanzania through responsible farmer partnerships, careful handling and flexible buyer specifications.",
      },
    ],
  }),
  component: ExportPage,
});
