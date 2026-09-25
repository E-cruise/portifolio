import Link from 'next/link'
import { cn } from '@/lib/cn'

type CommonProps = {
  children: React.ReactNode
  className?: string
  variant?: 'solid' | 'outline'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200'

const variants = {
  solid: 'bg-[var(--color-accent)] text-[#0a0a0a] hover:opacity-90',
  outline:
    'border border-[var(--color-border)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
}

export function Button({
  href,
  children,
  className,
  variant = 'solid',
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const classes = cn(base, variants[variant], className)

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
