"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  BUDGETS,
  SERVICE_OPTIONS,
  TIMELINES,
  slide,
  slideTransition,
  useFormState,
} from "./formState";

export default function ContactForm() {
  const form = useFormState();
  const { step, dir, fields, error, sent, sending, armed } = form;

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full min-h-[480px] flex-col items-center justify-center gap-6 rounded-[1.75rem] border border-moonlight/[0.09] bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-white/[0.015] p-10 text-center shadow-[0_44px_100px_-56px_rgba(4,8,18,0.9)] backdrop-blur-md"
        role="status"
      >
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-centerline/60 text-3xl text-centerline shadow-[0_0_40px_rgba(245,183,0,0.25)]"
        >
          ✓
        </motion.span>
        <h3 className="display-md text-3xl">
          Mark received<span className="text-taillight">.</span>
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-asphalt">
          Thanks, {fields.name.split(" ")[0] || "friend"} — your brief is on our
          desk. A senior partner replies within one business day.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/70">
          {form.summary}
        </p>
        <button type="button" onClick={form.reset} className="btn btn-ghost !py-3">
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (step !== 2 || !armed || sending) return;
        const honeypot =
          (e.currentTarget.elements.namedItem("companyWebsite") as HTMLInputElement)?.value ?? "";
        void form.submit(honeypot);
      }}
      className="relative flex flex-col gap-6 sm:gap-7 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] border border-moonlight/[0.09] bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-white/[0.015] p-5 sm:p-6 md:p-8 shadow-[0_44px_100px_-56px_rgba(4,8,18,0.9)] backdrop-blur-md transition-colors duration-500 hover:border-moonlight/[0.14]"
      noValidate
    >
      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      {/* Step indicator */}
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          {["About you", "The mark", "Investment"].map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => i < step && form.goto(i)}
              className={`flex items-center gap-2 sm:gap-2.5 font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                i === step
                  ? "text-moonlight"
                  : i < step
                    ? "text-centerline"
                    : "text-asphalt/45"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-[9px] transition-all duration-300 ${
                  i === step
                    ? "border-taillight bg-taillight/15 text-moonlight shadow-[0_0_16px_-4px_rgba(255,64,48,0.5)]"
                    : i < step
                      ? "border-centerline/60 text-centerline"
                      : "border-asphalt/25"
                }`}
              >
                {i < step ? "✓" : `0${i + 1}`}
              </span>
              <span className="hidden xs:inline sm:inline">{label}</span>
            </button>
          ))}
        </div>
        <div className="h-0.5 w-full overflow-hidden rounded bg-white/[0.08]">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-taillight to-centerline"
            initial={false}
            animate={{ scaleX: (step + 1) / 3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="relative min-h-[360px] sm:min-h-[340px]">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          {step === 0 && (
            <motion.div
              key="step-0"
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0 flex flex-col gap-5"
            >
              <p className="text-[15px] leading-relaxed text-asphalt/90">
                First, who&rsquo;s asking — so we know who we&rsquo;re talking to.
              </p>
<label className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                  Name
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Daisy Miller"
                    className="field min-h-[44px]"
                    value={fields.name}
                    onChange={(e) => form.set("name", e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                  Work email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="daisy@company.com"
                    className="field min-h-[44px]"
                    value={fields.email}
                    onChange={(e) => form.set("email", e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                  Phone{" "}
                  {/* <span className="normal-case tracking-normal text-asphalt/50">(optional)</span> */}
                  <input
                    name="company"
                    placeholder="123 213 1234."
                    className="field min-h-[44px]"
                    value={fields.company}
                    onChange={(e) => form.set("company", e.target.value)}
                    type="number"
                  />
                </label>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0 flex flex-col gap-5"
            >
              <p className="text-[15px] leading-relaxed text-asphalt/90">
                What are we drawing? Pick everything that applies.
              </p>
              <fieldset>
                <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                  Services
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICE_OPTIONS.map((s) => {
                    const active = fields.services.includes(s);
                    return (
                      <motion.button
                        key={s}
                        type="button"
                        whileTap={{ scale: 0.94 }}
                        onClick={() => form.toggleService(s)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 min-h-[44px] ${
                          active
                            ? "border-taillight bg-taillight/15 text-moonlight shadow-[0_0_20px_-6px_rgba(255,64,48,0.6)]"
                            : "border-asphalt/20 bg-white/[0.03] text-asphalt hover:border-asphalt/45 hover:bg-white/[0.06] hover:text-moonlight"
                        }`}
                      >
                        {s}
                      </motion.button>
                    );
                  })}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                  Timeline
                </legend>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => form.set("timeline", t)}
                      aria-pressed={fields.timeline === t}
                      className={`rounded-xl border px-3 py-3.5 font-mono text-[10px] font-semibold uppercase tracking-wide transition-all duration-300 min-h-[44px] ${
                        fields.timeline === t
                          ? "border-interstate bg-interstate/15 text-moonlight shadow-[0_0_20px_-8px_rgba(74,114,255,0.7)]"
                          : "border-asphalt/20 bg-white/[0.03] text-asphalt hover:border-asphalt/45 hover:bg-white/[0.06] hover:text-moonlight"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                Tell us more
                <textarea
                  name="message"
                  rows={3}
                  placeholder="We're rebranding in the spring and need…"
                  className="field resize-none min-h-[44px]"
                  value={fields.message}
                  onChange={(e) => form.set("message", e.target.value)}
                />
              </label>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0 flex flex-col gap-5"
            >
              <p className="text-[15px] leading-relaxed text-asphalt/90">
                Last stop — a rough budget keeps everyone honest.
              </p>
              <fieldset>
                <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-moonlight/65">
                  Budget range
                </legend>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {BUDGETS.map((b) => (
                    <motion.button
                      key={b}
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => form.set("budget", b)}
                      aria-pressed={fields.budget === b}
                      className={`rounded-xl border px-3 py-4 font-mono text-[10px] font-semibold uppercase tracking-wide transition-all duration-300 min-h-[44px] ${
                        fields.budget === b
                          ? "border-taillight bg-taillight/15 text-moonlight shadow-[0_0_20px_-6px_rgba(255,64,48,0.6)]"
                          : "border-asphalt/20 bg-white/[0.03] text-asphalt hover:border-asphalt/45 hover:bg-white/[0.06] hover:text-moonlight"
                      }`}
                    >
                      {b}
                    </motion.button>
                  ))}
                </div>
              </fieldset>
              <div className="rounded-2xl border border-asphalt/[0.14] bg-white/[0.04] p-4">
                <p className="mb-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-moonlight/55">
                  Your brief so far
                </p>
                <p className="text-xs leading-relaxed text-moonlight/85">
                  {fields.name || "—"} · {fields.email || "—"}
                  <br />
                  {form.summary}
                </p>
              </div>
              <p className="text-[11px] leading-relaxed text-asphalt/70">
                No newsletters, no drip campaigns — just a reply from a partner
                within one business day.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error + navigation */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-xl border border-taillight/40 bg-taillight/10 px-4 py-2.5 text-xs text-tailglow"
            role="alert"
          >
            <span aria-hidden="true">⚠</span>
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={form.back}
          className={`btn btn-ghost !py-4 !px-4 sm:!px-5 ${step === 0 ? "pointer-events-none opacity-0" : ""}`}
        >
          ← Back
        </button>
        {step < 2 ? (
          <button type="button" onClick={form.next} className="btn btn-primary !py-4">
            Continue
            <span aria-hidden="true">→</span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={!armed || sending}
            className={`btn btn-primary !py-4 ${armed && !sending ? "" : "cursor-wait opacity-60"}`}
          >
            {sending ? "Sending…" : "Send it down the road"}
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </form>
  );
}
