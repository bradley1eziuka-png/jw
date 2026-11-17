// SEO helpers. Every route builds its <head> through `pageHead()` so titles,
// descriptions, canonical URLs, Open Graph tags, robots directives and
// structured data are all generated from business.ts / services.ts.

import {
  absoluteUrl,
  allServiceAreas,
  business,
  legalName,
  phoneDisplay,
  siteUrl,
} from "./business";
import { services, type Service } from "./services";

type Meta = Record<string, string>;
type Link = Record<string, string>;
type Script = { type: string; children: string };

export interface PageHeadInput {
  /** Page title WITHOUT the business name; "| Business Name" is appended. */
  title: string;
  /** Use the title exactly as given (homepage). */
  rawTitle?: boolean;
  description: string;
  /** Route path, e.g. "/about". Needed for the canonical URL. */
  path: string;
  /** Image path for og:image (defaults to the site-wide image). */
  image?: string | undefined;
  /** Force noindex (legal pages etc.). */
  noindex?: boolean;
  jsonLd?: object[];
}

/** Site is hidden from search engines until seo.indexable is true AND a siteUrl exists. */
export const siteIsIndexable = business.seo.indexable && !!siteUrl;

function imageUrl(path: string | undefined): string {
  const p = path || business.images.ogImage || business.images.hero.src;
  if (/^https?:\/\//.test(p)) return p;
  return absoluteUrl(p);
}

export function pageHead({
  title,
  rawTitle,
  description,
  path,
  image,
  noindex,
  jsonLd,
}: PageHeadInput) {
  const fullTitle = rawTitle ? title : `${title} | ${business.name}`;
  const canonical = absoluteUrl(path);
  const ogImage = imageUrl(image);

  const meta: Meta[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: business.name },
    { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (canonical) meta.push({ property: "og:url", content: canonical });
  if (ogImage) {
    meta.push({ property: "og:image", content: ogImage });
    meta.push({ name: "twitter:image", content: ogImage });
  }
  if (!siteIsIndexable) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  } else if (noindex) {
    // Keep link discovery working while the page itself stays out of search.
    meta.push({ name: "robots", content: "noindex, follow" });
  }

  const links: Link[] = [];
  if (canonical) links.push({ rel: "canonical", href: canonical });

  const scripts: Script[] = (jsonLd ?? []).map((data) => ({
    type: "application/ld+json",
    // "<" escaped so a stray "</script>" in business copy can never break out of the tag.
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  }));

  return { meta, links, scripts };
}

// ── Default descriptions ────────────────────────────────────────────────

const loc = () => {
  const { primaryCity, state } = business.location;
  return primaryCity ? ` in ${[primaryCity, state].filter(Boolean).join(", ")}` : "";
};

export function homeTitle(): string {
  return `Cleaning Services${loc()} | ${business.name}`;
}

export function homeDescription(): string {
  return `${business.name} offers commercial cleaning, janitorial services, carpet cleaning, and tile cleaning${loc()}. Owner-operated since 1992. Get an estimate.`;
}

export function serviceTitle(s: Service): string {
  return s.seoTitle ?? `${s.title}${loc()} | ${business.name}`;
}

export function serviceDescription(s: Service): string {
  return (
    s.seoDescription ?? `${s.title} from ${business.name}${loc()}. ${s.short} Request an estimate.`
  );
}

// ── Structured data ─────────────────────────────────────────────────────

const SOCIAL_KEYS = Object.keys(business.social) as (keyof typeof business.social)[];

/** schema.org LocalBusiness. Only includes facts that are configured – never ratings or review counts. */
export function localBusinessJsonLd(): object {
  const { contact } = business;
  const addr = contact.address;
  const sameAs = [
    ...SOCIAL_KEYS.map((k) => business.social[k]),
    business.googleBusinessProfileUrl,
  ].filter(Boolean);
  const areas = allServiceAreas();
  // City/state only: the street address is published only when contact.showAddress is true.
  const hasAddress = !!(addr.city || (contact.showAddress && addr.street));

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": business.schemaType,
    "@id": businessId(),
    name: business.name,
    legalName: legalName !== business.name ? legalName : undefined,
    description: business.description,
    slogan: business.tagline || undefined,
    url: absoluteUrl("/") || undefined,
    telephone: contact.phone || phoneDisplay,
    email: contact.email || undefined,
    image: imageUrl(undefined) || undefined,
    logo: absoluteUrl(business.branding.logo.src) || undefined,
    foundingDate: "1992",
    founder: { "@type": "Person", name: "Willy Robere" },
    address: hasAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: contact.showAddress ? addr.street || undefined : undefined,
          addressLocality: addr.city || undefined,
          addressRegion: addr.state || undefined,
          postalCode: contact.showAddress ? addr.postalCode || undefined : undefined,
          addressCountry: "US",
        }
      : undefined,
    areaServed: areas.length ? areas.map(areaNode) : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
    hasOfferCatalog: services.length
      ? {
          "@type": "OfferCatalog",
          name: `${business.name} cleaning services`,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.short },
          })),
        }
      : undefined,
  };
  return stripUndefined(data);
}

