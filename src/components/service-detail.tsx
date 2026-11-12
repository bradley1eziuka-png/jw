import { Link, useParams } from "@tanstack/react-router";
import { Check, ArrowRight, Phone, ClipboardList } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, relatedServices } from "@/lib/services";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { EstimateForm } from "@/components/estimate-form";
import { Reveal } from "@/components/reveal";

export function ServiceDetail() {
  const { slug } = useParams({ from: "/services/$slug" });
  const service = getService(slug);

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
        <p className="mt-3 text-muted-foreground">We couldn&rsquo;t find that cleaning service.</p>
        <Link
          to="/services"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          View all services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/82 to-background/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {service.eyebrow}
            </span>
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              {service.title}
            </h1>
            <p className="mt-4 font-serif text-lg italic text-foreground/70 sm:text-xl">
              {service.tagline}
            </p>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Get a Free Estimate
              </a>
              <a
                href={phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary/25 bg-background/80 px-6 text-sm font-semibold text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-background"
              >
                <Phone className="h-4 w-4" />
                Call {phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + tasks */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Overview
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              What&rsquo;s included
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.overview}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{task}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                Benefits
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-30px_rgba(16,89,27,0.4)]">
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-square"
                style={
                  service.imagePosition ? { objectPosition: service.imagePosition } : undefined
                }
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="border-y border-border bg-secondary/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Explore other services</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {relatedServices(service.slug).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-primary"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {service.title} FAQ
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Questions about {service.title.toLowerCase()}
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:text-primary [&[data-state=open]]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Estimate form */}
      <section className="border-t border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl" id="estimate">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ClipboardList className="h-6 w-6" />
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Request your {service.title.toLowerCase()} estimate
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              {business.name} is ready to help. Share a few details and we&rsquo;ll get you started.
            </p>
          </div>
          <EstimateForm
            key={service.slug}
            variant="plain"
            showHeading={false}
            defaultService={service.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
          />
        </div>
      </section>

      <FinalCtaInline />
    </>
  );
}

function FinalCtaInline() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-[0_24px_60px_-30px_rgba(16,89,27,0.5)] sm:px-12 sm:py-14">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-primary-foreground/85">
            Request a free estimate or give us a call. We&rsquo;ll help you find the right cleaning
            plan.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#estimate"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-background px-6 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
            >
              Get a Free Estimate
            </a>
            <a
              href={phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-background/40 bg-transparent px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-background/10"
            >
              <Phone className="h-4 w-4" />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
