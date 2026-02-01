export interface ProfileData {
  name: string
  id: string
  status: string
  clearance: string
  corp: string
  department: string
  position: string
  bio: string[]
}

export const profile: ProfileData = {
  name: 'JOSÉ CHUMBO',
  id: 'PB-2023-12',
  status: 'ACTIVE',
  clearance: 'LEVEL 5',
  corp: 'Volkswagen - Group Services',
  department: 'SMART CLOUD FACTORY',
  position: 'DATA ENGINEER',
  bio: [
    'Data Engineer at Volkswagen Group Services with expertise across Solutions Architecture, Business Inteligence, and Full-Stack Web Development.',
    'Currently designing and implementing cloud-based solutions in Machine Vision, Gen AI, Cloud based solutions on top of AWS services.',
    'AWS Certified: Cloud Practitioner & Solutions Architect Associate.',
    'Experienced in building scalable solutions and cloud infrastructure to drive digital transformation in the factory.',
  ],
}
