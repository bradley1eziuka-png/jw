// ─────────────────────────────────────────────────────────────────────────
//  SERVICE CATALOG  ← edit this file to change which services a client offers
//  ─────────────────────────────────────────────────────────────────────────
//  One entry per service. Everything else is generated from this list:
//    • homepage services grid        • header dropdown (desktop + mobile)
//    • footer service links          • estimate-form dropdown
//    • /services overview            • /services/<slug> pages
//    • "Explore other services"      • sitemap.xml and structured data
//
//  • Add a service    → copy an entry, give it a unique `slug`.
//  • Remove a service → delete the entry (or set `enabled: false` to keep it on file).
//  • Reorder          → move entries up/down (array order = display order).
//  • Priority         → `priority: true` lists a service first in "other services"
//                       and in SEO copy/structured data.
//  • Images           → point `image` / `heroImage` at any file in /public/images.
//
//  Disabled services disappear everywhere (links, form, sitemap) and their URL
//  returns a real 404, so nothing is left broken or stale.
// ─────────────────────────────────────────────────────────────────────────

import { IMG } from "./images";

export type Service = {
  /** URL segment: the page lives at /services/<slug>. Lowercase letters, numbers and hyphens only. */
  slug: string;
  /** Set false to hide the service everywhere without deleting its content. */
  enabled: boolean;
  /** Marks a flagship service (listed first in related services + SEO copy). */
  priority: boolean;
  title: string;
  short: string;
  card: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  /** Optional CSS object-position for the side image on narrow screens, to keep the equipment in frame. */
  imagePosition?: string;
  heroAlt: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  overview: string;
  tasks: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  /** Optional custom <title> for the service page (otherwise "<title> | <business name>"). */
  seoTitle?: string;
  /** Optional custom meta description for the service page. */
  seoDescription?: string;
  /** Service-specific estimate button label (kept short for mobile). */
  cta: string;
  /** Contextual links to related services, with descriptive anchor text. */
  related: { slug: string; anchor: string }[];
};

