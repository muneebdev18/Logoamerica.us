"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Reveal from "./Reveal";
import LeadCta from "./LeadCta";
import type { Service } from "@/lib/data";

type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string };

export default function ServiceRow({
  service,
  media,
  flip = false,
  caption,
}: {
  service: Service;
  media: Media;
  flip?: boolean;
  caption?: string;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { xPercent: -5 },
        {
          xPercent: 5,
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
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
      <Reveal
        delay={0.05}
        className={flip ? "lg:order-2" : "lg:order-1"}
        y={44}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-centerline">
              /{service.index}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
          </div>

          <h2 className="display-md max-w-[18ch] text-moonlight">
            {service.title}
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-asphalt md:text-lg">
            {service.body}
          </p>

          <ul className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-asphalt transition-colors hover:border-interstate/50 hover:text-moonlight"
              >
                {tag}
              </li>
            ))}
          </ul>

          <LeadCta
            service={service.title}
            className="btn btn-ghost mt-1 w-fit !py-3.5"
          >
            Start this project
            <span aria-hidden="true">→</span>
          </LeadCta>
        </div>
      </Reveal>

      <Reveal
        delay={0.12}
        className={flip ? "lg:order-1" : "lg:order-2"}
        y={44}
      >
        <div className="group relative aspect-[16/11] overflow-hidden rounded-3xl border border-hairline bg-deep">
          <div
            ref={mediaRef}
            className="absolute inset-y-0 -left-[6%] w-[112%] will-change-transform"
          >
            {media.type === "video" ? (
              <video
                src={media.src}
                poster={media.poster}
                aria-label={media.alt}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={media.src}
                alt={media.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            )}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent transition-opacity duration-500"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_bottom,rgba(255,64,48,0.22),transparent_65%)]"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 right-4 select-none font-display text-[7rem] font-black leading-none text-outline-faint opacity-40 transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-70 sm:text-[9rem]"
          >
            {service.index}
          </span>

          {caption && (
            <span className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-moonlight/75 sm:bottom-5 sm:left-5">
              {caption}
            </span>
          )}
        </div>
      </Reveal>
    </article>
  );
}
