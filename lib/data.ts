export const SITE = {
  name: "Logo America",
  domain: "https://www.logoamerica.us",
  email: "contact@logoamerica.us",
  tagline: "Premium logo design and brand identity for ambitious companies.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services", exit: "01" },
  { label: "Work", href: "#work", exit: "02" },
  { label: "Process", href: "#process", exit: "03" },
  { label: "About", href: "#studio", exit: "04" },
  { label: "Packages", href: "#packages", exit: "05" },
] as const;

export const TOTAL_MILES = 2789; // NYC → Los Angeles

export const MARQUEE_WORDS = [
  "Logos",
  "Identity",
  "Naming",
  "Rebrands",
  "Motion",
  "Packaging",
  "Guidelines",
  "Strategy",
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
    body: "Distinctive wordmarks, symbols, and monograms crafted for visibility across every touchpoint — from app icons to building signage. Each logo is built for clarity, memorability, and long-term brand equity.",
    tags: ["Wordmarks", "Symbols", "Monograms"],
  },
  {
    index: "02",
    title: "Brand Identity Systems",
    body: "Complete visual systems including color palettes, typography, iconography, and layout principles. We deliver guidelines that keep your brand consistent whether managed by an in-house team or external partners.",
    tags: ["Color Systems", "Typography", "Visual Language"],
  },
  {
    index: "03",
    title: "Strategic Rebranding",
    body: "Evolution without losing hard-earned recognition. We audit existing brand equity, identify what to keep and what to change, then execute a rollout that transitions customers smoothly across every channel.",
    tags: ["Brand Audits", "Rollout Strategy", "Legacy Brands"],
  },
  {
    index: "04",
    title: "Naming & Verbal Identity",
    body: "Business names, taglines, and brand voice frameworks that clear trademark screening and sound authentically yours. Language that differentiates in crowded markets and resonates with your audience.",
    tags: ["Name Development", "Taglines", "Voice & Tone"],
  },
  {
    index: "05",
    title: "Motion Logos & Digital Assets",
    body: "Animated logo systems, responsive app icons, favicon suites, and motion principles for brands living across screens. Movement designed with purpose — not decoration — to reinforce recognition.",
    tags: ["Logo Animation", "App Icons", "Favicon Suites"],
  },
  {
    index: "06",
    title: "Brand Guidelines & Asset Libraries",
    body: "Practical, accessible brand books your team will actually use. Organized file structures, usage rules, do's and don'ts, and downloadable asset libraries — built for real-world workflows, not shelf display.",
    tags: ["Guideline Books", "Asset Libraries", "Team Training"],
  },
];

export type Project = {
  client: string;
  sector: string;
  year: string;
  scope: string[];
  result: string;
  resultLabel: string;
  asset: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    client: "CIS",
    sector: "Fintech",
    year: "2026",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "video", src: "/P14.mp4", poster: "/P14.jpeg" },
    accent: "#7fd4b1",
  },
  {
    client: "Visuo",
    sector: "Fintech",
    year: "2025",
    scope: ["Full Rebrand", "Symbol Design", "Identity System"],
    result: "+212%",
    resultLabel: "Unaided brand recall within two quarters",
    asset: { type: "image", src: "/P1.jpeg" },
    accent: "#ff4030",
  },
  {
    client: "Crimzon",
    sector: "Fintech",
    year: "2024",
    scope: ["Symbol", "Accessible Palette", "Signage Suite"],
    result: "AA",
    resultLabel: "Contrast-compliant identity across 400+ touchpoints",
    asset: { type: "image", src: "/P2.jpeg" },
    accent: "#4a72ff",
  },
  {
    client: "Aniday",
    sector: "Fintech",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "video", src: "/P4.mp4", poster: "/P5.jpeg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/Logo-s1.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/Logo-s2.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s7.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s8.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s9.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s10.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s3.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s4.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s5.jpg" },
    accent: "#7fd4b1",
  },
  {
    client: "Logo Samples",
    sector: "Logo Designs",
    year: "2025",
    scope: ["Wordmark", "Fleet Livery", "Rollout Program"],
    result: "38",
    resultLabel: "Markets unified under one identity in a single quarter",
    asset: { type: "image", src: "/logos/logo-s11.jpg" },
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
    body: "We research your market, audit competitor visual language, and map the equity you already own — so the new identity solves a real business problem, not a hypothetical one.",
    deliverables: ["Brand Audit", "Competitive Map", "Creative Brief"],
  },
  {
    step: "02",
    title: "Define",
    duration: "Week 2",
    body: "Strategy before sketches. We align on the story your mark must tell and establish the three criteria every concept will be measured against — so decisions stay objective.",
    deliverables: ["Positioning Statement", "Moodboards", "Signed-Off Brief"],
  },
  {
    step: "03",
    title: "Design",
    duration: "Weeks 3–4",
    body: "Three distinct strategic routes — not variations of one idea. You review concepts live in context: on signage, digital products, merchandise, and stationery — never as static PDFs.",
    deliverables: ["3 Concept Routes", "Live Presentation", "Working Session"],
  },
  {
    step: "04",
    title: "Refine",
    duration: "Weeks 4–6",
    body: "The chosen direction is sharpened to the pixel — optical corrections, stress-tested at 16px and 16 feet, in full color and single-color applications. Precision that holds up everywhere.",
    deliverables: ["Refined Mark", "Color & Type System", "Application Tests"],
  },
  {
    step: "05",
    title: "Deliver",
    duration: "Week 6+",
    body: "Every file format you'll ever need, a guideline book written for practitioners, and 30 days of post-launch support. Full IP transfer — the work is yours, no strings attached.",
    deliverables: ["Complete File Suite", "Brand Guidelines", "30-Day Support"],
  },
];

