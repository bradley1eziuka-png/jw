import { createFileRoute } from "@tanstack/react-router";
import { business, phoneDisplay, phoneHref } from "@/lib/business";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description: `Privacy policy for ${business.name}.`,
      path: "/privacy",
      noindex: true,
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="prose mx-auto max-w-3xl text-foreground">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().getFullYear()}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {business.name} respects your privacy. This page explains, in plain language, how
          information you share through this website is used.
        </p>
        <h2 className="mt-10 text-xl font-bold text-foreground">Information we may collect</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          When you request an estimate or contact us, you may share your name, phone number, email,
          and details about your property and the service you need. We use that information only to
          respond to your request and discuss services.
        </p>
        <h2 className="mt-8 text-xl font-bold text-foreground">Contact</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Questions about your information? Call{" "}
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
