import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { business } from "@/lib/business";
import { Reveal } from "@/components/reveal";

/** Breadcrumb-style page header used on interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} loading="eager" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">{eyebrow}</span>
          </nav>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          <p className="mt-6 font-serif text-base italic text-foreground/70">
            Brought to you by {business.name}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
