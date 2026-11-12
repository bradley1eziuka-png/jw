import { createFileRoute } from "@tanstack/react-router";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service",
      description: `Terms of service for ${business.name}.`,
      path: "/terms",
      noindex: true,
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().getFullYear()}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          By using this website you agree to these basic terms. {business.name} is an owner-operated
          cleaning business serving Davison, Michigan and surrounding communities.
        </p>
        <h2 className="mt-10 text-xl font-bold text-foreground">Services &amp; estimates</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Information on this website is general in nature. Scope, pricing, and scheduling for any
          job are confirmed directly with {business.name}.
        </p>
        <h2 className="mt-8 text-xl font-bold text-foreground">Contact</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Questions? Call{" "}
          <a href={phoneHref} className="text-primary hover:underline">
            {phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${business.contact.email}`} className="text-primary hover:underline">
            {business.contact.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
