import { useState, useEffect, useCallback } from 'react'
import { bootMessages, BootMessage } from '../data/bootMessages'

type BootState = 'booting' | 'complete'

interface UseBootSequenceOptions {
  onComplete: () => void
}

export function useBootSequence({ onComplete }: UseBootSequenceOptions) {
  const [state, setState] = useState<BootState>('booting')
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [visibleLines, setVisibleLines] = useState<BootMessage[]>([])

  const skip = useCallback(() => {
    setState('complete')
    setVisibleLines(bootMessages)
    setTimeout(onComplete, 300)
  }, [onComplete])

  const advanceLine = useCallback(() => {
    if (currentLineIndex < bootMessages.length) {
      setVisibleLines(prev => [...prev, bootMessages[currentLineIndex]])
      setCurrentLineIndex(prev => prev + 1)
    }
  }, [currentLineIndex])

  useEffect(() => {
    if (state === 'complete') return

    if (currentLineIndex < bootMessages.length) {
      const delay = bootMessages[currentLineIndex]?.delay ?? 100
      const timer = setTimeout(advanceLine, delay)
      return () => clearTimeout(timer)
    } else {
      setState('complete')
      setTimeout(onComplete, 500)
    }
  }, [currentLineIndex, state, advanceLine, onComplete])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (state === 'booting') {
        e.preventDefault()
        skip()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [state, skip])

  return {
    state,
    visibleLines,
    skip,
    isBooting: state === 'booting',
  }
}
