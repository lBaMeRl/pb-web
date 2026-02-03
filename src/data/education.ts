export interface EducationEntry {
  institution: string
  degree: string
  field: string
  period: string
  grade?: string
  skills: string[]
  achievements?: {
    title: string
    description: string
  }[]
}

export interface CertificationEntry {
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  skills: string[]
}

export const education: EducationEntry[] = [
  {
    institution: 'Universidade Católica Portuguesa',
    degree: "Master's degree",
    field: 'Business Analytics',
    period: 'Sep 2021 - Jun 2023',
    grade: '18',
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistical Analysis', 'Power BI'],
    achievements: [
      {
        title: "Dean's List: Master Programs 2022",
        description:
          "I have been featured in the Católica Lisbon School of Business and Economics Dean's List of 2022 as one of the best students of the MSc in Business Analytics (ranked in the top 4% of the class).",
      },
    ],
  },
  {
    institution: 'Instituto Superior Técnico',
    degree: 'Licenciatura',
    field: 'Engenharia de Redes de Computadores, Computer Networks',
    period: '2007 - 2011',
    grade: undefined,
    skills: ['Networking', 'TCP/IP', 'Linux', 'Network Security', 'Java', 'C'],
    achievements: undefined,
  },
]

export const certifications: CertificationEntry[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'Dec 2025',
    expiryDate: undefined,
    credentialId: '3c222a074e584e858df3245f09a10167',
    skills: ['Solution Architecture'],
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'Dec 2024',
    expiryDate: 'Dec 2027',
    credentialId: undefined,
    skills: ['Cloud Computing'],
  },
]
