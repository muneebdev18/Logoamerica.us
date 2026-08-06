"use client";

import { useState } from "react";
import { categories, markSVG } from "@/data/content";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<{ cat: string; seed: number } | null>(null);

  const allItems = categories.flatMap((cat, ci) =>
    Array.from({ length: 4 }, (_, i) => ({ cat, seed: ci * 4 + i }))
  );

  const filteredItems = allItems.filter(it => it.cat === activeTab).slice(0, 8);

  function openLightbox(cat: string, seed: number) {
    setLightboxItem({ cat, seed });
    setLightboxOpen(true);
  }

  return (
    <>
      <section className="section" id="portfolio">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Selected Work</div>
            <h2>Recent logo designs</h2>
            <p>A cross-section of recent marks across industries and styles. Every design is built from scratch — no templates, no clip art.</p>
          </div>
          <div className="tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="gallery">
            {filteredItems.map(it => (
              <div
                key={it.seed}
                className="gallery-item"
                onClick={() => openLightbox(it.cat, it.seed)}
                dangerouslySetInnerHTML={{ __html: markSVG(it.seed, it.cat) }}
              />
            ))}
          </div>
        </div>
      </section>

      <div className={`lightbox ${lightboxOpen ? "open" : ""}`}>
        <div className="lightbox-box">
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          {lightboxItem && (
            <div dangerouslySetInnerHTML={{ __html: markSVG(lightboxItem.seed, lightboxItem.cat) }} />
          )}
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            {lightboxItem ? `${lightboxItem.cat} Mark` : ""}
          </div>
        </div>
      </div>
    </>
  );
}
