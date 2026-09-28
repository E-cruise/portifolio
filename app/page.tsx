import type { Metadata } from 'next'
import { FiArrowUpRight, FiMapPin, FiDownload } from 'react-icons/fi'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/fade-in'
import { CompanyLogo } from '@/components/company-logo'
import { Person, SocialLinks, Projects } from '@/config/site'
import { ExperiencesList } from '@/config/experience'
import ProjectCard from '@/components/project-card'

export const metadata: Metadata = {
  title: `${Person.name} | ${Person.role}`,
  description: Person.tagline,
}

export default function HomePage() {
  const yearsExperience = new Date().getFullYear() - Person.professionalSince
  const featuredProjects = Projects.slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-accent-glow),transparent)]" />

        <Container className="relative flex flex-col items-center pb-12 pt-16 text-center sm:pt-28 lg:pt-32">
          <FadeIn className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)]">
                <FiMapPin size={12} />
                {Person.location}
              </span>
            </div>

            <div>
              <p className="mb-2 font-mono text-sm text-[var(--color-accent)]">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {Person.name}
              </h1>
              <p className="mt-3 text-xl font-medium text-[var(--color-fg-muted)] sm:text-2xl">
                {Person.role}
              </p>
            </div>

            <p className="max-w-2xl text-lg text-[var(--color-fg-muted)]">
              {Person.tagline} Currently a{' '}
              <span className="text-[var(--color-fg)]">
                {Person.currentRole}
              </span>{' '}
              at{' '}
              <a
                href={Person.currentCompanyUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--color-accent)] hover:underline"
              >
                {Person.currentCompany}
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button href="/projects">
                View my work <FiArrowUpRight />
              </Button>
              <Button href="/contact" variant="outline">
                Get in touch
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-2">
              {SocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-12">
        <FadeIn>
          <div className="flex flex-col gap-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-8 py-6 sm:flex-row sm:items-center sm:gap-10">
            <p className="shrink-0 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-muted)]">
              {yearsExperience}+ years across
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {ExperiencesList.filter((company) => company.url).map(
                (company) => (
                  <CompanyLogo
                    key={company.name}
                    name={company.name}
                    light={company.logo.light}
                    dark={company.logo.dark}
                  />
                )
              )}
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="flex flex-col gap-8 py-16">
        <FadeIn className="flex items-end justify-between gap-4">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ fontVariantCaps: 'small-caps' }}
          >
            Selected work
          </h2>
          <Button href="/projects" variant="outline">
            All projects
          </Button>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="py-16">
        <FadeIn>
          <Card className="flex flex-col items-start gap-4 p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-[var(--color-fg-muted)]">
                I&apos;m always open to discussing automation, embedded
                systems and software work.
              </p>
            </div>
            <Button href="/contact">
              Get in touch <FiArrowUpRight />
            </Button>
          </Card>
        </FadeIn>
      </Container>
    </>
  )
}
