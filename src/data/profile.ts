export interface ProfileData {
  name: string
  id: string
  status: string
  clearance: string
  department: string
  position: string
  bio: string[]
}

export const profile: ProfileData = {
  name: 'JOSÉ CHUMBO',
  id: 'PB-2026-001',
  status: 'ACTIVE',
  clearance: 'LEVEL 5',
  department: 'ENGINEERING',
  position: 'SENIOR DEVELOPER',
  bio: [
    'Specialized in full-stack development and system architecture.',
    'Expert in React, TypeScript, Node.js, and cloud infrastructure.',
    'Passionate about creating elegant solutions to complex problems.',
    'Building the future, one commit at a time.',
  ],
}
