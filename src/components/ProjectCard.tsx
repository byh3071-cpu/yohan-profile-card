import type { ProjectItem, ProjectStatus } from "@/types/profile"

type ProjectCardProps = {
  project: ProjectItem
}

const STATUS_META: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  },
  wip: {
    label: "WIP",
    className: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  },
  draft: {
    label: "Draft",
    className: "border-zinc-400/30 bg-zinc-400/10 text-zinc-300",
  },
}

/** 프로젝트 한 건을 카드 형태로 표시. `href`가 비어 있으면 "준비 중" 비활성 상태 */
export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.href?.trim()
  const isLinked = Boolean(href)
  const isExternal = isLinked && /^https?:\/\//i.test(href ?? "")
  const status = project.status ? STATUS_META[project.status] : null
  const stack = project.stack?.filter((s) => s.trim().length > 0) ?? []

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/60 p-5 shadow-lg shadow-black/30 ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-sky-900/20">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
          {status ? (
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${status.className}`}
            >
              {status.label}
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
        {stack.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-6">
        {isLinked ? (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-sky-300 transition hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            링크 열기
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500">
            준비 중
            <span aria-hidden>·</span>
          </span>
        )}
      </div>
    </article>
  )
}
