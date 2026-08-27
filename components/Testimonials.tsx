"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "./SectionHeading";

import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <section
      aria-label="Client testimonials"
      className="relative scroll-mt-20 border-y border-hairline bg-deep/40 py-20 sm:py-28 md:py-36"
    >
      <div className="shell flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          exit="04½"
          eyebrow="Word on the road"
          align="center"
          lines={["Passengers, quoted."]}
        />

        <div
          className="relative flex w-full max-w-3xl flex-col items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span
            aria-hidden="true"
            className="serif-accent text-[3rem] leading-none text-taillight/25 sm:text-[5rem] md:text-[7rem] lg:text-[9rem]"
          >
            &ldquo;
          </span>

          <div className="-mt-3 min-h-[160px] sm:w-[60%] sm:-mt-6 sm:min-h-[180px] md:min-h-[150px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-8 text-center"
              >
                <p className="text-lg leading-relaxed text-moonlight sm:text-xl md:text-[1.65rem] md:leading-snug">
                  {t.quote}
                </p>
                <footer className="flex flex-col items-center gap-2">
                  <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-centerline">
                    <img src="/logo-hz.png" alt="" className="h-4 w-4 object-contain" />
                    {t.name}
                  </span>
                  <span className="text-sm text-asphalt">
                    {t.role}, {t.company}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-asphalt transition-colors hover:border-taillight hover:text-taillight"
            >
              ←
            </button>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial from ${item.name}`}
                  onClick={() => go(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-taillight" : "w-2 bg-hairline hover:bg-asphalt"
                  } ]`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-asphalt transition-colors hover:border-taillight hover:text-taillight"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
