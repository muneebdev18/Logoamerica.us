import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import LeadCta from "./LeadCta";
import { TIERS, ADDONS, FAQS } from "@/lib/data";

const CARD_HEIGHT = "580px"; // Fixed card height

export default function Packages() {
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
          lead="Fixed-scope pricing, quoted upfront. Every package delivers a logo you own outright — no licensing, no hidden fees."
        />

        {/* Mobile: horizontal scroll carousel */}
        <div className="xl:hidden">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6  px-6 scrollbar-none" style={{ WebkitOverflowScrolling: "touch" }}>
            {TIERS.map((tier) => (
              <article
                key={tier.name}
                className={`snap-start flex-none w-[88vw] max-w-[360px] group relative flex flex-col gap-6 rounded-3xl p-6 sm:p-7 transition-all duration-500 ${
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
                  <ul className="flex flex-col gap-3 border-t border-hairline pt-4 h-full overflow-y-auto scrollbar-thin scrollbar-track-hairline scrollbar-thumb-centerline/30">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-moonlight/85 flex-shrink-0">
                        <svg
                          viewBox="0 0 16 16"
                          className={`mt-0.5 h-4 w-4 flex-none shrink-0 ${tier.featured ? "text-taillight" : "text-interstate"}`}
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
        <div className="hidden xl:grid gap-6 xl:grid-cols-4">
          {TIERS.map((tier, i) => (
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
                  <ul className="flex flex-col gap-3 border-t border-hairline pt-6 h-full overflow-y-auto scrollbar-thin scrollbar-track-hairline scrollbar-thumb-centerline/30">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-moonlight/85 flex-shrink-0">
                        <svg
                          viewBox="0 0 16 16"
                          className={`mt-0.5 h-4 w-4 flex-none shrink-0 ${tier.featured ? "text-taillight" : "text-interstate"}`}
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

        {/* Fast lane note */}
        {/* <Reveal>
          <p className="mx-auto flex w-fit items-center gap-3 rounded-full border border-centerline/30 bg-centerline/[0.06] px-5 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-centerline">
            <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-centerline" />
            Fast lane: half the timeline on any package, +30% — two slots a month
          </p>
        </Reveal> */}

        {/* Add-ons */}
        {/* <div className="flex flex-col gap-8">
          <Reveal y={16}>
            <h3 className="eyebrow">Bolt-on extras</h3>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADDONS.map((addon, i) => (
              <Reveal key={addon.name} delay={(i % 3) * 0.07} y={28}>
                <div className="group flex items-start justify-between gap-4 rounded-2xl border border-hairline bg-deep/40 p-5 sm:p-6 transition-all duration-400 hover:-translate-y-1 hover:border-interstate/50 hover:bg-panel">
                  <div>
                    <h4 className="text-sm font-semibold text-moonlight">{addon.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-asphalt">{addon.body}</p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wide text-centerline">
                    {addon.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div> */}

        {/* FAQ */}
        <Reveal className="mx-auto w-full max-w-3xl pt-12 sm:pt-20">
          {/* <h3 className="eyebrow mb-6">Before you ask</h3> */}
          <SectionHeading
          exit="05"
          eyebrow="Questions"
          align="center"
          lines={["Frequently Asked", "Questions"]}
          lead=""
        />
          <div className="flex mt-15 mx-auto w-full sm:w-[70%] flex-col divide-y divide-hairline rounded-2xl border border-hairline bg-deep/40">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group px-5 py-5 sm:px-6 sm:py-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-medium text-moonlight marker:hidden text-base">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="font-mono text-taillight transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pt-4 text-sm leading-relaxed text-asphalt">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
