import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/business";
import { services } from "@/lib/services";
import { SiteLogo } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(16,89,27,0.25)]"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <SiteLogo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                isActive("/services") ? "text-primary" : "text-foreground/80 hover:text-primary",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </Link>
            {servicesOpen ? (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-[0_18px_45px_-20px_rgba(16,89,27,0.4)]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.to) ? "text-primary" : "text-foreground/80 hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span className="tabular-nums">{phoneDisplay}</span>
          </a>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        inert={!mobileOpen}
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="max-h-[80vh] overflow-y-auto px-4 py-4 sm:px-6">
          <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Services
          </p>
          <div className="flex flex-col">
            <Link
              to="/services"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-secondary"
            >
              All Services
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-lg px-3 py-2.5 pl-6 text-sm text-foreground/75 hover:bg-secondary"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div className="my-2 h-px bg-border" />
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={phoneHref}
              className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              Call {phoneDisplay}
            </a>
            <Button asChild className="h-12">
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
