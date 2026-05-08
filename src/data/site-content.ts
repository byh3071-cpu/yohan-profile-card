import type { ProfileSummary, ProjectItem, SocialLink, StackItem } from "@/types"

/** 메인 프로필 (DB 연동 전 정적 SoT) */
export const STATIC_PROFILE: ProfileSummary = {
  displayName: "백요한",
  tagline: "AI 기반 1인 기업 준비 중인 바이브코더",
  avatarSrc: "/avatar.svg",
}

/**
 * About 본문 — 한 항목이 한 단락. 비우면 섹션이 자동으로 숨김.
 * 모바일에서 이 배열에 문장만 추가하면 노출됨.
 */
export const STATIC_BIO: string[] = []

/**
 * 소셜 링크 (표시 순서 고정). `href`를 채우면 자동 노출, 비어 있으면 미렌더.
 * 모바일에서 이 파일만 열어 한 줄씩 채우면 됨.
 */
export const STATIC_SOCIAL_LINKS: SocialLink[] = [
  { kind: "github", href: "" },
  { kind: "email", href: "" },
  { kind: "blog", href: "" },
  { kind: "x", href: "" },
  { kind: "linkedin", href: "" },
]

/** 기술 스택 태그 (표시 순서 고정) */
export const STATIC_STACK: StackItem[] = [
  { label: "Cursor" },
  { label: "Claude" },
  { label: "Next.js" },
  { label: "Supabase" },
  { label: "n8n" },
  { label: "Notion" },
  { label: "TypeScript" },
]

/** 프로젝트 카드 (추후 Supabase로 대체 가능) — `href`를 채우면 카드가 활성화됨 */
export const STATIC_PROJECTS: ProjectItem[] = [
  {
    id: "proj-ai-dictionary",
    title: "AI 사전 뷰어",
    description: "노션 DB 기반 AI 용어 사전 웹앱",
    stack: ["Next.js", "Notion API", "TypeScript"],
    status: "wip",
  },
  {
    id: "proj-youtube-summary",
    title: "유튜브 요약봇",
    description: "n8n + OpenAI로 유튜브 영상 자동 요약",
    stack: ["n8n", "OpenAI", "Webhook"],
    status: "wip",
  },
  {
    id: "proj-yohan-os",
    title: "요한 OS",
    description: "노션 기반 AI 1인기업 운영 시스템",
    stack: ["Notion", "Claude", "Cursor"],
    status: "draft",
  },
]
