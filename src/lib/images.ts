// ─────────────────────────────────────────────────────────────────────────
//  IMAGE LIBRARY
//  Every image file lives in /public/images and is referenced by a root-relative
//  path (so it works on any domain). To swap a photo, drop the new file into
//  /public/images (same name = zero code changes) or point the path below,
//  in business.ts, or in services.ts at a new file.
//
//  The files shipped with the master template are DEMONSTRATION images.
//  They are not photos of any real customer's home or project.
// ─────────────────────────────────────────────────────────────────────────

export const IMG = {
  kitchen: "/images/kitchen.jpg",
  bathroomCleaner: "/images/bathroom-cleaner.jpg",
  bathroomPristine: "/images/bathroom-pristine.jpg",
  emptyApartment: "/images/empty-apartment.jpg",
  office: "/images/office.jpg",
  rentalBedroom: "/images/rental-bedroom.jpg",
  familyLiving: "/images/family-living.jpg",
  whiteBedroom: "/images/white-bedroom.jpg",
  cleanerBright: "/images/cleaner-bright.jpg",
  cleanerDusting: "/images/cleaner-dusting.jpg",
  heroLivingRoom: "/images/hero-living-room.jpg",
  aboutCleaning: "/images/about-cleaning.webp",
  // Service-specific illustrative images (stock-style, not real J W Cleaning projects).
  svcCommercialCleaning: "/images/services/commercial-cleaning.webp",
  svcJanitorial: "/images/services/commercial-janitorial-services.webp",
  svcResidentialCarpet: "/images/services/residential-carpet-cleaning.webp",
  svcCommercialCarpet: "/images/services/commercial-carpet-cleaning.webp",
  svcTileGrout: "/images/services/tile-and-grout-cleaning.webp",
  svcUpholstery: "/images/services/upholstery-cleaning.webp",
  svcMattress: "/images/services/mattress-cleaning.webp",
  svcFloorStripping: "/images/services/tile-floor-stripping-and-waxing.webp",
} as const;

export type ImageRef = { src: string; alt: string };
