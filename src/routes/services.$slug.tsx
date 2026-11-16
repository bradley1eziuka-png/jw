import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { getService } from "@/lib/services";
import {
  breadcrumbJsonLd,
  pageHead,
  serviceDescription,
  serviceJsonLd,
  serviceTitle,
} from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  // Unknown or disabled services return a real 404 (never a soft "not found" page with a 200).
  beforeLoad: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) return {};
    return pageHead({
      title: serviceTitle(service),
      rawTitle: true,
      description: serviceDescription(service),
      path: `/services/${service.slug}`,
      image: service.heroImage,
      jsonLd: [
        serviceJsonLd(service),
        breadcrumbJsonLd([
          ["Services", "/services"],
          [service.title, `/services/${service.slug}`],
        ]),
      ],
    });
  },
  component: ServiceDetail,
});
