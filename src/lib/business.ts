// ─────────────────────────────────────────────────────────────────────────
//  CENTRAL BUSINESS CONFIGURATION  ← the main file to edit for each client
//  ─────────────────────────────────────────────────────────────────────────
//  Everything business-specific on the website (name, phone, email, colors,
//  logo, images, service area, SEO, lead form) is read from this file.
//  Services live in  src/lib/services.ts  (see CLIENT_SETUP.md).
//
//  Values here are baked into the site at build time, so server-rendered HTML,
//  page titles, meta tags and structured data always match what visitors see.
//
//  Leave a field as "" (or [] / null) when it does not apply. Anything left
//  blank is simply not displayed – the template never invents business facts.
// ─────────────────────────────────────────────────────────────────────────

import { IMG, type ImageRef } from "./images";

export type FormProvider = "formspree" | "demo";

export interface BusinessConfig {
  // ── Identity ──────────────────────────────────────────────────────────
  /** Customer-facing business name (logo, headings, titles, footer). */
  name: string;
  /** Registered/legal name. Falls back to `name` when blank. Used in © line + structured data. */
  legalName: string;
  /** Short tagline shown under the homepage headline. */
  tagline: string;
  /** One or two sentences describing the business (footer + default meta description). */
  description: string;
  /** Optional founding story. When non-empty it appears on the About page. Do not invent one. */
  foundingStory: string;
  /** Short descriptor shown above the homepage headline, e.g. "Professional Residential & Commercial Cleaning". */
  businessType: string;
  /** schema.org type for structured data. "LocalBusiness" is always valid; "ProfessionalService" also works. */
  schemaType: string;

  // ── Contact ───────────────────────────────────────────────────────────
  contact: {
    /** Main business phone. Drives every tel: link and the structured data. */
    phone: string;
    /** Phone text shown on the site. Leave "" to display `phone` as written. */
    displayPhone: string;
    /** Public email address. Leave "" to hide. */
    email: string;
    /** Physical address (only shown when `showAddress` is true; always omitted from structured data otherwise). */
    address: { street: string; city: string; state: string; postalCode: string };
    showAddress: boolean;
    /** e.g. [{ days: "Mon–Fri", hours: "8am – 5pm" }]. Leave [] to hide. */
    hours: { days: string; hours: string }[];
  };

  // ── Service area / marketing ──────────────────────────────────────────
  location: {
    primaryCity: string;
    state: string;
    /** Additional cities/areas served. Only list places the business genuinely serves. */
    serviceAreas: string[];
  };
  /** Selling points. Shown on the homepage "Why Choose Us" list and the About page cards. */
  differentiators: { title: string; description: string; icon: DifferentiatorIcon }[];
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
    linkedin: string;
    x: string;
    nextdoor: string;
    yelp: string;
  };
  googleBusinessProfileUrl: string;

  // ── Branding ──────────────────────────────────────────────────────────
  branding: {
    /** Browser-tab icon in /public (SVG or PNG). Leave "" for none. */
    favicon: string;
    logo: {
      /** Path to a logo file in /public (e.g. "/images/logo.svg"). Leave "" to use the built-in text logo. */
      src: string;
      alt: string;
      /** Small italic line under the name in the text logo (e.g. "cleaning co."). Leave "" to hide. */
      subtitle: string;
    };
    /**
     * Optional brand color overrides – any CSS color (hex, rgb(), oklch()).
     * Leave "" to keep the master template's navy palette from src/styles.css.
     */
    colors: {
      primary: string;
      /** Text/icon color used on top of `primary` (buttons, CTA band). Default: near-white. */
      primaryForeground: string;
      secondary: string;
      accent: string;
    };
  };

  // ── Images (files live in /public/images) ─────────────────────────────
  images: {
    hero: ImageRef;
    about: ImageRef;
    servicesHero: ImageRef;
    contactHero: ImageRef;
    reviewsHero: ImageRef;
    /** Social-share image path (1200×630 recommended). Leave "" to fall back to the hero image. */
    ogImage: string;
  };
  gallery: {
    /**
     * true  = the images below are stock/demonstration images and are labelled as samples.
     * false = they are the business's real project photos; sample labels are hidden.
     */
    isSample: boolean;
    images: ImageRef[];
  };

  // ── Lead form ─────────────────────────────────────────────────────────
  form: {
    /** "formspree" posts to `endpoint`. "demo" never sends anything (and says so on screen). */
    provider: FormProvider;
    /** Full Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx". Blank = automatic demo mode. */
    endpoint: string;
    successTitle: string;
    /** Shown after a successful submission. `{name}` is replaced with the business name. */
    successMessage: string;
    /** Shown when submission fails. */
    errorMessage: string;
  };

  // ── SEO / launch ──────────────────────────────────────────────────────
  seo: {
    /**
     * Canonical production origin with no trailing slash, e.g. "https://www.clientdomain.com".
     * Used for canonical URLs, the sitemap, Open Graph and structured data.
     */
    siteUrl: string;
    /**
     * LAUNCH SWITCH. While false, every page sends `noindex, nofollow` and robots.txt
     * disallows crawling, so the demo/staging site can never compete with a real client site.
     * Set true (and set `siteUrl`) only when the client's site is ready to go live.
     */
    indexable: boolean;
  };
}

