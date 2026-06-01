import { Jimp } from 'jimp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// [origem, destino]
const jobs = [
  ['public/image.png', 'src/assets/logo-icon.png'],
  ['public/BoomService.jpeg', 'src/assets/logo-full.png'],
]

for (const [src, dest] of jobs) {
  const img = await Jimp.read(join(root, src))
  const { data } = img.bitmap

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const chroma = max - min          // saturação (0 = cinzento/preto/branco)
    const brightness = (r + g + b) / 3

    if (chroma > 45) {
      // Pixel colorido (seta roxa/magenta) -> mantém cor, opaco
      data[i + 3] = 255
    } else {
      // Pixel cinzento (fundo branco -> preto): branco vira transparente,
      // preto vira branco opaco. Bordas ficam suaves (anti-aliasing).
      data[i] = 255
      data[i + 1] = 255
      data[i + 2] = 255
      data[i + 3] = Math.round(255 - brightness)
    }
  }

  await img.write(join(root, dest))
  console.log('OK ->', dest)
}
