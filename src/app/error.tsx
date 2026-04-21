"use client"

/** 라우트 세그먼트에서 예외가 발생했을 때 보여주는 오류 UI */
export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-lg space-y-4 rounded-2xl border border-red-500/30 bg-red-950/40 p-6 text-zinc-50"
    >
      <h1 className="text-lg font-semibold">문제가 발생했습니다</h1>
      <p className="text-sm leading-relaxed text-red-100/90">
        페이지를 렌더링하는 중 오류가 났습니다. 잠시 후 다시 시도해 주세요.
      </p>
      {error.digest ? <p className="text-xs text-red-200/70">오류 코드: {error.digest}</p> : null}
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
      >
        다시 시도
      </button>
    </div>
  )
}
