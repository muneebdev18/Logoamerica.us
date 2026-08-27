import Reveal from "./Reveal";
import ContactForm from "./contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] sm:h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,64,48,0.14),transparent_65%)]"
      />

      <div className="shell relative grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4 sm:gap-6">
          <Reveal>
            <p className="eyebrow">Exit 06 — Final destination</p>
            <h2 className="display-lg mt-3 sm:mt-4 max-w-[12ch]">
              Start your mark<span className="text-taillight">.</span>
            </h2>
            <p className="mt-3 sm:mt-4 max-w-md text-base sm:text-lg leading-relaxed text-asphalt md:text-xl">
              Three quick stops and you&rsquo;re on the road. Within one
              business day a senior partner replies — not a sales rep, not a
              chatbot.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col gap-2 sm:gap-2.5 font-mono text-[14px] sm:text-[16px] capitaize text-asphalt"
          >
            <a
              href="mailto:contact@logoamerica.us"
              className="w-fit transition-colors hover:text-centerline"
            >
              contact@logoamerica.us →
            </a>
            <span>Brooklyn, NY · Los Angeles, CA</span>
            <span>Mon–Fri · 9–6 ET / 9–6 PT</span>
          </Reveal>

          {/* <Reveal delay={0.15}>
            <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-deep/50 p-4">
              <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-centerline" />
              <p className="text-xs text-asphalt">
                Currently booking{" "}
                <strong className="text-moonlight">two marks for Q4 2026</strong> —
                the earlier you write, the more road we have.
              </p>
            </div>
          </Reveal> */}
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
