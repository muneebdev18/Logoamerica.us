"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";

const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 1.8l3.02 6.36 6.98.88-5.14 4.83 1.32 6.93L12 17.4l-6.18 3.4 1.32-6.93L2 9.04l6.98-.88z" fill="currentColor" />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
    <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const TrustpilotLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#00b67a" />
    <path d="M12 4.6l1.92 4.05 4.44.55-3.27 3.07.84 4.41L12 14.51l-3.93 2.17.84-4.41-3.27-3.07 4.44-.55z" fill="#fff" />
  </svg>
);

const ClutchLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#ff3d2e" />
    <path d="M17.4 15.1A6 6 0 116.6 8.9" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
    <circle cx="17.6" cy="8.6" r="1.9" fill="#fff" />
  </svg>
  // data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.7 115"><circle cx="299.2" cy="75.3" r="13.3" fill="%23E62415"/><path fill="%2317313B" d="M105.6 0h17.6v113.5h-17.6V0zm81.7 78.5c0 17.6-14.4 19-18.8 19-11 0-12.6-10.3-12.6-16.5V37.1h-17.7v43.8c-.1 10.9 3 19.9 9 25.9a32.1 32.1 0 0040.1 2.1v4.6H205V37.1h-17.7v41.4zm55.9-67.1h-17.7v25.7h-12.3v16.7h12.3v59.7h17.7V53.8h14.5V37.1h-14.5V11.4zM315 91.8c-4 3.6-9.3 5.6-15.1 5.6a21.6 21.6 0 01-22.2-22.3c0-12.9 9.1-21.9 22.2-21.9 5.7 0 11.1 1.9 15.2 5.5l2.8 2.4 12.4-12.4-3.1-2.8a40.6 40.6 0 00-27.3-10.3c-23 0-39.7 16.6-39.7 39.4a39 39 0 0039.7 39.9c10.5 0 20.3-3.7 27.5-10.4l3-2.8-12.6-12.4-2.8 2.5zm81.7-48a32.1 32.1 0 00-40.1-2.1V0h-17.7v113.5h17.7V72.2c0-17.6 14.4-19 18.8-19 11 0 12.6 10.3 12.6 16.5v43.9h17.7V69.7a36 36 0 00-9-25.9zM79.5 86.3A36.7 36.7 0 0153 97.4c-20.5 0-35.4-16.1-35.4-38.2C17.6 37 32.5 20.9 53 20.9c9.9 0 19.3 3.9 26.4 11l2.8 2.8 12.3-12.3-2.7-2.8A54.2 54.2 0 0052.9 3.4C22.8 3.4 0 27.4 0 59.3 0 91 22.8 115 52.9 115c14.9 0 28.7-5.8 38.9-16.3l2.7-2.8-12.2-12.5-2.8 2.9z"/></svg>
);

const GoodFirmsLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
    <defs>
      <linearGradient id="gf-g" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#0ba360" />
        <stop offset="100%" stopColor="#3cba92" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="#0d2137" />
    <path d="M6 17.2v-5.4" stroke="url(#gf-g)" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M10.6 17.2V8.6" stroke="url(#gf-g)" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M14.6 14.8l4.6-5" stroke="#ffb400" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15.4 9h4.2v4.2" stroke="#ffb400" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlatformStars = ({ count = 5, color = "text-[#00b67a]" }: { count?: number; color?: string }) => (
  <span className="flex items-center gap-0.5" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${color}`} />
    ))}
  </span>
);

const TRUST_PLATFORMS = [
  { name: "Trustpilot", score: "4.8", href: "https://www.trustpilot.com/review/logoamerica.agency", logo: <TrustpilotLogo />, stars: <PlatformStars color="text-[#00b67a]" /> },
  { name: "Clutch", score: "4.9", href: "https://clutch.co/profile/logo-america", logo: <ClutchLogo />, stars: <PlatformStars color="text-[#ff3d2e]" /> },
  { name: "GoodFirms", score: "4.8", href: "https://www.goodfirms.co/company/logo-america", logo: <GoodFirmsLogo />, stars: <PlatformStars color="text-[#ffb400]" /> },
  // { name: "Google", score: "4.9", href: "https://www.google.com/search?q=logo+america+agency+reviews", logo: <GoogleG />, stars: <PlatformStars color="text-[#FBBC05]" /> },
];

function TrustBadges() {
  return (
    <div
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 p-6 md:p-8 pb-10 md:pb-14"
      aria-label="Trusted platform ratings"
    >
      <div className="flex flex-wrap items-center gap-3 md:gap-4" data-fade-up>
        {TRUST_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${platform.name} — ${platform.score} out of 5`}
            className="group flex items-center gap-2.5 px-5 py-4 rounded-lg bg-midnight/60 border border-hairline/50 backdrop-blur-sm transition-all duration-400 hover:border-hairline hover:bg-midnight/80"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center">{platform.logo}</span>
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="font-display text-xs font-black text-moonlight">{platform.name}</span>
              <div className="flex items-baseline gap-1">
                {platform.stars}
              </div>
            </div>
            <div className="sm:hidden flex items-center gap-1.5">
              <span className="font-display text-sm font-black tabular-nums text-moonlight">{platform.score}</span>
              {platform.stars}
            </div>
          </a>
        ))}
      </div>
     
    </div>
  );
}

