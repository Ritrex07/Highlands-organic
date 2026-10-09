import { createFileRoute } from "@tanstack/react-router";

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://tanzaniahighlandorganic.co.tz/sitemap.xml
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(robotsTxt, {
          headers: {
            "Cache-Control": "public, max-age=3600",
            "Content-Type": "text/plain; charset=utf-8",
          },
        }),
    },
  },
});
