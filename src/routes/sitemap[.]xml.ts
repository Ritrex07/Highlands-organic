import { createFileRoute } from "@tanstack/react-router";

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/about</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/our-approach</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/products</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/products/hass-avocado</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/products/fuerte-avocado</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/products/local-avocado</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/products/organic-honey</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/products/cayenne</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/export</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/contact</loc></url>
  <url><loc>https://www.tanzaniahighlandorganic.co.tz/privacy</loc></url>
</urlset>
`;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml, {
          headers: {
            "Cache-Control": "public, max-age=3600",
            "Content-Type": "application/xml; charset=utf-8",
          },
        }),
    },
  },
});
