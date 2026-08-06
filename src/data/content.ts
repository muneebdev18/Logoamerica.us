export const marqueeBrands = [
  { name: "Northgate Ventures", icon: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none"/>' },
  { name: "Aurelia Foods", icon: '<path d="M12 4c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z"/>' },
  { name: "Pinecrest Studio", icon: '<path d="M12 3l7 12H5z"/><path d="M12 10l4.5 7.5h-9z"/>' },
  { name: "Vantable Labs", icon: '<path d="M4 12h4l2-7 4 14 2-7h4"/>' },
  { name: "Kindred Goods", icon: '<path d="M12 5l2 5 5 .8-3.6 3.5.9 5-4.3-2.4-4.3 2.4.9-5L5 10.8 10 10z"/>' },
  { name: "Orbital Fitness", icon: '<circle cx="12" cy="12" r="7.5"/><path d="M4.5 12h15"/>' },
  { name: "Halden & Co.", icon: '<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 12h6M12 9v6"/>' },
  { name: "Marlowe Digital", icon: '<path d="M4 17V9l4 4 4-6 4 8 4-6v8"/>' }
];

export const categories = ["Corporate", "Business", "Personal Brand", "eCommerce", "Mascot", "Character", "Text Logo", "Illustrated", "Artwork"];

export function markSVG(seed: number, _cat?: string) {
  const colors = ['#0B2545', '#134074', '#8DA9C4'];
  const c1 = colors[seed % 3], c2 = colors[(seed + 1) % 3];
  const shapes = [
    `<circle cx="100" cy="100" r="70" fill="${c1}"/><circle cx="100" cy="100" r="30" fill="#FFFFFF"/>`,
    `<path d="M100 30 L170 150 H30 Z" fill="${c1}"/><circle cx="100" cy="110" r="22" fill="#FFFFFF"/>`,
    `<rect x="40" y="40" width="120" height="120" rx="26" fill="${c2}"/><path d="M75 100 l20 20 40-45" stroke="#FFFFFF" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<polygon points="100,25 175,70 175,140 100,175 25,140 25,70" fill="${c1}"/><circle cx="100" cy="100" r="26" fill="#FFFFFF"/>`,
    `<circle cx="70" cy="100" r="45" fill="${c1}"/><circle cx="130" cy="100" r="45" fill="${c2}" opacity="0.85"/>`,
    `<path d="M100 20 C150 20 175 60 175 100 C175 150 130 180 100 180 C70 180 25 150 25 100 C25 60 50 20 100 20Z" fill="${c2}"/><rect x="80" y="80" width="40" height="40" rx="8" fill="#FFFFFF"/>`
  ];
  return `<svg viewBox="0 0 200 200">${shapes[seed % shapes.length]}</svg>`;
}

export const pricingPlans = [
  {
    name: "Basic Logo Package",
    tag: "Suitable for branding & revamping of small enterprises",
    price: 25,
    popular: false,
    features: [
      "2 Custom Logo Design Concepts",
      "1 Dedicated Designer",
      "3 Revisions",
      "File Format (JPEG)",
      "24 to 48 Hours TAT",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "100% Ownership Rights"
    ]
  },
  {
    name: "Advanced Standard Logo",
    tag: "For growing brands that need more options",
    price: 75,
    popular: true,
    badge: "Most Popular",
    features: [
      "5 Logo Design Concepts",
      "Up to 5 Revisions",
      "2 Dedicated Designers",
      "Colour Options",
      "Grayscale Format",
      "Free Icon",
      "24 to 48 Hours TAT",
      "All File Formats (PNG, JPEG, PDF)",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "100% Ownership Rights"
    ]
  },
  {
    name: "Elite Premium Logo",
    tag: "Complete identity with stationery design",
    price: 135,
    popular: false,
    features: [
      "8 Logo Design Concepts",
      "Unlimited Revisions",
      "3 Award Winning Designers",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Usage Guideline",
      "Colour Options",
      "Grayscale Format",
      "10% Off on Website Order",
      "24 to 48 Hours TAT",
      "All File + Vector Files (Ai, PSD, EPS, PNG, JPG, PDF, PES)",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "100% Ownership Rights"
    ]
  },
  {
    name: "Legendary Ultimate Logo",
    tag: "Full award-winning brand rollout",
    price: 299,
    popular: false,
    features: [
      "Unlimited Logo Design Concepts",
      "Unlimited Revisions",
      "6 Dedicated Award Winning Designers",
      "Stationery Design (Card, Letterhead, Folder, Envelopes)",
      "4-Page Corporate Brochure",
      "Complete Social Media Designs",
      "Usage Guideline",
      "Free Colour Options",
      "Free Grayscale Format",
      "20% Off on Website Order",
      "24 Hours TAT",
      "All File + Vector Files (Ai, PSD, EPS, PNG, JPG, PDF, PES)",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "100% Ownership Rights"
    ]
  },
  {
    name: "Logo + Website Combo",
    tag: "Launch your full brand at once",
    price: 449,
    popular: true,
    badge: "Best Value",
    features: [
      "Custom Logo Design, Unlimited Revisions",
      "Brand Guidelines",
      "Custom Website, up to 5 Pages",
      "Premium Stock Photos & Custom Banner Design",
      "Contact Us Form",
      "Cross-Browser & Cross-Platform Compatibility",
      "W3C Certified HTML & Google-Friendly Sitemap",
      "Complete Deployment, 48–72 Hours TAT",
      "Dedicated Designer, Developer & Project Manager",
      "Online Reservation/Appointment Tool",
      "Online Payment Integration",
      "100% Ownership & Satisfaction Guarantee",
      "No Monthly Fee, No Hidden Fee"
    ]
  }
];

export const testimonials = [
  { q: "They understood our positioning faster than agencies twice the price. The mark still feels fresh a year later.", name: "J. Alden", ind: "Hospitality", init: "JA" },
  { q: "The revision process was genuinely unlimited — we iterated until it was right, no pressure to settle.", name: "R. Okafor", ind: "eCommerce", init: "RO" },
  { q: "Source files were beautifully organised. Our dev team had everything they needed on day one.", name: "M. Larsen", ind: "SaaS", init: "ML" },
  { q: "We came in wanting a mascot and left with an entire identity system. Worth every dollar.", name: "S. Kapoor", ind: "Consumer Goods", init: "SK" },
  { q: "Fast, professional, and the final files worked perfectly across print and web without any rework.", name: "T. Bianchi", ind: "Fitness", init: "TB" }
];

export const quizDirections = {
  bold: {
    title: "Bold & Energetic",
    tags: ["High contrast", "Strong geometry", "Loud confidence"],
    desc: "Your brand wants to be noticed, not blended in. Think sharp geometric marks, strong color blocks and a wordmark with real presence — built for a business that leads rather than follows."
  },
  playful: {
    title: "Playful & Approachable",
    tags: ["Rounded forms", "Warm palette", "Friendly tone"],
    desc: "Your brand is at its best when people feel instantly comfortable. Expect softer shapes, a warmer palette and a mark that smiles a little — approachable without losing credibility."
  },
  minimal: {
    title: "Modern Minimalist",
    tags: ["Clean grid", "Negative space", "Quiet confidence"],
    desc: "Your brand doesn't need to shout. A precise, restrained mark with generous space and a considered grid will do more for your credibility than decoration ever could."
  },
  luxury: {
    title: "Luxury & Refined",
    tags: ["Fine detail", "Rich palette", "Understated"],
    desc: "Your brand plays a longer game — earning trust through detail rather than volume. Expect a refined mark, a rich but restrained palette, and typography with quiet weight."
  }
};

export const quizQuestions = [
  {
    eyebrow: "Question 1 of 4",
    question: "If your brand walked into a room, how would it enter?",
    options: [
      { dir: "bold", title: "Confidently, fast", desc: "Commands attention immediately" },
      { dir: "playful", title: "Warmly, smiling", desc: "Puts people at ease right away" },
      { dir: "minimal", title: "Quietly, precisely", desc: "Lets the work speak first" },
      { dir: "luxury", title: "Elegantly, unhurried", desc: "Never needs to rush" }
    ]
  },
  {
    eyebrow: "Question 2 of 4",
    question: 'Pick the texture that feels most "you."',
    options: [
      { dir: "bold", title: "Sharp edges, high contrast", desc: "Bold shapes, strong color blocks" },
      { dir: "playful", title: "Rounded, bubbly forms", desc: "Friendly, approachable curves" },
      { dir: "minimal", title: "Clean grid, negative space", desc: "Restraint as a design choice" },
      { dir: "luxury", title: "Fine lines, subtle texture", desc: "Detail that rewards a second look" }
    ]
  },
  {
    eyebrow: "Question 3 of 4",
    question: "What should a customer feel the instant they see your logo?",
    options: [
      { dir: "bold", title: "Excited, energised", desc: "Ready to act now" },
      { dir: "playful", title: "Delighted, at ease", desc: "This brand gets me" },
      { dir: "minimal", title: "Clear-headed, confident", desc: "This brand knows what it's doing" },
      { dir: "luxury", title: "Impressed, indulged", desc: "This is worth paying more for" }
    ]
  },
  {
    eyebrow: "Question 4 of 4",
    question: "Choose a color mood for your brand world.",
    options: [
      { dir: "bold", title: "Vermilion & ink black", desc: "High-energy, unmissable" },
      { dir: "playful", title: "Coral & warm cream", desc: "Friendly, optimistic" },
      { dir: "minimal", title: "Navy & off-white", desc: "Calm, considered, trustworthy" },
      { dir: "luxury", title: "Deep emerald & gold", desc: "Rich, exclusive, refined" }
    ]
  }
];

export const processSteps = [
  { num: "01", title: "Discovery", desc: "We learn about your business, audience and competitors before a single pixel is drawn." },
  { num: "02", title: "Concept Creation", desc: "Our designers develop multiple original logo concepts rooted in your discovery brief." },
  { num: "03", title: "Unlimited Revisions", desc: "We refine your chosen direction, round after round, until it's exactly right." },
  { num: "04", title: "Final Delivery", desc: "You receive every final asset and source file, ready for print and digital use." }
];

export const features = [
  { title: "100% Custom Design", desc: "Every mark is designed from scratch for your brand — never a template or stock symbol.", icon: "star" },
  { title: "Unlimited Revisions", desc: "We keep refining until you're genuinely happy — no revision caps on eligible packages.", icon: "refresh" },
  { title: "Money-Back Guarantee", desc: "If we can't land on a direction you love, you get your money back — no hard feelings.", icon: "shield" },
  { title: "Fast Turnaround", desc: "Structured process and dedicated designers mean your first concepts arrive quickly.", icon: "bolt" },
  { title: "Professional Designers", desc: "Vetted designers with real brand-identity experience, not marketplace freelancers.", icon: "box" },
  { title: "Source Files Included", desc: "Vector, print and web-ready formats — everything you need, nothing locked away.", icon: "grid" }
];

export const footerServices = [
  "Pitch Deck Design", "Icon & Favicon Design", "Social Media Kit", "Stationery Design",
  "Packaging Design", "Brand Guidelines", "Website Design", "Book & Movie Teaser",
  "2D & 3D Animation Logo", "Artwork", "Book Cover Design", "Banner Design"
];

export const paymentMethods = [
  { name: "Visa", sub: "Accepted worldwide", icon: '<rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M2 10h20" stroke="currentColor" stroke-width="1.6"/>' },
  { name: "Mastercard", sub: "Secure card payments", icon: '<circle cx="9" cy="12" r="6" stroke="currentColor" stroke-width="1.6"/><circle cx="15" cy="12" r="6" stroke="currentColor" stroke-width="1.6"/>' },
  { name: "American Express", sub: "Amex cards welcome", icon: '<rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M6 15h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' },
  { name: "Stripe", sub: "PCI-compliant checkout", icon: '<path d="M6 8c0-2 2-3 4-3s4 1 4 2-2 2-4 2 4 1 4 3-2 3-4 3-4-1.5-4-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M10 3v2M10 17v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' },
  { name: "Bank Transfer", sub: "Save 10% instantly", icon: '<path d="M4 10l8-6 8 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" stroke="currentColor" stroke-width="1.6"/><path d="M9 19v-5h6v5" stroke="currentColor" stroke-width="1.6"/>' },
  { name: "Credit Card", sub: "All major cards", icon: '<rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M2 9h20" stroke="currentColor" stroke-width="1.6"/><path d="M6 15h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' }
];

export const trustBadges = [
  { name: "Trustpilot", rating: "4.8 rating from 900+ reviews", stars: true },
  { name: "DesignRush", rating: "Featured logo design agency", stars: true },
  { name: "Bark Pro", rating: "Verified professional", year: "Verified 2022" },
  { name: "Horizon Award", rating: "Silver winner, branding", year: "Silver 2025" }
];
