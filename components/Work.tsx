"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import ProjectArt from "./ProjectArt";
import { PROJECTS } from "@/lib/data";

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      gsap.registerPlugin(ScrollTrigger);
      const getTotal = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);

      const tween = gsap.to(track, {
        x: () => -getTotal(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getTotal()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      // Parallax: art drifts inside each panel as it crosses the viewport
      gsap.utils.toArray<HTMLElement>("[data-art]").forEach((art) => {
        gsap.fromTo(
          art,
          { xPercent: -7 },
          {
            xPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: art,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
      // Ghost index numbers drift slower
      gsap.utils.toArray<HTMLElement>("[data-ghost]").forEach((ghost) => {
        gsap.fromTo(
          ghost,
          { xPercent: 30 },
          {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: ghost,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative scroll-mt-0 overflow-hidden py-20 sm:py-28 md:py-36 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="shell flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            exit="02"
            eyebrow="Selected marks"
            lines={["Mile markers from", "recent routes."]}
          />
          <p className="hidden max-w-xs text-sm leading-relaxed text-asphalt lg:block">
            Four identities, four industries — measured by what happened after
            launch. Scroll on.
          </p>
        </div>

        {/* horizontal progress */}
        <div className="hidden h-px w-full bg-hairline lg:block">
          <div
            ref={progressRef}
            className="h-px origin-left bg-gradient-to-r from-taillight to-centerline"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex flex-col gap-12 sm:mt-14 sm:gap-16 md:gap-20 lg:mt-4 lg:flex-row lg:items-stretch lg:gap-10 lg:pl-[max(3.5rem,calc((100vw-84rem)/2+3.5rem))] lg:pr-24 px-5 sm:px-0"
      >
        {PROJECTS.map((project, i) => (
          <article
            key={project.client}
            className="group relative flex shrink-0 flex-col gap-6 sm:gap-8 lg:w-[58vw] lg:max-w-[860px] lg:flex-row lg:items-center lg:gap-10"
          >
            {/* ghost number */}
            <span
              aria-hidden="true"
              data-ghost
              className="pointer-events-none absolute -top-10 left-5 z-0 select-none font-display text-[5rem] sm:text-[7rem] leading-none text-outline-faint opacity-30 lg:-left-10 lg:top-1/2 lg:-translate-y-1/2 lg:text-[16rem] lg:opacity-60"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* art */}
            <a
              href="#contact"
              aria-label={`${project.client} case study`}
              className="relative z-10 block overflow-hidden rounded-3xl border border-hairline lg:w-[55%]"
            >
              <div className="aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <div data-art className="h-full w-full scale-[1.16]">
                  <ProjectArt variant={project.art} accent={project.accent} className="h-full w-full" />
                </div>
              </div>
              <span className="absolute left-5 top-5 rounded-md border border-moonlight/15 bg-deep/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-moonlight backdrop-blur-sm">
                Case {String(i + 1).padStart(2, "0")} / 04
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-taillight text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                →
              </span>
            </a>

            {/* meta */}
            <div className="relative z-10 flex flex-col gap-5 lg:w-[45%]">
              <div className="flex items-baseline gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt">
                <span className="text-centerline">MM {project.year}</span>
                <span>{project.sector}</span>
              </div>
              <h3 className="display-md text-2xl sm:text-3xl text-moonlight md:text-4xl">
                {project.client}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline px-3 py-1 text-xs text-asphalt"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="border-l-2 border-taillight pl-4 leading-snug text-moonlight">
                <strong className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight md:text-3xl">
                  {project.result}
                </strong>
                <span className="mt-1 block text-sm text-asphalt">{project.resultLabel}</span>
              </p>
            </div>
          </article>
        ))}

        {/* end card */}
        <div className="flex shrink-0 items-center justify-center lg:w-[38vw]">
          <a href="#contact" className="panel-card group flex flex-col items-center gap-4 px-8 py-10 sm:px-10 sm:py-12 text-center transition-transform duration-500 hover:-translate-y-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-centerline">
              Next marker
            </span>
            <span className="display-md text-2xl sm:text-3xl">
              Your mark
              <br />
              goes here.
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-taillight text-white transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
