import { cn } from '@/lib/cn'

export function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]',
        className
      )}
    >
      {children}
    </div>
  )
}
