"use client";

import { useEffect, useRef } from "react";

export default function HeroSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const heroEl = canvas.closest(".hero");
    let flakes: Array<{
      x: number; y: number; r: number; speedY: number;
      speedX: number; drift: number; driftSpeed: number; opacity: number;
    }> = [];
    let w = 0, h = 0;
    let rafId: number | null = null;

    function makeFlakes() {
      const count = Math.max(40, Math.min(90, Math.floor((w * h) / 16000)));
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.6,
        speedY: Math.random() * 0.6 + 0.25,
        speedX: Math.random() * 0.4 - 0.2,
        drift: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.015 + 0.005,
        opacity: Math.random() * 0.5 + 0.35
      }));
    }

    function resize() {
      const c = canvas!;
      const c2 = ctx!;
      w = c.clientWidth;
      h = c.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = w * dpr;
      c.height = h * dpr;
      c2.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeFlakes();
    }

    function tick() {
      const c2 = ctx!;
      c2.clearRect(0, 0, w, h);
      c2.fillStyle = "#ffffff";
      flakes.forEach(f => {
        f.drift += f.driftSpeed;
        f.y += f.speedY;
        f.x += f.speedX + Math.sin(f.drift) * 0.3;
        if (f.y > h + 4) { f.y = -4; f.x = Math.random() * w; }
        if (f.x > w + 4) f.x = -4;
        if (f.x < -4) f.x = w + 4;
        c2.globalAlpha = f.opacity;
        c2.beginPath();
        c2.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        c2.fill();
      });
      c2.globalAlpha = 1;
      rafId = requestAnimationFrame(tick);
    }

    const resizeObserver = new ResizeObserver(() => resize());
    if (heroEl) resizeObserver.observe(heroEl);
    window.addEventListener("resize", resize);
    resize();
    tick();

    const visObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { if (!rafId) tick(); }
        else { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }
      });
    }, { threshold: 0 });
    if (heroEl) visObserver.observe(heroEl);

    return () => {
      resizeObserver.disconnect();
      visObserver.disconnect();
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-snow" aria-hidden="true" />;
}
