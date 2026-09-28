import type { Metadata } from 'next'
import Image from 'next/image'
import {
  FiArrowUpRight,
  FiCpu,
  FiSettings,
  FiCode,
  FiDatabase,
  FiUsers,
  FiSmartphone,
} from 'react-icons/fi'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/fade-in'
import { HeroRoles, HeroBento } from '@/components/hero-terminal'
import { CompanyLogo } from '@/components/company-logo'
import { Person, SocialLinks } from '@/config/site'
import { ExperiencesList } from '@/config/experience'

export const metadata: Metadata = {
  title: `${Person.name} | ${Person.role}`,
  description: Person.tagline,
}

const services = [
  {
    icon: FiCpu,
    title: 'Embedded Systems & IoT',
    description:
      'Programming microcontrollers and sensor networks with Arduino and Raspberry Pi — from circuit design to working prototypes.',
    image: '/services/embedded.jpg',
  },
  {
    icon: FiSettings,
    title: 'Process Automation & RPA',
    description:
      'End-to-end workflow automation with Zapier, n8n, Make.com and Robomotion that eliminates repetitive manual tasks.',
    image: '/services/automation.jpg',
  },
  {
    icon: FiCode,
    title: 'Web Development',
    description:
      'Full-stack applications built with Next.js, React and Node.js — from landing pages to complex platforms with API integrations.',
    image: '/services/webdev.jpg',
  },
  {
    icon: FiDatabase,
    title: 'Database Engineering',
    description:
      'Schema design, query optimisation and ongoing management across MySQL, PostgreSQL and MongoDB.',
    image: '/services/database.jpg',
  },
  {
    icon: FiUsers,
    title: 'Tutoring & Training',
    description:
      'University-level instruction in database systems, operating systems, microprocessors and embedded programming.',
    image: '/services/tutoring.jpg',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps built with React Native and TypeScript for iOS and Android.',
    image: '/services/mobile.jpg',
  },
]

export default function HomePage() {
  const yearsExperience = new Date().getFullYear() - Person.professionalSince

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-accent-glow),transparent)]" />

        <Container className="relative grid gap-12 pb-16 pt-20 sm:pt-28 md:grid-cols-2 md:items-center md:gap-16 lg:pt-32">
          <FadeIn className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span className="text-sm text-[var(--color-fg-muted)]">
                Available for opportunities
              </span>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                Hello, I&apos;m
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {Person.name}
              </h1>
              <p className="mt-3 text-xl text-[var(--color-fg-muted)] sm:text-2xl">
                <HeroRoles />
              </p>
            </div>

            <p className="max-w-lg text-[var(--color-fg-muted)]">
              {Person.tagline} Currently a {Person.currentRole} at{' '}
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

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href="/projects">
                View my work <FiArrowUpRight />
              </Button>
              <Button href="/contact" variant="outline">
                Get in touch
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-1">
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

          <FadeIn delay={0.15}>
            <HeroBento />
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
          <div>
            <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-accent)]">
              Services
            </span>
            <h2
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ fontVariantCaps: 'small-caps' }}
            >
              What I do
            </h2>
          </div>
          <Button href="/projects" variant="outline">
            View projects
          </Button>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.06}>
              <Card className="group flex h-full flex-col overflow-hidden p-0">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)]/80 backdrop-blur-sm">
                    <service.icon
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {service.description}
                  </p>
                </div>
              </Card>
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
                I&apos;m always open to discussing embedded systems,
                automation, software development or tutoring opportunities.
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
