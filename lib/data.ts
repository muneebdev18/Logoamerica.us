export const SITE = {
  name: "Logo America",
  domain: "https://www.logoamerica.us",
  email: "contact@logoamerica.us",
  tagline: "Premium logo design and brand identity for ambitious companies.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/", exit: "00" },
  { label: "About", href: "/about", exit: "04" },
  { label: "Services", href: "/services", exit: "01" },
  { label: "Packages", href: "/packages", exit: "05" },
  { label: "Contact Us", href: "/contact", exit: "02" },
  // { label: "Process", href: "/#process", exit: "03" },
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

export type Value = {
  index: string;
  title: string;
  body: string;
};

export const VALUES: Value[] = [
  {
    index: "01",
    title: "Strategy before sketches",
    body: "We align on the story your mark must tell and establish the criteria every concept will be measured against — so decisions stay objective and the work solves a real business problem.",
  },
  {
    index: "02",
    title: "Senior hands, in-house",
    body: "From a single logo to a full rebrand, our senior team handles every aspect of brand identity in-house. No outsourcing — just experienced designers delivering work built to perform at every touchpoint.",
  },
  {
    index: "03",
    title: "Three routes, not variations",
    body: "You review three distinct strategic routes live and in context — on signage, digital products, merchandise, and stationery — never as static PDFs handed over weeks later.",
  },
  {
    index: "04",
    title: "Built to be used",
    body: "Practical, accessible brand books your team will actually use: organized file structures, usage rules, and downloadable asset libraries built for real-world workflows, not shelf display.",
  },
  {
    index: "05",
    title: "You own it outright",
    body: "Full IP transfer upon final payment, in writing. No licensing traps, no usage fees, no fine print — the work is yours, no strings attached.",
  },
  {
    index: "06",
    title: "Fixed-scope pricing",
    body: "Fixed-scope pricing, quoted upfront. Every engagement delivers work you own outright — no licensing, no hidden fees, and never a charge for a phone call.",
  },
];

export type Differentiator = {
  index: string;
  title: string;
  body: string;
};

export const DIFFERENT: Differentiator[] = [
  {
    index: "01",
    title: "The names on the door are the names in the Slack channel",
    body: "You work directly with the senior team that designs your identity — from the first call to the final file handoff. No account layers, no handoffs to junior staff.",
  },
  {
    index: "02",
    title: "Concepts presented live, in context",
    body: "Every direction is shown on signage, products, merchandise, and screens during a working session — so you judge the mark where it will actually live, not on a flat PDF.",
  },
  {
    index: "03",
    title: "Accessibility shaped from day one",
    body: "Our identities are stress-tested at 16 pixels and 16 feet, in full color and single color — clarity and contrast built in from the first sketch, never patched in later.",
  },
  {
    index: "04",
    title: "Guidelines written for practitioners",
    body: "A guideline book your team will actually open: usage rules, do's and don'ts, organized files, and a downloadable asset library your developers will thank you for.",
  },
  {
    index: "05",
    title: "30 days of post-launch support",
    body: "Delivery is not the finish line. Every complete file suite ships with a guideline book and a month of post-launch support to keep the rollout clean.",
  },
];

export const COMPANY_FACTS = [
  { label: "Founded", value: "2020" },
  { label: "Studios", value: "New York · Los Angeles" },
  { label: "Hours", value: "Mon–Fri · 9–6 ET / 9–6 PT" },
  { label: "Area served", value: "Nationwide — every time zone" },
] as const;

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

export const PACKAGE_CATEGORIES = [
  { id: "logo", label: "Logo", href: "#packages-logo" },
  // { id: "website", label: "Website", href: "#packages-website" },
  // { id: "seo", label: "SEO", href: "#packages-seo" },
  // { id: "ecommerce", label: "E-commerce", href: "#packages-ecommerce" },
] as const;

