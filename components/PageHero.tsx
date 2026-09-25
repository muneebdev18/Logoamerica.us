"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Magnetic from "./Magnetic";
import SplitWords from "./SplitWords";
import ProjectArt from "./ProjectArt";

type Cta = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  meta,
  art = "coast",
  accent = "#ff4030",
  note,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  primary?: Cta;
  secondary?: Cta;
  meta?: string[];
  art?: "canyon" | "skyline" | "heartland" | "coast";
  accent?: string;
  note?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll("[data-hero-fade]");
      gsap.set(items, { y: 24, opacity: 0 });
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.09,
        delay: 0.35,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const renderCta = (cta: Cta, variant: "primary" | "ghost") => (
    <Magnetic>
      {cta.onClick ? (
        <button
          type="button"
          onClick={cta.onClick}
          className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} w-full sm:w-auto`}
        >
          {cta.label}
          {variant === "primary" ? <span aria-hidden="true">→</span> : null}
        </button>
      ) : (
        <a
          href={cta.href ?? "#contact"}
          className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} w-full sm:w-auto`}
        >
          {cta.label}
          {variant === "primary" ? <span aria-hidden="true">→</span> : null}
        </a>
      )}
    </Magnetic>
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-b border-hairline pt-32 pb-14 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24"
    >
      {/* Ambient art + glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-0 h-full w-full sm:w-[72%]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
          }}
        >
          <ProjectArt
            variant={art}
            accent={accent}
            className="h-full w-full opacity-[0.55]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(74,114,255,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(255,64,48,0.16),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      <div className="shell relative flex flex-col gap-7 sm:gap-9">
        <span
          data-hero-fade
          className="inline-flex w-fit items-center gap-3 rounded-md border border-centerline/30 bg-centerline/[0.06] px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.24em] text-centerline"
        >
          {eyebrow}
        </span>

        <SplitWords
          as="h1"
          text={title}
          delay={0.12}
          className="display-xl max-w-[15ch]"
        />

        <p
          data-hero-fade
          className="max-w-2xl text-lg leading-relaxed text-asphalt md:text-xl"
        >
          {lead}
        </p>

        {(primary || secondary) && (
          <div
            data-hero-fade
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            {primary && renderCta(primary, "primary")}
            {secondary && renderCta(secondary, "ghost")}
          </div>
        )}

        {(meta || note) && (
          <div
            data-hero-fade
            className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt sm:text-[11px]"
          >
            {meta?.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-centerline" />
                {item}
              </span>
            ))}
            {note && <span className="text-asphalt/70">{note}</span>}
          </div>
        )}
      </div>
    </section>
  );
}
