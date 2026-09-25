import type { Metadata } from 'next'
import { FiMail } from 'react-icons/fi'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ContactForm } from '@/components/contact-form'
import { Person, SocialLinks } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${Person.name}.`,
}

export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-12 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch!"
        description="Though I am fairly introverted, I do reply to messages. Feel free to message me on any of my social media or send an email."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <a
            href={`mailto:${Person.email}`}
            className="flex items-center gap-3 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <FiMail /> {Person.email}
          </a>
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
        </div>
        <ContactForm />
      </div>
    </Container>
  )
}