// export const WEBSITE_TIERS: Tier[] = [
//   {
//     name: "Starter Website",
//     price: "$1,495",
//     unit: "one-time",
//     pitch: "Professional 5-page website to establish your online presence with clean design and solid foundations.",
//     features: [
//       "Custom 5-page design (Home, About, Services, Blog, Contact)",
//       "Responsive design — mobile, tablet, desktop",
//       "CMS-powered (WordPress or Webflow) — easy content updates",
//       "SEO-ready structure with meta tags, sitemap, schema markup",
//       "Contact form with spam protection",
//       "Google Analytics & Search Console setup",
//       "SSL certificate & security headers",
//       "Performance optimized (lazy loading, minification, caching)",
//       "Cross-browser tested (Chrome, Firefox, Safari, Edge)",
//       "30 days post-launch support",
//       "Training session for content management",
//       "Full ownership — no monthly fees",
//     ],
//     cta: "Get Starter Website",
//   },
//   {
//     name: "Growth Website",
//     price: "$3,495",
//     unit: "one-time",
//     pitch: "Conversion-focused website with advanced features to grow your business and capture leads.",
//     features: [
//       "Custom 10-page design with strategic UX planning",
//       "Conversion-optimized landing pages (2 included)",
//       "Blog system with categories, tags, author profiles",
//       "Lead capture forms + CRM integration (HubSpot, Mailchimp, etc.)",
//       "Custom animations & micro-interactions",
//       "Advanced SEO: technical audit, keyword mapping, content strategy",
//       "Page speed optimization — 90+ Core Web Vitals target",
//       "Cookie consent & GDPR/CCPA compliance",
//       "Multi-language ready (WPML/Polylang compatible)",
//       "Staging environment for safe updates",
//       "60 days post-launch support + 2 hours training",
//       "Full ownership — no monthly fees",
//     ],
//     featured: true,
//     cta: "Get Growth Website",
//   },
//   {
//     name: "Scale Website",
//     price: "$6,995",
//     unit: "one-time",
//     pitch: "Enterprise-grade website with custom functionality, integrations, and scalable architecture.",
//     features: [
//       "Unlimited pages with modular component system",
//       "Custom web application features (dashboards, portals, calculators)",
//       "Headless CMS option (Contentful, Sanity, Strapi) + Next.js frontend",
//       "Advanced integrations: ERP, CRM, marketing automation, APIs",
//       "Custom user roles, permissions & membership areas",
//       "A/B testing framework + heatmap analytics setup",
//       "Enterprise SEO: international, programmatic, technical at scale",
//       "WCAG 2.1 AA accessibility compliance",
//       "CI/CD pipeline, automated testing, zero-downtime deployments",
//       "99.9% uptime SLA with monitoring & alerting",
//       "90 days post-launch support + dedicated success manager",
//       "Full ownership — no monthly fees",
//     ],
//     cta: "Get Scale Website",
//   },
// ];

// export const SEO_TIERS: Tier[] = [
//   {
//     name: "SEO Foundation",
//     price: "$795",
//     unit: "/month",
//     pitch: "Technical SEO fixes and on-page optimization to get your site indexed and ranking for core terms.",
//     features: [
//       "Complete technical SEO audit (50+ checkpoints)",
//       "Fix crawl errors, broken links, redirect chains",
//       "Optimize site architecture & internal linking",
//       "On-page SEO for 10 priority pages (titles, headers, content, schema)",
//       "XML sitemap & robots.txt optimization",
//       "Core Web Vitals improvements",
//       "Google Business Profile optimization",
//       "Monthly keyword ranking report (top 50 keywords)",
//       "Competitor gap analysis (top 3 competitors)",
//       "Dedicated SEO strategist — monthly 30-min call",
//       "No long-term contracts — cancel anytime",
//     ],
//     cta: "Start SEO Foundation",
//   },
//   {
//     name: "SEO Growth",
//     price: "$1,895",
//     unit: "/month",
//     pitch: "Content-driven SEO strategy to build authority, capture traffic, and convert visitors into customers.",
//     features: [
//       "Everything in Foundation, plus:",
//       "Keyword research & content strategy (50+ target keywords)",
//       "4 SEO-optimized blog posts/month (2,000+ words each)",
//       "Content clusters & pillar page architecture",
//       "Link building: 8–12 high-authority backlinks/month",
//       "Local SEO: citations, reviews, multi-location optimization",
//       "Conversion rate optimization (CRO) audits quarterly",
//       "Advanced schema: FAQ, HowTo, Article, Product, Organization",
//       "Bi-weekly ranking & traffic reports with insights",
//       "Dedicated SEO strategist — bi-weekly 45-min calls",
//       "Content refresh & historical optimization program",
//       "No long-term contracts — cancel anytime",
//     ],
//     featured: true,
//     cta: "Start SEO Growth",
//   },
//   {
//     name: "SEO Dominance",
//     price: "$4,495",
//     unit: "/month",
//     pitch: "Aggressive market domination with enterprise SEO, digital PR, and full-funnel content engine.",
//     features: [
//       "Everything in Growth, plus:",
//       "Unlimited target keywords — full market coverage",
//       "12+ premium content assets/month (guides, tools, studies, videos)",
//       "Digital PR campaigns: 4+ tier-1 media placements/month",
//       "Enterprise link building: 20+ authoritative links/month",
//       "International SEO: multi-country, multi-language strategy",
//       "Programmatic SEO: automated page generation at scale",
//       "Custom SEO tooling & dashboards",
//       "Quarterly business reviews with executive reporting",
//       "Dedicated team: strategist, writer, outreach specialist, technical SEO",
//       "Revenue attribution modeling & ROI tracking",
//       "No long-term contracts — cancel anytime",
//     ],
//     cta: "Start SEO Dominance",
//   },
// ];

