"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Splits text into words wrapped in mask spans, then reveals them
 * with a staggered rise when scrolled into view.
 * Inline markup: *word* → outlined display, ~word~ → serif italic accent.
 */
export default function SplitWords({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.045,
  scrub = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  scrub?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = el.querySelectorAll("[data-w]");
    if (reduce) {
      gsap.set(words, { clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (scrub) {
        gsap.fromTo(
          words,
          { yPercent: 120 },
          {
            yPercent: 0,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 45%",
              scrub: 0.5,
            },
          }
        );
      } else {
        gsap.fromTo(
          words,
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 1.1,
            delay,
            stagger,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      }
    }, el);
    return () => ctx.revert();
  }, [text, delay, stagger, scrub]);

  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={className} aria-label={text.replace(/[*~]/g, "")}>
      {words.map((raw, i) => {
        const outline = raw.startsWith("*") && raw.endsWith("*");
        const serif = raw.startsWith("~") && raw.endsWith("~");
        const word = raw.replace(/[*~]/g, "");
        return (
          <span
            key={i}
            aria-hidden="true"
            className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom"
          >
            <span
              data-w
              className={`inline-block will-change-transform ${
                outline ? "text-outline" : ""
              } ${serif ? "serif-accent text-taillight" : ""}`}
            >
              {word}</span>
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </Tag>
  );
}
