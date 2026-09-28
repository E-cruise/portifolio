import type { Metadata } from 'next'
import {
  FiMapPin,
  FiBriefcase,
  FiBook,
  FiCpu,
  FiShield,
  FiWifi,
  FiLayers,
} from 'react-icons/fi'
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

const highlights = [
  {
    icon: FiBriefcase,
    label: 'Current Role',
    value: `${Person.currentRole}`,
    sub: Person.currentCompany,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: Person.location,
  },
  {
    icon: FiCpu,
    label: 'Core Focus',
    value: 'Embedded Systems & Automation',
  },
  {
    icon: FiBook,
    label: 'Education',
    value: 'MSc Cyber-Physical Systems',
    sub: 'BSc Computer Engineering',
  },
]

export default function AboutPage() {
  const yearsExperience = new Date().getFullYear() - Person.professionalSince

  return (
    <Container className="flex flex-col gap-16 py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <FadeIn className="flex flex-col gap-6 lg:col-span-3">
          <SectionHeading eyebrow="About" title="About me." />
          <div className="flex flex-col gap-4 text-[var(--color-fg-muted)]">
            <p>
              I am a computer engineer specialising in embedded systems and
              process automation. My work sits at the intersection of hardware
              and software, from programming microcontrollers and sensor
              networks with Arduino and Raspberry Pi to designing end-to-end
              RPA workflows with Zapier, n8n and Make.com that eliminate
              repetitive manual work.
            </p>
            <p>
              I also build full-stack web applications with Next.js and
              Node.js, and manage the databases that keep everything connected.
              As a Graduate Fellow (Lecturer) at Busitema University I lecture
              courses in database systems, operating systems, microprocessors
              and embedded programming, bringing real-world engineering
              practice into the classroom.
            </p>
            <p>
              Whether I am wiring up a circuit, writing an API integration or
              walking students through a lab session, the goal is the same:
              reliable systems and clear understanding.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col lg:col-span-2">
          <Card className="flex h-full flex-col justify-between p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
                At a glance
              </span>
              <span className="text-2xl font-bold text-[var(--color-accent)]">
                {yearsExperience}+ yrs
              </span>
            </div>
            <div className="flex flex-col gap-5">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                    <item.icon
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium">{item.value}</p>
                    {item.sub && (
                      <p className="text-xs text-[var(--color-fg-muted)]">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>

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
        <div>
          <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-accent)]">
            Research
          </span>
          <h2
            className="mt-2 text-2xl font-semibold tracking-tight"
            style={{ fontVariantCaps: 'small-caps' }}
          >
            Research interests
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              icon: FiShield,
              title: 'Embedded Systems for Road Safety',
              description:
                'Designing sensor-based systems for real-time hazard detection, speed monitoring and driver alertness using microcontrollers and IoT to reduce road accidents in East Africa.',
            },
            {
              icon: FiLayers,
              title: 'Cyber-Physical Systems',
              description:
                'Modelling and building tightly coupled computational and physical systems, where software control loops interact directly with hardware sensors and actuators in real time.',
            },
            {
              icon: FiCpu,
              title: 'Hardware Programming & Firmware',
              description:
                'Low-level firmware development for microcontrollers (ARM, AVR), peripheral interfacing, and rapid prototyping of embedded hardware solutions.',
            },
            {
              icon: FiWifi,
              title: 'IoT & Wireless Sensor Networks',
              description:
                'Networked embedded devices for environmental monitoring, smart infrastructure and data acquisition, from sensor node design to cloud-connected dashboards.',
            },
          ].map((area) => (
            <Card key={area.title} className="flex flex-col gap-3 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                <area.icon
                  size={20}
                  className="text-[var(--color-accent)]"
                />
              </div>
              <h3 className="text-base font-semibold">{area.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {area.description}
              </p>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
