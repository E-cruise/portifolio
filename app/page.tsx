import type { Metadata } from 'next'
import { FiArrowUpRight } from 'react-icons/fi'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/fade-in'
import { HeroPhoto } from '@/components/hero-photo'
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
      <Container className="flex flex-col-reverse items-center gap-12 py-16 sm:py-24 md:flex-row md:items-center md:justify-between">
        <FadeIn className="flex max-w-xl flex-col gap-6">
          <Badge>Based in {Person.location}</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {Person.name}
          </h1>
          <p className="text-lg text-[var(--color-fg-muted)]">
            {Person.tagline} Currently a {Person.currentRole} at{' '}
            <a
              href={Person.currentCompanyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              {Person.currentCompany}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">
              View my work <FiArrowUpRight />
            </Button>
            <Button href="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            {SocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <HeroPhoto />
        </FadeIn>
      </Container>

      <Container className="pb-16">
        <FadeIn>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-muted)]">
            {yearsExperience}+ years across companies in
          </p>
          <div className="flex flex-wrap items-center gap-6">
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
