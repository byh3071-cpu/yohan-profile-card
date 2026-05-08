import type { StackItem } from "@/types/profile"

type StackTagsProps = {
  items: StackItem[]
}

/** 기술 스택 태그 뱃지 묶음 */
export function StackTags({ items }: StackTagsProps) {
  return (
    <section aria-label="기술 스택" className="space-y-3">
      <h2 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
