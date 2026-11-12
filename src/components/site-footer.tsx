import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, legalName, phoneDisplay, phoneHref } from "@/lib/business";
import { services } from "@/lib/services";
import { SiteLogo } from "@/components/site-logo";

const SOCIAL_LABELS = [
  ["facebook", "Facebook"],
  ["instagram", "Instagram"],
  ["youtube", "YouTube"],
  ["tiktok", "TikTok"],
  ["linkedin", "LinkedIn"],
  ["x", "X"],
  ["nextdoor", "Nextdoor"],
  ["yelp", "Yelp"],
] as const;

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteFooter() {
  const { contact } = business;
  const address = [
    contact.address.street,
    contact.address.city,
    contact.address.state,
    contact.address.postalCode,
  ]
    .filter(Boolean)
    .join(", ");
  const socials = SOCIAL_LABELS.map(([key, label]) => ({
    label,
    href: business.social[key],
  })).filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <SiteLogo imgClassName="h-14 sm:h-16" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {business.description}
            </p>
            <a
              href={phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              <span className="tabular-nums">{phoneDisplay}</span>
            </a>
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
            ) : null}
            {contact.showAddress && address ? (
              <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {address}
              </p>
            ) : null}
            {socials.length ? (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Get Started
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Need commercial or carpet cleaning in Davison and surrounding communities? Request a
              free estimate and we&rsquo;ll help you get started.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            &copy; {year} {legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
