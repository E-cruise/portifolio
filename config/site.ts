import { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export const siteUrl = 'https://okello-eric.netlify.app'

export const Person = {
  name: 'Okello Eric Denis',
  shortName: 'Okello Eric',
  alias: 'E_Cruise',
  role: 'Computer Engineer',
  tagline:
    'Computer engineer working across embedded systems, robotics, automation and software.',
  summary:
    'I am a self-motivated, adaptable computer engineer who enjoys finding reliable solutions to real engineering problems, across robotic process automation, software development, embedded systems and hardware programming, database management, and machine learning. I build and maintain systems that bring hardware, software and data together, working with technical teams and end users alike. Most of my work has been collaborative: delivering projects alongside other engineers and handing finished systems over to the teams who run them day to day.',
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
    href: 'https://github.com/okello-eric-denis',
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
      'A website for coordinating the pastoral mission work of different pastor-training missionary organisations across Uganda, Ethiopia and Kenya.',
    image: '/works/ctn2.png',
    imagePosition: 'right 20%',
    url: 'https://ctnpastortraining.org/',
  },
  {
    slug: 'ncbs',
    title: 'Nile Centre Business Support',
    description:
      "Designed the NCBS website, which portrays what NCBS does: training remote workers.",
    image: '/works/ncbs.png',
    url: 'https://ncbs.io',
  },
  {
    slug: 'nyumba-app',
    title: 'Nyumba App',
    description:
      'A real estate mobile app — designed the front end using React Native with TypeScript.',
    image: '/works/nyumba.png',
    imagePosition: 'right 20%',
  },
  {
    slug: 'bonaire-weather',
    title: 'Bonaire Weather',
    description:
      'A weather forecasting website with automatic posting using the OpenWeather API, Robomotion RPA and Replicate AI.',
    image: '/works/weather.png',
    url: 'https://www.stijlvoldesign.nl/forecast/day-2/',
  },
]
