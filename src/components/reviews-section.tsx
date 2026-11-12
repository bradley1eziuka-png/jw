import { Quote, MessageCircleHeart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ReviewsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Commitment"
          title="We Don't Consider the Job Done Until You're Satisfied."
        />

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
            <span className="pointer-events-none absolute -left-6 -top-6 text-primary/10">
              <Quote className="h-24 w-24" />
            </span>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <MessageCircleHeart className="h-7 w-7" />
            </span>
            <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              Since 1992, Willy Robere has built J W Cleaning around one simple belief: quality work
              matters. With decades of hands-on experience and a personal commitment to customer
              satisfaction, he takes pride in leaving every space cleaner and every customer happy
              with the results.
            </p>
            <p className="mt-4 font-serif text-base italic text-muted-foreground">
              When Quality Counts
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
