import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mitchell Bassett | Growth Marketing & AI Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          position: "relative",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={`v-${i}`}
              style={{
                position: "absolute",
                left: `${(i / 12) * 100}%`,
                top: 0,
                bottom: 0,
                width: 1,
                backgroundColor: "#ffffff",
              }}
            />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`h-${i}`}
              style={{
                position: "absolute",
                top: `${(i / 6) * 100}%`,
                left: 0,
                right: 0,
                height: 1,
                backgroundColor: "#ffffff",
              }}
            />
          ))}
        </div>

        {/* Gradient glow behind initials */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(45,212,191,0.08) 50%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* MB Initials */}
        <div
          style={{
            fontSize: 160,
            fontWeight: 800,
            letterSpacing: -6,
            background: "linear-gradient(135deg, #6366f1 0%, #2dd4bf 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
            marginBottom: 20,
          }}
        >
          MB
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#ffffff",
            display: "flex",
            letterSpacing: -1,
            marginBottom: 12,
          }}
        >
          Mitchell Bassett
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            display: "flex",
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          GTM Systems &bull; Automation &bull; Execution
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
