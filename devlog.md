---
id: devlog-profile-card
date: 2026-04-22
tags: [devlog, ticket-003, yohan-profile-card, nextjs]
---

# devlog — yohan-profile-card

## TICKET-002 — 개인 프로필 카드 웹페이지

| 항목 | 내용 |
| --- | --- |
| 날짜 | 2026-04-22 |
| 범위 | App Router 메인 페이지, 컴포넌트 분리, Supabase 연동 준비(RLS SQL), 환경 변수, 오류/피드백 UI |

### 구현 요약

- 루트에 비어 있는 `app/` 디렉터리가 남으면 Next가 `src/app` 대신 이를 우선해 `/` 라우트가 사라지므로 **빈 `app/` 폴더는 제거**함.
- `src/types/*`에 `ProfileSummary`, `StackItem`, `ProjectItem`, `PortfolioLoadResult` 등 도메인 타입을 먼저 정의한 뒤 UI·로더에 반영.
- `src/app/page.tsx`는 Server Component로 `loadPortfolioProjects()`를 호출해 DB가 비어 있거나 환경 변수가 없을 때는 정적 프로젝트 목록으로 폴백.
- `src/components/ProfileHeader.tsx`, `StackTags.tsx`, `ProjectCard.tsx`, `FeedbackBanner.tsx`로 UI를 분리하고 다크 톤 카드 스타일을 기본으로 적용(`html.dark`).
- Supabase: `@supabase/ssr` 기반 `src/lib/supabase/server.ts`, RLS 예시는 `supabase/migrations/20260422000000_profile_card_rls.sql`에 정리(공개 SELECT + 소유자 CUD).
- 사용자 피드백: `FeedbackBanner`(닫기 가능), 라우트 예외용 `src/app/error.tsx`.
- 설정: `.env.example`에 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` 안내(`.gitignore`에서 `!.env.example`로 커밋 가능하게 예외 처리).
- 정적 자산: `public/avatar.svg` 플레이스홀더.

### 후속 작업 아이디어

- (TICKET-003 이후) 콘텐츠 확장 시에도 `src/data/site-content.ts` 단일 SoT 유지 여부만 결정하면 됨.

---

## TICKET-003 — Supabase 제거·정적 데이터 전용

| 항목 | 내용 |
| --- | --- |
| 날짜 | 2026-04-22 |
| 범위 | Supabase 미사용 결정에 따른 코드·의존성·문서 정리 |

### 구현 요약

- 상단 `FeedbackBanner` 및 “데이터 출처: …” UI 제거.
- `src/app/page.tsx`는 `STATIC_PROFILE` / `STATIC_STACK` / `STATIC_PROJECTS`만 `site-content`에서 읽도록 동기 컴포넌트로 단순화.
- 제거: `src/lib/supabase/`, `src/lib/portfolio.ts`, `src/lib/env.ts`, `src/types/portfolio.ts`, `src/components/FeedbackBanner.tsx`, `supabase/` 마이그레이션, `.env.example`, 비어진 `src/lib/` 디렉터리.
- npm 의존성에서 `@supabase/ssr`, `@supabase/supabase-js` 제거( `package.json` 반영 후 `npm install`로 lock 정리).
- `.gitignore`의 `!.env.example` 예외 제거(`.env.example` 파일 삭제에 맞춤).
