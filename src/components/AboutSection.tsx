type AboutSectionProps = {
  paragraphs: string[]
}

/** About 본문 — 단락 배열. 빈 배열이면 null 반환해 빈 섹션이 생기지 않음 */
export function AboutSection({ paragraphs }: AboutSectionProps) {
  const visible = paragraphs.map((p) => p.trim()).filter((p) => p.length > 0)
  if (visible.length === 0) return null

  return (
    <section aria-label="About" className="space-y-3">
      <h2 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">About</h2>
      <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {visible.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
