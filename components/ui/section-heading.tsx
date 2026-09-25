import { cn } from '@/lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {eyebrow && (
        <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-accent)]">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ fontVariantCaps: 'small-caps' }}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-[var(--color-fg-muted)]">
          {description}
        </p>
      )}
    </div>
  )
}
