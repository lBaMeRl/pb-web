export interface ExperienceEntry {
  title: string
  company: string
  location: string
  type: string
  period: string
  duration: string
  description?: string
  skills: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Data Engineer',
    company: 'Volkswagen Group Services',
    location: 'Lisbon, Portugal',
    type: 'Full-time',
    period: 'Dec 2023 - Present',
    duration: '2 yrs 3 mos',
    description:
      'As a Data Engineer in the Smart Cloud Factory domain of the Automotive Industry, I play a crucial role in designing, developing, and maintaining efficient data processing and middleware solutions to boost factory operations.',
    skills: ['AWS', 'Python', 'Terraform', 'Docker', 'Machine Vision', 'Gen AI', 'Data Pipelines'],
  },
  {
    title: 'Research Assistant',
    company: 'Universidade Católica Portuguesa',
    location: 'Lisbon, Portugal',
    type: 'Contract',
    period: 'Feb 2017 - Aug 2023',
    duration: '6 yrs 7 mos',
    description: undefined,
    skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Statistical Modeling', 'Research'],
  },
  {
    title: 'Virtualmente',
    company: 'Virtualmente',
    location: 'Portugal',
    type: 'Self-employed',
    period: '5 yrs 8 mos',
    duration: '5 yrs 8 mos',
    description: undefined,
    skills: [],
  },
  {
    title: 'Systems Administrator',
    company: 'Virtualmente',
    location: 'Portugal',
    type: 'Self-employed',
    period: 'Jun 2011 - 2017',
    duration: '5 yrs 8 mos',
    description: undefined,
    skills: ['Linux', 'Windows Server', 'Networking', 'Virtualization', 'Bash'],
  },
  {
    title: 'Web Developer',
    company: 'Virtualmente',
    location: 'Lisboa, Lisbon, Portugal',
    type: 'Self-employed',
    period: 'Jun 2011 - 2017',
    duration: '5 yrs 8 mos',
    description: undefined,
    skills: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'WordPress'],
  },
]
