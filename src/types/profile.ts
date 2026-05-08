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

/** 프로젝트 카드 한 장 */
export type ProjectItem = {
  id: string
  title: string
  description: string
  /** 비어 있으면 카드가 "준비 중" 비활성 상태로 렌더링됨 */
  href?: string
}
