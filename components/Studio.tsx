"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { STATS, MANIFESTO } from "@/lib/data";

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const target = { v: 0 };
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.to(target, {
      v: value,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(target.v)}${suffix}`;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  );
}

export default function Studio() {
  const manifestoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = manifestoRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el.children, { opacity: 1 });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { opacity: 0.13 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            end: "bottom 45%",
            scrub: 0.4,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="studio" className="relative scroll-mt-20 py-12 sm:py-20">
      <div className="shell flex flex-col gap-12 sm:gap-16">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            exit="04"
            eyebrow="About Us"
            lines={["Founded in 2020.", "Operating", "nationwide."]}
          />
          <div className="flex flex-col gap-8 self-end">
            <p
              ref={manifestoRef}
              className="text-lg leading-relaxed text-moonlight md:text-xl md:leading-relaxed lg:text-2xl"
            >
              {MANIFESTO.split(" ").map((word, i) => (
                <span key={i} className="inline-block">
                  {word}
                  {"\u00A0"}
                </span>
              ))}
            </p>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-asphalt md:text-xl">
                Nine years and 85 launches later, we operate from New York and
                Los Angeles for clients in every time zone. The names on the
                door are the names in the Slack channel.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
            <dl className="grid grid-cols-1 gap-px sm:gap-px lg:gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
{STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-3 bg-midnight p-6 sm:p-8">
                  <dt className="order-2 text-xs sm:text-sm leading-snug text-asphalt">{stat.label}</dt>
                  <dd
                    className="order-1 font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-moonlight md:text-5xl lg:text-6xl"
                    aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix}`}
                  >
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
