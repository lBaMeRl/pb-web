import { useEffect, useRef } from 'react'
import type { SocialLink as SocialLinkData } from '../../data/socials'

interface SocialLinkProps {
  social: SocialLinkData
  isFocused: boolean
  onSelect: () => void
  onMouseEnter: () => void
}

export function SocialLink({
  social,
  isFocused,
  onSelect,
  onMouseEnter,
}: SocialLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus()
    }
  }, [isFocused])

  return (
    <a
      ref={ref}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault()
        onSelect()
        window.open(social.url, '_blank', 'noopener,noreferrer')
      }}
      onMouseEnter={onMouseEnter}
      className={`
        block p-4 border transition-all duration-100
        focus:outline-none cursor-pointer
        ${
          isFocused
            ? 'border-phosphor-bright bg-phosphor/10 text-glow-bright'
            : 'border-phosphor-dark hover:border-phosphor bg-crt-black/30'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl" role="img" aria-hidden="true">
          {social.icon}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {isFocused && <span className="text-phosphor-bright">{'>'}</span>}
            <span className={`text-xl ${isFocused ? 'text-phosphor-bright' : 'text-phosphor'}`}>
              {social.name}
            </span>
            {isFocused && <span className="text-phosphor-bright">{'<'}</span>}
          </div>
          <p className="text-phosphor-dim text-sm mt-1">
            {social.description}
          </p>
        </div>
        <span className="text-phosphor-dim">
          [ENTER TO OPEN]
        </span>
      </div>
    </a>
  )
}
