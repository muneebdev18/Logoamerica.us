"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "@/lib/data";

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
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
  }, [isMobile]);

  const renderAsset = (asset: { type: "image" | "video"; src: string; poster?: string }) => {
    if (asset.type === "video") {
      return (
        <video
          src={asset.src}
          poster={asset.poster}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      );
    }
    return (
      <img
        src={asset.src}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  };

  const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => (
    <article
      className="group relative flex shrink-0 flex-col gap-6 w-[300px] sm:w-[340px] max-w-[90vw] lg:w-[380px] lg:max-w-[440px] lg:flex-col"
    >
      <span
        aria-hidden="true"
        data-ghost
        className="pointer-events-none absolute -top-10 left-4 z-0 select-none font-display text-[4rem] sm:text-[6rem] leading-none text-outline-faint opacity-30 lg:-left-10 lg:top-1/2 lg:-translate-y-1/2 lg:text-[14rem] lg:opacity-50"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <a
        href="#contact"
        aria-label={`${project.client} case study`}
        className="relative z-10 group overflow-hidden rounded-3xl border border-hairline bg-deep w-full aspect-[3/4] lg:aspect-[4/5] transition-all duration-500 hover:border-centerline/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          <div data-art className="h-full w-full scale-[1.1]">
            {renderAsset(project.asset)}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-moonlight/70 bg-deep/50 backdrop-blur-sm rounded-md px-3 py-1.5 inline-block w-fit">
            Project {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
          <div className="flex justify-end">
            <span className="pointer-events-auto flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-taillight text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-105">
              →
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent pointer-events-none">
          <h3 className="font-display text-lg sm:text-xl font-semibold text-moonlight tracking-tight">
            {project.client}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-centerline">
            {project.sector} · {project.year}
          </p>
        </div>
      </a>
    </article>
  );

  const nextProjectCard = (
    <div className="flex shrink-0 w-[300px] sm:w-[340px] max-w-[90vw] lg:w-[380px] lg:max-w-[440px]">
      <a
        href="#contact"
        className="panel-card group relative flex flex-col items-center justify-center gap-4 px-8 py-12 sm:px-10 sm:py-14 text-center transition-all duration-500 hover:-translate-y-1.5 aspect-[4/5] rounded-3xl border border-hairline bg-deep hover:border-centerline/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-taillight/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        <span className="relative font-mono text-[10px] uppercase tracking-[0.24em] text-centerline">
          Next project
        </span>
        <span className="relative display-md text-2xl sm:text-3xl leading-tight text-moonlight">
          Your brand
          <br />
          goes here.
        </span>
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-taillight text-white transition-transform duration-500 group-hover:translate-x-1.5 group-hover:scale-105">
          →
        </span>
      </a>
    </div>
  );

  const scrollToCard = (index: number) => {
    const track = mobileTrackRef.current;
    if (track) {
      const cards = track.querySelectorAll("article");
      const card = cards[index];
      card?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative scroll-mt-0 py-20 sm:py-28 md:py-36 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0 overflow-visible"
    >
      <div className="shell flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            exit="02"
            eyebrow="Selected Work"
            lines={["Portfolio of", "recent partnerships."]}
          />
          <p className="hidden max-w-xs text-sm leading-relaxed text-asphalt lg:block">
            Four brands, four industries — measured by what happened after launch.
          </p>
        </div>

        <div className="hidden h-px w-full bg-hairline lg:block">
          <div
            ref={progressRef}
            className="h-px origin-left bg-gradient-to-r from-taillight to-centerline"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* Desktop: GSAP horizontal scroll with pin */}
      {!isMobile && (
        <div
          ref={trackRef}
          className="mt-10 flex flex-col gap-8 sm:mt-12 sm:gap-10 lg:mt-0 lg:flex-row lg:items-stretch lg:gap-8 lg:px-5 lg:pl-[max(3.5rem,calc((100vw-84rem)/2+3.5rem))] lg:pr-24"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
          {nextProjectCard}
        </div>
      )}

      {/* Mobile: Native horizontal scroll with snap - contained within section flow */}
      {isMobile && (
        <div className="mt-10 lg:hidden overflow-hidden ml-[19px] sm:ml-0" role="region" aria-label="Portfolio carousel">
          <div
            ref={mobileTrackRef}
            className="flex gap-6 pb-6 snap-x snap-mandatory scrollbar-none touch-pan-x overflow-x-auto"
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
            {nextProjectCard}
          </div>
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full bg-hairline transition-all duration-300 hover:bg-asphalt"
                aria-label={`Go to project ${i + 1}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
            <button
              className="w-2 h-2 rounded-full bg-hairline transition-all duration-300 hover:bg-asphalt"
              aria-label="Next project"
              onClick={() => scrollToCard(PROJECTS.length)}
            />
          </div>
        </div>
      )}
    </section>
  );
}