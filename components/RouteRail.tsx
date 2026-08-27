"use client";

import { useEffect, useRef } from "react";
import { NAV_LINKS, TOTAL_MILES } from "@/lib/data";

export default function RouteRail() {
  const fillRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const odometerRef = useRef<HTMLSpanElement>(null);
  const dotsWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let lastMiles = -1;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${progress})`;
      }
      if (markerRef.current) {
        markerRef.current.style.top = `${progress * 100}%`;
      }

      const m = Math.round(progress * TOTAL_MILES);
      if (m !== lastMiles) {
        lastMiles = m;
        if (odometerRef.current) {
          odometerRef.current.textContent = String(m).padStart(4, "0");
        }
        // Light up waypoints we've passed
        const dots = dotsWrapRef.current?.children;
        if (dots) {
          for (let i = 0; i < dots.length; i++) {
            const section = document.querySelector(NAV_LINKS[i].href);
            if (!section || !dots[i]) continue;
            const passed = section.getBoundingClientRect().top < window.innerHeight * 0.5;
            dots[i].children[0]?.classList.toggle("bg-centerline", passed);
            dots[i].children[0]?.classList.toggle("shadow-[0_0_8px_#f5b700]", passed);
            (dots[i].lastElementChild as HTMLElement).style.opacity = passed ? "1" : "";
          }
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex"
    >
      <div className="flex flex-col items-center gap-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-asphalt">NYC</span>
        <span className="font-mono text-[9px] text-asphalt/60">0 mi</span>
      </div>

      <div className="relative h-[42vh] w-px">
        {/* track */}
        <div className="centerline-track absolute inset-0 opacity-30" />
        {/* progress fill */}
        <div
          ref={fillRef}
          className="absolute inset-x-[-0.5px] top-0 h-full origin-top bg-centerline"
          style={{ transform: "scaleY(0)" }}
        />
        {/* moving marker */}
        <div
          ref={markerRef}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: "0%" }}
        >
          <span className="block h-2.5 w-2.5 rounded-full border-2 border-centerline bg-midnight shadow-[0_0_10px_rgba(245,183,0,0.7)]" />
        </div>
        {/* waypoints */}
        <div ref={dotsWrapRef} className="absolute inset-0">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="group absolute left-1/2 flex -translate-x-1/2 items-center"
              style={{ top: `${(parseInt(link.exit) - 0.5) * 18}%` }}
            >
              <span className="block h-1 w-1 rounded-full bg-hairline transition-all duration-500" />
              <span className="pointer-events-none absolute right-4 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] text-asphalt opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {link.label} · {link.exit}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="rounded border border-hairline bg-panel px-1.5 py-0.5 font-mono text-[10px] tabular-nums text-centerline">
          <span ref={odometerRef}>0000</span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-asphalt">LA</span>
        <span className="font-mono text-[9px] text-asphalt/60">{TOTAL_MILES.toLocaleString()} mi</span>
      </div>
    </aside>
  );
}
