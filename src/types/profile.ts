/** 프로필 카드에 표시되는 사람/소개 정보 */
export type ProfileSummary = {
  displayName: string
  tagline: string
  /** 공개 정적 자산 경로 또는 외부 URL */
  avatarSrc: string
}

/** 기술 스택 뱃지 한 줄 */
export type StackItem = {
  label: string
}

/** 지원하는 소셜 링크 종류. 아이콘·기본 라벨이 이 값에 따라 결정됨 */
export type SocialKind = "github" | "email" | "x" | "linkedin" | "blog"

/** 프로필 헤더에 노출되는 외부 링크. `href`가 비어 있으면 렌더링하지 않음 */
export type SocialLink = {
  kind: SocialKind
  /** GitHub/X/LinkedIn/Blog는 https URL, email은 `mailto:` */
  href: string
}

/** 프로젝트 카드 한 장 */
export type ProjectItem = {
  id: string
  title: string
  description: string
  /** 비어 있으면 카드가 "준비 중" 비활성 상태로 렌더링됨 */
  href?: string
}
