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
      {/* <div className="shell relative flex flex-col items-start justify-between gap-6 sm:gap-8 border-b border-hairline py-16 sm:py-20 md:py-28 lg:flex-row lg:items-center">
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
            Limited Q4 capacity · Reply in 1 business day
          </p>
        </div>
      </div> */}

      {/* Link grid */}
      <div className="shell grid gap-10 sm:gap-12 py-14 sm:py-16 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <a href="#top" className="flex w-fit items-center gap-3" aria-label="Logo America — back to top">
            <img src="/logo-hz.png" alt="Logo America" className="h-12 w-auto object-contain sm:h-16 md:h-20 lg:h-26.25" />
            
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-asphalt">
            The brand identity studio behind logos that work everywhere — from app icons to billboards, for the next twenty years.
          </p>
          <div className="flex flex-col gap-2 mt-4 font-mono text-[14px] font-bold text-asphalt">
            <a href="tel:+12819539004" className="flex items-center gap-2 transition-colors hover:text-centerline">
              <span aria-hidden="true">☎</span>
              <span>281 953 9004</span>
            </a>
            <span>New York, NY · Los Angeles, CA</span>
            <span>Mon–Fri · 9–6 ET / 9–6 PT</span>
          </div>
          <div className="max-w-xs">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt">
              Monthly insights — one email, no spam
            </p>
            {subscribed ? (
              <p className="flex items-center gap-2 text-sm text-centerline" role="status">
                ✓ You&rsquo;re subscribed.
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
          <h3 className="eyebrow mb-4 sm:mb-5">Quick Links</h3>
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

        <nav aria-label="Legal" className="sm:col-span-1 md:col-span-2">
          <h3 className="eyebrow mb-4 sm:mb-5">Legal</h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Refund Policy", href: "/refund-policy" },
              { label: "Terms & Conditions", href: "/terms-conditions" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-asphalt transition-colors hover:text-moonlight"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="sm:col-span-1 md:col-span-3">
          <h3 className="eyebrow mb-4 sm:mb-5">Services</h3>
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

        {/* <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-2">
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
         
        </div> */}
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

      {/* Payment methods */}
      <div className="shell flex flex-wrap items-center justify-center gap-3 py-6 border-t border-hairline">
        {[
          { label: "Visa", bg: "bg-white", content: <text x="20" y="17.5" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic" fontWeight="700" fontSize="11.5" letterSpacing="0.3" fill="#1A1F71">VISA</text> },
          { label: "Mastercard", bg: "bg-white", content: <><circle cx="17" cy="13" r="7.2" fill="#EB001B" /><circle cx="23" cy="13" r="7.2" fill="#F79E1B" /><path d="M20 7.3a7.2 7.2 0 0 1 0 11.4 7.2 7.2 0 0 1 0-11.4Z" fill="#FF5F00" /></> },
          { label: "American Express", bg: "bg-[#006FCF]", content: <text x="20" y="16.5" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.4" fill="#fff">AMEX</text> },
          { label: "PayPal", bg: "bg-white", content: <text x="21" y="17" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic" fontWeight="700" fontSize="10.5" fill="#003087">Pay<tspan fill="#009cde">Pal</tspan></text> },
          { label: "Stripe", bg: "bg-[#635BFF]", content: <text x="20" y="17" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontStyle="italic" fontSize="10.5" letterSpacing="0.2" fill="#fff">stripe</text> },
          { label: "Bank Transfer", bg: "bg-[#0F3D2E]", content: <><path d="M20 6L28 10.5H12L20 6Z" fill="#fff" /><rect x="13" y="12" width="2" height="7" fill="#fff" /><rect x="19" y="12" width="2" height="7" fill="#fff" /><rect x="25" y="12" width="2" height="7" fill="#fff" /><rect x="11" y="20" width="18" height="2" fill="#fff" /></> },
        ].map((method) => (
          <div key={method.label} className="group relative">
            <div className={`flex items-center gap-2 rounded-md ${method.bg} px-2 py-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-1`} aria-label={method.label}>
              <svg width="40" height="26" viewBox="0 0 40 26" role="img" aria-hidden="true">
                {method.content}
              </svg>
            </div>
            <span className="pointer-events-none absolute left-1/2 -top-9 -translate-x-1/2 whitespace-nowrap rounded-lg bg-panel-2 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-moonlight opacity-0 shadow-lg ring-1 ring-hairline transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-0 translate-y-1">
              {method.label}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 border-4 border-transparent border-t-panel-2" />
            </span>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="shell flex flex-col items-start justify-between gap-4 border-t border-hairline py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/70 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Logo America LLC. All rights reserved.</span>
        {/* <span aria-hidden="true" className="hidden lg:block">
          ─ ─ ─ ─ Mile 2,789 · You made it to LA ─ ─ ─ ─
        </span> */}
        <a href="#top" className="transition-colors hover:text-moonlight">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
