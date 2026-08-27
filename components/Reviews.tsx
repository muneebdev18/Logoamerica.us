"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Platform = {
  name: string;
  tagline: string;
  href: string;
  score: string;
  scoreLabel: string;
  cta: string;
  glowA: string;
  glowB: string;
  accent: string;
  shadow: string;
  logo: React.ReactNode;
  stars: React.ReactNode;
};

const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 1.8l3.02 6.36 6.98.88-5.14 4.83 1.32 6.93L12 17.4l-6.18 3.4 1.32-6.93L2 9.04l6.98-.88z"
      fill="currentColor"
    />
  </svg>
);

/* Official multicolor Google "G" */
const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
    />
  </svg>
);

const TrustpilotLogo = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#00b67a" />
    <path
      d="M12 4.6l1.92 4.05 4.44.55-3.27 3.07.84 4.41L12 14.51l-3.93 2.17.84-4.41-3.27-3.07 4.44-.55z"
      fill="#fff"
    />
  </svg>
);

const ClutchLogo = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#ff3d2e" />
    <path
      d="M17.4 15.1A6 6 0 116.6 8.9"
      fill="none"
      stroke="#fff"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <circle cx="17.6" cy="8.6" r="1.9" fill="#fff" />
  </svg>
);

const GoodFirmsLogo = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    <defs>
      <linearGradient id="gf-g" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#0ba360" />
        <stop offset="100%" stopColor="#3cba92" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="#0d2137" />
    <path d="M6 17.2v-5.4" stroke="url(#gf-g)" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M10.6 17.2V8.6" stroke="url(#gf-g)" strokeWidth="2.6" strokeLinecap="round" />
    <path
      d="M14.6 14.8l4.6-5"
      stroke="#ffb400"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M15.4 9h4.2v4.2"
      stroke="#ffb400"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SquareStars = ({ total = 5, filled = 5 }: { total?: number; filled?: number }) => (
  <span className="flex items-center gap-[3px]" aria-hidden="true">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`flex h-4 w-4 items-center justify-center rounded-[3px] ${
          i < filled ? "bg-[#00b67a]" : "bg-moonlight/15"
        }`}
      >
        <Star className={`h-2.5 w-2.5 ${i < filled ? "text-white" : "text-transparent"}`} />
      </span>
    ))}
  </span>
);

