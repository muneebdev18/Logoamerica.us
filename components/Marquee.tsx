"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SVG_LOGOS = [
  "/svgs/dgtforge.com-4.svg",
  "/svgs/dgtforge.com-5.svg",
  "/svgs/dgtforge.com-6.svg",
  "/svgs/dgtforge.com-7.svg",
  "/svgs/dgtforge.com-8.svg",
  "/svgs/dgtforge.com-9.svg",
  "/svgs/dgtforge.com-10.svg",
  "/svgs/dgtforge.com-11.svg",
  "/svgs/dgtforge.com-12.svg",
  "/svgs/dgtforge.com-13.svg",
  "/svgs/dgtforge.com-14.svg",
  "/svgs/dgtforge.com-15.svg",
  "/svgs/dgtforge.com-16.svg",
  "/svgs/dgtforge.com-17.svg",
  "/svgs/dgtforge.com-18.svg",
  "/svgs/dgtforge.com-19.svg",
  "/svgs/dgtforge.com-20.svg",
] as const;

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

  const logos = [...SVG_LOGOS, ...SVG_LOGOS, ...SVG_LOGOS];
  return (
    <section ref={rootRef} aria-label="Brand logos" className="border-y border-hairline bg-deep/60 py-5 sm:py-8">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16 md:w-28 bg-gradient-to-r from-midnight to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16 md:w-28 bg-gradient-to-l from-midnight to-transparent" />
        <div
          ref={rowRef}
          className="flex w-max animate-marquee items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-12 md:pr-12 will-change-transform motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
        >
          {logos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              aria-hidden={i >= SVG_LOGOS.length}
              className="flex items-center flex-shrink-0 px-3 sm:px-4 md:px-5"
            >
              <img
                src={src}
                alt=""
                className="h-7 w-auto max-w-[140px] object-contain sm:h-8 md:h-10 lg:h-12"
                style={{ filter: "brightness(0) invert(1) grayscale(1)" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}