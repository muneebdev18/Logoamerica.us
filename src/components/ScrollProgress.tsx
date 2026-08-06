"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateScrollProgress() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      setWidth(pct);
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}
