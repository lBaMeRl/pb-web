import { useState, useEffect } from 'react'
import { loadAndDitherImage } from '../utils/dither'

interface PreloadedImage {
  imageData: ImageData
  width: number
  height: number
}

export function usePreloadedImage(
  src: string,
  maxWidth: number,
  maxHeight: number
) {
  const [image, setImage] = useState<PreloadedImage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    loadAndDitherImage(src, maxWidth, maxHeight)
      .then((result) => {
        setImage(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [src, maxWidth, maxHeight])

  return { image, loading, error, isReady: !loading && !error && image !== null }
}
