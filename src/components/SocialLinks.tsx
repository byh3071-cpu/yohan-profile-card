import type { SocialKind, SocialLink } from "@/types"

type SocialLinksProps = {
  items: SocialLink[]
}

const LABELS: Record<SocialKind, string> = {
  github: "GitHub",
  email: "Email",
  x: "X",
  linkedin: "LinkedIn",
  blog: "Blog",
}

/** 소셜 링크 아이콘 묶음. 비어 있으면 자체적으로 null을 반환해 빈 섹션이 생기지 않음 */
export function SocialLinks({ items }: SocialLinksProps) {
  const visible = items.filter((item) => item.href.trim().length > 0)
  if (visible.length === 0) return null

  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
      {visible.map((item) => {
        const label = LABELS[item.kind]
        const isExternal = /^https?:\/\//i.test(item.href)
        return (
          <li key={item.kind}>
            <a
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-sky-500/40 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <SocialIcon kind={item.kind} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function SocialIcon({ kind }: { kind: SocialKind }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  } as const

  switch (kind) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 4.99 3.24 9.22 7.74 10.72.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.15.69-3.81-1.34-3.81-1.34-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.51-.29-5.16-1.26-5.16-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.71 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.66.79.55 4.5-1.5 7.74-5.73 7.74-10.72C23.33 5.56 18.27.5 12 .5Z" />
        </svg>
      )
    case "email":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      )
    case "x":
      return (
        <svg {...common}>
          <path d="M18.244 2H21l-6.54 7.47L22 22h-6.91l-4.74-6.29L4.8 22H2.04l7.01-8L2 2h7.06l4.27 5.73L18.24 2Zm-2.42 18h1.91L7.27 4H5.27l10.55 16Z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0Z" />
        </svg>
      )
    case "blog":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      )
  }
}
