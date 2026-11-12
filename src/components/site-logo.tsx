import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business } from "@/lib/business";

/**
 * Logo. Uses the uploaded logo image when `branding.logo.src` is set in business.ts;
 * otherwise the built-in text logo with the cleaning accent icon.
 */
export function SiteLogo({
  className = "",
  imgClassName = "h-11 sm:h-12",
}: {
  className?: string;
  imgClassName?: string;
}) {
  const { name, branding } = business;
  const { logo } = branding;
  return (
    <Link
      to="/"
      aria-label={`${name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {logo.src ? (
        <img
          src={logo.src}
          alt={logo.alt || name}
          className={`${imgClassName} w-auto max-w-[220px] object-contain`}
        />
      ) : (
        <>
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:-rotate-6"
          >
            <Sparkles className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.05rem] font-extrabold tracking-tight text-foreground">
              {name}
            </span>
            {logo.subtitle ? (
              <span className="mt-0.5 font-serif text-[0.7rem] italic tracking-wide text-muted-foreground">
                {logo.subtitle}
              </span>
            ) : null}
          </span>
        </>
      )}
    </Link>
  );
}
