"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Magnetic from "./Magnetic";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(el, {
        yPercent: 55,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 96%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-deep">
      {/* CTA band */}
      <div className="shell relative flex flex-col items-start justify-between gap-6 sm:gap-8 border-b border-hairline py-16 sm:py-20 md:py-28 lg:flex-row lg:items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-full w-[420px] bg-taillight/[0.07] blur-[100px]"
        />
        <h2 className="display-lg relative max-w-[14ch]">
          Ready to be <em className="serif-accent text-taillight">remembered?</em>
        </h2>
        <div className="relative flex flex-col items-start gap-4">
          <Magnetic>
            <a href="#contact" className="btn btn-primary !px-9 !py-4">
              Start your mark <span aria-hidden="true">→</span>
            </a>
          </Magnetic>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt">
            Two Q4 slots left · Reply in 1 business day
          </p>
        </div>
      </div>

      {/* Link grid */}
      <div className="shell grid gap-10 sm:gap-12 py-14 sm:py-16 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <a href="#top" className="flex w-fit items-center gap-3" aria-label="Logo America — back to top">
            <img src="/logo-hz.png" alt="Logo America" className="h-12 w-auto object-contain sm:h-16 md:h-20 lg:h-26.25" />
            
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-asphalt">
            The brand identity studio behind marks that survive the app icon,
            the billboard, and the next twenty years.
          </p>
          <div className="max-w-xs">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt">
              Mile notes — one email, monthly
            </p>
            {subscribed ? (
              <p className="flex items-center gap-2 text-sm text-centerline" role="status">
                ✓ You&rsquo;re on the road.
              </p>
            ) : (
              <form
                className="flex overflow-hidden rounded-full border border-hairline bg-midnight/60 focus-within:border-interstate"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-transparent px-4 py-3 text-sm text-moonlight placeholder:text-asphalt/50 focus:outline-none sm:px-5 sm:py-3 min-h-[44px]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-taillight px-5 py-3 text-white transition-colors hover:bg-tailglow min-h-[44px]"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        <nav aria-label="Footer sitemap" className="sm:col-span-1 md:col-span-2">
          <h3 className="eyebrow mb-4 sm:mb-5">Exits</h3>
          <ul className="flex flex-col gap-3">
            {[...NAV_LINKS, { label: "Contact", href: "#contact", exit: "06" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-asphalt transition-colors hover:text-moonlight"
                >
                  {/* <span className="font-mono text-[9px] text-centerline/60">{link.exit}</span> */}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="sm:col-span-1 md:col-span-3">
          <h3 className="eyebrow mb-4 sm:mb-5">Lanes</h3>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((s) => (
              <li key={s.index}>
                <a href="#services" className="text-sm text-asphalt transition-colors hover:text-moonlight">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-2">
          <h3 className="eyebrow mb-4 sm:mb-5">Follow</h3>
          {["LinkedIn", "Instagram", "Dribbble", "Behance"].map((social) => (
            <a
              key={social}
              href="#top"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 text-sm text-asphalt transition-colors hover:text-moonlight"
            >
              {social}
              <span
                aria-hidden="true"
                className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              >
                ↗
              </span>
            </a>
          ))}
          {/* <a
            href={`mailto:${SITE.email}`}
            className="mt-3 break-all font-mono text-[11px] text-centerline transition-colors hover:text-tailglow"
          >
            {SITE.email}
          </a> */}
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="shell select-none">
        <div
          ref={wordmarkRef}
          aria-hidden="true"
          className="wordmark group cursor-default whitespace-nowrap text-center font-display text-[8vw] sm:text-[9.8vw] font-black uppercase leading-[0.85] tracking-[-0.02em]"
        >
          Logo<span className="text-taillight">·</span>America
        </div>
      </div>

      {/* Bottom bar */}
      <div className="shell flex flex-col items-start justify-between gap-4 border-t border-hairline py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/70 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Logo America LLC. All marks reserved.</span>
        {/* <span aria-hidden="true" className="hidden lg:block">
          ─ ─ ─ ─ Mile 2,789 · You made it to LA ─ ─ ─ ─
        </span> */}
        <a href="#top" className="transition-colors hover:text-moonlight">
          Back to mile 0 ↑
        </a>
      </div>
    </footer>
  );
}
