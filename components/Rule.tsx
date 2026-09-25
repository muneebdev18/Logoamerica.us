"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Horizontal highway centerline that fills left-to-right as it scrolls
 * into view — the horizontal counterpart to the Process track.
 */
export default function Rule({ className = "" }: { className?: string }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 55%",
            scrub: 0.5,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div aria-hidden="true" className={`relative h-[3px] w-full ${className}`}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #f5b700 0 14px, transparent 14px 30px)",
        }}
      />
      <div
        ref={fillRef}
        className="absolute inset-0 origin-left bg-centerline shadow-[0_0_12px_rgba(245,183,0,0.45)]"
        style={{ transform: "scaleX(1)" }}
      />
    </div>
  );
}