export type DifferentiatorIcon = "sparkles" | "clock" | "heart" | "message";

export const business: BusinessConfig = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: "J W Cleaning",
  legalName: "",
  tagline: "When Quality Counts",
  description:
    "J W Cleaning has proudly served Davison, Michigan and surrounding communities since 1992. Owner-operated commercial cleaning, janitorial services, carpet cleaning, and tile and grout cleaning.",
  foundingStory: `J W Cleaning was founded in 1992 by Willy Robere with a commitment to delivering dependable cleaning services and quality results. For more than three decades, Willy has taken pride in his work and in making sure customers are satisfied with the job.

From commercial properties and janitorial services to residential carpet cleaning and tile and grout cleaning, J W Cleaning brings decades of hands-on experience to every project.

As an owner-operated local business, J W Cleaning believes in personal attention, dependable service, and doing the job right.`,
  businessType: "Owner-Operated Commercial & Residential Cleaning",
  schemaType: "LocalBusiness",

  // ── Contact ───────────────────────────────────────────────────────────
  contact: {
    phone: "(810) 397-3562",
    displayPhone: "",
    email: "robere7138@yahoo.com",
    // Home-based business: street address is intentionally NOT published (see `internal`).
    address: { street: "", city: "Davison", state: "MI", postalCode: "" },
    showAddress: false,
    hours: [],
  },

  // ── Service area / marketing ──────────────────────────────────────────
  location: {
    primaryCity: "Davison",
    state: "MI",
    serviceAreas: ["Lapeer County", "Goodrich", "Millington", "Otisville", "Ortonville"],
  },
  differentiators: [
    {
      title: "30+ Years of Experience",
      description: "Hands-on cleaning experience built since 1992.",
      icon: "clock",
    },
    {
      title: "Owner-Operated",
      description: "Founded and run by Willy Robere, who takes pride in every job.",
      icon: "heart",
    },
    {
      title: "Personal Attention",
      description: "A local business that believes in personal, dependable service.",
      icon: "message",
    },
    {
      title: "Quality Work",
      description: "Doing the job right and making sure customers are satisfied.",
      icon: "sparkles",
    },
  ],
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
    x: "",
    nextdoor: "",
    yelp: "",
  },
  googleBusinessProfileUrl: "",

  // ── Branding ──────────────────────────────────────────────────────────
  branding: {
    favicon: "/favicon.svg",
    logo: {
      src: "/images/jw-cleaning-logo.png",
      alt: "J W Cleaning logo: black spider mascot, Established 1992",
      subtitle: "",
    },
    colors: { primary: "", primaryForeground: "", secondary: "", accent: "" },
  },

  // ── Images ────────────────────────────────────────────────────────────
  images: {
    hero: {
      src: IMG.heroLivingRoom,
      alt: "Bright, clean living room with a large area rug (stock photo)",
    },
    about: {
      src: IMG.aboutCleaning,
      alt: "Professional carpet cleaning equipment being used on a carpet.",
    },
    servicesHero: { src: IMG.office, alt: "Clean, modern commercial office (stock photo)" },
    contactHero: {
      src: IMG.familyLiving,
      alt: "Bright living room with a clean area rug (stock photo)",
    },
    reviewsHero: { src: IMG.office, alt: "Clean, modern commercial office (stock photo)" },
    ogImage: "",
  },
  gallery: {
    // Stock photos only; labelled as samples. Swap in J W Cleaning's real photos, then set false.
    isSample: true,
    images: [
      {
        src: IMG.svcCommercialCleaning,
        alt: "Mop cleaning the floor of a commercial office lobby (illustrative image)",
      },
      {
        src: IMG.svcJanitorial,
        alt: "Janitorial cart with cleaning supplies in a commercial hallway (illustrative image)",
      },
      {
        src: IMG.svcResidentialCarpet,
        alt: "Carpet extraction wand cleaning a residential carpet (illustrative image)",
      },
      {
        src: IMG.svcCommercialCarpet,
        alt: "Carpet extraction wand cleaning an office carpet (illustrative image)",
      },
      { src: IMG.svcTileGrout, alt: "Rotary cleaning tool on a tiled floor (illustrative image)" },
      {
        src: IMG.svcUpholstery,
        alt: "Upholstery extraction wand cleaning a fabric sofa (illustrative image)",
      },
      { src: IMG.svcMattress, alt: "Extraction wand cleaning a mattress (illustrative image)" },
      {
        src: IMG.svcFloorStripping,
        alt: "Floor machine cleaning a tiled floor (illustrative image)",
      },
    ],
  },

  // ── Lead form ─────────────────────────────────────────────────────────
  form: {
    provider: "formspree",
    endpoint: "", // ← paste the client's Formspree endpoint here. Blank = demo mode.
    successTitle: "Thank you! Your request is in.",
    successMessage:
      "Thanks for contacting {name}. We'll reach out soon to talk through your cleaning needs and your estimate.",
    errorMessage:
      "Sorry, we couldn't send your request. Please try again, or call (810) 397-3562 or email robere7138@yahoo.com.",
  },

  // ── SEO / launch ──────────────────────────────────────────────────────
  seo: {
    siteUrl: "",
    indexable: false,
  },
};

