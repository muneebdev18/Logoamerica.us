"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import SmoothScroll from "./SmoothScroll";
import Nav from "./Nav";
import RouteRail from "./RouteRail";
import Cursor from "./Cursor";
import Footer from "./Footer";
import LeadModal from "./LeadModal";

/**
 * Shared chrome for every top-level route: smooth scrolling, navigation,
 * the mile-marker rail, custom cursor, footer and lead modal — plus a
 * gentle page-entry transition so navigation feels continuous.
 */
export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(main, {
        y: 26,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "all",
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <RouteRail />
      <main id="top" ref={mainRef} className="min-h-screen overflow-x-clip">
        {children}
      </main>
      <Footer />
      <LeadModal />
    </SmoothScroll>
  );
}
