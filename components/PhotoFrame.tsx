"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Rounded photo tile with scroll parallax, a slow hover zoom and a
 * bottom scrim so captions stay legible over any image.
 */
export default function PhotoFrame({
  src,
  alt,
  className = "",
  ratio = "aspect-[16/11]",
  scrim = true,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  scrim?: boolean;
  children?: React.ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-hairline bg-deep ${ratio} ${className}`}
    >
      <div ref={innerRef} className="absolute -top-[7%] h-[114%] w-full will-change-transform">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
      </div>

      {scrim && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep via-deep/25 to-transparent transition-opacity duration-500 group-hover:opacity-90"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_bottom,rgba(255,64,48,0.24),transparent_65%)]"
      />

      {children}
    </div>
  );
}
