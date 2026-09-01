"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LEAD_SERVICES } from "@/lib/data";
import { LEAD_MODAL_EVENT } from "@/lib/leadModal";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";


const SESSION_KEY = "wa_lead_modal_shown";
const AUTO_OPEN_DELAY = 6500;

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  details: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function elapsedSince(start: number) {
  return Date.now() - start;
}

export default function LeadModal() {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const startedAt = useRef(0);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = useCallback((service = "") => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    startedAt.current = Date.now();
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
    if (service) setFields((f) => ({ ...f, service }));
    setStatus("idle");
    setErrorMsg("");
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    lastFocused.current?.focus?.();
  }, []);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {}
    if (!shown) {
      const t = setTimeout(() => open(), AUTO_OPEN_DELAY);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const service = (e as CustomEvent<{ service?: string }>).detail?.service ?? "";
      open(service);
    };
    window.addEventListener(LEAD_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(LEAD_MODAL_EVENT, onOpen);
  }, [open]);

  useEffect(() => {
    if (!visible) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const focusTimer = setTimeout(() => nameRef.current?.focus(), 350);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
      clearTimeout(focusTimer);
    };
  }, [visible, close]);

  const set = (key: keyof typeof INITIAL, value: string) =>
    setFields((f) => ({ ...f, [key]: value }));

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    if (fields.name.trim().length < 2) return fail("Please tell us your full name.");
    if (!EMAIL_RE.test(fields.email.trim()))
      return fail("That email address doesn't look right — mind checking it?");
    if (fields.phone.replace(/\D/g, "").length < 7)
      return fail("Please enter a valid phone number so we can reach you.");
    if (!fields.service) return fail("Please pick the service you're interested in.");
    if (fields.details.trim().length < 10)
      return fail("Tell us a little more about the project — at least a sentence.");

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          companyWebsite: (e.currentTarget.elements.namedItem("companyWebsite") as HTMLInputElement)?.value ?? "",
          elapsed: elapsedSince(startedAt.current),
          source: "lead-modal",
          page: window.location.pathname,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong — please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong — please try again.");
    }
  }

  function fail(message: string) {
    setStatus("error");
    setErrorMsg(message);
  }

  const label = "flex flex-col gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-moonlight/65";

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6 pb-safe">
          <motion.button
            type="button"
            aria-label="Close dialog"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 cursor-default bg-midnight/85 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={{ opacity: 0, y: 56, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border-glow w-[40%] relative max-h-[92dvh] overflow-x-hidden overflow-y-auto overscroll-contain rounded-t-[1.5rem] bg-gradient-to-b from-panel-2/95 via-panel to-midnight shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9)] sm:max-h-[88dvh] sm:rounded-[1.5rem]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute -right-12 -top-16 h-36 w-36 rounded-full bg-taillight/[0.12] blur-[70px]" />
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-midnight/60 text-asphalt backdrop-blur transition-all duration-300 hover:rotate-90 hover:border-taillight hover:text-moonlight"
            >
              <svg viewBox="0 0 14 14" className="h-2.5 w-2.5" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 px-6 py-10 text-center">
                <motion.span
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-centerline/60 text-2xl text-centerline shadow-[0_0_40px_rgba(245,183,0,0.25)]"
                >
                  ✓
                </motion.span>
                <h3 className="display-md text-xl">
                  Brief received<span className="text-taillight">.</span>
                </h3>
                <p className="max-w-xs text-[13px] leading-relaxed text-asphalt">
                  Thanks, {fields.name.split(" ")[0] || "friend"} — your request is on our
                  desk. A senior partner will reach you within one business day.
                </p>
                <button type="button" onClick={close} className="btn btn-ghost py-3">
                  Back to the site
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5 px-6 py-5">
                <div className="flex flex-col gap-1.5">
                  <p className="eyebrow text-[0.7rem]">
                    <img src="/logo-hz.png" alt="" className="h-4 w-4 object-contain" />
                    Free strategy call
                  </p>
                  <h3 id="lead-modal-title" className="display-md text-lg md:text-xl">
                    Start your mark<span className="text-taillight">.</span>
                  </h3>
                  <p className="text-[13px] leading-relaxed text-asphalt">
                    Tell us where your brand is headed — a senior partner replies
                    within one business day.
                  </p>
                </div>

                <form onSubmit={submit} noValidate className="flex flex-col gap-3.5">
                  <input
                    type="text"
                    name="companyWebsite"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className={label}>
                      Full Name *
                      <input
                        ref={nameRef}
                        name="name"
                        autoComplete="name"
                        placeholder="Daisy Miller"
                        className="field field-sm min-h-[44px]"
                        value={fields.name}
                        onChange={(e) => set("name", e.target.value)}
                      />
                    </label>
                    <label className={label}>
                      Phone *
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="(212) 555-0148"
                        className="field field-sm min-w-0 min-h-[44px]"
                        value={fields.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className={label}>
                      Email *
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="daisy@company.com"
                        className="field field-sm min-w-0 min-h-[44px]"
                        value={fields.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                    </label>
                    <label className={label}>
                      Company / Business
                      <input
                        name="company"
                        autoComplete="organization"
                        placeholder="Hartfield & Co."
                        className="field field-sm min-w-0 min-h-[44px]"
                        value={fields.company}
                        onChange={(e) => set("company", e.target.value)}
                      />
                    </label>
                  </div>

                  <label className={label}>
                    Service Required *
                    <span className="relative block">
                      <select
                        name="service"
                        className="field field-sm appearance-none pr-10 [&_option]:bg-midnight min-h-[44px]"
                        value={fields.service}
                        onChange={(e) => set("service", e.target.value)}
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {LEAD_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 12 8"
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3.5 top-1/2 h-2 w-3 -translate-y-1/2 text-asphalt"
                      >
                        <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </label>

                  <label className={label}>
                    Project Details *
                    <textarea
                      name="details"
                      rows={3}
                      placeholder="We're rebranding this spring and need a mark that works from app icon to billboard…"
                      className="field field-sm resize-none min-h-[44px]"
                      value={fields.details}
                      onChange={(e) => set("details", e.target.value)}
                    />
                  </label>

                  <AnimatePresence>
                    {status === "error" && errorMsg && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 rounded-xl border border-taillight/40 bg-taillight/10 px-4 py-2.5 text-xs text-tailglow"
                        role="alert"
                      >
                        <span aria-hidden="true">⚠</span>
                        {errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

<button
                      type="submit"
                      disabled={status === "sending"}
                      className={`btn btn-primary w-full py-3.5 ${status === "sending" ? "cursor-wait opacity-70" : ""}`}
                    >
                    {status === "sending" ? "Sending…" : "Request a free quote"}
                    <span aria-hidden="true">→</span>
                  </button>

                  <p className="text-center text-[10px] leading-relaxed text-asphalt/70">
                    No spam, no cold calls — just a reply from a partner within one
                    business day.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
