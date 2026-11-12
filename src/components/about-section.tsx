import { Link } from "@tanstack/react-router";
import { Check, MapPin, Clock, Heart } from "lucide-react";
import { business } from "@/lib/business";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-1 lg:order-none">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(16,89,27,0.4)]">
              <img
                src={business.images.about.src}
                alt={business.images.about.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                style={{ objectPosition: "55% 75%" }}
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 px-4 py-3 shadow-md backdrop-blur-sm">
                <p className="font-serif text-sm italic text-foreground/80">
                  &ldquo;When Quality Counts&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About J W Cleaning
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
              Owner-Operated Since 1992
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              J W Cleaning was founded in 1992 by Willy Robere with one goal: provide quality
              cleaning services and leave customers happy with the results.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              More than three decades later, that commitment hasn&rsquo;t changed. From commercial
              cleaning and janitorial services to carpet and tile cleaning, Willy takes personal
              pride in doing the job right.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              When you choose J W Cleaning, you&rsquo;re working with an experienced local
              professional who cares about the quality of his work.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {business.differentiators.map((d) => (
                <li
                  key={d.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{d.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center sm:text-left">
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                <Clock className="hidden h-5 w-5 text-primary sm:block" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Since 1992</p>
                  <p className="text-xs text-muted-foreground">30+ Years</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                <Heart className="hidden h-5 w-5 text-primary sm:block" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Owner-Operated</p>
                  <p className="text-xs text-muted-foreground">Local Business</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                <MapPin className="hidden h-5 w-5 text-primary sm:block" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Davison, MI</p>
                  <p className="text-xs text-muted-foreground">& Nearby</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
