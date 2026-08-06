"use client";

import { useEffect, useRef } from "react";

export default function Stats() {
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const counters = countersRef.current;

    function animateCounter(el: HTMLSpanElement) {
      const target = parseFloat(el.dataset.target || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1700;
      const start = performance.now();

      function tick(now: number) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
        if (p < 1) { requestAnimationFrame(tick); }
        else { el.textContent = target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix; }
      }
      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !(entry.target as HTMLElement).dataset.done) {
          (entry.target as HTMLElement).dataset.done = "1";
          animateCounter(entry.target as HTMLSpanElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => { if (c) observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" style={{ padding: "60px 0" }}>
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">
              <span
                ref={el => { if (el) countersRef.current[0] = el; }}
                className="counter"
                data-target="2400"
                data-suffix="+"
              >0</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-label">Logos delivered<br />across every industry</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">
              <span
                ref={el => { if (el) countersRef.current[1] = el; }}
                className="counter"
                data-target="500"
                data-suffix="+"
              >0</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-label">Brands launched<br />with a complete identity</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">
              <span
                ref={el => { if (el) countersRef.current[2] = el; }}
                className="counter"
                data-target="4.9"
                data-decimals="1"
                data-suffix="/5"
              >0</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-label">Average client rating<br />across 800+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
