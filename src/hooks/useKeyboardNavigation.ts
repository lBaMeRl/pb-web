import { useState, useEffect, useCallback, RefObject } from 'react'

interface UseKeyboardNavigationOptions {
  itemCount: number
  onSelect?: (index: number) => void
  initialIndex?: number
  loop?: boolean
  horizontal?: boolean
  containerRef?: RefObject<HTMLElement | null>
}

export function useKeyboardNavigation({
  itemCount,
  onSelect,
  initialIndex = 0,
  loop = true,
  horizontal = false,
  containerRef,
}: UseKeyboardNavigationOptions) {
  const [focusedIndex, setFocusedIndex] = useState(initialIndex)

  const moveFocus = useCallback(
    (direction: 1 | -1) => {
      setFocusedIndex(prev => {
        let next = prev + direction
        if (loop) {
          if (next < 0) next = itemCount - 1
          if (next >= itemCount) next = 0
        } else {
          next = Math.max(0, Math.min(itemCount - 1, next))
        }
        return next
      })
    },
    [itemCount, loop]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const prevKey = horizontal ? 'ArrowLeft' : 'ArrowUp'
      const nextKey = horizontal ? 'ArrowRight' : 'ArrowDown'

      switch (e.key) {
        case prevKey:
          e.preventDefault()
          moveFocus(-1)
          break
        case nextKey:
          e.preventDefault()
          moveFocus(1)
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          onSelect?.(focusedIndex)
          break
        case 'Home':
          e.preventDefault()
          setFocusedIndex(0)
          break
        case 'End':
          e.preventDefault()
          setFocusedIndex(itemCount - 1)
          break
      }
    },
    [moveFocus, onSelect, focusedIndex, horizontal, itemCount]
  )

  useEffect(() => {
    const container = containerRef?.current ?? window

    container.addEventListener('keydown', handleKeyDown as EventListener)
    return () => {
      container.removeEventListener('keydown', handleKeyDown as EventListener)
    }
  }, [handleKeyDown, containerRef])

  const setFocus = useCallback((index: number) => {
    if (index >= 0 && index < itemCount) {
      setFocusedIndex(index)
    }
  }, [itemCount])

  return {
    focusedIndex,
    setFocus,
    isFocused: (index: number) => index === focusedIndex,
  }
}
