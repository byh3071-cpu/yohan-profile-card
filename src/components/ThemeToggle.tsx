"use client"

/**
 * 다크/라이트 토글 — 클릭 시 `<html>`의 `dark` 클래스를 뒤집고 localStorage에 저장.
 * 두 아이콘 모두 마크업에 두고 `dark:hidden` / `hidden dark:inline`으로 노출 분기해
 * SSR ↔ 클라이언트 hydration 불일치를 피함.
 */
export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    } catch {
      // 사파리 사적 모드 등 storage 거부 — 토글은 세션 한정으로 유지
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="테마 전환"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-sky-500/50 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:shadow-none dark:hover:text-sky-300 dark:focus-visible:ring-offset-zinc-950"
    >
      <SunIcon className="hidden dark:inline" />
      <MoonIcon className="dark:hidden" />
    </button>
  )
}

const ICON_PROPS = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

function SunIcon({ className }: { className?: string }) {
  return (
    <svg {...ICON_PROPS} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg {...ICON_PROPS} className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}
