'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function CompanyLogo({
  name,
  light,
  dark,
}: {
  name: string
  light: string
  dark: string
}) {
  const [failed, setFailed] = useState(false)
  const { resolvedTheme } = useTheme()
  const src = resolvedTheme === 'light' ? light : dark

  if (failed) {
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()

    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] font-mono text-xs text-[var(--color-fg-muted)]">
        {initials}
      </div>
    )
  }

  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--color-bg-elevated)]">
      <Image
        src={src}
        alt={name}
        fill
        sizes="40px"
        className="object-contain p-1"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
