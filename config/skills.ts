import { IconType } from 'react-icons'
import {
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiArduino,
  SiC,
  SiRaspberrypi,
  SiZapier,
  SiAirtable,
  SiWordpress,
  SiGit,
  SiN8N,
} from 'react-icons/si'
import { FaJava, FaRobot } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

export type SkillCategory =
  | 'automation'
  | 'webDev'
  | 'languages'
  | 'database'
  | 'embedded'
  | 'productivity'
  | 'mobile'

export type Skill = {
  name: string
  icon: IconType
}

export const SkillCategoryLabels: Record<SkillCategory, string> = {
  automation: 'Automation & RPA',
  webDev: 'Web Development',
  languages: 'Programming Languages',
  database: 'Database Management',
  embedded: 'Embedded Systems & IoT',
  productivity: 'Productivity & Tools',
  mobile: 'Mobile Development',
}

export const Skills: Record<SkillCategory, Skill[]> = {
  automation: [
    { name: 'Zapier', icon: SiZapier },
    { name: 'n8n', icon: SiN8N },
    { name: 'Make.com', icon: FaRobot },
    { name: 'Airtable', icon: SiAirtable },
    { name: 'Robomotion', icon: FaRobot },
  ],
  webDev: [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'WordPress', icon: SiWordpress },
  ],
  languages: [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'C', icon: SiC },
    { name: 'Java', icon: FaJava },
    { name: 'PHP', icon: SiPhp },
  ],
  database: [
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  embedded: [
    { name: 'Arduino', icon: SiArduino },
    { name: 'Raspberry Pi', icon: SiRaspberrypi },
  ],
  productivity: [
    { name: 'Git', icon: SiGit },
    { name: 'VS Code', icon: VscVscode },
  ],
  mobile: [
    { name: 'React Native', icon: SiReact },
  ],
}

export const SkillCategoryOrder: SkillCategory[] = [
  'embedded',
  'automation',
  'webDev',
  'languages',
  'database',
  'mobile',
  'productivity',
]

export function splitSkills<T>(items: T[], columns = 2): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => [])
  items.forEach((item, index) => {
    result[index % columns].push(item)
  })
  return result
}
