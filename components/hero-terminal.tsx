'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Embedded Systems Engineer',
  'Automation Specialist',
  'University Tutor',
  'Full-Stack Developer',
]

export function HeroRoles() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
        setFade(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="inline-block transition-all duration-400"
      style={{
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      {roles[index]}
    </span>
  )
}

const stats = [
  {
    label: 'Years of Experience',
    value: `${new Date().getFullYear() - 2020}+`,
    accent: true,
  },
  { label: 'Current Role', value: 'Graduate Fellow (Lecturer)', accent: false },
  { label: 'Primary Focus', value: 'Embedded & Automation', accent: false },
  { label: 'Based In', value: 'Njeru, Uganda', accent: false },
]

export function HeroBento() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 transition-all duration-500 ${
            stat.accent
              ? 'col-span-2 sm:col-span-1'
              : ''
          }`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${i * 100 + 200}ms`,
          }}
        >
          {stat.accent ? (
            <div className="text-3xl font-bold text-[var(--color-accent)]">
              {stat.value}
            </div>
          ) : (
            <div className="text-lg font-semibold">{stat.value}</div>
          )}
          <div className="mt-1 text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
