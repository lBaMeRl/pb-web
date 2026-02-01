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
    url: 'https://linkedin.com/in/josechumbo',
    icon: '🔗',
    description: 'Professional network & career updates',
  },
  {
    id: 'github',
    name: 'GITHUB',
    url: 'https://github.com/josechumbo',
    icon: '⌨️',
    description: 'Open source projects & contributions',
  },
  {
    id: 'instagram',
    name: 'INSTAGRAM',
    url: 'https://instagram.com/josechumbo',
    icon: '📷',
    description: 'Personal moments & creative work',
  },
  {
    id: 'youtube',
    name: 'YOUTUBE',
    url: 'https://youtube.com/@josechumbo',
    icon: '▶️',
    description: 'Tech tutorials & content',
  },
]
