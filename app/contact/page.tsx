import { Metadata } from "next";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import PhotoFrame from "@/components/PhotoFrame";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Logo America — Talk to a Designer",
  description:
    "Get in touch with Logo America. Send a brief, call 281 953 9004 or email contact@logoamerica.us — a senior partner replies within one business day. Studios in New York and Los Angeles, serving clients nationwide.",
  keywords: [
    "contact logo design agency",
    "hire a logo designer",
    "brand identity studio contact",
    "logo design quote",
    "New York design studio",
    "Los Angeles design studio",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us | Logo America",
    description:
      "Send a brief, call or email — a senior partner replies within one business day.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.logoamerica.us/contact",
  },
};

const LANES = [
  {
    icon: Phone,
    title: "Call the studio",
    value: "281 953 9004",
    href: "tel:+12819539004",
    note: "Straight through to a designer, Mon–Fri.",
  },
  {
    icon: Mail,
    title: "Email the studio",
    value: "contact@logoamerica.us",
    href: "mailto:contact@logoamerica.us",
    note: "Briefs, decks, existing files all welcome.",
  },
  {
    icon: ArrowUpRight,
    title: "Write the brief",
    value: "Two steps, 2 minutes",
    href: "#contact",
    note: "The full form below. Fastest way to a quote.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Send the brief",
    body: "Two short steps — who you are, then what needs drawing and when you need it. No account, no signup, no credit card.",
  },
  {
    n: "02",
    title: "A senior partner replies",
    body: "Within one business day, a designer who could actually run your job answers back. Not a sales rep, not a chatbot.",
  },
  {
    n: "03",
    title: "Fixed-scope quote",
    body: "We scope the work and price it upfront — one-time, no licensing, no hidden fees. You decide from there.",
  },
];

const STUDIOS = [
  {
    city: "New York",
    region: "East Coast studio",
    hours: "Mon–Fri · 9–6 ET",
    location: "New York, NY",
    img: "/images/ny-studio.jpg",
    alt: "Design studio desk overlooking the New York skyline",
  },
  {
    city: "Los Angeles",
    region: "West Coast studio",
    hours: "Mon–Fri · 9–6 PT",
    location: "Los Angeles, CA",
    img: "/images/la-studio.jpg",
    alt: "Bright Los Angeles studio desk against a white brick wall",
  },
];

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Logo America",
    url: "https://www.logoamerica.us/contact",
    inLanguage: "en-US",
    about: {
      "@type": "Organization",
      name: "Logo America",
      url: "https://www.logoamerica.us",
      email: "contact@logoamerica.us",
      telephone: "+1-281-953-9004",
      foundingDate: "2020",
      areaServed: "US",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
      ],
      openingHours: "Mo-Fr 09:00-18:00",
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Contact"
        title="Say hello. ~We'll reply~ *within a day.*"
        lead="Three ways in — a brief, a call, or an email. However you reach us, a senior partner answers within one business day. Not a sales rep, not a chatbot."
        primary={{ label: "Write your brief", href: "#contact" }}
        secondary={{ label: "Call the studio", href: "tel:+12819539004" }}
        meta={["Reply within 1 business day", "New York · Los Angeles", "Nationwide"]}
        note="Mon–Fri · 9–6 ET / 9–6 PT"
        art="heartland"
        accent="#ff4030"
      />

      {/* ── Direct lanes ───────────────────────────────────── */}
      <section className="relative py-12 sm:py-16">
        <div className="shell grid grid-cols-1 gap-5 sm:grid-cols-3">
          {LANES.map((lane, i) => {
            const Icon = lane.icon;
            return (
              <Reveal key={lane.title} delay={i * 0.08} y={40}>
                <a
                  href={lane.href}
                  className="group panel-card relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2a3a63] sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-white/[0.03] text-centerline transition-all duration-500 group-hover:border-centerline/60 group-hover:bg-centerline/10 group-hover:shadow-[0_0_24px_-6px_rgba(245,183,0,0.55)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <span className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt">
                      {lane.title}
                    </span>
                    <span className="text-lg font-bold tracking-tight break-words text-moonlight transition-colors duration-500 group-hover:text-white sm:text-xl">
                      {lane.value}
                    </span>
                    <span className="text-sm leading-relaxed text-asphalt">
                      {lane.note}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-centerline via-taillight to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="absolute right-5 top-5 h-4 w-4 text-asphalt/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-centerline"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── The form (identical to the homepage component) ── */}
      <Contact />

      {/* ── What happens next ──────────────────────────────── */}
      <section className="relative scroll-mt-24 border-t border-hairline py-14 sm:py-20 lg:py-24">
        <div className="shell flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            exit="06"
            eyebrow="After you press send"
            lines={["Three steps.", "*Then we start drawing.*"]}
            lead="No black box. Here is exactly what happens between your brief landing and the first concepts on your screen."
          />

          <div className="relative">
            <Rule className="mb-8 sm:mb-10" />

            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1} y={44}>
                  <li className="group relative flex h-full flex-col gap-4">
                    <span className="font-display text-5xl font-black leading-none text-outline-faint transition-all duration-500 group-hover:text-outline sm:text-6xl">
                      {step.n}
                    </span>
                    <h3 className="text-xl font-semibold text-moonlight sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-asphalt sm:text-base">
                      {step.body}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-1 h-px w-12 bg-gradient-to-r from-taillight to-transparent transition-all duration-700 group-hover:w-24"
                    />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Studios ────────────────────────────────────────── */}
      <section
        id="studios"
        className="relative scroll-mt-24 border-y border-hairline bg-deep/40 py-14 sm:py-20 lg:py-24"
      >
        <div className="shell flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            exit="07"
            eyebrow="Where we work"
            align="center"
            lines={["Two studios.", "*One road.*"]}
            lead="Coast to coast, staffed through both time zones — so a reply never has to wait for the other side of the country to wake up."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {STUDIOS.map((studio, i) => (
              <Reveal key={studio.city} delay={i * 0.1} y={48}>
                <PhotoFrame
                  src={studio.img}
                  alt={studio.alt}
                  ratio="aspect-[16/11] sm:aspect-[16/10]"
                  className="h-full"
                >
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-centerline">
                      {studio.region}
                    </span>
                    <h3 className="display-md text-2xl text-moonlight sm:text-3xl">
                      {studio.city}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt sm:text-[11px]">
                      {studio.hours} · {studio.location}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-4 rounded-2xl border border-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                </PhotoFrame>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-asphalt/70 sm:text-[11px]">
              Remote-friendly · Serving clients in every US time zone
            </p>
          </Reveal>
        </div>
      </section>

      <PageCta
        title={
          <>
            Prefer to just{" "}
            <em className="serif-accent text-taillight">pick up the phone?</em>
          </>
        }
        lead="Call the studio and you'll get a designer, not a menu. Or send the brief whenever it suits you — we read both the same day."
        primaryLabel="Write your brief"
        secondaryLabel="☎ 281 953 9004"
        secondaryHref="tel:+12819539004"
        note="Mon–Fri · 9–6 ET / 9–6 PT · Reply within 1 business day"
      />
    </PageShell>
  );
}
