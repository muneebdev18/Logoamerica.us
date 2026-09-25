"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Splits text into words wrapped in mask spans, then reveals them
 * with a staggered rise when scrolled into view.
 * Inline markup: *…* → outlined display, ~…~ → serif italic accent.
 * Markers may wrap a single word or a whole phrase.
 */

type Token = { word: string; kind: "plain" | "outline" | "serif" };

function tokenize(text: string): Token[] {
  const out: Token[] = [];
  const re = /\*([^*]+)\*|~([^~]+)~|([^*~]+)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    const kind: Token["kind"] =
      match[1] !== undefined ? "outline" : match[2] !== undefined ? "serif" : "plain";
    const chunk = match[1] ?? match[2] ?? match[3] ?? "";
    for (const word of chunk.split(/\s+/)) {
      if (word) out.push({ word, kind });
    }
  }
  return out;
}

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

  const tokens = tokenize(text);
  return (
    <Tag ref={ref as never} className={className} aria-label={text.replace(/[*~]/g, "")}>
      {tokens.map(({ word, kind }, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom"
        >
          <span
            data-w
            className={`inline-block will-change-transform ${
              kind === "outline" ? "text-outline" : ""
            } ${kind === "serif" ? "serif-accent text-taillight" : ""}`}
          >
            {word}
          </span>
          {i < tokens.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
