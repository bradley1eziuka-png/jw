import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/business";
import { services } from "@/lib/services";
import { siteIsIndexable } from "@/lib/seo";

// Built from the enabled services in services.ts, so disabled/removed services
// never appear. While the site is not indexable the sitemap is intentionally empty.
const STATIC_PATHS = ["/", "/services", "/about", "/gallery", "/reviews", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = siteIsIndexable
          ? [...STATIC_PATHS, ...services.map((s) => `/services/${s.slug}`)]
          : [];
        const urls = paths
          .map((p) => `  <url><loc>${escapeXml(absoluteUrl(p))}</loc></url>`)
          .join("\n");
        const note = siteIsIndexable
          ? ""
          : "  <!-- Site is not indexable yet: set seo.indexable and seo.siteUrl in src/lib/business.ts -->\n";
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${note}${urls}${urls ? "\n" : ""}</urlset>\n`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