const DotStars = ({ color }: { color: string }) => (
  <span className="flex items-center gap-1" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${color}`} />
    ))}
  </span>
);

const PLATFORMS: Platform[] = [
  {
    name: "Trustpilot",
    tagline: "Verified client reviews",
    href: "https://www.trustpilot.com/review/logoamerica.agency",
    score: "4.8",
    scoreLabel: "TrustScore · Excellent",
    cta: "Read Trustpilot reviews",
    glowA: "rgba(0,182,122,0.22)",
    glowB: "rgba(74,114,255,0.10)",
    accent: "rgba(0,182,122,0.55)",
    shadow: "rgba(0,182,122,0.30)",
    logo: <TrustpilotLogo />,
    stars: <SquareStars filled={5} />,
  },
  {
    name: "Clutch",
    tagline: "Top B2B branding agency",
    href: "https://clutch.co/profile/logo-america",
    score: "4.9",
    scoreLabel: "27 verified reviews",
    cta: "Read Clutch reviews",
    glowA: "rgba(255,61,46,0.20)",
    glowB: "rgba(245,183,0,0.12)",
    accent: "rgba(255,61,46,0.55)",
    shadow: "rgba(255,61,46,0.28)",
    logo: <ClutchLogo />,
    stars: <DotStars color="text-[#ff3d2e]" />,
  },
  {
    name: "GoodFirms",
    tagline: "Recognized identity studio",
    href: "https://www.goodfirms.co/company/logo-america",
    score: "4.8",
    scoreLabel: "Top branding company 2026",
    cta: "Read GoodFirms reviews",
    glowA: "rgba(11,163,96,0.20)",
    glowB: "rgba(255,180,0,0.14)",
    accent: "rgba(60,186,146,0.55)",
    shadow: "rgba(11,163,96,0.28)",
    logo: <GoodFirmsLogo />,
    stars: <DotStars color="text-[#ffb400]" />,
  },
  {
    name: "Google",
    tagline: "Five-star local rating",
    href: "https://www.google.com/search?q=logo+america+agency+reviews",
    score: "4.9",
    scoreLabel: "40+ client ratings",
    cta: "Read Google reviews",
    glowA: "rgba(66,133,244,0.20)",
    glowB: "rgba(251,188,5,0.14)",
    accent: "rgba(66,133,244,0.55)",
    shadow: "rgba(66,133,244,0.28)",
    logo: <GoogleG />,
    stars: <DotStars color="text-[#FBBC05]" />,
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isMobile) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / PLATFORMS.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, PLATFORMS.length - 1));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section
      id="reviews"
      aria-label="Agency reviews on trusted platforms"
      className="relative scroll-mt-20 py-12 sm:py-20"
    >
      <div className="shell flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          exit="04¾"
          eyebrow="Trusted brands & reviews"
          align="center"
          lines={["Rated across", "the map."]}
          lead="We hold ourselves to the same standard on every platform where clients can speak freely — and they do."
        />

        {/* Desktop grid */}
        <div className="hidden sm:grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PLATFORMS.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.08} y={40} className="h-full">
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform.name} — ${platform.score} out of 5. Opens in a new tab.`}
                className="review-card group flex h-full flex-col gap-5 p-6 md:gap-6 md:p-7"
                style={
                  {
                    "--glow-a": platform.glowA,
                    "--glow-b": platform.glowB,
                    "--card-accent": platform.accent,
                    "--shadow-color": platform.shadow,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
                    {platform.logo}
                    <span className="font-display text-lg font-black tracking-tight text-moonlight">
                      {platform.name}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-hairline text-xs text-asphalt opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:border-transparent group-hover:bg-moonlight group-hover:text-midnight group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-black tabular-nums text-moonlight md:text-4xl lg:text-[2.6rem]">
                      {platform.score}
                    </span>
                    <span className="font-mono text-sm font-medium text-asphalt">/ 5</span>
                  </p>
                  {platform.stars}
                  <p className="text-sm font-medium text-asphalt">{platform.scoreLabel}</p>
                </div>

                <span className="mt-auto flex items-center gap-2 pt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-centerline transition-colors duration-300 group-hover:text-moonlight">
                  {platform.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden w-full">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4  px-6 scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform.name} — ${platform.score} out of 5. Opens in a new tab.`}
                className="review-card flex-none snap-start w-[85vw] max-w-[340px] flex flex-col gap-5 p-6"
                style={
                  {
                    "--glow-a": platform.glowA,
                    "--glow-b": platform.glowB,
                    "--card-accent": platform.accent,
                    "--shadow-color": platform.shadow,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-3">
                  {platform.logo}
                  <span className="font-display text-lg font-black tracking-tight text-moonlight">
                    {platform.name}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-black tabular-nums text-moonlight">
                      {platform.score}
                    </span>
                    <span className="font-mono text-sm font-medium text-asphalt">/ 5</span>
                  </p>
                  {platform.stars}
                  <p className="text-sm font-medium text-asphalt">{platform.scoreLabel}</p>
                </div>

                <span className="mt-auto flex items-center gap-2 pt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-centerline">
                  {platform.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {PLATFORMS.map((platform, i) => (
              <button
                key={platform.name}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  scrollTo(i);
                }}
                aria-label={`Go to ${platform.name}`}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === activeIndex ? "w-8 bg-taillight" : "w-2 bg-hairline"
                } min-w-[20px]`}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/60 mt-2">
            ← Swipe to explore →
          </p>
        </div>

        <Reveal delay={0.15}>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-asphalt">
            {/* <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-centerline" /> */}
            120+ verified reviews · 4.8 average across platforms · Zero paid placements
          </p>
        </Reveal>
      </div>
    </section>
  );
}
