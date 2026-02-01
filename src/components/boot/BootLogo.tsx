import { useEffect, useRef } from 'react'

interface BootLogoProps {
  logoData?: { imageData: ImageData; width: number; height: number } | null
}

export function BootLogo({ logoData }: BootLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !logoData) return

    canvas.width = logoData.width
    canvas.height = logoData.height
    const ctx = canvas.getContext('2d')!
    ctx.putImageData(logoData.imageData, 0, 0)
  }, [logoData])

  if (!logoData) {
    return null
  }

  return (
    <div className="my-2">
      <canvas
        ref={canvasRef}
        className="block"
        aria-label="Pb.OS Logo"
        role="img"
      />
    </div>
  )
}
