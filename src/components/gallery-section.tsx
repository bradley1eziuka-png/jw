import { Link } from "@tanstack/react-router";
import { business } from "@/lib/business";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function GallerySection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Work"
          title="See the Difference a Clean Space Makes"
          description={
            business.gallery.isSample
              ? "Sample stock images of clean residential and commercial spaces. These are not photos of J W Cleaning projects."
              : "A look at J W Cleaning's residential and commercial cleaning work."
          }
        />
        {business.gallery.isSample ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Sample Cleaning Gallery
            </span>
          </div>
        ) : null}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {business.gallery.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 70}
              className={i % 5 === 0 || i % 5 === 3 ? "col-span-2 sm:col-span-1 row-span-1" : ""}
            >
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 opacity-0 transition-opacity duration-300 group-hover:bg-primary/10 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/55 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-medium text-white">{img.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
