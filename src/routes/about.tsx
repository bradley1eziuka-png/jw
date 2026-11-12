import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Check, Clock, Heart, MessageSquareText, Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us",
      description: `${business.name} was founded in 1992 by Willy Robere. Owner-operated cleaning with over 30 years of experience, serving Davison, MI and surrounding communities.`,
      path: "/about",
      image: business.images.about.src,
    }),
  component: AboutPage,
});

const ICONS = { sparkles: Sparkles, clock: Clock, heart: Heart, message: MessageSquareText };

const POINTS = [
  "Established in 1992",
  "Over 30 years of experience",
  "Owner-operated local business",
  "Commercial and residential customers",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Owner-Operated Since 1992"
        description="J W Cleaning was founded by Willy Robere with a commitment to dependable service and quality results. When Quality Counts."
        image={business.images.about.src}
        imageAlt={business.images.about.alt}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Approach
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Dependable service, quality results
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              J W Cleaning is an owner-operated business serving Davison, Michigan and surrounding
              communities, including Lapeer County, Goodrich, Millington, Otisville, and Ortonville.
              The focus is simple: personal attention, dependable service, and doing the job right.
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {business.differentiators.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {business.foundingStory ? (
        <section className="border-t border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Story
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              The story of {business.name}
            </h2>
            {business.foundingStory
              .split(/\n{2,}/)
              .filter(Boolean)
              .map((para) => (
                <p
                  key={para}
                  className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {para}
                </p>
              ))}
          </Reveal>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}
