"use client";

import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/data";

function ServiceIcon({ index }: { index: string }) {
  const common = {
    className: "h-8 w-8 text-moonlight transition-colors duration-500 group-hover:text-centerline",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (index) {
    case "01": // pen nib — the mark itself
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3l5 5-8.5 8.5L3 18l1.5-5.5L13 4z" />
          <path d="M13 4l7 7-4.5 1L12 8.5" />
        </svg>
      );
    case "02": // grid system
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      );
    case "03": // refresh arrows
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 11a8 8 0 10-2.3 6.3M20 5v6h-6" />
        </svg>
      );
    case "04": // speech/letterform
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 5h16v11H9l-5 4z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
    case "05": // play/motion
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M10 8.5l6 3.5-6 3.5z" />
        </svg>
      );
    default: // book/guidelines
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z" />
          <path d="M4 20.5A2.5 2.5 0 016.5 18H20M8 7h8M8 10h6" />
        </svg>
      );
  }
}

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="relative scroll-mt-20 py-20 sm:py-28 md:py-40">
      <div className="shell flex flex-col gap-12 sm:gap-16">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            exit="01"
            eyebrow="Services"
            lines={["A mark","needs to live."]}
          />
          <Reveal delay={0.1} className="self-end">
            <p className="text-lg leading-relaxed text-moonlight md:text-xl lg:text-2xl">
              Six disciplines, one senior team. No handoffs between studios, no
              telephone game — the people who plan your identity are the people
              who draw it.
            </p>
          </Reveal>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-px sm:gap-px lg:gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={(i % 3) * 0.08} y={44}>
              <article className="group relative flex h-full flex-col gap-6 bg-midnight p-6 sm:p-8 transition-colors duration-500 hover:bg-panel">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-centerline">
                    /{service.index}
                  </span>
                  <span className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <ServiceIcon index={service.index} />
                  </span>
                </div>
                <div>
                  <h3 className="display-md text-2xl sm:text-3xl mb-3 text-moonlight">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-asphalt">{service.body}</p>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-asphalt transition-colors group-hover:border-interstate/50 group-hover:text-moonlight"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-taillight via-centerline to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
