import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/ContentPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact a Tanzanian Agricultural Supplier | HOC" },
      {
        name: "description",
        content:
          "Contact HOC about agricultural products, sourcing, wholesale orders, farmer partnerships and export opportunities from Tanzania.",
      },
    ],
  }),
  component: ContactPage,
});
