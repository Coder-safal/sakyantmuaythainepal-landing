import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
}: Props) {
  const wrap = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";
  const titleSize =
    size === "xl"
      ? "text-5xl md:text-7xl lg:text-8xl"
      : size === "md"
        ? "text-3xl md:text-4xl lg:text-5xl"
        : "text-4xl md:text-6xl lg:text-7xl";

  return (
    <div className={wrap}>
      {eyebrow && (
        <Reveal>
          <div
            className={`flex items-center gap-3 mb-5 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-accent font-semibold">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-accent/40 md:hidden" />
          </div>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className={`font-display ${titleSize} leading-[0.92] text-balance`}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
