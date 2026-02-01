import { ReactNode, useEffect, useRef } from 'react'

interface MenuItemProps {
  children: ReactNode
  isFocused: boolean
  onClick: () => void
  onMouseEnter?: () => void
}

export function MenuItem({
  children,
  isFocused,
  onClick,
  onMouseEnter,
}: MenuItemProps) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus()
    }
  }, [isFocused])

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`
        px-4 py-2 text-xl font-terminal transition-all duration-100
        focus:outline-none cursor-pointer
        ${
          isFocused
            ? 'text-crt-black bg-phosphor text-glow-bright'
            : 'text-phosphor hover:text-phosphor-bright'
        }
      `}
    >
      {isFocused ? `[ ${children} ]` : children}
    </button>
  )
}
