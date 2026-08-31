"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import RouteRail from "@/components/RouteRail";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(main, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: main, start: "top 90%", once: true },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <RouteRail />
      <Cursor />
      <main ref={mainRef} className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}