const allServices: Service[] = [
  {
    slug: "commercial-cleaning",
    enabled: true,
    priority: true,
    title: "Commercial Cleaning",
    short: "Dependable cleaning for businesses and commercial properties.",
    card: "Keep your business looking its best with dependable commercial cleaning backed by decades of experience.",
    image: IMG.svcCommercialCleaning,
    imageAlt: "Mop cleaning the floor of a commercial office lobby",
    heroImage: IMG.svcCommercialCleaning,
    imagePosition: "25% center",
    heroAlt: "Mop cleaning the floor of a commercial office lobby",
    eyebrow: "Commercial · Davison, MI",
    tagline: "A cleaner workplace for your staff and customers.",
    intro:
      "J W Cleaning provides commercial cleaning for offices and businesses in Davison and nearby communities. Tell us about your property and we'll talk through what it needs.",
    overview:
      "A clean building makes a good first impression and a more comfortable place to work. J W Cleaning has been cleaning in the Davison area since 1992, and every commercial job starts with a conversation about your space, your priorities and what you'd like done, so your estimate reflects your property rather than a one-size-fits-all package.",
    tasks: [
      "Offices and workspaces",
      "Reception and entryway areas",
      "Restrooms",
      "Breakrooms and shared spaces",
      "Floors and common areas",
      "Scope based on your property",
    ],
    benefits: [
      "A cleaner, more professional-looking space",
      "Owner-operated and locally based",
      "Estimate based on your property",
    ],
    faqs: [
      {
        q: "What types of businesses do you clean for?",
        a: "J W Cleaning works with offices and other commercial properties in Davison, Lapeer County, Goodrich, Millington, Otisville and Ortonville. If you're not sure your property fits, call (810) 397-3562 and ask.",
      },
      {
        q: "Is commercial cleaning the same as janitorial service?",
        a: "They overlap. Commercial cleaning is a good fit when you want a space cleaned, while janitorial service is about ongoing upkeep of a commercial property. Tell us what you need and we'll point you to the right option.",
      },
      {
        q: "What should I include when I request an estimate?",
        a: "Describe the type of property, the areas you'd like cleaned and when you'd like service. We'll follow up to talk through the details.",
      },
    ],
    seoTitle: "Commercial Cleaning in Davison, MI | J W Cleaning",
    seoDescription:
      "Commercial cleaning for offices and businesses in Davison, MI and nearby communities. Owner-operated since 1992. Request an estimate from J W Cleaning.",
    cta: "Get a Commercial Cleaning Estimate",
    related: [
      {
        slug: "commercial-janitorial-services",
        anchor: "Explore our commercial janitorial services",
      },
      { slug: "commercial-carpet-cleaning", anchor: "Learn about commercial carpet cleaning" },
    ],
  },
  {
    slug: "commercial-janitorial-services",
    enabled: true,
    priority: true,
    title: "Commercial Janitorial Services",
    short: "Ongoing janitorial service for commercial properties.",
    card: "Maintain a clean, welcoming workplace with professional janitorial cleaning tailored to your property's needs.",
    image: IMG.svcJanitorial,
    imageAlt: "Janitorial cart with cleaning supplies in a commercial building hallway",
    heroImage: IMG.svcJanitorial,
    heroAlt: "Janitorial cart with cleaning supplies in a commercial building hallway",
    eyebrow: "Janitorial · Davison, MI",
    tagline: "Ongoing upkeep for your commercial property.",
    intro:
      "Keep your workplace clean from week to week with commercial janitorial service from J W Cleaning, serving Davison and nearby communities.",
    overview:
      "Janitorial service is about ongoing upkeep: keeping a building tidy, restrooms fresh and common areas presentable between deeper cleanings. J W Cleaning provides commercial janitorial services in the Davison area. Every property is different, so we'll talk with you about what needs attention before putting together an estimate.",
    tasks: [
      "Routine upkeep of offices and shared spaces",
      "Restroom cleaning",
      "Trash and general tidying",
      "Floors and entryways",
      "Breakrooms and common areas",
      "A plan built around your property",
    ],
    benefits: [
      "One dependable, owner-operated provider",
      "Attention to the day-to-day details",
      "Estimate based on your property",
    ],
    faqs: [
      {
        q: "Is janitorial service one-time or ongoing?",
        a: "Janitorial service is built around ongoing upkeep. Tell us what you're looking for when you request an estimate and we'll talk through the schedule that fits your property.",
      },
      {
        q: "Which areas are included?",
        a: "That depends on your property. Offices, restrooms, breakrooms, entryways and floors are common starting points, and we'll confirm the areas with you.",
      },
      {
        q: "Can I add carpet or floor care?",
        a: "J W Cleaning also offers commercial carpet cleaning and tile floor stripping and waxing. Mention them when you request your estimate.",
      },
    ],
    seoTitle: "Janitorial Services in Davison, MI | J W Cleaning",
    seoDescription:
      "Commercial janitorial services for Davison, MI businesses and nearby communities. Ongoing upkeep from an owner-operated cleaner since 1992. Request an estimate.",
    cta: "Request a Janitorial Estimate",
    related: [
      { slug: "commercial-cleaning", anchor: "Learn about our commercial cleaning" },
      { slug: "commercial-carpet-cleaning", anchor: "Commercial carpet cleaning" },
      { slug: "tile-floor-stripping-waxing", anchor: "Tile floor stripping and waxing" },
    ],
  },
  {
    slug: "residential-carpet-cleaning",
    enabled: true,
    priority: true,
    title: "Residential Carpet Cleaning",
    short: "Carpet cleaning for homes in Davison and surrounding communities.",
    card: "Refresh the carpets in your home with professional cleaning from a trusted local business.",
    image: IMG.svcResidentialCarpet,
    imageAlt: "Carpet extraction wand cleaning a residential carpet",
    heroImage: IMG.svcResidentialCarpet,
    imagePosition: "80% center",
    heroAlt: "Carpet extraction wand cleaning a residential carpet",
    eyebrow: "Residential · Davison, MI",
    tagline: "Fresher carpets for your home.",
    intro:
      "Carpet cleaning for homes in Davison and nearby communities, from a local owner-operated business with more than 30 years of experience.",
    overview:
      "Carpets take daily wear from foot traffic, spills and everyday life. J W Cleaning offers residential carpet cleaning for homes in Davison, Goodrich, Millington, Otisville, Ortonville and the rest of Lapeer County. Tell us which rooms you have in mind and we'll provide an estimate.",
    tasks: [
      "Living rooms and family rooms",
      "Bedrooms",
      "Hallways and stairs",
      "Homes of different sizes",
      "Estimate based on the areas you choose",
      "Questions answered before you book",
    ],
    benefits: [
      "Local, owner-operated service",
      "Straightforward estimates",
      "Experience since 1992",
    ],
    faqs: [
      {
        q: "How should I prepare for an estimate?",
        a: "Have a list of the rooms or carpeted areas you'd like cleaned, plus any concerns such as stains or high-traffic spots. That helps us give you a clearer estimate.",
      },
      {
        q: "Which communities do you serve for home carpet cleaning?",
        a: "We serve Davison, Lapeer County, Goodrich, Millington, Otisville and Ortonville.",
      },
      {
        q: "Can I have upholstery or mattresses cleaned too?",
        a: "J W Cleaning also offers upholstery cleaning and mattress cleaning. Mention them when you request your estimate.",
      },
    ],
    seoTitle: "Carpet Cleaning in Davison, MI for Homes | J W Cleaning",
    seoDescription:
      "Residential carpet cleaning in Davison, Goodrich, Millington, Otisville and Ortonville. Local, owner-operated since 1992. Request a carpet cleaning estimate.",
    cta: "Get My Carpet Cleaning Estimate",
    related: [
      { slug: "upholstery-cleaning", anchor: "Learn about upholstery cleaning" },
      { slug: "mattress-cleaning", anchor: "Mattress cleaning" },
    ],
  },
  {
    slug: "commercial-carpet-cleaning",
    enabled: true,
    priority: true,
    title: "Commercial Carpet Cleaning",
    short: "Carpet cleaning for offices and commercial properties.",
    card: "Help keep your business's carpets clean and presentable with professional carpet cleaning services.",
    image: IMG.svcCommercialCarpet,
    imageAlt: "Carpet extraction wand cleaning an office carpet",
    heroImage: IMG.svcCommercialCarpet,
    imagePosition: "80% center",
    heroAlt: "Carpet extraction wand cleaning an office carpet",
    eyebrow: "Commercial · Davison, MI",
    tagline: "Carpets that help your business look its best.",
    intro:
      "Commercial carpet cleaning for offices and business properties in Davison and surrounding communities.",
    overview:
      "Carpet in an office or business sees steady foot traffic, and it is one of the first things visitors notice. J W Cleaning provides commercial carpet cleaning in the Davison area. Share the size and type of your space and when you'd prefer service, and we'll talk through your options and provide an estimate.",
    tasks: [
      "Office carpeting",
      "Entryways and high-traffic areas",
      "Hallways and common areas",
      "Reception and meeting areas",
      "Business and commercial properties",
      "Estimate based on your space",
    ],
    benefits: [
      "Owner-operated, dependable service",
      "One contact for multiple cleaning needs",
      "Experience since 1992",
    ],
    faqs: [
      {
        q: "Can carpet cleaning be scheduled around my business hours?",
        a: "Scheduling is something we discuss when you request an estimate. Let us know your hours and any timing needs.",
      },
      {
        q: "What should I tell you when requesting an estimate?",
        a: "The type and size of the space, which carpeted areas you want cleaned and when you'd like service.",
      },
      {
        q: "Do you also provide janitorial service?",
        a: "Yes. J W Cleaning offers commercial janitorial services as well as commercial cleaning, so you can ask about more than one service at once.",
      },
    ],
    seoTitle: "Commercial Carpet Cleaning in Davison, MI | J W Cleaning",
    seoDescription:
      "Commercial carpet cleaning for offices and businesses in Davison, MI and nearby. Owner-operated since 1992. Request a commercial carpet cleaning estimate.",
    cta: "Get a Commercial Carpet Estimate",
    related: [
      {
        slug: "commercial-janitorial-services",
        anchor: "Explore our commercial janitorial services",
      },
      { slug: "commercial-cleaning", anchor: "Commercial cleaning" },
    ],
  },
  {
    slug: "tile-grout-cleaning",
    enabled: true,
    priority: false,
    title: "Tile & Grout Cleaning",
    short: "Tile and grout cleaning for homes and businesses.",
    card: "Refresh tiled surfaces and grout lines with professional cleaning for homes and businesses.",
    image: IMG.svcTileGrout,
    imageAlt: "Rotary cleaning tool on a tiled floor",
    heroImage: IMG.svcTileGrout,
    heroAlt: "Rotary cleaning tool on a tiled floor",
    eyebrow: "Tile · Davison, MI",
    tagline: "Tile that looks cared for.",
    intro:
      "Tile and grout cleaning for homes and businesses in Davison and surrounding communities.",
    overview:
      "Grout lines and tile floors collect dirt and can look worn long before the tile itself does. J W Cleaning offers tile and grout cleaning for residential and commercial spaces. Tell us which tiled areas you'd like cleaned and we'll talk through the work and give you an estimate.",
    tasks: [
      "Tile floors",
      "Grout lines",
      "Homes and businesses",
      "Estimate based on the area",
      "Questions answered up front",
      "Can be paired with floor stripping and waxing",
    ],
    benefits: [
      "Personal attention to the details",
      "Local, owner-operated service",
      "Straightforward estimates",
    ],
    faqs: [
      {
        q: "What tile can you clean?",
        a: "Tell us what type of tile you have and where it is when you request an estimate, and we'll confirm whether we can help.",
      },
      {
        q: "How is the estimate determined?",
        a: "It depends on the area and what you need cleaned. Share the details and we'll talk them through with you.",
      },
      {
        q: "Is floor stripping and waxing the same service?",
        a: "No. Tile floor stripping and waxing is a separate J W Cleaning service. Ask about it if you're also thinking about the finish on your floors.",
      },
    ],
    seoTitle: "Tile and Grout Cleaning in Davison, MI | J W Cleaning",
    seoDescription:
      "Tile and grout cleaning for homes and businesses in Davison, MI and nearby communities. Owner-operated since 1992. Request a tile cleaning estimate.",
    cta: "Request a Tile Cleaning Estimate",
    related: [
      {
        slug: "tile-floor-stripping-waxing",
        anchor: "View our tile floor stripping and waxing service",
      },
    ],
  },
  {
    slug: "upholstery-cleaning",
    enabled: true,
    priority: false,
    title: "Upholstery Cleaning",
    short: "Cleaning for furniture and upholstered items.",
    card: "Give upholstered furniture the attention it deserves with professional cleaning services.",
    image: IMG.svcUpholstery,
    imageAlt: "Upholstery extraction wand cleaning a fabric sofa",
    heroImage: IMG.svcUpholstery,
    imagePosition: "80% center",
    heroAlt: "Upholstery extraction wand cleaning a fabric sofa",
    eyebrow: "Furniture · Davison, MI",
    tagline: "Fresher furniture.",
    intro:
      "Upholstery cleaning from a local, owner-operated cleaner serving Davison and nearby communities.",
    overview:
      "Sofas and chairs get used every day and it shows. J W Cleaning offers upholstery cleaning for furniture. Tell us what pieces you have and what you'd like done, and we'll talk through your options and provide an estimate.",
    tasks: [
      "Sofas and chairs",
      "Upholstered furniture",
      "Homes and businesses",
      "Estimate based on the pieces",
      "Questions answered up front",
      "Can be combined with carpet cleaning",
    ],
    benefits: ["Personal attention", "Local, owner-operated service", "Experience since 1992"],
    faqs: [
      {
        q: "What furniture can you clean?",
        a: "Tell us about the pieces you have when you request an estimate, and we'll let you know whether we can help.",
      },
      {
        q: "Can I combine upholstery cleaning with carpet cleaning?",
        a: "J W Cleaning offers residential and commercial carpet cleaning as well. Mention everything you'd like cleaned when you request your estimate.",
      },
      {
        q: "How do I get an estimate?",
        a: "Use the estimate form or call (810) 397-3562. A short description of the furniture and where it is located is all we need to start.",
      },
    ],
    seoTitle: "Upholstery Cleaning in Davison, MI | J W Cleaning",
    seoDescription:
      "Upholstery cleaning in Davison, MI for furniture at homes and businesses. Local, owner-operated since 1992. Request an upholstery cleaning estimate.",
    cta: "Request an Upholstery Estimate",
    related: [
      { slug: "residential-carpet-cleaning", anchor: "Learn about residential carpet cleaning" },
      { slug: "mattress-cleaning", anchor: "Mattress cleaning" },
    ],
  },
  {
    slug: "mattress-cleaning",
    enabled: true,
    priority: false,
    title: "Mattress Cleaning",
    short: "Mattress cleaning for a fresher place to sleep.",
    card: "Refresh your mattress with professional cleaning from an experienced local cleaner.",
    image: IMG.svcMattress,
    imageAlt: "Extraction wand cleaning a mattress",
    heroImage: IMG.svcMattress,
    imagePosition: "80% center",
    heroAlt: "Extraction wand cleaning a mattress",
    eyebrow: "Bedroom · Davison, MI",
    tagline: "A fresher place to sleep.",
    intro:
      "Mattress cleaning from a local, owner-operated cleaning business serving Davison and nearby communities.",
    overview:
      "A mattress is easy to overlook when you clean a home. J W Cleaning offers mattress cleaning; contact us to talk about what you'd like done and we'll provide an estimate.",
    tasks: [
      "Mattress cleaning",
      "Bedrooms in homes",
      "Estimate based on your needs",
      "Questions answered up front",
      "Local, owner-operated",
      "Can be combined with other services",
    ],
    benefits: ["Personal attention", "Experience since 1992", "Straightforward estimates"],
    faqs: [
      {
        q: "What should I discuss before booking mattress cleaning?",
        a: "Let us know how many mattresses you have, their sizes and any concerns you'd like addressed, and we'll go over the details with you.",
      },
      {
        q: "Can I add other services?",
        a: "J W Cleaning also offers residential carpet cleaning and upholstery cleaning. Mention them when you request your estimate.",
      },
      { q: "How do I request an estimate?", a: "Use the estimate form or call (810) 397-3562." },
    ],
    seoTitle: "Mattress Cleaning in Davison, MI | J W Cleaning",
    seoDescription:
      "Mattress cleaning in Davison, MI from a local, owner-operated cleaner serving homes since 1992. Request a mattress cleaning estimate from J W Cleaning.",
    cta: "Request a Mattress Cleaning Estimate",
    related: [
      { slug: "residential-carpet-cleaning", anchor: "Learn about residential carpet cleaning" },
      { slug: "upholstery-cleaning", anchor: "Upholstery cleaning" },
    ],
  },
  {
    slug: "tile-floor-stripping-waxing",
    enabled: true,
    priority: false,
    title: "Tile Floor Stripping & Waxing",
    short: "Stripping and waxing for tile floors.",
    card: "Restore a cleaner, more polished appearance to eligible tile floors with professional stripping and waxing.",
    image: IMG.svcFloorStripping,
    imageAlt: "Floor machine cleaning a tiled floor in a commercial hallway",
    heroImage: IMG.svcFloorStripping,
    heroAlt: "Floor machine cleaning a tiled floor in a commercial hallway",
    eyebrow: "Floor care · Davison, MI",
    tagline: "Floors that look cared for.",
    intro:
      "Tile floor stripping and waxing from a local, owner-operated business serving Davison and nearby communities.",
    overview:
      "Over time, floor finish wears down and floors lose their polished look. J W Cleaning offers tile floor stripping and waxing for businesses and properties that want a cleaner, more finished appearance. Tell us about your floors and we'll discuss the work and provide an estimate.",
    tasks: [
      "Tile floor stripping",
      "Floor waxing",
      "Commercial and residential floors",
      "Estimate based on your floors",
      "Questions answered up front",
      "Can be paired with janitorial service",
    ],
    benefits: ["Personal attention", "Experience since 1992", "Straightforward estimates"],
    faqs: [
      {
        q: "What floors can be stripped and waxed?",
        a: "This service is for tile floors. Tell us about your flooring when you request an estimate and we'll confirm whether we can help.",
      },
      {
        q: "How do businesses request an estimate?",
        a: "Use the estimate form or call (810) 397-3562. Describe the space, the type of flooring and the approximate area.",
      },
      {
        q: "Can I combine this with janitorial or tile cleaning?",
        a: "J W Cleaning also offers commercial janitorial services and tile and grout cleaning. Mention them when you request your estimate.",
      },
    ],
    seoTitle: "Floor Stripping and Waxing in Davison, MI | J W Cleaning",
    seoDescription:
      "Tile floor stripping and waxing in Davison, MI for businesses and properties. Owner-operated since 1992. Request a floor stripping and waxing estimate.",
    cta: "Request a Floor Stripping Estimate",
    related: [
      { slug: "tile-grout-cleaning", anchor: "View our tile and grout cleaning services" },
      { slug: "commercial-janitorial-services", anchor: "Commercial janitorial services" },
    ],
  },
];

/** Enabled services, in display order. Import this everywhere a service list is needed. */
export const services: Service[] = allServices.filter((s) => s.enabled);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);

/** Other enabled services, priority ones first (keeps configured order within each group). */
export function relatedServices(slug: string): Service[] {
  const others = services.filter((s) => s.slug !== slug);
  return [...others.filter((s) => s.priority), ...others.filter((s) => !s.priority)];
}

/** Human list of enabled service titles, e.g. "Commercial Cleaning, Tile & Grout Cleaning and Mattress Cleaning". */
export function serviceTitleList(): string {
  const titles = services.map((s) => s.title);
  if (titles.length <= 1) return titles.join("");
  return `${titles.slice(0, -1).join(", ")} and ${titles[titles.length - 1]}`;
}