type Streak = {
  x: number;
  y: number;
  len: number;
  speed: number;
  width: number;
  hue: string;
  alpha: number;
};

const COLORS = ["#ff4030", "#eef2f6", "#f5b700", "#4a72ff"];
const PICK = () => {
  const r = Math.random();
  if (r < 0.42) return COLORS[1];
  if (r < 0.72) return COLORS[0];
  if (r < 0.88) return COLORS[2];
  return COLORS[3];
};

function initStreaks(w: number, h: number): Streak[] {
  const count = Math.min(46, Math.floor(w / 28));
  return Array.from({ length: count }, (_, i) => {
    const depth = i / count;
    return {
      x: Math.random() * w,
      y: h * (0.18 + depth * 0.82),
      len: 40 + depth * 260 + Math.random() * 120,
      speed: 2 + depth * 9,
      width: 0.6 + depth * 2.6,
      hue: PICK(),
      alpha: 0.08 + depth * 0.3,
    };
  });
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* ── Canvas: long-exposure highway light streaks ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let streaks: Streak[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      streaks = initStreaks(w, h);
    };

    const paint = () => {
      ctx.clearRect(0, 0, w, h);
      const glow = ctx.createRadialGradient(w * 0.5, h * 0.32, 0, w * 0.5, h * 0.32, h * 0.7);
      glow.addColorStop(0, "rgba(74,114,255,0.10)");
      glow.addColorStop(0.55, "rgba(74,114,255,0.03)");
      glow.addColorStop(1, "rgba(74,114,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    };

    const drawStatic = () => {
      resize();
      paint();
      ctx.globalCompositeOperation = "lighter";
      for (const s of streaks) {
        ctx.globalAlpha = s.alpha * 0.8;
        ctx.fillStyle = s.hue;
        ctx.fillRect(s.x, s.y, s.len * 0.35, s.width);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const tick = () => {
      paint();
      ctx.globalCompositeOperation = "lighter";
      for (const s of streaks) {
        s.x -= s.speed;
        if (s.x + s.len < 0) {
          s.x = w + Math.random() * 200;
          s.y = h * (0.18 + Math.pow(Math.random(), 0.8) * 0.82);
          s.hue = PICK();
        }
        const grad = ctx.createLinearGradient(s.x + s.len, s.y, s.x, s.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.75, s.hue);
        grad.addColorStop(1, s.hue);
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(s.x, s.y, s.len, s.width, s.width / 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!reduce && !raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(tick);
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  /* ── Intro timeline + scroll parallax ── */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const lines = root.querySelectorAll("[data-line-inner]");
      const fadeUps = root.querySelectorAll("[data-fade-up]");

      if (!reduce) {
        gsap.set(lines, { yPercent: 115 });
        gsap.set(fadeUps, { y: 26, opacity: 0 });
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.to(lines, { yPercent: 0, duration: 1.2, stagger: 0.1 }, 0.2).to(
          fadeUps,
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          0.6
        );

        // Scroll parallax — headline drifts up & fades, canvas lags behind
        gsap.to(contentRef.current, {
          yPercent: -16,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(canvasRef.current, {
          yPercent: 14,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const word = (text: string, style?: string) => (
    <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
      <span data-line-inner className={`inline-block will-change-transform ${style ?? ""}`}>
        {text}
      </span>
    </span>
  );

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[90svh] mt-[140px] sm:mt-0 sm:min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full will-change-transform"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0a1220_92%)]"
      />

      <div ref={contentRef} className="shell relative z-10 flex flex-col gap-6 pb-5 pt-30 sm:gap-8 sm:pt-30 sm:pb-5 safe-area-top">
        <p data-fade-up className="eyebrow hidden sm:block">
          Premium brand identity studio · Est. 2015
        </p>

        <h1 className="display-xl max-w-[16ch]">
          {word("Logo Design ")}
          <br />
          {word("Agency", "serif-accent !normal-case text-taillight")}{" "}
          {word("Built for", "text-outline")} {word("Growth.")}
        </h1>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p data-fade-up className="max-w-md text-lg leading-relaxed text-asphalt md:text-xl">
          Logo America crafts distinctive logos and complete brand systems for companies ready to stand out. From funded startups to established enterprises, we deliver identity work that drives recognition, trust, and measurable business results.
          </p>

          <div data-fade-up className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Magnetic>
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
              Get My Free Logo Quote
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#work" className="btn btn-ghost w-full sm:w-auto">
              View Our Work
              </a>
            </Magnetic>
          </div>
        </div>

        {/* <div
          data-fade-up
          className="flex items-center justify-between border-t border-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-centerline" />
            Scroll · Mile 0000
          </span>
          <span className="hidden sm:block">140+ marks in the wild</span>
          <span>40.71° N, 74.00° W</span>
        </div> */}
      </div>

      <TrustBadges />
    </section>
  );
}