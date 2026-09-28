'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function CompanyLogo({
  name,
  light,
  dark,
  variant = 'full',
}: {
  name: string
  light: string
  dark: string
  variant?: 'full' | 'circle'
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

    if (variant === 'circle') {
      return (
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] font-mono text-xs text-[var(--color-fg-muted)]">
          {initials}
        </div>
      )
    }

    return (
      <div className="flex h-10 items-center justify-center rounded-lg border border-[var(--color-border)] px-4 font-mono text-sm text-[var(--color-fg-muted)]">
        {initials}
      </div>
    )
  }

  if (variant === 'circle') {
    return (
      <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[var(--color-bg-elevated)]">
        <Image
          src={src}
          alt={name}
          fill
          sizes="44px"
          className="object-contain p-1"
          onError={() => setFailed(true)}
        />
      </div>
    )
  }

  return (
    <div className="relative h-8 w-24 shrink-0">
      <Image
        src={src}
        alt={name}
        fill
        sizes="96px"
        className="object-contain object-left"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
