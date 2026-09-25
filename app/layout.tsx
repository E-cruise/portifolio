import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Person, SocialLinks, siteUrl } from '@/config/site'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${Person.name} | ${Person.role}`,
    template: `%s | ${Person.name}`,
  },
  description: Person.tagline,
  openGraph: {
    title: `${Person.name} | ${Person.role}`,
    description: Person.tagline,
    url: siteUrl,
    siteName: `${Person.name} Portfolio`,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${Person.name} | ${Person.role}`,
    description: Person.tagline,
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon_io/light.ico',
        media: '(prefers-color-scheme: light)',
      },
    ],
    apple: '/favicon_io/logo.png',
  },
  manifest: '/favicon_io/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: Person.name,
    jobTitle: Person.role,
    description: Person.tagline,
    url: siteUrl,
    email: `mailto:${Person.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: Person.location,
    },
    worksFor: {
      '@type': 'Organization',
      name: Person.currentCompany,
      url: Person.currentCompanyUrl,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Busitema University',
    },
    sameAs: SocialLinks.map((social) => social.href),
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
