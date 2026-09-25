import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceRow from "@/components/ServiceRow";
import Rule from "@/components/Rule";
import Contact from "@/components/Contact";
import { SERVICES, PROCESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Logo Design, Brand Identity & Rebranding",
  description:
    "Logo America offers custom logo design, brand identity systems, strategic rebranding, naming & verbal identity, motion logos, and brand guidelines — all delivered in-house by a senior team.",
  keywords: [
    "logo design services",
    "brand identity services",
    "rebranding services",
    "naming agency",
    "motion logo design",
    "brand guidelines",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Services | Logo America",
    description:
      "Six brand identity disciplines, one senior in-house team — strategy, design, and delivery.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.logoamerica.us/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Brand Identity Design",
  name: "Logo America Brand Identity Services",
  provider: {
    "@type": "Organization",
    name: "Logo America",
    url: "https://www.logoamerica.us",
  },
  areaServed: "US",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.logoamerica.us/services#contact",
    servicePhone: "+1-281-953-9004",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Brand Identity Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.body },
    })),
  },
};

const MEDIA: Record<
  string,
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string }
> = {
  "01": {
    type: "image",
    src: "/P6-2.jpg",
    alt: "A presentation grid of custom logo designs created by Logo America",
  },
  "02": {
    type: "image",
    src: "/P1.jpeg",
    alt: "Visuo brand identity system — logo, palette, typography and applications",
  },
  "03": {
    type: "image",
    src: "/P12.jpg",
    alt: "Crimzon rebrand — identity system with palette, digital product and signage",
  },
  "04": {
    type: "image",
    src: "/P5.jpeg",
    alt: "A selection of custom wordmarks and business names designed by Logo America",
  },
  "05": {
    type: "video",
    src: "/P4.mp4",
    alt: "Animated logo motion study created by Logo America",
  },
  "06": {
    type: "image",
    src: "/P-NEW-1.jpg",
    alt: "Brand guideline applications — logo, stationery and merchandise rollout",
  },
};

const CAPTIONS: Record<string, string> = {
  "01": "Wordmarks · Symbols · Monograms",
  "02": "Color · Type · Iconography · Layout",
  "03": "Audits · Rollout · Legacy brands",
  "04": "Names · Taglines · Voice & tone",
  "05": "Logo animation · App icons · Favicon suites",
  "06": "Guideline books · Asset libraries · Training",
};

const ASSURANCES = [
  {
    title: "Full IP ownership",
    body: "Intellectual property transfers to you upon final payment, in writing. No licensing traps, no usage fees, no fine print.",
  },
  {
    title: "Three guarantees",
    body: "100% unique design, 100% satisfaction, and 100% money-back on every logo package we deliver.",
  },
  {
    title: "Fixed-scope pricing",
    body: "Quoted upfront before work begins — no licensing, no hidden fees, and never a charge for a phone call.",
  },
  {
    title: "30 days post-launch",
    body: "Every complete file suite ships with a guideline book and a month of support to keep the rollout clean.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <PageHero
        eyebrow="Services"
        title="From one logo to a full *rebrand.*"
        lead="Every aspect of brand identity, handled in-house by our senior team — from the first strategy session to the final file handoff. No outsourcing, no account layers, just experienced designers delivering work built to perform at every touchpoint."
        primary={{ label: "Get a free quote", href: "#contact" }}
        secondary={{ label: "See our packages", href: "/packages" }}
        meta={["6 core disciplines", "In-house senior team", "Full IP ownership"]}
        note="Fixed-scope pricing · Quoted upfront"
        art="heartland"
        accent="#ff4030"
      />

      {/* ── Service index ──────────────────────────────────── */}
      <section className="relative scroll-mt-20 border-b border-hairline bg-deep/40 py-10 sm:py-14">
        <div className="shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <SectionHeading
            exit="01"
            eyebrow="What we do"
            lines={["Six ways in.", "*One standard.*"]}
            lead="Pick a discipline below, or start with a conversation and we'll tell you exactly what your brand needs — and what it doesn't."
          />
          <Reveal delay={0.1} className="lg:shrink-0">
            <nav aria-label="Service sections" className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <a
                  key={s.index}
                  href={`#service-${s.index}`}
                  className="group flex items-center gap-2 rounded-full border border-hairline bg-midnight/60 px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-asphalt transition-all duration-300 hover:border-taillight/60 hover:text-moonlight sm:px-4"
                >
                  <span className="text-centerline">/{s.index}</span>
                  <span className="hidden sm:inline">{s.title}</span>
                  <span className="sm:hidden">{s.title.split(" ")[0]}</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* ── Service details ────────────────────────────────── */}
      <section className="relative scroll-mt-20 py-14 sm:py-20 lg:py-24">
        <div className="shell flex flex-col gap-16 sm:gap-24 lg:gap-28">
          {SERVICES.map((service, i) => (
            <div
              key={service.index}
              id={`service-${service.index}`}
              className="scroll-mt-28"
            >
              <ServiceRow
                service={service}
                media={MEDIA[service.index]}
                caption={CAPTIONS[service.index]}
                flip={i % 2 === 1}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Assurances ─────────────────────────────────────── */}
      <section className="relative scroll-mt-20 border-y border-hairline bg-deep/40 py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-taillight/[0.05] blur-[130px]"
        />
        <div className="shell relative flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            exit="01"
            eyebrow="Always included"
            align="center"
            lines={["Standard on", "*every engagement.*"]}
            lead="These aren't add-ons or phase-two upgrades. They are part of how the work is delivered, on every project."
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
                  <p className="text-sm leading-relaxed text-asphalt">
                    {item.body}
                  </p>
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

      {/* ── Process strip ──────────────────────────────────── */}
      <section className="relative scroll-mt-20 py-14 sm:py-20 lg:py-24">
        <div className="shell flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            exit="01"
            eyebrow="How it runs"
            align="center"
            lines={["One path.", "Five *milestones.*"]}
            lead="A proven sequence refined across every brand launch we've shipped. You'll always know which milestone you're at — and exactly what comes next."
          />

          <div className="relative">
            <Rule className="mb-8 sm:mb-10" />

            <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
              {PROCESS.map((step, i) => (
                <li key={step.step} className="h-full">
                  <Reveal delay={i * 0.07} y={40} className="h-full">
                    <article className="panel-card group relative flex h-full flex-col gap-3 p-5 transition-colors duration-500 hover:border-centerline/40 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display text-2xl font-black text-[#f4b710] transition-colors duration-500 group-hover:text-centerline sm:text-3xl">
                          {step.step}
                        </span>
                        <span className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-asphalt">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="display-md text-lg sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-asphalt">
                        {step.body}
                      </p>
                      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-3">
                        {step.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-1.5 text-[11px] text-moonlight/80"
                          >
                            <span className="inline-block h-1 w-2.5 rounded-full bg-interstate" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageCta
        title={
          <>
            Tell us what you&rsquo;re{" "}
            <em className="serif-accent text-taillight">building.</em>
          </>
        }
        lead="A senior partner reads every brief and replies within one business day with a clear scope, a fixed price, and a timeline."
        primaryLabel="Request a free quote"
        secondaryLabel="Or call the studio"
        secondaryHref="tel:+12819539004"
        note="☎ 281 953 9004 · Mon–Fri · 9–6 ET / 9–6 PT"
      />

      <Contact />
    </PageShell>
  );
}
