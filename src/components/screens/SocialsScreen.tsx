import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation'
import { SocialLink } from '../ui/SocialLink'
import { socials } from '../../data/socials'

export function SocialsScreen() {
  const { focusedIndex, setFocus } = useKeyboardNavigation({
    itemCount: socials.length,
    onSelect: (index) => {
      window.open(socials[index].url, '_blank', 'noopener,noreferrer')
    },
    horizontal: false,
  })

  return (
    <div className="h-full">
      <div className="border border-phosphor p-4 bg-crt-black/30 mb-4">
        <h2 className="text-2xl text-phosphor text-glow-bright mb-2">
          ══════ EXTERNAL CONNECTIONS ══════
        </h2>
        <p className="text-phosphor-dim text-lg">
          Connect with employee on external networks. Use Arrow Keys to navigate, Enter to open.
        </p>
      </div>

      <div className="space-y-2">
        {socials.map((social, index) => (
          <SocialLink
            key={social.id}
            social={social}
            isFocused={focusedIndex === index}
            onSelect={() => {
              setFocus(index)
            }}
            onMouseEnter={() => setFocus(index)}
          />
        ))}
      </div>

    </div>
  )
}
