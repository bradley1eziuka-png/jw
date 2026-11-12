import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/home-hero";
import { BenefitsStrip } from "@/components/benefits-strip";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { HowItWorks } from "@/components/how-it-works";
import { GallerySection } from "@/components/gallery-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { getHomeFaqs } from "@/lib/faq";
import { faqJsonLd, homeDescription, homeTitle, localBusinessJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: homeTitle(),
      rawTitle: true,
      description: homeDescription(),
      path: "/",
      jsonLd: [localBusinessJsonLd(), faqJsonLd(getHomeFaqs())],
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <HomeHero />
      <BenefitsStrip />
      <ServicesSection />
      <AboutSection />
      <HowItWorks />
      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
