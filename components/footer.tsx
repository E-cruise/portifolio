import { FiHeart } from 'react-icons/fi'
import { Container } from '@/components/ui/container'
import { SocialLinks, Person } from '@/config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
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
        <p className="flex items-center gap-1 font-mono text-xs text-[var(--color-fg-muted)]">
          Designed and built with <FiHeart className="text-[var(--color-accent)]" />
          {Person.shortName} &copy; {year}
        </p>
      </Container>
    </footer>
  )
}
