import Image from "next/image"
import type { ProfileSummary } from "@/types/profile"

type ProfileHeaderProps = {
  profile: ProfileSummary
}

/** 이름 + 한 줄 소개 + 프로필 이미지 */
export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
      <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg shadow-black/40 ring-1 ring-white/5">
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
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Profile</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">{profile.displayName}</h1>
        <p className="max-w-xl text-base leading-relaxed text-zinc-400">{profile.tagline}</p>
      </div>
    </header>
  )
}
