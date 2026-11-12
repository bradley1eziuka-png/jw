import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <Reveal className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary ${isCenter ? "text-center" : ""}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1] ${isCenter ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
