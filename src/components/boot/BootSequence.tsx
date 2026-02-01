import { useBootSequence } from '../../hooks/useBootSequence'
import { BootLine } from './BootLine'

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const { visibleLines, isBooting } = useBootSequence({ onComplete })

  return (
    <div className="h-full p-6 overflow-hidden font-terminal">
      <div className="screen-on">
        {visibleLines.map((message, index) => (
          <BootLine
            key={index}
            message={message}
            isLast={isBooting && index === visibleLines.length - 1}
          />
        ))}
      </div>
      {isBooting && (
        <div className="fixed bottom-6 right-6 text-phosphor-dim text-lg">
          Press any key to skip...
        </div>
      )}
    </div>
  )
}
