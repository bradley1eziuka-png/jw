import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";
import { breadcrumbJsonLd, pageHead, serviceAreaJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { ServicesSection } from "@/components/services-section";
import { BenefitsStrip } from "@/components/benefits-strip";
import { HowItWorks } from "@/components/how-it-works";
import { EstimateForm } from "@/components/estimate-form";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/service-areas/$slug")({
  // Unknown areas return a real 404 (never a soft "not found" page with a 200).
  beforeLoad: ({ params }) => {
    if (!getServiceArea(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const area = getServiceArea(params.slug);
    if (!area) return {};
    const path = `/service-areas/${area.slug}`;
    return pageHead({
      title: area.title,
      description: area.description,
      path,
      image: business.images.servicesHero.src,
      // Thin pages stay out of search (noindex) and the sitemap until real local detail exists.
      noindex: !area.indexable,
      jsonLd: area.indexable
        ? [
            serviceAreaJsonLd(area.name, area.kind, path),
            breadcrumbJsonLd([
              ["Service Areas", "/service-areas"],
              [area.name, path],
            ]),
          ]
        : [],
    });
  },
  component: ServiceAreaPage,
});

function ServiceAreaPage() {
  const { slug } = Route.useParams();
  const area = getServiceArea(slug);
  if (!area) return null;
  const nearby = area.nearby
    .map((s) => serviceAreas.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => !!a);

  return (
    <>
      <PageHero
        eyebrow={area.name}
        parent={{ label: "Service Areas", to: "/service-areas" }}
        title={area.h1}
        description={area.heroDescription}
        image={business.images.servicesHero.src}
        imageAlt={business.images.servicesHero.alt}
      >
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#estimate">Get a Free Estimate</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              Call {phoneDisplay}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {area.guideHeading}
          </h2>
          {area.guide.map((para) => (
            <p
              key={para}
              className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {para}
            </p>
          ))}
        </Reveal>
      </section>

      <ServicesSection
        eyebrow="Services Available"
        title={`Cleaning services for ${area.name}`}
        description="Select a service to see what it covers and how to request an estimate."
      />

      <BenefitsStrip title="Why choose J W Cleaning" />

      {area.slug === "davison" ? <HowItWorks /> : null}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl" id="estimate">
          <div className="mb-8 text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Request an estimate
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Tell us what you need cleaned and where the property is located.
            </p>
          </div>
          <EstimateForm
            key={area.slug}
            variant="plain"
            showHeading={false}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
          />
        </div>
      </section>

      <FaqSection
        faqs={area.faqs}
        title={`Questions about service in ${area.name}`}
        description="If your question isn't answered here, call or send the request form."
      />

      <section className="border-y border-border bg-secondary/30 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Nearby service areas</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {nearby.map((a) => (
              <Link
                key={a.slug}
                to="/service-areas/$slug"
                params={{ slug: a.slug }}
                className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-primary"
              >
                {a.name}
              </Link>
            ))}
            <Link
              to="/service-areas"
              className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-primary hover:underline"
            >
              All service areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
