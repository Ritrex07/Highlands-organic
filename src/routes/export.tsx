import { createFileRoute } from "@tanstack/react-router";
import { ExportPage } from "@/components/ContentPage";

export const Route = createFileRoute("/export")({
  head: () => ({ meta: [{ title: "Export | Highlands Organic" }, { name: "description", content: "Agricultural products from Tanzania's southern highlands for customers beyond the local market." }] }),
  component: ExportPage,
});
