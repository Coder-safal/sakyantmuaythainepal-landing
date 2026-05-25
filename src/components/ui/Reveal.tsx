"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: 0 | 1 | 2 | 3 | 4;
  variant?: "up" | "fade";
  className?: string;
  threshold?: number;
}

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-revealed", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const base = variant === "up" ? "reveal-up" : "reveal-fade";
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} className={`${base} ${delayClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}
