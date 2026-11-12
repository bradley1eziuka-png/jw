import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { getHomeFaqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about our cleaning services. For anything specific, just reach out."
        />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {getHomeFaqs().map((item, i) => (
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
  );
}
