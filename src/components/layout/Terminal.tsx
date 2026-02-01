import { ReactNode } from 'react'
import { Scanlines } from '../effects/Scanlines'
import { Vignette } from '../effects/Vignette'

interface TerminalProps {
  children: ReactNode
}

export function Terminal({ children }: TerminalProps) {
  return (
    <div className="h-screen w-screen bg-crt-bg overflow-hidden">
      <div className="h-full w-full crt-flicker">
        {children}
      </div>
      <Vignette />
      <Scanlines />
    </div>
  )
}
