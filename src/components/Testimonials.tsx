"use client";

import { useState, useEffect, useRef } from "react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [testiIndex, setTestiIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function updateTesti() {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const perView = window.innerWidth <= 900 ? 1 : 3;
    const max = testimonials.length - perView;
    const idx = Math.max(0, Math.min(testiIndex, max));
    const cardWidth = (track.children[0] as HTMLElement).offsetWidth + 24;
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
  }

  useEffect(() => {
    updateTesti();
    window.addEventListener("resize", updateTesti);
    return () => window.removeEventListener("resize", updateTesti);
  }, [testiIndex]);

  useEffect(() => {
    const timer = setTimeout(updateTesti, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section dark-section boxed" id="testimonials" style={{ backgroundImage: "linear-gradient(160deg, rgba(11,37,69,0.9) 0%, rgba(11,37,69,0.82) 55%, rgba(4,14,28,0.94) 100%)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="aurora"><span className="a1"></span><span className="a2"></span><span className="a3"></span></div>
      <div className="wrap">
        <div className="section-head center" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="eyebrow">Client Feedback</div>
          <h2>What clients say</h2>
        </div>
        <div className="testi-track-wrap">
          <div ref={trackRef} className="testi-track">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg>
                  ))}
                </div>
                <p className="testi-quote">&quot;{t.q}&quot;</p>
                <div className="testi-meta">
                  <div className="testi-initials">{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-industry">{t.ind}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-nav">
          <button onClick={() => setTestiIndex(prev => prev - 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button onClick={() => setTestiIndex(prev => prev + 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
