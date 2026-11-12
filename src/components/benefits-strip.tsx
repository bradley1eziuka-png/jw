import { CalendarCheck, UserCheck, Building2, ThumbsUp } from "lucide-react";
import { Reveal } from "@/components/reveal";

const BENEFITS = [
  {
    icon: CalendarCheck,
    title: "Established in 1992",
    desc: "Over 30 years of cleaning experience.",
  },
  {
    icon: UserCheck,
    title: "Owner-Operated",
    desc: "Personal attention from a local business.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    desc: "Homes, offices, and commercial properties.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction Focused",
    desc: "Quality work and doing the job right.",
  },
];

export function BenefitsStrip() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-primary shadow-[0_6px_18px_-10px_rgba(16,89,27,0.4)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
