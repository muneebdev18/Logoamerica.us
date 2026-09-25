"use client";

import LeadCta from "./LeadCta";
import type { Tier } from "@/lib/data";

/** Same fixed card height the homepage Packages section uses. */
export const TIER_CARD_HEIGHT = "580px";

function FeatureList({
  features,
  featured = false,
  padding = "pt-6",
}: {
  features: string[];
  featured?: boolean;
  padding?: string;
}) {
  const handleWheel = (e: React.WheelEvent) => {
    const target = e.currentTarget;
    if (target.scrollHeight > target.clientHeight) e.stopPropagation();
  };

  return (
    <ul
      onWheel={handleWheel}
      className={`flex h-full flex-col gap-3 overflow-hidden border-t border-hairline ${padding} transition-all duration-300 group-hover:overflow-y-auto group-hover:scrollbar-thin group-hover:scrollbar-track-hairline group-hover:scrollbar-thumb-centerline/30 overscroll-contain`}
    >
      {features.map((feature) => (
        <li
          key={feature}
          className="flex flex-shrink-0 items-start gap-3 text-sm leading-relaxed text-moonlight/85"
        >
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

export default function TierCard({ tier }: { tier: Tier }) {
  return (
    <article
      className={`group relative flex h-full flex-col gap-6 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 sm:p-7 xl:gap-7 xl:p-8 ${
        tier.featured
          ? "border-glow bg-gradient-to-b from-panel to-midnight shadow-[0_32px_90px_-40px_rgba(255,64,48,0.55)]"
          : "panel-card hover:border-[#2a3a63]"
      }`}
      style={{ height: TIER_CARD_HEIGHT }}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-taillight px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(255,64,48,0.7)] sm:left-7">
          Most driven
        </span>
      )}

      <header className="flex flex-shrink-0 flex-col gap-3 xl:gap-4">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-centerline">
          {tier.name}
        </h3>
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-3xl font-black tracking-tight text-moonlight transition-colors duration-500 group-hover:text-white xl:text-[2.6rem]">
            {tier.price}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-asphalt">
            {tier.unit}
          </span>
        </p>
        <p className="min-h-[3.5rem] text-sm leading-relaxed text-asphalt xl:min-h-[4rem] xl:text-base">
          {tier.pitch}
        </p>
      </header>

      <div className="min-h-0 flex-1 overflow-hidden">
        <FeatureList
          features={tier.features}
          featured={tier.featured}
          padding="pt-4 xl:pt-6"
        />
      </div>

      <LeadCta
        service={tier.name}
        className={`btn mt-auto w-full flex-shrink-0 !py-4 ${tier.featured ? "btn-primary" : "btn-ghost"}`}
      >
        {tier.cta}
      </LeadCta>
    </article>
  );
}
