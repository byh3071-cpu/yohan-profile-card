import Image from "next/image"
import type { ProfileSummary, SocialLink } from "@/types/profile"
import { SocialLinks } from "@/components/SocialLinks"

type ProfileHeaderProps = {
  profile: ProfileSummary
  socialLinks?: SocialLink[]
}

/** 이름 + 한 줄 소개 + 프로필 이미지 + (옵션) 소셜 링크 */
export function ProfileHeader({ profile, socialLinks }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
      <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/5 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40 dark:ring-white/5">
        <Image
          src={profile.avatarSrc}
          alt={`${profile.displayName} 프로필 이미지`}
          width={112}
          height={112}
          className="h-full w-full object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Profile
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {profile.displayName}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {profile.tagline}
        </p>
        {socialLinks && socialLinks.length > 0 ? <SocialLinks items={socialLinks} /> : null}
      </div>
    </header>
  )
}
