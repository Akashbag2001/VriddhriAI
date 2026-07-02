import { ImageResponse } from "next/og";

export const alt = "VriddhiAI — AI-Powered Web Agency & Software Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #0d0d1a 0%, #1a0533 50%, #0d0d1a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.18)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.18)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(167, 139, 250, 0.3)",
            background: "rgba(124, 58, 237, 0.15)",
            color: "#a78bfa",
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 32,
            letterSpacing: "0.05em",
          }}
        >
          * AI-Powered Freelance Agency
        </div>

        {/* Logo / Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 20,
            display: "flex",
          }}
        >
          VriddhiAI
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          High-performance websites, custom AI chatbots & digital experiences that grow your business.
        </div>

        {/* Bottom pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["Next.js", "React", "AI Integration", "Custom Chatbots", "E-Commerce"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.45)",
                fontSize: 16,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 40,
            color: "rgba(167,139,250,0.5)",
            fontSize: 18,
            fontWeight: 500,
            display: "flex",
          }}
        >
          vriddhri-ai-yh23.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
