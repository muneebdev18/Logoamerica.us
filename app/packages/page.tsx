import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TierCard from "@/components/TierCard";
import Contact from "@/components/Contact";
import { TIERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packages & Pricing | Logo Design Packages from $25",
  description:
    "Compare every Logo America package — Basic $25, Advanced Standard $75, Elite Premium $115 and Combo $250. Every inclusion listed, fixed one-time pricing, 24–48 hour turnaround, 100% ownership rights.",
  keywords: [
    "logo design packages",
    "logo design pricing",
    "cheap logo design",
    "professional logo package",
    "logo and website package",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Packages & Pricing | Logo America",
    description:
      "Four fixed-scope logo packages, every inclusion listed. One-time pricing, full IP ownership.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.logoamerica.us/packages",
  },
};

const LEAD =
  "Fixed-scope pricing, quoted upfront. Every package delivers a logo you own outright — no licensing, no hidden fees.";

const ASSURANCES = [
  {
    title: "Fixed, one-time pricing",
    body: "A single one-time charge per package. No monthly fees, no licensing costs, and nothing hidden in the fine print.",
  },
  {
    title: "24–48 hour turnaround",
    body: "All four packages are built for speed — concepts land within 24 to 48 hours of an approved brief.",
  },
  {
    title: "100% ownership rights",
    body: "Every package transfers full ownership of the finished work to you. The mark is yours, with no strings attached.",
  },
  {
    title: "Complete file delivery",
    body: "Every format you will ever need, organized in a folder structure your developers will actually thank you for.",
  },
];

/* Rows are built strictly from the feature lists in TIERS — nothing is invented. */
const COMPARE: { label: string; values: string[] }[] = [
  {
    label: "Price",
    values: ["$25 one-time", "$75 one-time", "$115 one-time", "$250 one-time"],
  },
  {
    label: "Logo concepts",
    values: ["2 custom concepts", "5 concepts", "8 concepts", "Custom logo design"],
  },
  { label: "Revisions", values: ["3", "Up to 5", "Unlimited", "Unlimited"] },
  {
    label: "Design team",
    values: [
      "1 dedicated designer",
      "2 dedicated designers",
      "3 award-winning designers",
      "Project manager",
    ],
  },
  {
    label: "Turnaround",
    values: ["24–48 hours", "24–48 hours", "24–48 hours", "24–48 hours"],
  },
  {
    label: "File formats",
    values: [
      "JPEG",
      "PNG, JPEG, PDF",
      "AI, PSD, EPS, PNG, JPG, PDF, PES",
      "—",
    ],
  },
  {
    label: "Also included",
    values: [
      "—",
      "Free icon · Color & grayscale",
      "Stationery · Usage guidelines · 10% off website order",
      "Brand guidelines · Website up to 5 pages · Premium stock photos",
    ],
  },
  {
    label: "Ownership rights",
    values: [
      "100% ownership rights",
      "100% ownership rights",
      "100% ownership rights",
      "100% ownership rights — no monthly or hidden fees",
    ],
  },
];

