import { AboutSection } from "@/components/AboutSection"
import { ProfileHeader } from "@/components/ProfileHeader"
import { ProjectCard } from "@/components/ProjectCard"
import { StackTags } from "@/components/StackTags"
import {
  STATIC_BIO,
  STATIC_PROFILE,
  STATIC_PROJECTS,
  STATIC_SOCIAL_LINKS,
  STATIC_STACK,
} from "@/data/site-content"

/** 메인 랜딩: 프로필 + About + 스택 + 프로젝트 카드 (데이터는 `site-content` 정적 SoT) */
export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col gap-10 px-4 py-16 sm:px-8">
      <ProfileHeader profile={STATIC_PROFILE} socialLinks={STATIC_SOCIAL_LINKS} />

      <AboutSection paragraphs={STATIC_BIO} />

      <StackTags items={STATIC_STACK} />

      <section aria-label="프로젝트" className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-100">Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {STATIC_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 pt-8 text-center text-xs text-zinc-400">
        Built with Next.js App Router
      </footer>
    </div>
  )
}
