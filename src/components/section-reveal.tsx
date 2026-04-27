import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver.
 * No animation library — just CSS transitions defined in styles.css.
 */
export function SectionReveal({
  children,
  className,
  delay,
  as: Tag = "div",
  ...rest
}: SectionRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", delay && `reveal-delay-${delay}`, className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
