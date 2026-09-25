import { Link } from '@chakra-ui/react'

export type Company =
  | 'Busitema'
  | 'Kanzu'
  | 'Flowspark'
  | 'Dreamr'
  | 'NCBS'
  | 'Logos'
  | 'Fundi'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url?: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Busitema: {
    name: 'Busitema University',
    longName: 'Busitema University, Faculty of Engineering',
    subDetail: 'Faculty of Engineering',
    url: 'https://www.busitema.ac.ug/',
    position: 'Graduate Fellow (Lecturer)',
    duration: 'Oct 2025 - Present',
    logo: {
      light: '/worked_at_logos/busitema/busitema.png',
      dark: '/worked_at_logos/busitema/busitema.png',
    },
    roles: [
      <>
        Lecture undergraduate course units in Database Systems, Database
        Management Systems, Operating Systems, Microprocessors &amp;
        Interfacing, and Electricity and Magnetism.
      </>,
      <>
        Run lab sessions on SQL queries, database design, and the basics of
        operating systems and systems programming.
      </>,
      <>
        Supervise final-year projects and research, reviewing student code and
        technical write-ups.
      </>,
      <>
        Write lecture notes, practical materials and assessments, and set,
        invigilate and mark coursework and exams.
      </>,
      <>
        Take part in curriculum review, academic advising and quality assurance,
        and help build online course materials for the Faculty of Engineering
        and Technology.
      </>,
    ],
  },
  Kanzu: {
    name: 'Kanzu Finance Limited',
    longName: 'Kanzu Finance Limited',
    subDetail: 'Consultant, Kampala',
    position: 'Automation Engineer (Consultant)',
    duration: 'June 2025 - November 2025',
    logo: {
      light: '/worked_at_logos/kanzu/kanzu.png',
      dark: '/worked_at_logos/kanzu/kanzu.png',
    },
    roles: [
      <>
        Built and documented automated workflows for the sales, engineering, HR,
        operations and finance teams.
      </>,
      <>
        Connected internal systems to outside business platforms through their
        APIs.
      </>,
      <>
        Built dashboards and reports so management could see how operations were
        running.
      </>,
      <>
        Carried out web development and platform integration work, and helped
        improve system performance and security.
      </>,
      <>Wrote the documentation and trained staff on the systems delivered.</>,
    ],
  },
  Flowspark: {
    name: 'Flowspark',
    longName: 'Flowspark, Netherlands',
    subDetail: 'via Remote',
    url: 'https://flowspark.dev/company/',
    position: 'Automation Engineer',
    duration: 'Dec 2024 - Oct 2025',
    logo: {
      light: '/worked_at_logos/flowspark/flowspark.png',
      dark: '/worked_at_logos/flowspark/flowspark.png',
    },
    roles: [
      <>
        Built web applications with Next.js and JavaScript, using edge functions
        for triggers and PostgreSQL for data storage.
      </>,
      <>
        Built workflow automations with Zapier, Make.com, Airtable and n8n that
        cut down manual work for clients in several industries.
      </>,
      <>
        Connected separate business platforms through their APIs and kept data
        in sync between them.
      </>,
      <>
        Designed and looked after the databases behind these workflows, from
        schema design through to queries and ongoing maintenance.
      </>,
      <>
        Brought AI tools into client workflows to handle steps that were
        previously done by hand.
      </>,
      <>Wrote up each solution and trained the client team before handover.</>,
    ],
  },
  Dreamr: {
    name: 'Dreamr Digital Agency',
    longName: 'Dreamr Digital Agency, Moordrecht',
    subDetail: 'via Remote',
    position: 'RPA Expert',
    duration: 'Jan 2024 - Oct 2025',
    logo: {
      light: '/worked_at_logos/dreamr/dreamr.png',
      dark: '/worked_at_logos/dreamr/dreamr.png',
    },
    roles: [
      <>
        Built robotic process automation systems that pull data from web
        platforms, process it and store it.
      </>,
      <>
        Wrote web scraping and browser automation routines, feeding what they
        collected into databases and APIs.
      </>,
      <>
        Fixed and tuned existing automations so they ran faster and broke less
        often.
      </>,
      <>
        Kept documentation up to date covering how each automation was built,
        configured and fixed.
      </>,
    ],
  },
  NCBS: {
    name: 'Nile Center Business Support',
    longName: ' NCBS',
    subDetail: 'via Remote',
    url: 'https://ncbs.io/',
    position: 'IT Support Officer',
    duration: 'Dec 2023 - Oct 2025',
    logo: {
      light: '/worked_at_logos/ncbs/ncbs_white.png',
      dark: '/worked_at_logos/ncbs/ncbs-dark.png',
    },
    roles: [
      <>
        Traineeship for Remote work, providing IT support and development of the
        company website.
      </>,
      <>
        Joined different course for soft skills, Problem solving and critical
        thinking.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://ncbs.io/"
          target="_blank"
          rel="noreferrer"
        >
          NCBS
        </Link>{' '}
        main site developed with wordpress.
      </>,
      <>Troubleshooting Computer Hardware issues.</>,
      <>Team work and collaboration to ensure productivity.</>,
    ],
  },
  Logos: {
    name: 'Logos',
    longName: 'Logos Africa',
    subDetail: 'Logos Africa.',
    url: 'https://logosafrica.com/',
    position: 'Software Developer (Intern)',
    duration: 'Jan 2023 - March 2023',
    logo: {
      light: '/worked_at_logos/logos/logos.png',
      dark: '/worked_at_logos/logos/logos.png',
    },
    roles: [
      <>Designing and developing websites using CMS; WordPress and Drupal.</>,
      <>Front-end web development using ReactJS and Next JS.</>,
      <>
        Deploying websites, configuring host environments and managing domain
        settings, using cPanel, FTP, and hosting platforms.
      </>,
      <>
        Identifying and resolving issues with websites, such as broken links,
        layout problems and coding errors.
      </>,
      <>
        Collaborative development and using git for code management and version
        control.
      </>,
    ],
  },
  Fundi: {
    name: 'Fundi Bots',
    longName: 'Fundi Bots',
    subDetail: 'Fundi Bots Uganda.',
    url: 'https://fundibots.org/',
    position: 'Embedded Systems Engineer (Intern)',
    duration: 'Feb 2022 - May 2022',
    logo: {
      light: '/worked_at_logos/fundi/fundi_bots.png',
      dark: '/worked_at_logos/fundi/fundi_bots.png',
    },
    roles: [
      <>Using Fritzing and Proteus for designing Circuits.</>,
      <>
        Design and development of integrated circuits with components like
        resistors, capacitors, transistors among others.
      </>,
      <>
        Embedded systems development using Arduino interface with C programming.
      </>,
      <>
        Integration of sensors like ultrasonic sensors, PIR sensors, Flow rate
        sensors, RFID modules, Flex sensors among others with Arduino interfaces
        to come up with functional projects.
      </>,
      <>
        Development of mobile Application using App inventors for interfacing
        with Arduino.
      </>,
      <>Use of Solid works for design of solid works.</>,
      <>Printing of Solid works elements using 3D printer.</>,
      <>Project management and reporting through weekly plans.</>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Busitema,
  Experiences.Kanzu,
  Experiences.Flowspark,
  Experiences.Dreamr,
  Experiences.NCBS,
  Experiences.Logos,
  Experiences.Fundi,
]
