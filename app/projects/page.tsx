import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/fade-in'
import ProjectCard from '@/components/project-card'
import { Projects, Person } from '@/config/site'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Selected projects built by ${Person.name}, ${Person.role}.`,
}

export default function ProjectsPage() {
  return (
    <Container className="flex flex-col gap-12 py-16 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Work"
          title="Some of my works."
          description="Projects I made as a computer engineer, spanning company work and personal builds."
        />
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
