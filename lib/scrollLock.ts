"use client";

type LenisLike = { stop: () => void; start: () => void };

function getLenis(): LenisLike | null {
  if (typeof window === "undefined") return null;
  return (window as unknown as { __lenis?: LenisLike | null }).__lenis ?? null;
}

let locks = 0;
let savedHtmlOverflow = "";
let savedBodyOverflow = "";
let savedBodyPaddingRight = "";

export function lockScroll() {
  if (typeof document === "undefined") return;
  locks += 1;
  if (locks > 1) return;

  const html = document.documentElement;
  const body = document.body;
  savedHtmlOverflow = html.style.overflow;
  savedBodyOverflow = body.style.overflow;
  savedBodyPaddingRight = body.style.paddingRight;

  const scrollbarWidth = window.innerWidth - html.clientWidth;
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  // Compensate for the vanished scrollbar so the page doesn't jump sideways
  if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

  getLenis()?.stop();
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  locks = Math.max(0, locks - 1);
  if (locks > 0) return;

  document.documentElement.style.overflow = savedHtmlOverflow;
  document.body.style.overflow = savedBodyOverflow;
  document.body.style.paddingRight = savedBodyPaddingRight;

  getLenis()?.start();
}
