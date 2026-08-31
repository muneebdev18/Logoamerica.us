"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { PROCESS } from "@/lib/data";

function StepCard({ step, flip }: { step: (typeof PROCESS)[number]; flip: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(el, {
        x: flip ? 60 : -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [flip]);

  return (
    <div
      ref={cardRef}
      className="panel-card group relative flex h-full flex-col gap-4 p-6 sm:p-7 md:p-8 transition-colors duration-500 hover:border-centerline/40"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-2xl sm:text-3xl font-black text-hairline transition-colors duration-500 group-hover:text-centerline md:text-4xl">
          {step.step}
        </span>
        <span className="rounded-full border border-hairline px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-asphalt">
          {step.duration}
        </span>
      </div>
      <h3 className="display-md text-xl sm:text-2xl">{step.title}</h3>
      <p className="text-sm leading-relaxed text-asphalt">{step.body}</p>
      <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 pt-2">
        {step.deliverables.map((d) => (
          <li key={d} className="flex items-center gap-1.5 text-xs text-moonlight/80">
            <span className="inline-block h-1 w-2.5 rounded-full bg-interstate" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fillRef.current || !sectionRef.current) return;
    if (reduce) {
      fillRef.current.style.transform = "scaleY(1)";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative scroll-mt-20 py-12 sm:py-20"
    >
      <div className="shell flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          exit="03"
          eyebrow="Process"
          align="center"
          lines={["One path.", "Five milestones."]}
          lead="A proven sequence we've refined across 140+ brand launches. You'll always know which milestone you're at — and exactly what comes next."
        />

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden="true"
            className="centerline-track absolute bottom-0 left-5 top-0 w-[3px] opacity-25 sm:left-6 md:left-1/2 md:-translate-x-1/2"
          />
          <div
            ref={fillRef}
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-[3px] origin-top bg-centerline shadow-[0_0_12px_rgba(245,183,0,0.45)] sm:left-6 md:left-1/2 md:-translate-x-1/2"
            style={{ transform: "scaleY(0)" }}
          />

          <ol className="flex flex-col gap-8 sm:gap-10 md:gap-16">
            {PROCESS.map((step, i) => (
              <li key={step.step} className="relative pl-10 sm:pl-12 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-8 sm:left-6 sm:top-9 z-10 block h-3 w-3 sm:h-3.5 sm:w-3.5 -translate-x-1/2 rounded-full border-2 border-centerline bg-midnight shadow-[0_0_10px_rgba(245,183,0,0.55)] md:left-1/2"
                />
                <div className="md:grid md:grid-cols-2 md:gap-20">
                  <div className={i % 2 === 1 ? "md:col-start-2" : "md:col-start-1"}>
                    <StepCard step={step} flip={i % 2 === 1} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
