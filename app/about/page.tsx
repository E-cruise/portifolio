import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/fade-in'
import { Education } from '@/config/education'
import {
  SkillCategoryOrder,
  SkillCategoryLabels,
  Skills,
} from '@/config/skills'
import { Person } from '@/config/site'

export const metadata: Metadata = {
  title: 'About',
  description: Person.summary,
}

export default function AboutPage() {
  return (
    <Container className="flex flex-col gap-16 py-16 sm:py-24">
      <FadeIn className="flex flex-col gap-6">
        <SectionHeading eyebrow="About" title="About me." />
        <p className="max-w-2xl text-[var(--color-fg-muted)]">
          {Person.summary}
        </p>
      </FadeIn>

      <FadeIn className="flex flex-col gap-6">
        <h2
          className="text-2xl font-semibold tracking-tight"
          style={{ fontVariantCaps: 'small-caps' }}
        >
          Education
        </h2>
        <div className="flex flex-col gap-4">
          {Education.map((entry) => (
            <Card key={entry.degree} className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{entry.degree}</h3>
                <span className="font-mono text-xs text-[var(--color-fg-muted)]">
                  {entry.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                {entry.institute}
                {entry.detail ? ` · ${entry.detail}` : ''}
              </p>
              {entry.bullets && (
                <ul className="mt-3 flex flex-col gap-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm text-[var(--color-fg-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="flex flex-col gap-6">
        <h2
          className="text-2xl font-semibold tracking-tight"
          style={{ fontVariantCaps: 'small-caps' }}
        >
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {SkillCategoryOrder.map((category) => (
            <Card key={category} className="p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
                {SkillCategoryLabels[category]}
              </h3>
              <ul className="flex flex-col gap-3">
                {Skills[category].map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-sm"
                  >
                    <skill.icon
                      size={18}
                      className="shrink-0 text-[var(--color-accent)]"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Container>
  )
}
