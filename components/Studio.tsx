"use client";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Manifesto from "./Manifesto";
import { STATS, MANIFESTO } from "@/lib/data";

export default function Studio() {
  return (
    <section id="studio" className="relative scroll-mt-20 py-12 sm:py-20">
      <div className="shell flex flex-col gap-12 sm:gap-16">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            exit="04"
            eyebrow="About Us"
            lines={["Founded in 2020.", "Operating", "nationwide."]}
          />
          <div className="flex flex-col gap-8 self-end">
            <Manifesto
              text={MANIFESTO}
              className="text-lg leading-relaxed text-moonlight md:text-xl md:leading-relaxed lg:text-2xl"
            />
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-asphalt md:text-xl">
                Nine years and 85 launches later, we operate from New York and
                Los Angeles for clients in every time zone. The names on the
                door are the names in the Slack channel.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
            <dl className="grid grid-cols-1 gap-px sm:gap-px lg:gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
{STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-3 bg-midnight p-6 sm:p-8">
                  <dt className="order-2 text-xs sm:text-sm leading-snug text-asphalt">{stat.label}</dt>
                  <dd
                    className="order-1 font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-moonlight md:text-5xl lg:text-6xl"
                    aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix}`}
                  >
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
