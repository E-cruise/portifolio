import type { Metadata } from 'next'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
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
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg)]">
              Contact details
            </h3>

            <a
              href={`mailto:${Person.email}`}
              className="flex items-center gap-3 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)]">
                <FiMail size={18} />
              </span>
              <span>
                <span className="block text-xs text-[var(--color-fg-muted)]">
                  Email
                </span>
                <span className="text-sm text-[var(--color-fg)]">
                  {Person.email}
                </span>
              </span>
            </a>

            <a
              href="tel:+256789174480"
              className="flex items-center gap-3 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)]">
                <FiPhone size={18} />
              </span>
              <span>
                <span className="block text-xs text-[var(--color-fg-muted)]">
                  Phone
                </span>
                <span className="text-sm text-[var(--color-fg)]">
                  +256 789 174 480
                </span>
              </span>
            </a>

            <a
              href="https://wa.me/256789174480"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)]">
                <FaWhatsapp size={18} />
              </span>
              <span>
                <span className="block text-xs text-[var(--color-fg-muted)]">
                  WhatsApp
                </span>
                <span className="text-sm text-[var(--color-fg)]">
                  +256 789 174 480
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 text-[var(--color-fg-muted)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)]">
                <FiMapPin size={18} />
              </span>
              <span>
                <span className="block text-xs text-[var(--color-fg-muted)]">
                  Location
                </span>
                <span className="text-sm text-[var(--color-fg)]">
                  {Person.location}
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg)]">
              Socials
            </h3>
            <div className="flex items-center gap-3">
              {SocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Container>
  )
}
