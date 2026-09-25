import { cn } from '@/lib/cn'

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-fg-muted)]',
        className
      )}
    >
      {children}
    </span>
  )
}
