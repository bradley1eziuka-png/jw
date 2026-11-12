// Homepage FAQ for J W Cleaning. Entries with `requiresService` only show while that
// service is enabled in services.ts.

import { services, serviceTitleList } from "./services";

export type Faq = { q: string; a: string };

type FaqSource = Faq & {
  /** Only show this question when this service slug is enabled. */
  requiresService?: string;
};

const sources = (): FaqSource[] => [
  {
    q: "What cleaning services do you offer?",
    a: `J W Cleaning offers ${serviceTitleList()}.`,
  },
  {
    q: "Do you serve both businesses and homes?",
    a: "Yes. J W Cleaning provides commercial cleaning and janitorial services for businesses, as well as residential carpet cleaning and other cleaning services for homes.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Davison, Michigan and surrounding communities, including Lapeer County, Goodrich, Millington, Otisville, and Ortonville.",
  },
  {
    q: "How long has J W Cleaning been in business?",
    a: "J W Cleaning was founded in 1992 by Willy Robere. It is an owner-operated business with more than 30 years of experience.",
  },
  {
    q: "How do I get an estimate?",
    a: "Use the estimate form on this page, call (810) 397-3562, or email robere7138@yahoo.com. Tell us about your property and the service you need, and we'll help you get started.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "Details about supplies and equipment can be discussed when you request your estimate.",
  },
];

export function getHomeFaqs(): Faq[] {
  const enabled = new Set(services.map((s) => s.slug));
  return sources()
    .filter((f) => !f.requiresService || enabled.has(f.requiresService))
    .map(({ q, a }) => ({ q, a }));
}