export default function PackagesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Packages"
        title="Choose your ~tier.~ *We'll handle* the rest."
        lead={LEAD}
        primary={{ label: "Get a free quote", href: "#contact" }}
        secondary={{ label: "Compare the tiers", href: "#compare" }}
        meta={["4 packages", "24–48 hour turnaround", "100% ownership rights"]}
        note="All prices are one-time · No monthly fees"
        art="canyon"
        accent="#ff4030"
      />

      {/* ── Package cards ──────────────────────────────────── */}
      <section id="packages" className="relative scroll-mt-24 py-14 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-taillight/[0.05] blur-[120px]"
        />

        <div className="shell relative flex flex-col gap-12 sm:gap-14">
          <SectionHeading
            exit="05"
            eyebrow="Logo packages"
            align="center"
            lines={["Four tiers.", "Every inclusion *listed.*"]}
            lead="No stripped-down previews. Everything each package includes is printed below, exactly as we deliver it."
          />

          {/* Mobile / tablet: horizontal snap carousel (same as homepage) */}
          <div className="xl:hidden">
            <Reveal y={40}>
              <div
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 scrollbar-none"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {TIERS.map((tier) => (
                  <div
                    key={tier.name}
                    className="w-[88vw] max-w-[360px] flex-none snap-start"
                  >
                    <TierCard tier={tier} />
                  </div>
                ))}
              </div>
            </Reveal>
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/60">
              ← Swipe to compare →
            </p>
          </div>

          {/* Desktop: 4-up grid (same as homepage) */}
          <div className="hidden gap-6 xl:grid xl:grid-cols-4">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.09} y={48} className="h-full">
                <TierCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison matrix ──────────────────────────────── */}
      <section
        id="compare"
        className="relative scroll-mt-24 border-y border-hairline bg-deep/40 py-14 sm:py-20 lg:py-24"
      >
        <div className="shell flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            exit="05"
            eyebrow="Side by side"
            align="center"
            lines={["Compare", "*at a glance.*"]}
            lead="Every row is drawn straight from the package feature lists — what a tier doesn't include, it says so."
          />

          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-hairline bg-midnight">
              <div
                className="overflow-x-auto scrollbar-none"
                role="region"
                aria-label="Package comparison table"
                tabIndex={0}
              >
                <table className="w-full min-w-[52rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-hairline">
                      <th
                        scope="col"
                        className="sticky left-0 z-10 bg-midnight px-5 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt sm:px-6"
                      >
                        Package
                      </th>
                      {TIERS.map((tier) => (
                        <th
                          key={tier.name}
                          scope="col"
                          className={`px-5 py-5 align-bottom sm:px-6 ${
                            tier.featured ? "bg-taillight/[0.06]" : ""
                          }`}
                        >
                          <span className="flex flex-col gap-1.5">
                            <span
                              className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                                tier.featured ? "text-taillight" : "text-centerline"
                              }`}
                            >
                              {tier.name}
                            </span>
                            <span className="font-display text-2xl font-black tracking-tight text-moonlight sm:text-3xl">
                              {tier.price}
                            </span>
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {COMPARE.map((row, rowIndex) => (
                      <tr
                        key={row.label}
                        className={`border-b border-hairline/70 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.025] ${
                          rowIndex % 2 === 1 ? "bg-white/[0.012]" : ""
                        }`}
                      >
                        <th
                          scope="row"
                          className="sticky left-0 z-10 bg-midnight px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-asphalt sm:px-6 sm:py-5"
                        >
                          {row.label}
                        </th>
                        {row.values.map((value, colIndex) => (
                          <td
                            key={`${row.label}-${colIndex}`}
                            className={`px-5 py-4 align-top text-sm leading-relaxed text-moonlight/85 sm:px-6 sm:py-5 ${
                              TIERS[colIndex]?.featured ? "bg-taillight/[0.06]" : ""
                            } ${value === "—" ? "text-asphalt/45" : ""}`}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/70 sm:text-[11px]">
                — indicates the item is not listed in that package
              </p>
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt/60 xl:hidden">
                ← Swipe to compare →
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Assurances ─────────────────────────────────────── */}
      <section className="relative scroll-mt-24 py-14 sm:py-20">
        <div className="shell flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            exit="05"
            eyebrow="The fine print"
            align="center"
            lines={["Plain words.", "*No surprises.*"]}
          />

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {ASSURANCES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} y={40}>
                <article className="group relative flex h-full flex-col gap-4 bg-midnight p-6 transition-colors duration-500 hover:bg-panel sm:p-7">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-centerline/40 font-mono text-[11px] text-centerline transition-colors duration-500 group-hover:border-centerline group-hover:bg-centerline/10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-md text-lg text-moonlight sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-asphalt">{item.body}</p>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-taillight via-centerline to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={
          <>
            Still deciding? Let&rsquo;s{" "}
            <em className="serif-accent text-taillight">talk it through.</em>
          </>
        }
        lead="Tell us about the project and we'll recommend the right tier — or tell you outright if you don't need one of them yet."
        primaryLabel="Get a free quote"
        secondaryLabel="Compare on the phone"
        secondaryHref="tel:+12819539004"
        note="☎ 281 953 9004 · Reply within 1 business day"
      />

      <Contact />
    </PageShell>
  );
}
