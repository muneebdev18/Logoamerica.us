"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MARQUEE_WORDS } from "@/lib/data";


export default function Marquee() {
  const rootRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    const row = rowRef.current;
    if (reduce || !root || !row) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Scroll velocity drives a subtle skew — the strip "leans" into speed
      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter(row, "skewX", "deg");
      const clamp = gsap.utils.clamp(-8, 8);
      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -350);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.7,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <section ref={rootRef} aria-label="What we make" className="border-y border-hairline bg-deep/60 py-5 sm:py-8">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16 md:w-28 bg-gradient-to-r from-midnight to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16 md:w-28 bg-gradient-to-l from-midnight to-transparent" />
        <div
          ref={rowRef}
          className="flex w-max animate-marquee items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-12 md:pr-12 will-change-transform motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
        >
          {row.map((word, i) => (
            <span key={`${word}-${i}`} aria-hidden={i >= MARQUEE_WORDS.length} className="flex items-center gap-6 sm:gap-8 md:gap-12 whitespace-nowrap">
              <span className="font-display text-sm font-black uppercase tracking-[0.3em] text-asphalt/80 sm:text-base md:text-lg lg:text-xl">
                {word}
              </span>
              <img src="/logo-hz.png" alt="" className="h-3.5 w-3.5 object-contain opacity-70 sm:h-4 sm:w-4" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
