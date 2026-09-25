"use client";

import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import LeadCta from "./LeadCta";

export default function PageCta({
  title,
  lead,
  primaryLabel = "Get a free quote",
  secondaryLabel,
  secondaryService,
  secondaryHref,
  note = "Reply within 1 business day · A senior partner, not a sales rep",
}: {
  title?: React.ReactNode;
  lead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryService?: string;
  secondaryHref?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-deep/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-full w-[420px] bg-taillight/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-full w-[380px] bg-interstate/[0.07] blur-[100px]"
      />
      <div aria-hidden="true" className="centerline-track absolute inset-y-8 left-0 w-[3px] opacity-20 sm:left-6" />

      <div className="shell relative flex flex-col items-start justify-between gap-7 py-14 sm:gap-10 sm:py-20 md:py-24 lg:flex-row lg:items-center">
        <Reveal className="max-w-2xl">
          <h2 className="display-lg max-w-[14ch]">
            {title ?? (
              <>
                Ready to be{" "}
                <em className="serif-accent text-taillight">remembered?</em>
              </>
            )}
          </h2>
          {lead && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-asphalt sm:text-lg">
              {lead}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1} className="flex w-full flex-col items-start gap-4 lg:w-auto lg:shrink-0">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                {primaryLabel}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            {secondaryLabel &&
              (secondaryHref ? (
                <a
                  href={secondaryHref}
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  {secondaryLabel}
                </a>
              ) : (
                <LeadCta
                  service={secondaryService}
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  {secondaryLabel}
                </LeadCta>
              ))}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt">
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
