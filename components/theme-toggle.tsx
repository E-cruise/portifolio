'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}
