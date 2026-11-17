// ─────────────────────────────────────────────────────────────────────────
//  SERVICE AREAS  ← edit this file to add or change a service-area page
//  ─────────────────────────────────────────────────────────────────────────
//  One entry per community. The /service-areas overview, each
//  /service-areas/<slug> page, the homepage area list, the sitemap and the
//  structured data are all generated from this list.
//
//  `indexable: false` keeps a page out of search (noindex) AND out of the XML
//  sitemap. Pages start as false unless they carry genuinely useful, verified
//  local information. Flip to true once the owner supplies real local detail
//  (see the notes on each entry). Never invent local projects, customers or
//  neighbourhood facts here.
// ─────────────────────────────────────────────────────────────────────────

import { phoneDisplay } from "./business";

export type ServiceArea = {
  /** URL segment: /service-areas/<slug> */
  slug: string;
  name: string;
  kind: "city" | "county";
  /** Short line used on the overview card. */
  cardBlurb: string;
  /** Page <title> without the "| J W Cleaning" suffix. */
  title: string;
  description: string;
  h1: string;
  heroDescription: string;
  /** H2 + paragraphs in the "local guide" section under the hero. */
  guideHeading: string;
  guide: string[];
  faqs: { q: string; a: string }[];
  /** Slugs of nearby areas to link to. */
  nearby: string[];
  /** false = noindex + excluded from sitemap (thin until more verified local detail exists). */
  indexable: boolean;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "davison",
    name: "Davison",
    kind: "city",
    cardBlurb: "Where J W Cleaning is based, and where we serve homes and businesses.",
    title: "Cleaning Services in Davison, MI",
    description:
      "Commercial cleaning, janitorial services, carpet cleaning, and tile care in Davison, MI from J W Cleaning, an owner-operated Davison business since 1992.",
    h1: "Cleaning Services in Davison, MI",
    heroDescription:
      "J W Cleaning is based in Davison, Michigan. Willy Robere started the business in 1992, and today it serves Davison homes and commercial properties with carpet cleaning, janitorial service, and floor care.",
    guideHeading: "A practical guide to cleaning services in Davison",
    guide: [
      "Davison is home base for J W Cleaning, so Davison customers are contacting a local, owner-operated business rather than a distant call center. Estimates start with a phone call or the request form on this site.",
      "If you manage a business or commercial property, start with commercial cleaning or commercial janitorial services, and ask about commercial carpet cleaning and floor stripping and waxing if your floors need attention. If you are a homeowner, residential carpet cleaning is the most common starting point, and upholstery, mattress, and tile and grout cleaning can be added to the same estimate request.",
    ],
    faqs: [
      {
        q: "Is J W Cleaning located in Davison?",
        a: "Yes. J W Cleaning is based in Davison, Michigan. To get started, call or send the request form.",
      },
      {
        q: "Do you clean both Davison businesses and Davison homes?",
        a: "Yes. J W Cleaning offers commercial cleaning and janitorial services for businesses, plus residential carpet cleaning and other services for homes.",
      },
      {
        q: "What should I include in my estimate request?",
        a: "Tell us whether the property is a home or a business, which service you need, and which areas you would like cleaned. We will follow up to talk through the details.",
      },
    ],
    nearby: ["goodrich", "otisville", "lapeer-county"],
    // Same search intent and title as the homepage ("Cleaning Services in Davison, MI") with
    // mostly shared content, so it stays out of the index to avoid competing with the homepage.
    // Flip to true only if it is given a genuinely distinct angle and title.
    indexable: false,
  },
  {
    slug: "goodrich",
    name: "Goodrich",
    kind: "city",
    cardBlurb: "Serving Goodrich customers from our Davison base.",
    title: "Cleaning Services in Goodrich, MI",
    description:
      "J W Cleaning serves Goodrich, MI from its Davison base: commercial cleaning, janitorial service, carpet cleaning, and tile care. Owner-operated since 1992.",
    h1: "Cleaning Services in Goodrich, MI",
    heroDescription:
      "J W Cleaning serves Goodrich, Michigan from its base in nearby Davison. Request an estimate for commercial cleaning, carpet cleaning, tile and grout cleaning, and more.",
    guideHeading: "Cleaning help for Goodrich homes and businesses",
    guide: [
      "Goodrich customers work with the same owner-operated company that has served the Davison area since 1992. J W Cleaning serves Goodrich from its Davison base; the easiest way to start is a call or the request form.",
      "When you request an estimate, mention that the property is in Goodrich along with the type of cleaning you need, so we can discuss the details with you.",
    ],
    faqs: [
      {
        q: "Does J W Cleaning serve Goodrich?",
        a: "Yes. Goodrich is one of the communities J W Cleaning serves, working from its base in Davison.",
      },
      {
        q: "Can a Goodrich business request janitorial service?",
        a: "Yes. Commercial janitorial services are available. Describe your property in the request form and we will talk through what you need.",
      },
      {
        q: "Does J W Cleaning have an office in Goodrich?",
        a: "No. J W Cleaning is based in Davison and serves Goodrich and other surrounding communities from there.",
      },
    ],
    nearby: ["davison", "otisville", "lapeer-county"],
    // Needs verified local detail from Willy before indexing (see report).
    indexable: false,
  },
  {
    slug: "millington",
    name: "Millington",
    kind: "city",
    cardBlurb: "Cleaning services for Millington homes and commercial properties.",
    title: "Cleaning Services in Millington, MI",
    description:
      "J W Cleaning serves Millington, MI: carpet cleaning, tile and grout cleaning, upholstery and mattress cleaning, and commercial cleaning. Owner-operated since 1992.",
    h1: "Cleaning Services in Millington, MI",
    heroDescription:
      "Homes and commercial properties in Millington, Michigan can request carpet cleaning, tile and grout cleaning, janitorial service, and more from owner-operated J W Cleaning.",
    guideHeading: "Services available in Millington",
    guide: [
      "J W Cleaning serves Millington from Davison. Residential customers can ask about carpet, upholstery, mattress, and tile and grout cleaning, while Millington businesses can ask about commercial cleaning, janitorial service, commercial carpet cleaning, and tile floor stripping and waxing.",
      "To get an estimate, send the request form or call and let us know the type of property and the service you are interested in.",
    ],
    faqs: [
      {
        q: "Which services can I request in Millington?",
        a: "Ask about any of J W Cleaning's eight services, including carpet cleaning, upholstery cleaning, mattress cleaning, tile and grout cleaning, janitorial service, and floor stripping and waxing.",
      },
      {
        q: "How do I schedule service in Millington?",
        a: "Start by requesting an estimate. Scheduling is discussed with you directly after we hear about your property and what you need.",
      },
    ],
    nearby: ["otisville", "lapeer-county", "davison"],
    indexable: false,
  },
  {
    slug: "otisville",
    name: "Otisville",
    kind: "city",
    cardBlurb: "Estimates for Otisville homes and businesses.",
    title: "Cleaning Services in Otisville, MI",
    description:
      "Request cleaning services in Otisville, MI from J W Cleaning: carpet cleaning, tile and grout, upholstery, mattress, and commercial cleaning. Owner-operated since 1992.",
    h1: "Cleaning Services in Otisville, MI",
    heroDescription:
      "J W Cleaning provides cleaning services to Otisville, Michigan customers. Ask about carpet cleaning, tile and grout cleaning, upholstery and mattress cleaning, or commercial cleaning.",
    guideHeading: "Requesting service in Otisville",
    guide: [
      "Otisville is part of the area J W Cleaning serves from its Davison base. Customers here work directly with an owner-operated business that has been cleaning since 1992.",
      "Share a few details about your property and the work you would like done, and we will follow up about your estimate.",
    ],
    faqs: [
      {
        q: "Is Otisville within J W Cleaning's service area?",
        a: "Yes. Otisville is one of the communities J W Cleaning serves.",
      },
      {
        q: "Can I ask about more than one service at a time?",
        a: "Yes. Mention every service you are interested in, such as carpet cleaning and upholstery cleaning, when you request your estimate.",
      },
    ],
    nearby: ["goodrich", "millington", "davison"],
    indexable: false,
  },
  {
    slug: "ortonville",
    name: "Ortonville",
    kind: "city",
    cardBlurb: "Commercial and residential cleaning for Ortonville customers.",
    title: "Cleaning Services in Ortonville, MI",
    description:
      "J W Cleaning serves Ortonville, MI with commercial cleaning, janitorial services, carpet cleaning, and tile care. Owner-operated since 1992. Request an estimate.",
    h1: "Cleaning Services in Ortonville, MI",
    heroDescription:
      "Ortonville, Michigan businesses and homeowners can request estimates from J W Cleaning for commercial cleaning, janitorial service, carpet cleaning, and floor care.",
    guideHeading: "Cleaning services for Ortonville customers",
    guide: [
      "J W Cleaning serves Ortonville from its home base in Davison. The business offers commercial cleaning and janitorial services for Ortonville properties, as well as carpet, tile and grout, upholstery, and mattress cleaning for homes.",
      "Call or use the request form to describe what you need, and we will talk through the details with you.",
    ],
    faqs: [
      {
        q: "Does J W Cleaning serve businesses in Ortonville?",
        a: "Yes. Commercial cleaning, commercial janitorial services, commercial carpet cleaning, and tile floor stripping and waxing are available for businesses.",
      },
      {
        q: "Where is J W Cleaning based?",
        a: "J W Cleaning is based in Davison, Michigan, and serves Ortonville and other surrounding communities.",
      },
    ],
    nearby: ["lapeer-county", "goodrich", "davison"],
    indexable: false,
  },
  {
    slug: "lapeer-county",
    name: "Lapeer County",
    kind: "county",
    cardBlurb: "County-wide coverage information for Lapeer County customers.",
    title: "Cleaning Services in Lapeer County, MI",
    description:
      "J W Cleaning serves Lapeer County, MI from Davison: commercial cleaning, janitorial services, carpet cleaning, and tile care. Call to confirm service for your location.",
    h1: "Cleaning Services Throughout Lapeer County, MI",
    heroDescription:
      "J W Cleaning lists Lapeer County among the areas it serves. Contact us with your property's location and the service you need, and we will confirm how we can help.",
    guideHeading: "How service works across Lapeer County",
    guide: [
      "Lapeer County is a large area, so we recommend confirming service for your specific location before assuming coverage. J W Cleaning is based in Davison and serves customers in Lapeer County and nearby communities; the best way to confirm is to call or send the request form with your town and the service you want.",
      "Once we know where the property is and what needs cleaning, we can talk through the details and an estimate.",
    ],
    faqs: [
      {
        q: "Does J W Cleaning serve every town in Lapeer County?",
        a: `Lapeer County is part of J W Cleaning's service area, but coverage can depend on the specific location. Call ${phoneDisplay} or send the request form with your town to confirm.`,
      },
      {
        q: "What should I include if I am outside Davison?",
        a: "Tell us the town or address area, whether the property is a home or business, and which service you are interested in.",
      },
    ],
    nearby: ["davison", "ortonville", "millington"],
    indexable: false,
  },
];

export const serviceAreaSlugs = serviceAreas.map((a) => a.slug);

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
