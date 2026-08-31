"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Magnetic from "./Magnetic";
import { NAV_LINKS } from "@/lib/data";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import { Phone } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    lockScroll();
    return () => unlockScroll();
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-hairline bg-midnight/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between mt-8 sm:mt-2 md:h-20 pt-safe safe-area-top">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Logo America — back to top"
          >
            <img src="/logo-hz.png" alt="Logo America" className="h-20 w-auto object-contain sm:h-[100px]" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group font-bold text-[13px] uppercase tracking-[0.2em] text-asphalt transition-colors hover:text-moonlight"
              >
                {/* <span className="mr-1.5 text-centerline/70">{link.exit}</span> */}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+12819539004"
              className="hidden lg:flex items-center gap-2 font-mono text-[14px] text-asphalt transition-colors hover:text-centerline"
              aria-label="Call us"
            >
              <span aria-hidden="true">
                <Phone/>
              </span>
              <span>281 953 9004</span>
            </a>
            <Magnetic strength={0.25}>
              <a href="#contact" className="btn btn-primary hidden !py-3 !px-6 sm:inline-flex">
                Start your mark
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-moonlight lg:hidden"
            >
              <div className="flex w-4 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-midnight/97 px-6 pb-10 pt-32 backdrop-blur-2xl lg:hidden pb-safe"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-4 border-b border-hairline py-5"
                >
                  
                  <span className="font-display text-3xl font-black uppercase tracking-tight text-moonlight">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <a
                href="tel:+12819539004"
                className="flex items-center justify-center gap-2 font-mono text-[14px] text-asphalt transition-colors hover:text-centerline py-2"
                aria-label="Call us"
              >
                <span aria-hidden="true">☎</span>
                <span>281 953 9004</span>
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Start your mark →
              </a>
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-asphalt">
                Est. 2015 · Nationwide
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
