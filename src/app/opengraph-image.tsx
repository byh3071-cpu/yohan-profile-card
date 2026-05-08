import { ImageResponse } from "next/og"
import { STATIC_PROFILE } from "@/data/site-content"

export const alt = `${STATIC_PROFILE.displayName} — 프로필 카드`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** 동적 OG 이미지 — 카톡/X 등 공유 시 미리보기 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background:
            "radial-gradient(1200px 600px at 20% 0%, rgba(56,189,248,0.20), transparent 55%)," +
            "radial-gradient(900px 500px at 90% 0%, rgba(168,85,247,0.20), transparent 50%)," +
            "#050507",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Profile
        </div>
        <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1.05, marginBottom: 28 }}>
          {STATIC_PROFILE.displayName}
        </div>
        <div style={{ fontSize: 40, color: "#d4d4d8", lineHeight: 1.35, maxWidth: 900 }}>
          {STATIC_PROFILE.tagline}
        </div>
      </div>
    ),
    size,
  )
}
