"use client";

import { useRef, useEffect } from "react";

const ANNOUNCEMENTS = [
  "Get 10% OFF on your Wire Transfer!",
  "Limited Q4 capacity — book your mark today.",
  "Free brand audit with every project inquiry.",
];

export default function AnnouncementBar() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const row = rowRef.current;
    if (reduce || !row) return;

    const totalWidth = row.scrollWidth / 3;
    row.style.animationDuration = `${Math.max(totalWidth / 40, 20)}s`;
  }, []);

  const rowContent = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <section
      aria-label="Announcements"
      className="overflow-hidden border-b border-hairline bg-deep py-3 sm:py-4 relative z-30"
    >
      <div
        ref={rowRef}
        className="flex w-max animate-marquee items-center gap-10 sm:gap-16 md:gap-24 will-change-transform motion-reduce:animate-none"
      >
        {rowContent.map((text, i) => (
          <span
            key={`${text}-${i}`}
            aria-hidden={i >= ANNOUNCEMENTS.length}
            className="flex items-center gap-4 whitespace-nowrap"
          >
            <span className="font-mono text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.25em] text-centerline">
              {text}
            </span>
            <span aria-hidden="true" className="w-px h-4 bg-centerline/30" />
          </span>
        ))}
      </div>
    </section>
  );
}