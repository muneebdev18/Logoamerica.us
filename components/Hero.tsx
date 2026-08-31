"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";

const Star = ({ className = "", fill = "currentColor", stroke, strokeWidth }: { className?: string; fill?: string; stroke?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 1.8l3.02 6.36 6.98.88-5.14 4.83 1.32 6.93L12 17.4l-6.18 3.4 1.32-6.93L2 9.04l6.98-.88z" fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
  </svg>
);

const TRUST_PLATFORMS = [
  { 
    name: "Trustpilot", 
    score: "5.0", 
    href: "https://www.trustpilot.com/review/logoamerica.agency", 
    logoSrc: "/Trustpilot.png",
    color: "#00b67a" 
  },
  { 
    name: "Clutch", 
    score: "4.9", 
    href: "https://clutch.co/profile/logo-america", 
    logoSrc: "/Clutch.png",
    color: "#ff3d2e" 
  },
];

function TrustBadges() {
  return (
    <div className="relative z-10" data-fade-up>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 sm:pb-8">
        {/* <span className=" font-mono text-[11px] uppercase tracking-[0.3em] text-centerline shrink-0 self-center sm:self-start">
          Trusted by
        </span> */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5" role="list" aria-label="Platform ratings">
          {TRUST_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${platform.name} — ${platform.score} out of 5 stars`}
              className="group flex items-center gap-2.5 shrink-0 rounded-xl bg-midnight/50 border border-hairline/40 px-3 py-2.5 sm:px-4 sm:py-3 transition-all duration-300 hover:border-hairline hover:bg-midnight/70 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taillight"
            >
              <img
                src={platform.logoSrc}
                alt=""
                className="h-[50px] w-auto  "
                loading="lazy"
              />
              <div className="hidden sm:flex flex-col items-start leading-[1.1]">
                <span className="font-display text-[17px] font-medium text-moonlight">{platform.name}</span>
                <div className="flex items-center gap-0.5">
                  <span className="font-display text-[15px] font-black tabular-nums text-moonlight">{platform.score}</span>
                  <span className="flex items-center gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3"
                        fill={i < Math.floor(Number(platform.score)) ? platform.color : "transparent"}
                        stroke={i < Math.floor(Number(platform.score)) ? "none" : platform.color}
                        strokeWidth={1.5}
                      />
                    ))}
                  </span>
                </div>
              </div>
              <div className="sm:hidden flex items-center gap-1.5">
                <span className="font-display text-sm font-black tabular-nums text-moonlight">{platform.score}</span>
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-12 w-12"
                      fill={i < Math.floor(Number(platform.score)) ? platform.color : "transparent"}
                      stroke={i < Math.floor(Number(platform.score)) ? "none" : platform.color}
                      strokeWidth={1.5}
                    />
                  ))}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-deep to-transparent pointer-events-none" aria-hidden="true" />
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
        <TrustBadges />

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

    </section>
  );
}