export const STATS = [
  { value: 80, suffix: "+", label: "Brand identities launched nationwide" },
  { value: 5, suffix: " yrs", label: "In practice — average client partnership: 3.2 years" },
  { value: 80, prefix: "$", suffix: "K", label: "Client brand value influenced since 2020" },
  { value: 7, suffix: "", label: "Industry awards, including 4 for logo design excellence" },
];

export const MANIFESTO =
  "A logo is not decoration. It is the shortest story your company will ever tell — read in a glance, remembered for years. We design marks that carry that weight.";

export const CLIENTS = [
  "Meridian Financial",
  "Hartfield & Co.",
  "Vantage Health",
  "Atlas Logistics",
  "Bluebird Aviation",
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
    company: "Meridian Financial",
  },
  {
    quote:
      "They designed a logo that made our packaging feel like a gift before it's even opened. First studio where strategy came before sketches — and it shows in every application.",
    name: "Marcus Oyelaran",
    role: "Founder",
    company: "Hartfield & Co.",
  },
  {
    quote:
      "Our identity works everywhere from a 16-pixel favicon to hospital signage. Accessibility shaped the palette from day one, not as a late patch. Rare discipline, and worth every dollar.",
    name: "Dr. Priya Raman",
    role: "Chief Product Officer",
    company: "Vantage Health",
  },
];

export const LEAD_SERVICES = [
  ...SERVICES.map((s) => s.title),
  "Full Brand Package",
  "Something Else",
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
    name: "Basic Package",
    price: "$25",
    unit: "one-time",
    pitch: "Perfect for startups and small businesses needing a professional logo quickly.",
    features: [
      "2 custom logo design concepts",
      "1 dedicated designer",
      "3 revisions",
      "File format: JPEG",
      "24–48 hour turnaround",
      "100% unique design guarantee",
      "100% satisfaction guarantee",
      "100% money-back guarantee",
      "100% ownership rights",
    ],
    cta: "Get Basic Package",
  },
  {
    name: "Advanced Standard Package",
    price: "$75",
    unit: "one-time",
    pitch: "Our most popular choice — more concepts, more formats, and a dedicated design team.",
    features: [
      "5 logo design concepts",
      "Up to 5 revisions",
      "2 dedicated designers",
      "Color & grayscale options",
      "Free icon included",
      "24–48 hour turnaround",
      "All file formats: PNG, JPEG, PDF",
      "100% unique design guarantee",
      "100% satisfaction guarantee",
      "100% money-back guarantee",
      "100% ownership rights",
    ],
    featured: true,
    cta: "Get Advanced Package",
  },
  {
    name: "Elite Premium Package",
    price: "$115",
    unit: "one-time",
    pitch: "Complete brand identity with stationery, guidelines, and award-winning designers.",
    features: [
      "8 logo design concepts",
      "Unlimited revisions",
      "3 award-winning designers",
      "Complete stationery design (business card, letterhead, envelope)",
      "Usage guidelines",
      "Color & grayscale options",
      "10% off website order",
      "24–48 hour turnaround",
      "All vector files: AI, PSD, EPS, PNG, JPG, PDF, PES",
      "100% unique design guarantee",
      "100% satisfaction guarantee",
      "100% money-back guarantee",
      "100% ownership rights",
    ],
    cta: "Get Elite Package",
  },
  {
    name: "Combo Package",
    price: "$250",
    unit: "one-time",
    pitch: "Logo + full business website — everything you need to launch online.",
    features: [
      "Custom logo design with unlimited revisions",
      "Brand guidelines",
      "Custom website design (up to 5 pages)",
      "Premium stock photos included",
      "Custom banner design",
      "Contact form integration",
      "Cross-browser & cross-platform responsive",
      "W3C certified HTML, Google-friendly sitemap",
      "Complete deployment & project manager",
      "Online booking & payment integration",
      "Expandable features available",
      "100% ownership rights — no monthly or hidden fees",
    ],
    cta: "Get Combo Package",
  },
];

export type AddOn = {
  name: string;
  price: string;
  body: string;
};

export const ADDONS: AddOn[] = [
  { name: "Motion Logo", price: "from $3.2k", body: "Your mark animated for video, product, and social." },
  { name: "Trademark Support", price: "from $1.8k", body: "Search, clearance opinion, and attorney-handoff prep." },
  { name: "Packaging Suite", price: "from $4.5k", body: "Dielines, print-ready artwork, and shelf mockups." },
  { name: "Social Media Kit", price: "from $2.4k", body: "Templates your team can ship without a designer." },
  { name: "Stationery Suite", price: "from $1.6k", body: "Business cards, letterhead, invoices — print-ready." },
  { name: "Illustration System", price: "from $5k", body: "A custom illustration style unmistakably yours." },
];

export const FAQS = [
  {
    q: "Who owns the final logo?",
    a: "You do — full intellectual property transfer upon final payment, in writing. No licensing traps, no usage fees, no fine print.",
  },
  {
    q: "Do you handle trademark registration?",
    a: "We pre-screen every recommended mark and prepare the filing package; our partner trademark attorneys handle the registration itself in the US and EU.",
  },
  {
    q: "How many concepts and revisions are included?",
    a: "Essential includes 2 routes, Signature includes 3, Brand System includes 3 plus a motion study. Each package includes defined revision rounds — and we've never charged extra for a phone call.",
  },
  {
    q: "What file formats do we receive?",
    a: "Everything: vector masters (SVG, EPS, PDF), web-optimized PNGs, app icons, favicon suites, and single-color variants — organized in a folder structure your developers will thank you for.",
  },
  {
    q: "Our deadline is aggressive. Can you accommodate?",
    a: "Usually. Fast-lane delivery (half the timeline, +30%) is available on Essential and Signature packages — we hold two fast-lane slots per month.",
  },
];