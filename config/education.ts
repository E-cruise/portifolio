export type EducationEntry = {
  degree: string
  institute: string
  duration: string
  detail?: string
  bullets?: string[]
}

export const Education: EducationEntry[] = [
  {
    degree: 'Master of Science in Cyber-Physical Systems Engineering',
    institute: 'Busitema University',
    duration: '2026 - 2028',
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institute: 'Busitema University',
    duration: '2019 - 2024',
    detail: 'Second Class Honours (Upper Division), CGPA 3.89',
    bullets: [
      'Relevant coursework: Data Structures & Algorithms, Database Systems, Object Oriented Programming, Structured Programming, Systems Programming, Operating Systems, Computer Architecture, Data Communication & Networks, Principles of Software Development, User Interface Design, Systems Security, Mobile Application Development, Artificial Intelligence.',
      'Completed two supervised industrial internship placements (2021 and 2022) alongside a two-semester final year engineering project.',
    ],
  },
  {
    degree: 'Uganda Advanced Certificate of Education (UACE)',
    institute: 'Jinja Senior Secondary School',
    duration: '2017 - 2018',
    bullets: [
      'Principal passes in Mathematics (A), Physics (A) and Geometrical & Mechanical Drawing; Subsidiary Computer.',
    ],
  },
  {
    degree: 'Uganda Certificate of Education (UCE)',
    institute: 'Jinja Senior Secondary School',
    duration: '2013 - 2016',
    detail: 'Division 1',
    bullets: [
      'Nine subjects passed, including Mathematics, Physics, Chemistry, Computer Studies and Technical Drawing.',
    ],
  },
]
