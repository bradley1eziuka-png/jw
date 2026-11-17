import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { serviceAreas } from "@/lib/service-areas";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/service-areas/")({
  head: () =>
    pageHead({
      title: "Cleaning Service Areas Around Davison, MI",
      description: `${business.name} provides commercial cleaning, janitorial services, carpet cleaning, and floor care in Davison, Goodrich, Millington, Otisville, Ortonville, and Lapeer County, MI.`,
      path: "/service-areas",
      image: business.images.servicesHero.src,
      jsonLd: [breadcrumbJsonLd([["Service Areas", "/service-areas"]])],
    }),
  component: ServiceAreasIndex,
});

function ServiceAreasIndex() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Cleaning Services in Davison & Surrounding Communities"
        description="J W Cleaning provides commercial cleaning, janitorial services, carpet cleaning, and floor care throughout Davison and surrounding Michigan communities. Founded in 1992, our owner-operated business brings decades of cleaning experience to homes and commercial properties."
        image={business.images.servicesHero.src}
        imageAlt={business.images.servicesHero.alt}
      >
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              Call {phoneDisplay}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Where we serve
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              J W Cleaning is based in Davison. Choose your community to see which services you can
              request, or contact us if you are not sure your location is covered.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 90}>
                <Link
                  to="/service-areas/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(16,89,27,0.4)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{a.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.cardBlurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:gap-2.5">
                    View details
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-muted-foreground">
              Looking for something specific?{" "}
              <Link to="/services" className="font-medium text-primary hover:underline">
                Browse all cleaning services
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="font-medium text-primary hover:underline">
                contact J W Cleaning
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
