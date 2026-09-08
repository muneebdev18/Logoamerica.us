"use client";

import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import LeadCta from "./LeadCta";
// import { TIERS, WEBSITE_TIERS, SEO_TIERS, ECOMMERCE_TIERS, PACKAGE_CATEGORIES } from "@/lib/data";
import { TIERS, PACKAGE_CATEGORIES } from "@/lib/data";

const CARD_HEIGHT = "580px";

const CATEGORY_TIERS = {
  logo: TIERS,
  // website: WEBSITE_TIERS,
  // seo: SEO_TIERS,
  // ecommerce: ECOMMERCE_TIERS,
} as const;

type CategoryId = keyof typeof CATEGORY_TIERS;

function FeatureList({ features, featured = false }: { features: string[]; featured?: boolean }) {
  const listRef = useRef<HTMLUListElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    const target = e.currentTarget;
    if (target.scrollHeight > target.clientHeight) {
      e.stopPropagation();
    }
  };

  return (
    <ul
      ref={listRef}
      className="flex flex-col gap-3 border-t border-hairline pt-4 h-full overflow-hidden group-hover:overflow-y-auto group-hover:scrollbar-thin group-hover:scrollbar-track-hairline group-hover:scrollbar-thumb-centerline/30 transition-all duration-300 overscroll-contain"
      onWheel={handleWheel}
    >
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-moonlight/85 flex-shrink-0">
          <svg
            viewBox="0 0 16 16"
            className={`mt-0.5 h-4 w-4 flex-none shrink-0 ${featured ? "text-taillight" : "text-interstate"}`}
            aria-hidden="true"
          >
            <path
              d="M3 8.5l3.5 3.5L13 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  );
}

function FeatureListDesktop({ features, featured = false }: { features: string[]; featured?: boolean }) {
  const listRef = useRef<HTMLUListElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    const target = e.currentTarget;
    if (target.scrollHeight > target.clientHeight) {
      e.stopPropagation();
    }
  };

  return (
    <ul
      ref={listRef}
      className="flex flex-col gap-3 border-t border-hairline pt-6 h-full overflow-hidden group-hover:overflow-y-auto group-hover:scrollbar-thin group-hover:scrollbar-track-hairline group-hover:scrollbar-thumb-centerline/30 transition-all duration-300 overscroll-contain"
      onWheel={handleWheel}
    >
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-moonlight/85 flex-shrink-0">
          <svg
            viewBox="0 0 16 16"
            className={`mt-0.5 h-4 w-4 flex-none shrink-0 ${featured ? "text-taillight" : "text-interstate"}`}
            aria-hidden="true"
          >
            <path
              d="M3 8.5l3.5 3.5L13 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  );
}

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("logo");
  const currentTiers = CATEGORY_TIERS[activeCategory];

  const categoryLead = {
    logo: "Fixed-scope pricing, quoted upfront. Every package delivers a logo you own outright — no licensing, no hidden fees.",
    website: "Performance-focused websites built to convert. Clean code, fast Core Web Vitals, and full ownership — no monthly platform fees.",
    seo: "Search strategies that compound. Technical excellence, content that ranks, and links that build authority — all measured by revenue impact.",
    ecommerce: "Online stores that sell. Beautiful design, frictionless checkout, and the integrations you need to scale — on platforms you own.",
  };

  return (
    <section id="packages" className="relative scroll-mt-20 py-12 sm:py-20">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-taillight/[0.05] blur-[120px]"
      />

      <div className="shell relative flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          exit="05"
          eyebrow="Packages"
          align="center"
          lines={["Choose your tier.", "We'll handle the rest."]}
          lead={categoryLead[activeCategory]}
        />

        {/* Category Tabs */}
        <nav
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2"
          role="tablist"
          aria-label="Package categories"
        >
          {PACKAGE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as CategoryId)}
              className={`btn-transition relative px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taillight focus-visible:ring-offset-2 focus-visible:ring-offset-midnight ${
                activeCategory === cat.id
                  ? "bg-taillight text-white shadow-[0_8px_24px_-6px_rgba(255,64,48,0.5)]"
                  : "bg-panel text-asphalt/70 hover:text-moonlight hover:bg-deep/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Mobile: horizontal scroll carousel */}
        <div className="xl:hidden" role="tabpanel" id={`panel-${activeCategory}`} aria-labelledby={`tab-${activeCategory}`}>
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 px-6 scrollbar-none" style={{ WebkitOverflowScrolling: "touch" }}>
            {currentTiers.map((tier) => (
              <article
                key={tier.name}
                className={`group snap-start flex-none w-[88vw] max-w-[360px] relative flex flex-col gap-6 rounded-3xl p-6 sm:p-7 transition-all duration-500 ${
                  tier.featured
                    ? "border-glow bg-gradient-to-b from-panel to-midnight shadow-[0_32px_90px_-40px_rgba(255,64,48,0.55)]"
                    : "panel-card"
                }`}
                style={{ height: CARD_HEIGHT }}
              >
                {tier.featured && (
                  <span className="absolute hidden sm:block -top-3 left-6 rounded-full bg-taillight px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(255,64,48,0.7)]">
                    Most driven
                  </span>
                )}
                <header className="flex flex-col gap-3 flex-shrink-0">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-centerline">
                    {tier.name}
                  </h3>
                  <p className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-display text-3xl font-black tracking-tight text-moonlight xl:text-[2.6rem]">
                      {tier.price}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-asphalt">
                      {tier.unit}
                    </span>
                  </p>
                  <p className="min-h-[3.5rem] text-sm leading-relaxed text-asphalt">{tier.pitch}</p>
                </header>

                <div className="flex-1 min-h-0 overflow-hidden">
                  <FeatureList features={tier.features} featured={tier.featured} />
                </div>

                <LeadCta
                  service={tier.name}
                  className={`btn mt-auto w-full !py-4 flex-shrink-0 ${tier.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  {tier.cta}
                </LeadCta>
              </article>
            ))}
          </div>
          {/* Scroll hint */}
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/60 mt-2">
            ← Swipe to compare →
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden xl:grid gap-6 xl:grid-cols-4" role="tabpanel" id={`panel-${activeCategory}`} aria-labelledby={`tab-${activeCategory}`}>
          {currentTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.09} y={48} className="h-full">
              <article
                className={`group relative flex flex-col gap-7 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  tier.featured
                    ? "border-glow bg-gradient-to-b from-panel to-midnight shadow-[0_32px_90px_-40px_rgba(255,64,48,0.55)]"
                    : "panel-card hover:border-[#2a3a63]"
                }`}
                style={{ height: CARD_HEIGHT }}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-taillight px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(255,64,48,0.7)]">
                    Most driven
                  </span>
                )}
                <header className="flex flex-col gap-4 flex-shrink-0">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-centerline">
                    {tier.name}
                  </h3>
                  <p className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-display text-4xl font-black tracking-tight text-moonlight transition-colors duration-500 group-hover:text-white xl:text-[2.6rem]">
                      {tier.price}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-asphalt">
                      {tier.unit}
                    </span>
                  </p>
                  <p className="min-h-[4rem] text-base leading-relaxed text-asphalt">{tier.pitch}</p>
                </header>

                <div className="flex-1 min-h-0 overflow-hidden">
                  <FeatureListDesktop features={tier.features} featured={tier.featured} />
                </div>

                <LeadCta
                  service={tier.name}
                  className={`btn mt-auto w-full !py-4 flex-shrink-0 ${tier.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  {tier.cta}
                </LeadCta>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}