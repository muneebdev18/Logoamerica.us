import SplitWords from "./SplitWords";
import Reveal from "./Reveal";

export default function SectionHeading({
  exit,
  eyebrow,
  lines,
  lead,
  align = "left",
}: {
  exit: string;
  eyebrow: string;
  lines: string[];
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-1 sm:gap-2 ${centered ? "items-center text-center" : ""}`}>
      <Reveal y={16}>
        <span
          className="inline-flex items-center gap-3 my-3 rounded-md border border-centerline/30 bg-centerline/[0.06] px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.24em] text-centerline"
          style={centered ? undefined : { alignSelf: "flex-start" }}
        >
          
          {eyebrow}
        </span>
      </Reveal>

      {lines.map((line, i) => (
        <SplitWords
          key={i}
          text={line}
          delay={i * 0.08}
          className={`display-lg max-w-[18ch] ${centered ? "" : ""}`}
        />
      ))}

      {lead && (
        <Reveal delay={0.15}>
          <p
            className={`max-w-xl text-lg leading-relaxed text-asphalt md:text-xl ${
              centered ? "mx-auto" : ""
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
