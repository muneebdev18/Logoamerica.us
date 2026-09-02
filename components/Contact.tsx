import { Clock, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-12 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] sm:h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,64,48,0.14),transparent_65%)]"
      />

      <div className="shell relative grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4 sm:gap-6">
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="display-lg mt-3 sm:mt-4 max-w-[12ch]">
            Get A Free Quote<span className="text-taillight">.</span>
            </h2>
            <p className="mt-3 sm:mt-4 max-w-md text-base sm:text-lg leading-relaxed text-asphalt md:text-xl">
              Three quick steps and you&rsquo;re on your way. Within one
              business day a senior partner replies — not a sales rep, not a
              chatbot.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col gap-[15px] sm:gap-2.5 font-mono text-[14px] sm:text-[16px] capitaize text-asphalt"
          >
            <a
              href="mailto:contact@logoamerica.us"
              className="w-fit transition-colors hover:text-centerline flex items-center gap-2"
            >
              <Send />
              <span>contact@logoamerica.us </span>
            </a>
            <a
              href="tel:+12819539004"
              className="w-fit flex items-center gap-2 transition-colors hover:text-centerline"
            >
              <Phone />
              <span>281 953 9004</span>
            </a>
            <div className="w-fit flex items-center gap-2">
            <MapPin />
            <span>New York, NY · Los Angeles, CA</span>
            </div>
            <div className="w-fit flex items-center gap-2">
            <Clock />
            <span>Mon–Fri · 9–6 ET / 9–6 PT</span>
            </div>
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
