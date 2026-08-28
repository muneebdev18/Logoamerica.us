export const SITE = {
  name: "Logo America",
  domain: "https://logoamerica.us",
  email: "contact@logoamerica.us",
  tagline: "We design the marks America runs on.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services", exit: "01" },
  { label: "Work", href: "#work", exit: "02" },
  { label: "Process", href: "#process", exit: "03" },
  { label: "Studio", href: "#studio", exit: "04" },
  { label: "Packages", href: "#packages", exit: "05" },
] as const;

export const TOTAL_MILES = 2789; // NYC → Los Angeles

export const MARQUEE_WORDS = [
  "Logos",
  "Identity",
  "Naming",
  "Rebrands",
  "Motion marks",
  "Packaging",
  "Guidelines",
] as const;

export type Service = {
  index: string;
  title: string;
  body: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Custom Logo Design",
    body: "Custom wordmarks, symbols, and monograms built for Texas businesses from Instagram to storefronts. Logos designed to be clear, memorable, and built to last.",
    tags: ["Wordmarks", "Symbols", "Monograms"],
  },
  {
    index: "02",
    title: "Brand Identities",
    body: "Color palettes, typography, and visual guidelines that keep your brand consistent across every platform and location from one Dallas office to nationwide.",
    tags: ["Color systems", "Typography", "Visuals"],
  },
  {
    index: "03",
    title: "Business Rebranding",
    body: "Outgrown your current logo? We audit what's working, keep your earned brand equity, and modernize the rest without losing the customers who already know you",
    tags: ["Brand audits", "Rollouts", "Legacy brands"],
  },
  {
    index: "04",
    title: "Naming & Brand Messaging",
    body: "Business names, taglines, and brand voice that clear trademark search and actually sound like you not a generic template",
    tags: ["Name development", "Taglines", "Voice & tone"],
  },
  {
    index: "05",
    title: "Motion Logos & App Icons",
    body: "Animated logo intros, responsive app icons, and favicon suites for businesses that live online as much as on Main Street",
    tags: ["Logo animation", "App icons", "Favicon suites"],
  },
  {
    index: "06",
    title: "Brand Guidelines & Style Guides",
    body: "A clear, practical brand book your whole team can actually use so your logo looks right whether your marketing manager is in Houston or your printer is in Chicago",
    tags: ["Guideline books", "Asset libraries", "Team training"],
  },
];

export type Project = {
  client: string;
  sector: string;
  year: string;
  scope: string[];
  result: string;
  resultLabel: string;
  art: "canyon" | "skyline" | "heartland" | "coast";
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    client: "Meridian Bank",
    sector: "Fintech",
    year: "2025",
    scope: ["Rebrand", "Symbol design", "Identity system"],
    result: "+212%",
    resultLabel: "unaided brand recall within two quarters",
    art: "canyon",
    accent: "#ff4030",
  },
  {
    client: "Hartfield & Co.",
    sector: "E-commerce",
    year: "2025",
    scope: ["Wordmark", "Packaging system", "Guidelines"],
    result: "$14M",
    resultLabel: "incremental revenue the year the new mark shipped",
    art: "heartland",
    accent: "#f5b700",
  },
  {
    client: "Vantage Health",
    sector: "Healthcare",
    year: "2024",
    scope: ["Symbol", "Accessible palette", "Signage suite"],
    result: "AA",
    resultLabel: "contrast-compliant identity across 400+ touchpoints",
    art: "coast",
    accent: "#4a72ff",
  },
  {
    client: "Atlas Logistics",
    sector: "Supply chain",
    year: "2024",
    scope: ["Wordmark", "Fleet livery", "Rollout program"],
    result: "38",
    resultLabel: "markets unified under one identity in one quarter",
    art: "skyline",
    accent: "#7fd4b1",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  body: string;
  deliverables: string[];
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    body: "We audit your market, your competitors' marks, and the equity you already own — so the new logo solves a real problem, not a hypothetical one.",
    deliverables: ["Brand audit", "Competitive map", "Creative brief"],
  },
  {
    step: "02",
    title: "Define",
    duration: "Week 2",
    body: "Strategy before sketches. We lock the story the mark has to tell and the three criteria it will be judged against.",
    deliverables: ["Positioning readout", "Moodboards", "Signed-off brief"],
  },
  {
    step: "03",
    title: "Design",
    duration: "Weeks 3–4",
    body: "Distinct routes, not variations of one idea. You review them live on screen — on signs, icons, and stationery — never as static PDFs.",
    deliverables: ["3 concept routes", "Live presentation", "Working session"],
  },
  {
    step: "04",
    title: "Refine",
    duration: "Weeks 4–6",
    body: "The chosen route gets sharpened to the pixel — optical corrections, stress-tested at 16px and 16 feet, in color and in one color.",
    deliverables: ["Refined mark", "Color & type system", "Application tests"],
  },
  {
    step: "05",
    title: "Deliver",
    duration: "Week 6+",
    body: "Every file you'll ever need, a guideline book people actually read, and thirty days of post-launch support. The mark is yours — full stop.",
    deliverables: ["Full file suite", "Guidelines", "30-day support"],
  },
];

