import { Phone, CalendarCheck, Clock, UserCheck } from "lucide-react";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { EstimateForm } from "@/components/estimate-form";
import { Reveal } from "@/components/reveal";

const TRUST = [
  { icon: CalendarCheck, label: "Established in 1992" },
  { icon: Clock, label: "30+ Years of Experience" },
  { icon: UserCheck, label: "Owner-Operated" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={business.images.hero.src}
          alt={business.images.hero.alt}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:pt-20 lg:pb-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left: intro + CTAs */}
          <Reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {business.businessType}
            </span>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Commercial &amp; Carpet Cleaning in Davison, MI: Trusted Since 1992
            </h1>
            <p className="mt-3 font-serif text-lg italic text-brand-red sm:text-xl">
              {business.tagline}
            </p>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              From commercial janitorial services to residential carpet and tile cleaning, J W
              Cleaning delivers dependable results backed by over 30 years of experience. Owner
              Willy Robere takes pride in every job and puts customer satisfaction first.
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

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {TRUST.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/75"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: estimate form card */}
          <Reveal delay={120} className="lg:pl-2">
            <div id="estimate" className="scroll-mt-24">
              <EstimateForm variant="card" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
