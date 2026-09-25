import { IconType } from 'react-icons'
import {
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiVuedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiArduino,
  SiC,
  SiRaspberrypi,
  SiStyledcomponents,
  SiMui,
  SiFramer,
  SiChakraui,
  SiVisualstudiocode,
  SiGit,
  SiAsana,
  SiUnity,
  SiElectron,
  SiMicrosoft,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'embedded'
  | 'uiFrameworks'
  | 'productivity'
  | 'mobile'
  | 'games'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const SkillCategoryLabels: Record<SkillCategory, string> = {
  backend: 'Backend Centric',
  frontend: 'Frontend Centric',
  database: 'Database & Streams',
  embedded: 'Embedded Systems',
  uiFrameworks: 'UI Frameworks',
  productivity: 'Productivity Boosts',
  mobile: 'Mobile Development',
  games: 'Games',
  desktop: 'Desktop Development',
}

export const Skills: Record<SkillCategory, Skill[]> = {
  backend: [
    { name: 'Node', icon: SiNodedotjs },
    { name: 'Javascript (ES6+)', icon: SiJavascript },
    { name: 'Typescript', icon: SiTypescript },
    { name: 'Graphql (JS, C#)', icon: SiGraphql },
    { name: 'PHP (Wordpress)', icon: SiPhp },
  ],
  frontend: [
    { name: 'React', icon: SiReact },
    { name: 'NextJS', icon: SiNextdotjs },
    { name: 'Angular', icon: SiAngular },
    { name: 'Redux', icon: SiRedux },
    { name: 'VueJS', icon: SiVuedotjs },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDb', icon: SiMongodb },
  ],
  embedded: [
    { name: 'Arduino', icon: SiArduino },
    { name: 'C', icon: SiC },
    { name: 'Raspberry PI', icon: SiRaspberrypi },
  ],
  uiFrameworks: [
    { name: 'Styled Components', icon: SiStyledcomponents },
    { name: 'MaterialUI', icon: SiMui },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'ChakraUI', icon: SiChakraui },
  ],
  productivity: [
    { name: 'VSCode', icon: SiVisualstudiocode },
    { name: 'Git', icon: SiGit },
    { name: 'Asana', icon: SiAsana },
  ],
  mobile: [
    { name: 'React Native', icon: SiReact },
    { name: 'Java', icon: FaJava },
  ],
  games: [{ name: 'Unity3D', icon: SiUnity }],
  desktop: [
    { name: 'Windows Forms, WPF', icon: SiMicrosoft },
    { name: 'Electron', icon: SiElectron },
  ],
}

export const SkillCategoryOrder: SkillCategory[] = [
  'backend',
  'frontend',
  'database',
  'embedded',
  'uiFrameworks',
  'mobile',
  'productivity',
  'games',
  'desktop',
]

export function splitSkills<T>(items: T[], columns = 2): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => [])
  items.forEach((item, index) => {
    result[index % columns].push(item)
  })
  return result
}
