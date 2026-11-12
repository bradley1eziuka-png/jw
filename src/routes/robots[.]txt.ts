import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/business";
import { siteIsIndexable } from "@/lib/seo";

// Generated from business.ts: the demo/staging site blocks all crawlers until
// seo.indexable is turned on (see CLIENT_SETUP.md → "Launch checklist").
export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const body = siteIsIndexable
          ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
          : `User-agent: *\nDisallow: /\n`;
        return new Response(body, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
