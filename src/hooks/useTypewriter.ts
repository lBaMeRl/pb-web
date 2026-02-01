import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  onComplete?: () => void
  startDelay?: number
}

export function useTypewriter({
  text,
  speed = 30,
  onComplete,
  startDelay = 0,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    if (startDelay > 0) {
      const delayTimer = setTimeout(() => {
        setIsStarted(true)
      }, startDelay)
      return () => clearTimeout(delayTimer)
    } else {
      setIsStarted(true)
    }
  }, [startDelay])

  useEffect(() => {
    if (!isStarted) return

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [displayedText, text, speed, onComplete, isComplete, isStarted])

  const skip = useCallback(() => {
    setDisplayedText(text)
    setIsComplete(true)
    onComplete?.()
  }, [text, onComplete])

  return { displayedText, isComplete, skip }
}
