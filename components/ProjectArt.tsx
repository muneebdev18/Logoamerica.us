export default function ProjectArt({
  variant,
  accent,
  className = "",
}: {
  variant: "canyon" | "skyline" | "heartland" | "coast";
  accent: string;
  className?: string;
}) {
  const uid = `${variant}-${accent.replace("#", "")}`;

  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#101c38" />
          <stop offset="1" stopColor="#0a1220" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="0.5" cy="0.42" r="0.65">
          <stop offset="0" stopColor={accent} stopOpacity="0.32" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="400" fill={`url(#bg-${uid})`} />
      <rect width="640" height="400" fill={`url(#glow-${uid})`} />

      {variant === "canyon" && (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M-40 ${430 - i * 70} L ${240 + i * 60} ${140 + i * 34} L ${700} ${330 - i * 40}`}
              stroke={i === 2 ? "#EEF2F6" : accent}
              strokeWidth={i === 2 ? 2.5 : 1.2}
              opacity={0.25 + i * 0.16}
              fill="none"
            />
          ))}
          <circle cx="478" cy="118" r="46" fill="none" stroke="#EEF2F6" strokeWidth="1" opacity="0.5" />
          <circle cx="478" cy="118" r="20" fill={accent} opacity="0.85" />
        </g>
      )}

      {variant === "skyline" && (
        <g>
          {[...Array(11)].map((_, i) => {
            const h = 60 + ((i * 53) % 190);
            return (
              <rect
                key={i}
                x={40 + i * 52}
                y={340 - h}
                width="26"
                height={h}
                rx="3"
                fill={i % 4 === 2 ? "#EEF2F6" : accent}
                opacity={0.28 + ((i * 7) % 10) / 18}
              />
            );
          })}
          <line x1="24" y1="340" x2="616" y2="340" stroke="#EEF2F6" strokeWidth="1.5" opacity="0.55" />
          <circle cx="536" cy="96" r="30" fill="none" stroke="#EEF2F6" opacity="0.45" />
        </g>
      )}

      {variant === "heartland" && (
        <g>
          {[0, 1, 2].map((row) =>
            [...Array(9)].map((_, i) => (
              <circle
                key={`${row}-${i}`}
                cx={56 + i * 66}
                cy={110 + row * 90 + Math.sin(i * 1.4 + row) * 22}
                r={7 + ((i * 3) % 5) * 2.4}
                fill="none"
                stroke={i % 3 === 1 ? "#EEF2F6" : accent}
                strokeWidth="1.4"
                opacity={0.35 + row * 0.2}
              />
            ))
          )}
          <path
            d="M-20 360 C 160 300, 320 400, 480 330 S 680 300, 720 340"
            stroke="#EEF2F6"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            strokeDasharray="14 12"
          />
        </g>
      )}

      {variant === "coast" && (
        <g>
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M-20 ${120 + i * 44} C 140 ${80 + i * 44}, 260 ${170 + i * 40}, 420 ${130 + i * 42} S 620 ${100 + i * 44}, 700 ${140 + i * 42}`}
              stroke={i % 2 ? accent : "#EEF2F6"}
              strokeWidth={i === 3 ? 2.4 : 1.2}
              fill="none"
              opacity={0.3 + i * 0.11}
            />
          ))}
          <circle cx="150" cy="86" r="8" fill={accent} />
        </g>
      )}

      {/* faint route grid */}
      <g opacity="0.08" stroke="#EEF2F6">
        {[...Array(9)].map((_, i) => (
          <line key={`v${i}`} x1={(i + 1) * 64} y1="0" x2={(i + 1) * 64} y2="400" />
        ))}
        {[...Array(5)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={(i + 1) * 66} x2="640" y2={(i + 1) * 66} />
        ))}
      </g>
    </svg>
  );
}