// export const ECOMMERCE_TIERS: Tier[] = [
//   {
//     name: "Shop Starter",
//     price: "$2,495",
//     unit: "one-time",
//     pitch: "Launch your online store with a beautiful, conversion-ready Shopify or WooCommerce setup.",
//     features: [
//       "Custom theme design (Home, Collection, Product, Cart, Checkout)",
//       "Up to 50 products configured with variants, images, SEO",
//       "Payment gateway setup (Stripe, PayPal, Apple Pay, Shop Pay)",
//       "Shipping zones, rates, tax configuration",
//       "Email automation: abandoned cart, welcome, order confirmation",
//       "Basic SEO: meta tags, structured data, sitemap",
//       "Mobile-optimized, fast checkout experience",
//       "Admin training + 30 days support",
//       "Full ownership — no platform lock-in",
//     ],
//     cta: "Launch Shop Starter",
//   },
//   {
//     name: "Shop Growth",
//     price: "$5,495",
//     unit: "one-time",
//     pitch: "Scale your store with advanced merchandising, upsells, and marketing integrations.",
//     features: [
//       "Everything in Starter, plus:",
//       "Up to 200 products with advanced filtering & search",
//       "Upsell/cross-sell funnels, bundles, subscription options",
//       "Email/SMS marketing flows (Klaviyo/Attentive) — 8 automated flows",
//       "Loyalty program & referral system setup",
//       "Product reviews, UGC galleries, wishlist",
//       "Advanced analytics: GA4 ecommerce, heatmaps, funnel tracking",
//       "CRO audit + A/B test setup (2 tests included)",
//       "60 days support + monthly check-ins (3 months)",
//       "Full ownership — no platform lock-in",
//     ],
//     featured: true,
//     cta: "Launch Shop Growth",
//   },
//   {
//     name: "Shop Enterprise",
//     price: "$12,995",
//     unit: "one-time",
//     pitch: "Custom headless commerce with complex integrations, B2B features, and global scale.",
//     features: [
//       "Everything in Growth, plus:",
//       "Headless architecture (Shopify Hydrogen, Next.js Commerce, Medusa)",
//       "Unlimited products, variants, custom product builders",
//       "B2B: wholesale pricing, net terms, quote requests, customer portals",
//       "ERP/PIM/OMS integration (NetSuite, SAP, Akeneo, etc.)",
//       "Multi-store, multi-currency, multi-language from single backend",
//       "Custom checkout extensions, post-purchase offers",
//       "Advanced personalization & AI product recommendations",
//       "Dedicated dev team + 90 days white-glove support",
//       "Full ownership — no platform lock-in",
//     ],
//     cta: "Launch Shop Enterprise",
//   },
// ];