/** Stable @id so every page refers to the same single LocalBusiness entity. */
function businessId(): string | undefined {
  return absoluteUrl("/") ? `${absoluteUrl("/")}#business` : undefined;
}

export function websiteJsonLd(): object {
  return stripUndefined({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: absoluteUrl("/") || undefined,
    publisher: businessId() ? { "@id": businessId() } : undefined,
  });
}

/** BreadcrumbList. `items` are [name, path] pairs starting after Home. */
export function breadcrumbJsonLd(items: [string, string][]): object {
  const all: [string, string][] = [["Home", "/"], ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(path) || undefined,
    })),
  };
}

/** Service-area page: the same single business, with the specific area it serves. */
export function serviceAreaJsonLd(name: string, kind: "city" | "county", path: string): object {
  return stripUndefined({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cleaning services in ${name}`,
    serviceType: "Cleaning services",
    url: absoluteUrl(path) || undefined,
    provider: businessId()
      ? { "@id": businessId() }
      : { "@type": business.schemaType, name: business.name, telephone: business.contact.phone },
    areaServed: { "@type": kind === "county" ? "AdministrativeArea" : "City", name },
  });
}

export function serviceJsonLd(s: Service): object {
  const areas = allServiceAreas();
  return stripUndefined({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.intro,
    serviceType: s.title,
    url: absoluteUrl(`/services/${s.slug}`) || undefined,
    image: absoluteUrl(s.heroImage) || undefined,
    provider: businessId()
      ? { "@id": businessId() }
      : { "@type": business.schemaType, name: business.name, telephone: business.contact.phone },
    areaServed: areas.length ? areas.map(areaNode) : undefined,
  });
}

export function faqJsonLd(faqs: { q: string; a: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Counties are AdministrativeAreas; everything else is a City. */
function areaNode(name: string) {
  return { "@type": /county/i.test(name) ? "AdministrativeArea" : "City", name };
}

function stripUndefined<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

// ── Brand-color override (injected as a <style> tag when configured) ────

export function brandColorCss(): string {
  const { primary, primaryForeground, secondary, accent } = business.branding.colors;
  const decl: string[] = [];
  if (primary) {
    decl.push(
      `--primary:${primary}`,
      `--ring:${primary}`,
      `--secondary-foreground:${primary}`,
      `--accent-foreground:${primary}`,
    );
  }
  if (primaryForeground) decl.push(`--primary-foreground:${primaryForeground}`);
  if (secondary) decl.push(`--secondary:${secondary}`);
  if (accent) decl.push(`--accent:${accent}`);
  return decl.length ? `:root{${decl.join(";")}}` : "";
}
