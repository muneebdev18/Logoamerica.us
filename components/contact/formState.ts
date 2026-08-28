"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const STEP_LABELS = ["About you", "The mark"] as const;

const SERVICE_OPTIONS = [
  "Logo design",
  "Identity system",
  "Rebrand",
  "Naming",
  "Motion logo",
  "Guidelines",
] as const;

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Flexible"] as const;

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"] as const;

export type Fields = {
  name: string;
  email: string;
  company: string;
  services: string[];
  timeline: string;
  message: string;
  budget: string;
};

export const INITIAL_FIELDS: Fields = {
  name: "",
  email: "",
  company: "",
  services: [],
  timeline: "1–3 months",
  message: "",
  budget: "$5k – $15k",
};

export const STEP_COUNT = 2;
export { STEP_LABELS, SERVICE_OPTIONS, TIMELINES };

export const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -48 }),
};

export const slideTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export function useFormState() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) =>
    setFields((f) => ({ ...f, [key]: value }));

  const toggleService = (s: string) =>
    set(
      "services",
      fields.services.includes(s)
        ? fields.services.filter((x) => x !== s)
        : [...fields.services, s]
    );

  const validateStep = (s: number): string => {
    if (s === 0) {
      if (!fields.name.trim()) return "We need a name to say hello to.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
        return "That email doesn't look quite right — one more check?";
    }
    if (s === 1 && fields.services.length === 0)
      return "Pick at least one lane — even a rough one.";
    return "";
  };

  // Submit arms shortly after a step change so a fast double-click on
  // "Continue" can never land on the submit button that replaces it.
  const [armed, setArmed] = useState(true);
  const armTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const disarmTemporarily = () => {
    setArmed(false);
    if (armTimer.current) clearTimeout(armTimer.current);
    armTimer.current = setTimeout(() => setArmed(true), 500);
  };

  const next = () => {
    if (step >= 2) return;
    disarmTemporarily();
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setDir(1);
    setStep((v) => Math.min(1, v + 1));
  };

  const back = () => {
    disarmTemporarily();
    setError("");
    setDir(-1);
    setStep((v) => Math.max(0, v - 1));
  };

  const goto = (target: number) => {
    disarmTemporarily();
    setError("");
    setDir(target < step ? -1 : 1);
    setStep(target);
  };

  const validateAll = (): string => validateStep(0) || validateStep(1) || "";

  const submit = async (honeypot: string) => {
    if (sending) return;
    const err = validateAll();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          companyWebsite: honeypot,
          elapsed: Date.now() - startedAt.current,
          source: "start-your-mark",
          page: window.location.pathname,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong — please try again.");
      }
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong — please try again.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSent(false);
    setStep(0);
    setDir(1);
    setFields(INITIAL_FIELDS);
    setError("");
  };

  const summary = useMemo(
    () => [fields.budget, ...fields.services, fields.timeline].filter(Boolean).join(" · "),
    [fields]
  );

  return { step, dir, fields, error, sent, sending, armed, set, toggleService, next, back, goto, submit, reset, summary };
}
