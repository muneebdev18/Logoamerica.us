import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/SplitWords";
import Counter from "@/components/Counter";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import {
  MANIFESTO,
  STATS,
  VALUES,
  DIFFERENT,
  COMPANY_FACTS,
  TESTIMONIALS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Logo America Brand Identity Studio",
  description:
    "Logo America is a premium brand identity studio founded in 2020 and operating nationwide from New York and Los Angeles. Meet the team, our principles, and what makes our logo design process different.",
  keywords: [
    "about logo america",
    "brand identity studio",
    "logo design agency about",
    "branding team USA",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Us | Logo America",
    description:
      "Founded in 2020, operating nationwide. The studio, the principles, and the process behind Logo America.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.logoamerica.us/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Logo America",
  url: "https://www.logoamerica.us/about",
  mainEntity: {
    "@type": "Organization",
    name: "Logo America",
    alternateName: "Logo America LLC",
    foundingDate: "2020",
    email: "contact@logoamerica.us",
    telephone: "+1-281-953-9004",
  },
};

const WORK = [
  {
    src: "/P12.jpg",
    alt: "Crimzon brand identity system — wordmark, palette, and applications",
    client: "Crimzon",
    meta: "Symbol · Accessible Palette · Signage Suite · 2024",
  },
  {
    src: "/P1.jpeg",
    alt: "Visuo full rebrand — wordmark, color system, and digital applications",
    client: "Visuo",
    meta: "Full Rebrand · Symbol Design · Identity System · 2025",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <PageHero
        eyebrow="About Us"
        title="Founded in 2020. ~Operating~ *nationwide.*"
        lead="Logo America is a premium brand identity studio crafting distinctive logos, complete brand systems, and strategic rebrands for growing businesses across the United States. From funded startups to established enterprises, we deliver identity work that drives recognition, trust, and measurable business results with fixed-scope pricing and full IP ownership."
        primary={{ label: "Get a free quote", href: "#contact" }}
        secondary={{ label: "Explore our services", href: "/services" }}
        meta={["Est. 2020", "New York · Los Angeles", "Nationwide"]}
        note="Reply within 1 business day"
        art="skyline"
        accent="#4a72ff"
      />

      {/* ── Who we are ─────────────────────────────────────── */}
      <section className="relative scroll-mt-20 py-14 sm:py-20 lg:py-24">
        <div className="shell flex flex-col gap-12 sm:gap-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              exit="04"
              eyebrow="Who we are"
              lines={["We design for", "the *real world.*"]}
            />
            <div className="flex flex-col gap-7 self-end">
              <Manifesto
                text={MANIFESTO}
                className="text-lg leading-relaxed text-moonlight md:text-xl lg:text-2xl"
              />
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-asphalt md:text-lg lg:text-xl">
                  A logo is only the beginning. Around it we build the color,
                  typography, iconography, and rules that keep a brand
                  recognizable whether it&rsquo;s managed by an in-house team or
                  an external partner and we hand over every file you will
                  ever need.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-base leading-relaxed text-asphalt md:text-lg lg:text-xl">
                  We operate from New York and Los Angeles for clients in every
                  time zone and the names on the door are the names in the
                  Slack channel.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {WORK.map((item, i) => (
              <Reveal key={item.client} delay={i * 0.1} y={44}>
                <figure className="group relative overflow-hidden rounded-3xl border border-hairline bg-deep">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/15 to-transparent"
                  />
                  <figcaption className="absolute inset-x-5 bottom-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 sm:bottom-5">
                    <span className="font-display text-lg font-black tracking-tight text-moonlight">
                      {item.client}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-centerline">
                      {item.meta}
                    </span>
                  </figcaption>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_bottom,rgba(255,64,48,0.18),transparent_65%)]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="relative scroll-mt-20 pb-14 sm:pb-20">
        <div className="shell">
          <Reveal>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-3 bg-midnight p-6 transition-colors duration-500 hover:bg-panel sm:p-8"
                >
                  <dt className="order-2 text-xs leading-snug text-asphalt sm:text-sm">
                    {stat.label}
                  </dt>
                  <dd
                    className="order-1 font-display text-3xl font-black uppercase tracking-tight text-moonlight sm:text-4xl md:text-5xl lg:text-6xl"
                    aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix}`}
                  >
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Our approach ───────────────────────────────────── */}
      <section className="relative scroll-mt-20 border-t border-hairline bg-deep/40 py-14 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-centerline/[0.05] blur-[130px]"
        />
        <div className="shell relative flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            exit="04"
            eyebrow="Our approach"
            align="center"
            lines={["Six principles.", "*One standard.*"]}
            lead="The rules we hold every engagement to the same ones we started with in 2020."
          />

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.index} delay={(i % 3) * 0.08} y={44}>
                <article className="group relative flex h-full flex-col gap-4 bg-midnight p-6 transition-colors duration-500 hover:bg-panel sm:p-8">
                  <span className="font-mono text-xs tracking-[0.2em] text-centerline">
                    /{value.index}
                  </span>
                  <div>
                    <h3 className="display-md mb-3 text-xl text-moonlight sm:text-2xl">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-asphalt">
                      {value.body}
                    </p>
                  </div>
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

      {/* ── What makes us different ────────────────────────── */}
      <section className="relative scroll-mt-20 py-14 sm:py-20 lg:py-24">
        <div className="shell flex flex-col gap-10 sm:gap-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              exit="04"
              eyebrow="What makes us different"
              lines={["Details that", "*compound.*"]}
            />
            <Reveal delay={0.1} className="self-end">
              <p className="text-base leading-relaxed text-moonlight md:text-lg lg:text-xl">
                None of these are extras or upcharges they are simply how the
                work gets done here. They are the reason clients stay an average
                of 3.2 years.
              </p>
            </Reveal>
          </div>

          <ol className="flex flex-col">
            {DIFFERENT.map((item, i) => (
              <li key={item.index} className="last:border-b last:border-hairline">
                <Reveal delay={i * 0.06} y={28}>
                  <div className="group grid gap-3 border-t border-hairline py-7 transition-colors duration-500 hover:border-taillight/40 sm:gap-5 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.15fr)] md:items-baseline md:gap-8 md:py-9 lg:gap-12">
                    <span className="font-display text-2xl font-black leading-none text-outline-faint transition-all duration-500 group-hover:text-taillight md:text-3xl">
                      {item.index}
                    </span>
                    <h3 className="display-md max-w-[22ch] text-lg text-moonlight transition-colors duration-500 group-hover:text-white sm:text-xl md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-asphalt md:text-base">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Company facts ──────────────────────────────────── */}
      <section className="relative scroll-mt-20 border-t border-hairline bg-deep/40 py-14 sm:py-20">
        <div className="shell flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            exit="04"
            eyebrow="The details"
            align="center"
            lines={["Where to find us.", "*When to call.*"]}
          />

          <Reveal>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {COMPANY_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-2.5 bg-midnight p-6 transition-colors duration-500 hover:bg-panel sm:p-7"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-centerline">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-base font-bold text-moonlight sm:text-lg">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-hairline bg-midnight px-6 py-7 text-center sm:px-8">
              <p className="max-w-2xl text-sm leading-relaxed text-asphalt sm:text-base">
                Prefer to skip the form? Call the studio directly and you&rsquo;ll
                reach a designer, not a queue.
              </p>
              <div className="flex flex-col items-center gap-3 font-mono text-[13px] text-asphalt sm:flex-row sm:gap-6 sm:text-[14px]">
                <a
                  href="tel:+12819539004"
                  className="transition-colors hover:text-centerline"
                >
                  ☎ 281 953 9004
                </a>
                <a
                  href="mailto:contact@logoamerica.us"
                  className="transition-colors hover:text-centerline"
                >
                  contact@logoamerica.us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="relative scroll-mt-20 py-14 sm:py-20 lg:py-24">
        <div className="shell flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            exit="04"
            eyebrow="In their words"
            align="center"
            lines={["Clients, quoted."]}
          />

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} y={40} className="h-full">
                <figure
                  className="review-card flex h-full flex-col gap-5 p-6 sm:p-7"
                  style={
                    {
                      "--glow-a": "rgba(255,64,48,0.20)",
                      "--glow-b": "rgba(245,183,0,0.12)",
                      "--card-accent": "rgba(255,64,48,0.5)",
                      "--shadow-color": "rgba(255,64,48,0.28)",
                    } as React.CSSProperties
                  }
                >
                  <span
                    aria-hidden="true"
                    className="serif-accent text-5xl leading-none text-taillight/30"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="text-[15px] leading-relaxed text-moonlight/90 sm:text-base">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-auto flex flex-col gap-1 border-t border-hairline pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-centerline">
                      {t.name}
                    </span>
                    <span className="text-sm text-asphalt">
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <SplitWords
              as="p"
              text="120+ verified reviews · 4.8 average across platforms"
              className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-asphalt sm:text-[11px]"
            />
          </Reveal>
        </div>
      </section>

      <PageCta
        title={
          <>
            Let&rsquo;s build something{" "}
            <em className="serif-accent text-taillight">worth remembering.</em>
          </>
        }
        lead="Tell us where your brand is headed. Within one business day a senior partner replies not a sales rep, not a chatbot."
        primaryLabel="Get a free quote"
        secondaryLabel="Start your mark"
        secondaryService="Full Brand Package"
        note="Est. 2020 · New York & Los Angeles · Nationwide"
      />

      <Contact />
    </PageShell>
  );
}
