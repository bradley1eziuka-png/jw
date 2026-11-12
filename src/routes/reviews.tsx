import { createFileRoute } from "@tanstack/react-router";
import { Quote, MessageCircleHeart } from "lucide-react";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Reviews",
      description: `${business.name} has focused on dependable service and customer satisfaction since 1992. Owner-operated cleaning in Davison, MI.`,
      path: "/reviews",
      image: business.images.reviewsHero.src,
    }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Dependable Service, Quality Results"
        description="Since 1992, J W Cleaning has focused on quality work and making sure customers are satisfied with the job."
        image={business.images.reviewsHero.src}
        imageAlt={business.images.reviewsHero.alt}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
              <span className="pointer-events-none absolute -left-6 -top-6 text-primary/10">
                <Quote className="h-28 w-28" />
              </span>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                <MessageCircleHeart className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-balance text-2xl font-bold text-foreground sm:text-3xl">
                Owner-operated since 1992
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                J W Cleaning was founded by Willy Robere, who has taken pride in his work for more
                than three decades. We believe in personal attention, dependable service, and doing
                the job right.
              </p>
              <p className="mt-6 font-serif text-sm italic text-muted-foreground">
                When Quality Counts
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-6">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Questions or feedback?</span> Call{" "}
                <a href={phoneHref} className="font-semibold text-primary hover:underline">
                  {phoneDisplay}
                </a>{" "}
                or email{" "}
                <a
                  href={`mailto:${business.contact.email}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {business.contact.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
