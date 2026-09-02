
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Logo America — We design the marks America runs on";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a1220",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#97a1b3",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <svg width="44" height="48" viewBox="0 0 40 44">
            <path
              d="M20 2.5c4.6 2.9 9.5 4.3 15.5 4.3.8 8.7-.3 21.6-4.6 28.1C27.6 39.8 23.6 41.9 20 43c-3.6-1.1-7.6-3.2-10.9-8.1C4.8 28.4 3.7 15.5 4.5 6.8 10.5 6.8 15.4 5.4 20 2.5Z"
              fill="#FF4030"
              stroke="#EEF2F6"
              strokeWidth="2"
            />
            <path d="M11 16.5h18M11 22h18M13 27.5h14" stroke="#0A1220" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          {/* <img alt="OG Image" width={44} height={44} src={"/logo-hz.png"} /> */}
          Logo America —  Top Logo Design Company In Texas
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#EEF2F6",
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          We design the marks
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#EEF2F6",
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "transparent", WebkitTextStroke: "3px #FF4030" }}>America</span>
          &nbsp;runs on.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#97a1b3",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          <span>NYC → LA · Mile 0 of 2,789</span>
          <span style={{ color: "#F5B700" }}>-----------</span>
          <span>logoamerica.agency</span>
        </div>
      </div>
    ),
    size
  );
}