export const STATS = [
  { value: 140, suffix: "+", label: "Marks shipped coast to coast" },
  { value: 9, suffix: "yrs", label: "In practice — average partnership: 3.2 years" },
  { value: 480, prefix: "$", suffix: "M", label: "Client brand value influenced since 2019" },
  { value: 22, suffix: "", label: "Industry awards, including 4 for logo design" },
];

export const MANIFESTO =
  "A logo is not decoration. It is the shortest story your company will ever tell — told in one glance, remembered for years. We design marks that carry that weight.";

export const CLIENTS = [
  "Meridian Bank",
  "Hartfield & Co.",
  "Vantage Health",
  "Atlas Logistics",
  "Bluebird Air",
  "Foundry Coffee",
  "Statewide Insurance",
  "Nova Robotics",
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The new mark went on every card, branch, and app icon in six weeks. Unaided recall doubled by Q4 — the board noticed before we even announced the rebrand.",
    name: "Dana Whitfield",
    role: "VP Marketing",
    company: "Meridian Bank",
  },
  {
    quote:
      "They designed a logo that made our packaging feel like a gift before it's even opened. First studio where strategy came before sketches — and it shows in the work.",
    name: "Marcus Oyelaran",
    role: "Founder",
    company: "Hartfield & Co.",
  },
  {
    quote:
      "Our identity works everywhere from a 16-pixel favicon to hospital signage. Accessibility shaped the palette from day one, not as a late patch. Rare and worth it.",
    name: "Dr. Priya Raman",
    role: "Chief Product Officer",
    company: "Vantage Health",
  },
];

export const LEAD_SERVICES = [
  ...SERVICES.map((s) => s.title),
  "Full brand package",
  "Something else",
] as const;

export type Tier = {
  name: string;
  price: string;
  unit: string;
  pitch: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const TIERS: Tier[] = [
  {
    name: "Essential Mark",
    price: "$4.8k",
    unit: "from / fixed scope",
    pitch: "A sharp, professional logo for teams that need to look established — fast.",
    features: [
      "2 distinct concept routes",
      "3 revision rounds",
      "Primary, secondary & favicon",
      "Color & type pairing",
      "Full file suite — SVG, EPS, PNG",
      "Mini usage sheet",
      "2-week delivery",
    ],
    cta: "Start with Essential",
  },
  {
    name: "Signature Identity",
    price: "$12k",
    unit: "from / fixed scope",
    pitch: "The complete first impression — the mark plus the system that makes it work everywhere.",
    features: [
      "Everything in Essential Mark",
      "3 concept routes",
      "Full identity system — color, type, pattern",
      "Stationery & social launch kit",
      "Trademark pre-screen",
      "Guidelines — 20+ pages",
      "4–6 week delivery",
    ],
    featured: true,
    cta: "Start with Signature",
  },
  {
    name: "Brand System",
    price: "$28k",
    unit: "from / fixed scope",
    pitch: "A full identity platform built to scale across products, teams, and markets.",
    features: [
      "Everything in Signature Identity",
      "Naming & tagline development",
      "Motion logo",
      "Packaging or environment applications",
      "Guidelines — 40+ pages",
      "Asset library & team templates",
      "8–10 week delivery",
    ],
    cta: "Start with Brand System",
  },
  {
    name: "Rebrand Program",
    price: "Custom",
    unit: "scoped per quarter",
    pitch: "For established brands that need evolution without losing twenty years of equity.",
    features: [
      "Dedicated senior squad",
      "Brand audit & customer research",
      "Multi-brand architecture",
      "Rollout governance & training",
      "Quarterly roadmap workshops",
      "SLA-backed support",
    ],
    cta: "Talk to us",
  },
];

export type AddOn = {
  name: string;
  price: string;
  body: string;
};

export const ADDONS: AddOn[] = [
  { name: "Motion logo", price: "from $3.2k", body: "Your mark animated for video, product, and social." },
  { name: "Trademark support", price: "from $1.8k", body: "Search, clearance opinion, and attorney-handoff prep." },
  { name: "Packaging suite", price: "from $4.5k", body: "Dielines, print-ready art, and shelf mockups." },
  { name: "Social kit", price: "from $2.4k", body: "Templates your team can ship without a designer." },
  { name: "Stationery suite", price: "from $1.6k", body: "Cards, letterhead, invoices — print-ready." },
  { name: "Illustration system", price: "from $5k", body: "A drawing style that's unmistakably yours." },
];

export const FAQS = [
  {
    q: "Who owns the logo?",
    a: "You do — full intellectual property transfer on final payment, in writing. No licensing traps, no 'usage fees', no fine print.",
  },
  {
    q: "Do you handle trademark registration?",
    a: "We pre-screen every recommended mark and prepare the filing package; our partner trademark attorneys handle the registration itself in the US and EU.",
  },
  {
    q: "How many concepts and revisions do we get?",
    a: "Essential includes 2 routes, Signature 3, Brand System 3 plus a motion study. Each package includes defined revision rounds — and we've never charged extra for a phone call.",
  },
  {
    q: "What files do we receive?",
    a: "Everything: vector masters (SVG, EPS, PDF), web-optimized PNGs, app icons, favicon suites, and one-color variants — organized in a folder structure your developers will thank you for.",
  },
  {
    q: "Our deadline is brutal. Can you work with it?",
    a: "Probably. Fast-lane delivery (half the timeline, +30%) is available on Essential and Signature — we hold two fast-lane slots per month.",
  },
];
