"use client";

import { useEffect, useRef, useState } from "react";
import HeroSnow from "./HeroSnow";

export default function Hero() {
  const markStageRef = useRef<HTMLDivElement>(null);
  const markGlassRef = useRef<HTMLDivElement>(null);
  const [isTilting, setIsTilting] = useState(false);
  const [constructionActive, setConstructionActive] = useState(false);

  useEffect(() => {
    const markStage = markStageRef.current;
    const markGlass = markGlassRef.current;
    if (!markStage || !markGlass) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer:fine)").matches;
    if (prefersReduced || !hasFinePointer) return;

    let rafId: number | null = null;

    function onMouseMove(e: MouseEvent) {
      const rect = markStage!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotY = (px - 0.5) * 22;
      const rotX = (0.5 - py) * 22;
      setIsTilting(true);
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        markGlass!.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
      });
    }

    function onMouseLeave() {
      setIsTilting(false);
      markGlass!.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    }

    markStage!.addEventListener("mousemove", onMouseMove);
    markStage!.addEventListener("mouseleave", onMouseLeave);

    return () => {
      markStage!.removeEventListener("mousemove", onMouseMove);
      markStage!.removeEventListener("mouseleave", onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero boxed dark-section" style={{ backgroundImage: "linear-gradient(155deg, #13315C 0%, #134074 55%, #0B2545 130%)", paddingTop: 56 }}>
      <div className="aurora"><span className="a1"></span><span className="a2"></span><span className="a3"></span></div>
      <HeroSnow />
      <div className="wrap">
        <div className="hero-badge reveal">
          <span className="hero-badge-dot"></span> LogoAmerica — serving businesses across the United States for over a decade
        </div>
        <div className="hero-kicker">
          <span className="hero-kicker-num">01</span>
          <span className="hero-kicker-line"></span>
          <span>Logo &amp; Identity Studio — Est. for brands that intend to last</span>
        </div>
      </div>
      <div className="wrap hero-grid">
        <div>
          <h1 className="hero-fade" style={{ animationDelay: ".05s" }}>Logo &amp; design identity<br />agency helping brands<br />become <em>top 1%.</em></h1>
          <p className="sub hero-fade" style={{ animationDelay: ".22s" }}>We design marks for brands with ambition — considered, original, and built to hold their shape for decades, not seasons.</p>
          <div className="hero-actions hero-fade" style={{ animationDelay: ".36s" }}>
            <a href="#contact" className="btn btn-primary">Begin Your Identity
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#portfolio" className="hero-link">View Selected Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M9 7h8v8" /></svg>
            </a>
          </div>
        </div>
        <div>
          <div
            ref={markStageRef}
            className={`mark-stage hero-fade ${isTilting ? "tilting" : ""} ${constructionActive ? "active" : ""}`}
            style={{ animationDelay: ".5s" }}
          >
            <div className="orbit-glow"></div>
            <div className="orbit-ring ring-outer"></div>
            <div className="orbit-ring ring-outer-dash"></div>
            <div className="orbit o1"><div className="chip c1"><span className="chip-inner chip-a"></span></div></div>
            <div className="orbit o2"><div className="chip c2"><span className="chip-inner chip-b"></span></div></div>
            <div className="orbit o3"><div className="chip c3"><span className="chip-inner chip-c"></span></div></div>

            <div className="mark-ring-decor">
              <svg viewBox="0 0 520 520" fill="none">
                <circle cx="260" cy="260" r="196" stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="1" />
                <circle cx="260" cy="260" r="196" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="1 9" />
              </svg>
            </div>

            <div ref={markGlassRef} className="mark-glass">
              <div className="mark-rotator">
                <svg viewBox="0 0 400 400" fill="none">
                  <defs>
                    <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#134074" />
                      <stop offset="100%" stopColor="#8DA9C4" />
                    </linearGradient>
                    <linearGradient id="hg2" x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8DA9C4" />
                      <stop offset="100%" stopColor="#134074" />
                    </linearGradient>
                    <linearGradient id="hg3" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0B2545" />
                      <stop offset="100%" stopColor="#8DA9C4" />
                    </linearGradient>
                  </defs>
                  <path d="M200 17L299.6 74.5L299.6 189.5L200 247L100.4 189.5L100.4 74.5Z" fill="url(#hg1)" />
                  <path d="M258.9 119L358.5 176.5L358.5 291.5L258.9 349L159.3 291.5L159.3 176.5Z" fill="url(#hg2)" />
                  <path d="M141.1 119L240.7 176.5L240.7 291.5L141.1 349L41.5 291.5L41.5 176.5Z" fill="url(#hg3)" />
                  <path d="M200 152L241.6 176L241.6 224L200 248L158.4 224L158.4 176Z" fill="#0B2545" />
                </svg>
              </div>

              <div className="mark-construction">
                <svg viewBox="0 0 400 400" fill="none">
                  <circle className="mc-dash" cx="200" cy="200" r="183" />
                  <circle className="mc-dash" cx="200" cy="200" r="113" />
                  <line className="mc-line" x1="200" y1="8" x2="200" y2="392" />
                  <line className="mc-line" x1="8" y1="200" x2="392" y2="200" />
                  <line className="mc-dash" x1="41" y1="74" x2="359" y2="326" />
                  <line className="mc-dash" x1="359" y1="74" x2="41" y2="326" />
                  <polygon className="mc-line" points="200,17 299.6,74.5 299.6,189.5 200,247 100.4,189.5 100.4,74.5" fill="none" />
                  <polygon className="mc-line" points="200,152 241.6,176 241.6,224 200,248 158.4,224 158.4,176" fill="none" />
                  <g className="mc-dot">
                    <circle cx="200" cy="17" r="3.5" />
                    <circle cx="299.6" cy="74.5" r="3.5" />
                    <circle cx="299.6" cy="189.5" r="3.5" />
                    <circle cx="200" cy="247" r="3.5" />
                    <circle cx="100.4" cy="189.5" r="3.5" />
                    <circle cx="100.4" cy="74.5" r="3.5" />
                    <circle cx="200" cy="200" r="2.5" />
                  </g>
                  <text className="mc-label" x="212" y="30">R 183</text>
                  <text className="mc-label" x="14" y="196">8PT GRID</text>
                  <text className="mc-label" x="200" y="270" textAnchor="middle">ANCHOR · 6 PTS</text>
                </svg>
              </div>
            </div>

            <button
              className="construction-toggle"
              type="button"
              aria-pressed={constructionActive}
              onClick={() => setConstructionActive(!constructionActive)}
            >
              <span className="dot"></span> North America
            </button>
            <div className="orbit-caption">FIG. 01 — BRAND MARK IN MOTION</div>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="boxed-divider"></div>
        <div className="boxed-footbar">
          <div className="boxed-footbar-left">
            <div className="boxed-footbar-icon">&#10022;</div>
            <p>2,400+ identities designed<br />a 4.9/5 average across every engagement</p>
          </div>
          <a href="#contact" className="hero-link hero-link-light">Book a Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
