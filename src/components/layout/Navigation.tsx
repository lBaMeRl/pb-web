import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation'
import { MenuItem } from '../ui/MenuItem'

type Screen = 'employee' | 'socials'

interface NavigationProps {
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
}

const tabs: { id: Screen; label: string }[] = [
  { id: 'employee', label: 'EMPLOYEE' },
  { id: 'socials', label: 'SOCIALS' },
]

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const currentIndex = tabs.findIndex(t => t.id === currentScreen)

  const { focusedIndex, setFocus } = useKeyboardNavigation({
    itemCount: tabs.length,
    onSelect: (index) => onNavigate(tabs[index].id),
    initialIndex: currentIndex,
    horizontal: true,
  })

  return (
    <nav className="flex items-center gap-2 px-6 py-2 border-b border-phosphor-dark bg-crt-black/50">
      <span className="text-phosphor-dim text-lg mr-2">MENU:</span>
      {tabs.map((tab, index) => (
        <MenuItem
          key={tab.id}
          isFocused={focusedIndex === index}
          onClick={() => {
            setFocus(index)
            onNavigate(tab.id)
          }}
          onMouseEnter={() => setFocus(index)}
        >
          {tab.label}
        </MenuItem>
      ))}
      <div className="flex-1" />
      <span className="text-phosphor-dark text-sm">
        Use Arrow Keys + Enter to navigate
      </span>
    </nav>
  )
}
