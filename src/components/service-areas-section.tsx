import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/service-areas";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

/** Compact homepage block: links to the service-areas overview and each area page. */
export function ServiceAreasSection() {
  return (
    <section className="border-y border-border bg-secondary/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Service Areas"
          title="Based in Davison, Serving Nearby Communities"
          description="J W Cleaning is based in Davison, Michigan and serves homes and commercial properties in the surrounding area."
        />
        <Reveal className="mt-8">
          <div className="flex flex-wrap justify-center gap-2.5">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to="/service-areas/$slug"
                params={{ slug: a.slug }}
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-primary"
              >
                <MapPin className="h-3.5 w-3.5" />
                {a.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              See all service areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
