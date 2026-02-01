export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
  description: string
}

export const socials: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LINKEDIN',
    url: import.meta.env.VITE_LINKEDIN_URL || '#',
    icon: '🔗',
    description: 'Professional network & career updates',
  },
  {
    id: 'github',
    name: 'GITHUB',
    url: import.meta.env.VITE_GITHUB_URL || '#',
    icon: '⌨️',
    description: 'Open source projects & contributions',
  },
  {
    id: 'instagram',
    name: 'INSTAGRAM',
    url: import.meta.env.VITE_INSTAGRAM_URL || '#',
    icon: '📷',
    description: 'Personal moments & creative work',
  },
  {
    id: 'youtube',
    name: 'YOUTUBE',
    url: import.meta.env.VITE_YOUTUBE_URL || '#',
    icon: '▶️',
    description: 'Tech tutorials & content',
  },
]
