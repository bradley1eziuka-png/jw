import { createFileRoute } from "@tanstack/react-router";
import { Clock, Phone, Mail, MapPin, MessageSquareText } from "lucide-react";
import {
  allServiceAreas,
  business,
  phoneDisplay,
  phoneHref,
  primaryLocationLabel,
} from "@/lib/business";
import { localBusinessJsonLd, pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { EstimateForm } from "@/components/estimate-form";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      description: `Get in touch with ${business.name}. Request a free estimate for commercial cleaning, janitorial services, carpet cleaning, or tile and grout cleaning in Davison, MI, or call to discuss your needs.`,
      path: "/contact",
      image: business.images.contactHero.src,
      jsonLd: [localBusinessJsonLd()],
    }),
  component: ContactPage,
});

function ContactPage() {
  const { name, contact } = business;
  const areas = allServiceAreas();
  const address = [
    contact.address.street,
    contact.address.city,
    contact.address.state,
    contact.address.postalCode,
  ]
    .filter(Boolean)
    .join(", ");
  const showAddress = contact.showAddress && !!address;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Cleaning Needs"
        description="Request a free estimate below, or give Willy and the J W Cleaning team a call at (810) 397-3562 to talk through what you need."
        image={business.images.contactHero.src}
        imageAlt={business.images.contactHero.alt}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Get in touch
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              We&rsquo;re here to help
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {name} provides commercial and residential cleaning in Davison, Michigan and
              surrounding communities. The fastest way to get started is a quick estimate request.
              Share a few details and we&rsquo;ll reach out.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Call us
                  </p>
                  <p className="text-base font-bold text-foreground tabular-nums">{phoneDisplay}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MessageSquareText className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Request an estimate
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Fill out the form and we&rsquo;ll get back to you.
                  </p>
                </div>
              </div>

              {contact.email ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Email us
                    </p>
                    <p className="break-words text-base font-bold text-foreground">
                      {contact.email}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Email us any time to request an estimate.
                  </p>
                </div>
              )}

              {areas.length || showAddress ? (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {showAddress ? "Our location" : "Service area"}
                    </p>
                    {showAddress ? (
                      <p className="text-sm font-medium text-foreground">{address}</p>
                    ) : null}
                    {areas.length ? (
                      <p className="text-sm font-medium text-foreground">
                        Davison, MI and surrounding communities, including{" "}
                        {areas.filter((a) => a !== business.location.primaryCity).join(", ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Serving the local area. Specifics confirmed during booking.
                  </p>
                </div>
              )}

              {contact.hours.length ? (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Hours
                    </p>
                    <ul className="mt-1 space-y-0.5">
                      {contact.hours.map((h) => (
                        <li key={h.days} className="text-sm font-medium text-foreground">
                          {h.days}: {h.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          <div id="estimate" className="scroll-mt-24">
            <Reveal delay={120}>
              <EstimateForm variant="card" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
