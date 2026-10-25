<script setup lang="ts">
import { ref } from 'vue'
import { useP5Stage } from './useP5Stage'

const host = ref<HTMLElement | null>(null)
const ticker = [...'PCD IZMIR 2026']

function hsv(h: number, s: number, v: number): [number, number, number] {
  const c = v * s
  const section = h / 60
  const x = c * (1 - Math.abs(section % 2 - 1))
  const m = v - c
  let rgb: [number, number, number]
  if (section < 1) rgb = [c, x, 0]
  else if (section < 2) rgb = [x, c, 0]
  else if (section < 3) rgb = [0, c, x]
  else if (section < 4) rgb = [0, x, c]
  else if (section < 5) rgb = [x, 0, c]
  else rgb = [c, 0, x]
  return rgb.map(value => Math.round((value + m) * 255)) as [number, number, number]
}

const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    p.pixelDensity(1)
    p.describe('1980’ler ev bilgisayarlarının demolarından esinlenen, renkleri sürekli değişen canlı plasma deseni.')
  }

  p.draw = () => {
    const width = 320
    const height = 180
    const time = p.frameCount * 0.045
    p.loadPixels()
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dx = x - width * 0.5
        const dy = y - height * 0.5
        const wave = Math.sin(x * 0.055 + time)
          + Math.sin(y * 0.071 - time * 1.2)
          + Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.075 + time * 1.5)
        const [r, g, b] = hsv((wave + 3) * 60 % 360, 0.88, 0.9)
        for (let py = 0; py < 3; py++) {
          for (let px = 0; px < 3; px++) {
            const pixel = ((y * 3 + py) * 960 + (x * 3 + px)) * 4
            p.pixels[pixel] = r
            p.pixels[pixel + 1] = g
            p.pixels[pixel + 2] = b
            p.pixels[pixel + 3] = 255
          }
        }
      }
    }
    p.updatePixels()
  }
})
</script>

<template>
  <div class="plasma-demo" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="plasma-canvas" role="img" aria-label="Renkleri sürekli değişen canlı plasma animasyonu" />
    <img v-else class="plasma-canvas" src="/fallbacks/plasma.svg" alt="Neon renklerden oluşan plasma dalga deseni">
    <div class="plasma-scanlines" aria-hidden="true" />
    <div class="plasma-label">LIVE DEMO · 64K · REAL TIME</div>
    <div class="plasma-marquee" aria-label="PCD IZMIR 2026">
      <div class="plasma-marquee-track" aria-hidden="true">
        <span v-for="copy in 2" :key="copy" class="plasma-marquee-copy">
          <i v-for="(char, index) in ticker" :key="`${copy}-${index}`" :data-char="char" :style="{ animationDelay: `${index * -0.09}s` }">{{ char }}</i>
        </span>
      </div>
    </div>
  </div>
</template>
