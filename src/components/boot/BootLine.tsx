import { BootMessage } from '../../data/bootMessages'

interface BootLineProps {
  message: BootMessage
  isLast?: boolean
}

export function BootLine({ message, isLast = false }: BootLineProps) {
  const { text, status } = message

  if (!text) {
    return <div className="h-6" />
  }

  return (
    <div className="flex items-center gap-2 text-xl leading-relaxed">
      <span className="text-phosphor text-glow">{text}</span>
      {status && (
        <span className="text-phosphor-bright text-glow-bright ml-2">
          [{status}]
        </span>
      )}
      {isLast && <span className="cursor-blink text-phosphor-bright">_</span>}
    </div>
  )
}
