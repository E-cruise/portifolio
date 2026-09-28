import { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export const siteUrl = 'https://okello-eric.netlify.app'

export const Person = {
  name: 'Okello Eric Denis',
  shortName: 'Okello Eric',
  alias: 'E_Cruise',
  role: 'Computer Engineer & Tutor',
  tagline:
    'I design embedded systems and build automation workflows that bridge hardware, software and data — then teach others how to do the same.',
  summary:
    'I am a computer engineer specialising in embedded systems and process automation. My work sits at the intersection of hardware and software — from programming microcontrollers and sensor networks with Arduino and Raspberry Pi, to designing end-to-end RPA workflows with Zapier, n8n and Make.com that eliminate repetitive manual work. I also build full-stack web applications with Next.js and Node.js, and manage the databases that keep everything connected. As a Graduate Fellow at Busitema University I lecture courses in database systems, operating systems, microprocessors and embedded programming — bringing real-world engineering practice into the classroom. Whether I am wiring up a circuit, writing an API integration or walking students through a lab session, the goal is the same: reliable systems and clear understanding.',
  location: 'Njeru, Uganda',
  email: 'okelloericdenis@gmail.com',
  currentRole: 'Graduate Fellow (Lecturer)',
  currentCompany: 'Busitema University',
  currentCompanyUrl: 'https://www.busitema.ac.ug/',
  professionalSince: 2020,
}

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

export const SocialLinks: SocialLink[] = [
  {
    label: 'Github',
    href: 'https://github.com/e-cruise',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/okello-eric',
    icon: FaLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/e_cruise_',
    icon: FaInstagram,
  },
]

export const NavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  imagePosition?: string
  url?: string
}

export const Projects: Project[] = [
  {
    slug: 'ctn-pastor-training',
    title: 'CTN Pastor Training',
    description:
      'A coordination platform for pastor-training organisations operating across Uganda, Ethiopia and Kenya — built to streamline mission logistics and outreach.',
    image: '/works/ctn2.png',
    imagePosition: 'right 20%',
    url: 'https://ctnpastortraining.org/',
  },
  {
    slug: 'ncbs',
    title: 'Nile Centre Business Support',
    description:
      'Corporate website for NCBS, showcasing their remote-worker training programmes and business support services.',
    image: '/works/ncbs.png',
    url: 'https://ncbs.io',
  },
  {
    slug: 'nyumba-app',
    title: 'Nyumba App',
    description:
      'A cross-platform real estate mobile app built with React Native and TypeScript for browsing and listing properties.',
    image: '/works/nyumba.png',
    imagePosition: 'right 20%',
  },
  {
    slug: 'bonaire-weather',
    title: 'Bonaire Weather',
    description:
      'Automated weather forecasting site powered by the OpenWeather API, Robomotion RPA and Replicate AI — publishes daily forecasts without manual intervention.',
    image: '/works/weather.png',
    url: 'https://www.stijlvoldesign.nl/forecast/day-2/',
  },
]
