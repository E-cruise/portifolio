import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { Card } from '@/components/ui/card'
import { Project } from '@/config/site'

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-[var(--color-bg)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: project.imagePosition }}
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="flex items-center gap-1 text-lg font-semibold">
          {project.title}
          {project.url && (
            <FiArrowUpRight className="text-[var(--color-accent)]" />
          )}
        </h3>
        <p className="text-sm text-[var(--color-fg-muted)]">
          {project.description}
        </p>
      </div>
    </>
  )

  if (project.url) {
    return (
      <Card className="group h-full overflow-hidden transition-colors hover:border-[var(--color-accent)]">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="flex h-full flex-col"
        >
          {content}
        </a>
      </Card>
    )
  }

  return <Card className="h-full overflow-hidden">{content}</Card>
}
