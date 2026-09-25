'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Card } from '@/components/ui/card'

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.current) {
      return
    }

    setStatus('sending')

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => setStatus('sent'),
        () => setStatus('error')
      )
  }

  const inputClasses =
    'w-full rounded-md border border-[var(--color-border)] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]'
  const labelClasses = 'mb-1.5 block text-sm text-[var(--color-fg-muted)]'

  return (
    <Card className="p-8">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <div>
          <label className={labelClasses} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@domain.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Mobile app development"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="How may I help you?"
            className={inputClasses}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>

        {status === 'sent' && (
          <p className="text-sm text-[var(--color-accent)]">
            Message sent. Thank you for reaching out!
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try emailing me directly instead.
          </p>
        )}
      </form>
    </Card>
  )
}
