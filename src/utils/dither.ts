// Green phosphor palette for CRT effect
const PHOSPHOR_PALETTE = [
  [0, 17, 0],      // darkest
  [0, 51, 0],
  [0, 102, 0],
  [0, 153, 0],
  [0, 204, 0],
  [0, 255, 0],     // brightest
]

function findClosestPaletteColor(r: number, g: number, b: number): number[] {
  // Convert to grayscale first, then map to green palette
  const gray = 0.299 * r + 0.587 * g + 0.114 * b

  let minDist = Infinity
  let closest = PHOSPHOR_PALETTE[0]

  for (const color of PHOSPHOR_PALETTE) {
    // Compare grayscale value to green channel
    const dist = Math.abs(gray - color[1])
    if (dist < minDist) {
      minDist = dist
      closest = color
    }
  }

  return closest
}

export function floydSteinbergDither(
  imageData: ImageData,
  width: number,
  height: number
): ImageData {
  const data = new Uint8ClampedArray(imageData.data)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4

      const oldR = data[i]
      const oldG = data[i + 1]
      const oldB = data[i + 2]

      const [newR, newG, newB] = findClosestPaletteColor(oldR, oldG, oldB)

      data[i] = newR
      data[i + 1] = newG
      data[i + 2] = newB
      // Keep alpha unchanged

      const errR = oldR - newR
      const errG = oldG - newG
      const errB = oldB - newB

      // Distribute error to neighboring pixels (Floyd-Steinberg pattern)
      // Right pixel: 7/16
      if (x + 1 < width) {
        const idx = i + 4
        data[idx] = clamp(data[idx] + errR * 7 / 16)
        data[idx + 1] = clamp(data[idx + 1] + errG * 7 / 16)
        data[idx + 2] = clamp(data[idx + 2] + errB * 7 / 16)
      }

      // Bottom-left pixel: 3/16
      if (y + 1 < height && x > 0) {
        const idx = ((y + 1) * width + (x - 1)) * 4
        data[idx] = clamp(data[idx] + errR * 3 / 16)
        data[idx + 1] = clamp(data[idx + 1] + errG * 3 / 16)
        data[idx + 2] = clamp(data[idx + 2] + errB * 3 / 16)
      }

      // Bottom pixel: 5/16
      if (y + 1 < height) {
        const idx = ((y + 1) * width + x) * 4
        data[idx] = clamp(data[idx] + errR * 5 / 16)
        data[idx + 1] = clamp(data[idx + 1] + errG * 5 / 16)
        data[idx + 2] = clamp(data[idx + 2] + errB * 5 / 16)
      }

      // Bottom-right pixel: 1/16
      if (y + 1 < height && x + 1 < width) {
        const idx = ((y + 1) * width + (x + 1)) * 4
        data[idx] = clamp(data[idx] + errR * 1 / 16)
        data[idx + 1] = clamp(data[idx + 1] + errG * 1 / 16)
        data[idx + 2] = clamp(data[idx + 2] + errB * 1 / 16)
      }
    }
  }

  return new ImageData(data, width, height)
}

function clamp(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value)))
}

export async function loadAndDitherImage(
  src: string,
  maxWidth: number = 300,
  maxHeight: number = 300
): Promise<{ imageData: ImageData; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      // Calculate scaled dimensions
      let width = img.width
      let height = img.height

      if (width > maxWidth) {
        height = (height * maxWidth) / width
        width = maxWidth
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height
        height = maxHeight
      }

      width = Math.floor(width)
      height = Math.floor(height)

      // Draw to canvas
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')!

      ctx.drawImage(img, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height)

      // Apply dithering
      const dithered = floydSteinbergDither(imageData, width, height)

      resolve({ imageData: dithered, width, height })
    }

    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = src
  })
}
