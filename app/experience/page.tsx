import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/fade-in'
import { CompanyLogo } from '@/components/company-logo'
import { ExperiencesList } from '@/config/experience'
import { Person } from '@/config/site'

export const metadata: Metadata = {
  title: 'Experience',
  description: `Work experience and career history of ${Person.name}, ${Person.role}.`,
}

export default function ExperiencePage() {
  return (
    <Container className="flex flex-col gap-12 py-16 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Career"
          title="Places I've worked."
          description={`Since ${Person.professionalSince}, I've had the privilege of working with several companies that have enabled me to hone my skills and talents.`}
        />
      </FadeIn>

      <ol className="relative flex flex-col gap-10 border-l border-[var(--color-border)] pl-8">
        {ExperiencesList.map((company, index) => (
          <FadeIn key={company.name} delay={index * 0.05}>
            <li className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)]" />
              <div className="flex flex-wrap items-center gap-3">
                <CompanyLogo
                  name={company.name}
                  light={company.logo.light}
                  dark={company.logo.dark}
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {company.position}
                  </h3>
                  <p className="text-sm text-[var(--color-fg-muted)]">
                    {company.url ? (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[var(--color-accent)]"
                      >
                        {company.name}
                      </a>
                    ) : (
                      company.name
                    )}
                    {company.subDetail ? ` · ${company.subDetail}` : ''}
                  </p>
                  <p className="font-mono text-xs text-[var(--color-fg-muted)]">
                    {company.duration}
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {company.roles.map((role, roleIndex) => (
                  <li
                    key={roleIndex}
                    className="flex gap-2 text-sm text-[var(--color-fg-muted)]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Container>
  )
}
