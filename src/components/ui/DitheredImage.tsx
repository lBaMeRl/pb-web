import { useEffect, useRef, useState } from 'react'
import { loadAndDitherImage } from '../../utils/dither'

interface DitheredImageProps {
  src: string
  alt: string
  maxWidth?: number
  maxHeight?: number
  className?: string
}

export function DitheredImage({
  src,
  alt,
  maxWidth = 250,
  maxHeight = 300,
  className = '',
}: DitheredImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: maxWidth, height: maxHeight })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    setLoading(true)
    setError(null)

    loadAndDitherImage(src, maxWidth, maxHeight)
      .then(({ imageData, width, height }) => {
        canvas.width = width
        canvas.height = height
        setDimensions({ width, height })

        const ctx = canvas.getContext('2d')!
        ctx.putImageData(imageData, 0, 0)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [src, maxWidth, maxHeight])

  if (error) {
    return (
      <div
        className={`flex items-center justify-center border border-phosphor-dark bg-crt-black ${className}`}
        style={{ width: maxWidth, height: maxHeight }}
      >
        <span className="text-phosphor-dim">IMAGE ERROR</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center border border-phosphor-dark bg-crt-black"
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <span className="text-phosphor text-glow cursor-blink">LOADING...</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`border border-phosphor-dark ${loading ? 'invisible' : 'visible'}`}
        aria-label={alt}
        role="img"
      />
    </div>
  )
}
