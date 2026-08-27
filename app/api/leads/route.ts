import { NextRequest, NextResponse } from "next/server";
import { LEAD_SERVICES } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK_URL = process.env.GOOGLE_SHEET_SCRIPT_URL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-.\s\d]{7,24}$/;

const MIN_FILL_TIME = 2000;

const FORMS = {
  "lead-modal": "Lead Modal",
  "start-your-mark": "Start Your Mark",
} as const;

type Source = keyof typeof FORMS;

type Lead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  services: string;
  timeline: string;
  budget: string;
  details: string;
  message: string;
};

const EMPTY_LEAD: Lead = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  services: "",
  timeline: "",
  budget: "",
  details: "",
  message: "",
};

function str(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function strList(value: unknown, maxItems = 12, maxLen = 100) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, maxItems)
    .map((item) => str(item, maxLen))
    .filter(Boolean);
}

function base(body: Record<string, unknown>) {
  return {
    ...EMPTY_LEAD,
    name: str(body.name, 100),
    email: str(body.email, 200),
    company: str(body.company, 150),
  };
}

function validateLeadModal(body: Record<string, unknown>) {
  const lead = base(body);
  lead.phone = str(body.phone, 30);
  lead.service = str(body.service, 100);
  lead.details = str(body.details, 2000);

  if (lead.name.length < 2) return { error: "Please tell us your full name." };
  if (!EMAIL_RE.test(lead.email)) return { error: "That email address doesn't look right — mind checking it?" };
  if (!PHONE_RE.test(lead.phone) || lead.phone.replace(/\D/g, "").length < 7)
    return { error: "Please enter a valid phone number so we can reach you." };
  if (!LEAD_SERVICES.includes(lead.service as (typeof LEAD_SERVICES)[number]))
    return { error: "Please pick the service you're interested in." };
  if (lead.details.length < 10)
    return { error: "Tell us a little more about the project — at least a sentence." };

  return { error: "", lead };
}

function validateStartYourMark(body: Record<string, unknown>) {
  const lead = base(body);
  lead.services = strList(body.services).join(", ");
  lead.timeline = str(body.timeline, 60);
  lead.budget = str(body.budget, 60);
  lead.message = str(body.message, 2000);

  if (lead.name.length < 2) return { error: "We need a name to say hello to." };
  if (!EMAIL_RE.test(lead.email)) return { error: "That email doesn't look quite right — one more check?" };
  if (!lead.services) return { error: "Pick at least one lane — even a rough one." };

  return { error: "", lead };
}

export async function POST(req: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json(
      { ok: false, error: "Lead intake isn't configured yet. Please email contact@logoamerica.us." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const honeypot = str(body.companyWebsite, 200);
  const elapsed = typeof body.elapsed === "number" ? body.elapsed : 0;

  if (honeypot || elapsed < MIN_FILL_TIME) {
    return NextResponse.json({ ok: true });
  }

  const source: Source =
    body.source === "start-your-mark" ? "start-your-mark" : "lead-modal";

  const result = source === "lead-modal"
    ? validateLeadModal(body)
    : validateStartYourMark(body);

  if (result.error || !result.lead) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 422 });
  }

  const payload = {
    ...result.lead,
    form: FORMS[source],
    source,
    submittedAt: new Date().toISOString(),
    page: str(body.page, 300) || "/",
    userAgent: (req.headers.get("user-agent") ?? "").slice(0, 250),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

    try {
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (data.ok === false) throw new Error(data.error || "Sheet rejected the lead");
    } catch {
      /* non-JSON success responses from Apps Script are fine */
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "Our booking desk didn't respond — please try again, or email contact@logoamerica.us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
