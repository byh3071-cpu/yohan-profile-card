import type { ProjectItem } from "@/types/profile"

type ProjectCardProps = {
  project: ProjectItem
}

/** 프로젝트 한 건을 카드 형태로 표시. `href`가 비어 있으면 "준비 중" 비활성 상태 */
export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.href?.trim()
  const isLinked = Boolean(href)
  const isExternal = isLinked && /^https?:\/\//i.test(href ?? "")

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/60 p-5 shadow-lg shadow-black/30 ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-sky-900/20">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
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
