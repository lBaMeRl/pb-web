import { useState, useEffect, useCallback } from 'react'
import { bootMessages, BootMessage } from '../../data/bootMessages'
import { BootLine } from './BootLine'
import { usePreloadedImage } from '../../hooks/usePreloadedImage'
import logoImage from '../../assets/images/logo.png'

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [visibleLines, setVisibleLines] = useState<BootMessage[]>([])
  const [isBooting, setIsBooting] = useState(true)
  const [waitingForLogo, setWaitingForLogo] = useState(false)

  // Preload and dither the logo immediately
  const { image: logoData, isReady: logoReady } = usePreloadedImage(logoImage, 450, 180)

  const skip = useCallback(() => {
    setIsBooting(false)
    setVisibleLines(bootMessages)
    setTimeout(onComplete, 300)
  }, [onComplete])

  const advanceLine = useCallback(() => {
    if (currentLineIndex < bootMessages.length) {
      const nextMessage = bootMessages[currentLineIndex]

      // If this is a wait-for-logo message and logo isn't ready, wait
      if (nextMessage.type === 'wait-for-logo' && !logoReady) {
        setWaitingForLogo(true)
        return
      }

      setWaitingForLogo(false)
      setVisibleLines(prev => [...prev, nextMessage])
      setCurrentLineIndex(prev => prev + 1)
    }
  }, [currentLineIndex, logoReady])

  // Handle boot sequence progression
  useEffect(() => {
    if (!isBooting) return

    if (currentLineIndex < bootMessages.length) {
      // If waiting for logo and it's now ready, continue
      if (waitingForLogo && logoReady) {
        advanceLine()
        return
      }

      // If waiting for logo and it's not ready, don't set a timer
      if (waitingForLogo) return

      const delay = bootMessages[currentLineIndex]?.delay ?? 100
      const timer = setTimeout(advanceLine, delay)
      return () => clearTimeout(timer)
    } else {
      setIsBooting(false)
      setTimeout(onComplete, 500)
    }
  }, [currentLineIndex, isBooting, advanceLine, onComplete, waitingForLogo, logoReady])

  // Handle keypress to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isBooting) {
        e.preventDefault()
        skip()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isBooting, skip])

  return (
    <div className="h-full p-6 overflow-hidden font-terminal">
      <div className="screen-on">
        {visibleLines.map((message, index) => (
          <BootLine
            key={index}
            message={message}
            isLast={isBooting && index === visibleLines.length - 1}
            logoData={message.type === 'logo' ? logoData : undefined}
          />
        ))}
        {waitingForLogo && (
          <div className="text-phosphor-dim text-xl">
            <span className="cursor-blink">_</span>
          </div>
        )}
      </div>
      {isBooting && (
        <div className="fixed bottom-6 right-6 text-phosphor-dim text-lg">
          Press any key to skip...
        </div>
      )}
    </div>
  )
}