/**
 * Notes that belong to the client file but must NEVER be shown on the website.
 * Nothing imports this object, so it is dropped from the production bundle.
 * (Lead alerts themselves are configured in the Formspree dashboard.)
 */
export const internal = {
  /** Mobile number that should receive new-lead alerts. Reference only. */
  leadNotificationPhone: "",
  /** Business address from the client brief. Not published (home-based business). */
  businessAddress: "7138 Alger Dr, Davison, MI 48423",
  /** Owner. Reference only. */
  owner: "Willy Robere",
};

// ─────────────────────────────────────────────────────────────────────────
//  Derived helpers (no need to edit below this line)
// ─────────────────────────────────────────────────────────────────────────

/**
 * Derive a clickable `tel:` href from a display phone number.
 * 10-digit US numbers are used as-is (tel:8103973562); longer numbers get a + prefix.
 */
export function toPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // 10-digit US numbers are dialed as written, e.g. tel:8103973562.
  if (digits.length === 10) return `tel:${digits}`;
  return `tel:+${digits}`;
}

/** Phone number as shown on screen. */
export const phoneDisplay = business.contact.displayPhone || business.contact.phone;
/** `tel:` link for every call-to-action. */
export const phoneHref = toPhoneHref(business.contact.phone);
/** Name used in the © line / structured data. */
export const legalName = business.legalName || business.name;

/** True when the lead form has a real endpoint and will really send. */
export const formIsLive = business.form.provider === "formspree" && !!business.form.endpoint.trim();

/** Site origin without a trailing slash ("" when not configured). */
export const siteUrl = business.seo.siteUrl.trim().replace(/\/+$/, "");

/** Absolute URL for a site path, or "" when no `siteUrl` is configured. */
export function absoluteUrl(path: string): string {
  if (!siteUrl) return "";
  return `${siteUrl}${path}`;
}

/** "City, ST" when both are configured, otherwise whichever exists, otherwise "". */
export function primaryLocationLabel(): string {
  const { primaryCity, state } = business.location;
  return [primaryCity, state].filter(Boolean).join(", ");
}

/** Cities/areas for display & structured data (primary first, no duplicates). */
export function allServiceAreas(): string[] {
  const { primaryCity, serviceAreas } = business.location;
  return Array.from(new Set([primaryCity, ...serviceAreas].filter(Boolean)));
}
