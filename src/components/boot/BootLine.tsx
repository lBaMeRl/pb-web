import { BootMessage } from '../../data/bootMessages'
import { BootLogo } from './BootLogo'

interface BootLineProps {
  message: BootMessage
  isLast?: boolean
  logoData?: { imageData: ImageData; width: number; height: number } | null
}

export function BootLine({ message, isLast = false, logoData }: BootLineProps) {
  const { text, status, type } = message

  if (type === 'logo') {
    return <BootLogo logoData={logoData} />
  }

  if (type === 'wait-for-logo') {
    return (
      <div className="flex items-center gap-2 text-xl leading-relaxed">
        <span className="text-phosphor text-glow">{text}</span>
        <span className="text-phosphor-bright text-glow-bright ml-2">[OK]</span>
      </div>
    )
  }

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
