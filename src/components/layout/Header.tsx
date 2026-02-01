import { useState, useEffect } from 'react'
import { DitheredImage } from '../ui/DitheredImage'
import logoImage from '../../assets/images/logo.png'

export function Header() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-phosphor-dark">
      <div className="flex items-center gap-4">
        <pre className="text-phosphor text-glow text-sm leading-none">
{`  ___  _
 | _ \\| |__
 |  _/| '_ \\
 |_|  |_.__/`}
        </pre>
        <div className="flex flex-col">
          <span className="text-phosphor text-glow text-xl">CHUMBO CORPORATION</span>
          <span className="text-phosphor-dim text-lg">Pb.OS version 2026.1</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-phosphor text-glow text-xl font-terminal">
            {formatTime(time)}
          </div>
          <div className="text-phosphor-dim text-lg">
            {formatDate(time)}
          </div>
        </div>
        <DitheredImage
          src={logoImage}
          alt="Chumbo Corporation Logo"
          maxWidth={100}
          maxHeight={100}
          className="hidden sm:block"
          noBorder
        />
      </div>
    </header>
  )
}
