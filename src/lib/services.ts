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
    eyebrow: "Commercial Cleaning",
    tagline: "When quality counts, count on J W Cleaning.",
    intro:
      "Keep your business looking its best with dependable commercial cleaning from an owner-operated company with more than 30 years of experience.",
    overview:
      "J W Cleaning provides commercial cleaning for businesses and commercial properties in Davison, Michigan and surrounding communities. Tell us about your space and what you need, and we'll talk through the right approach with you.",
    tasks: [
      "Offices and workspaces",
      "Retail and commercial properties",
      "Restrooms and common areas",
      "Floors and entryways",
      "Breakrooms and shared spaces",
      "Tailored to your space and needs",
    ],
    benefits: [
      "Owner-operated, with personal attention",
      "Over 30 years of experience",
      "A clean, professional-looking space",
    ],
    faqs: [
      {
        q: "What kinds of commercial spaces do you clean?",
        a: "We work with businesses and commercial properties in Davison and surrounding communities. Contact us with details about your space and we'll let you know how we can help.",
      },
      {
        q: "How do I get an estimate for my business?",
        a: "Use the estimate form, call (810) 397-3562, or email robere7138@yahoo.com. We'll go over the details with you when you request your estimate.",
      },
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
    eyebrow: "Janitorial Services",
    tagline: "Dependable upkeep, day after day.",
    intro:
      "Routine janitorial service helps your building stay clean for employees, customers, and visitors.",
    overview:
      "J W Cleaning provides commercial janitorial services for businesses throughout Davison, Michigan and the surrounding area. Reach out to talk about your property and the schedule that makes sense for you.",
    tasks: [
      "Regular janitorial upkeep",
      "Restrooms and common areas",
      "Trash and general tidying",
      "Floors and entryways",
      "Offices and shared spaces",
      "Service planned around your property",
    ],
    benefits: [
      "One dependable, owner-operated provider",
      "Over 30 years of experience",
      "Personal attention to your property",
    ],
    faqs: [
      {
        q: "Do you offer recurring janitorial service?",
        a: "Janitorial service is generally ongoing. Contact us with your property details and we'll discuss what schedule fits.",
      },
      {
        q: "Can janitorial service be combined with carpet or tile cleaning?",
        a: "J W Cleaning also offers commercial carpet cleaning and tile and grout cleaning. Ask about these when you request your estimate.",
      },
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
    eyebrow: "Residential Carpet Cleaning",
    tagline: "Fresher carpets for your home.",
    intro:
      "Carpet cleaning for your home from a local, owner-operated business with over 30 years of experience.",
    overview:
      "J W Cleaning offers residential carpet cleaning in Davison, Michigan and nearby communities such as Goodrich, Millington, Otisville, and Ortonville. Contact us with details about your carpets and we'll get you an estimate.",
    tasks: [
      "Carpet cleaning for living areas and bedrooms",
      "Hallways and stairs",
      "Homes of different sizes",
      "Estimate based on your needs",
      "Local, owner-operated service",
      "Questions answered up front",
    ],
    benefits: [
      "Personal attention from the owner's business",
      "Over 30 years of experience",
      "Straightforward estimates",
    ],
    faqs: [
      {
        q: "Do you clean carpets in homes?",
        a: "Yes. Residential carpet cleaning is one of J W Cleaning's primary services.",
      },
      {
        q: "How do I get a carpet cleaning estimate?",
        a: "Use the estimate form or call (810) 397-3562. We'll go over the details with you when you request your estimate.",
      },
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
    eyebrow: "Commercial Carpet Cleaning",
    tagline: "Carpets that help your business look its best.",
    intro:
      "Carpet cleaning for businesses and commercial properties in Davison and surrounding communities.",
    overview:
      "J W Cleaning provides commercial carpet cleaning for offices and other commercial spaces. Share a few details about your property and we'll talk through your needs and provide an estimate.",
    tasks: [
      "Offices and workspaces",
      "Commercial and retail properties",
      "Entryways and high-traffic areas",
      "Common areas and hallways",
      "Estimate based on your property",
      "Can be paired with janitorial service",
    ],
    benefits: [
      "Owner-operated, dependable service",
      "Over 30 years of experience",
      "One contact for multiple cleaning needs",
    ],
    faqs: [
      {
        q: "Do you clean carpets in commercial buildings?",
        a: "Yes. Commercial carpet cleaning is one of J W Cleaning's primary services.",
      },
      {
        q: "Can you work with my business's schedule?",
        a: "Tell us about your hours and property when you request an estimate, and we'll discuss what can work.",
      },
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
    eyebrow: "Tile & Grout Cleaning",
    tagline: "Tile that looks cared for.",
    intro:
      "Tile and grout cleaning for residential and commercial spaces from a local, owner-operated business.",
    overview:
      "J W Cleaning offers tile and grout cleaning in Davison, Michigan and surrounding communities. Contact us about the areas you have in mind and we'll provide an estimate.",
    tasks: [
      "Tile floors",
      "Grout lines",
      "Bathrooms and kitchens",
      "Entryways and commercial floors",
      "Residential and commercial properties",
      "Estimate based on your space",
    ],
    benefits: [
      "Personal attention to the details",
      "Over 30 years of experience",
      "Straightforward estimates",
    ],
    faqs: [
      {
        q: "Do you clean tile and grout at businesses as well as homes?",
        a: "Yes. J W Cleaning serves both residential and commercial customers.",
      },
      {
        q: "How do I get an estimate?",
        a: "Use the estimate form or call (810) 397-3562. We'll go over the details with you when you request your estimate.",
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
    eyebrow: "Upholstery Cleaning",
    tagline: "Fresher furniture.",
    intro:
      "Upholstery cleaning from J W Cleaning, an owner-operated business serving Davison and nearby communities.",
    overview:
      "J W Cleaning offers upholstery cleaning for furniture. Contact us to tell us about the pieces you have and we'll discuss your options and an estimate.",
    tasks: [
      "Sofas and chairs",
      "Upholstered furniture",
      "Homes and businesses",
      "Estimate based on the pieces",
      "Questions answered up front",
      "Local, owner-operated",
    ],
    benefits: ["Personal attention", "Over 30 years of experience", "Straightforward estimates"],
    faqs: [
      {
        q: "What can you clean?",
        a: "Tell us about the furniture you have when you request an estimate and we'll let you know if we can help.",
      },
      {
        q: "Can I bundle upholstery with carpet cleaning?",
        a: "J W Cleaning offers both. Mention everything you'd like cleaned when you request your estimate.",
      },
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
    eyebrow: "Mattress Cleaning",
    tagline: "A fresher place to sleep.",
    intro:
      "Mattress cleaning from a local, owner-operated cleaning business with over 30 years of experience.",
    overview:
      "J W Cleaning offers mattress cleaning. Contact us to discuss what you need and request an estimate.",
    tasks: [
      "Mattress cleaning",
      "Bedrooms in homes",
      "Estimate based on your needs",
      "Questions answered up front",
      "Local, owner-operated",
      "Can be combined with other services",
    ],
    benefits: ["Personal attention", "Over 30 years of experience", "Straightforward estimates"],
    faqs: [
      {
        q: "How do I request mattress cleaning?",
        a: "Use the estimate form or call (810) 397-3562. We'll go over the details with you when you request your estimate.",
      },
      {
        q: "Can I combine it with carpet cleaning?",
        a: "J W Cleaning offers carpet cleaning too. Mention everything you'd like cleaned when you request your estimate.",
      },
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
    eyebrow: "Floor Stripping & Waxing",
    tagline: "Floors that look cared for.",
    intro: "Tile floor stripping and waxing from a local, owner-operated business.",
    overview:
      "J W Cleaning offers tile floor stripping and waxing. Tell us about your floors and we'll discuss the work and provide an estimate.",
    tasks: [
      "Tile floor stripping",
      "Floor waxing",
      "Commercial and residential floors",
      "Estimate based on your floors",
      "Questions answered up front",
      "Local, owner-operated",
    ],
    benefits: ["Personal attention", "Over 30 years of experience", "Straightforward estimates"],
    faqs: [
      {
        q: "Do you offer floor stripping and waxing?",
        a: "Yes. Tile floor stripping and waxing is one of the services listed by J W Cleaning.",
      },
      {
        q: "How do I get an estimate?",
        a: "Use the estimate form or call (810) 397-3562. We'll go over the details with you when you request your estimate.",
      },
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
