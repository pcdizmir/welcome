<script setup lang="ts">
import { ref, watch } from 'vue'
import type p5 from 'p5'
import { useP5Stage } from './useP5Stage'

const host = ref<HTMLElement | null>(null)
const frequencyX = ref(3)
const frequencyY = ref(2)
const phase = ref(1.05)
const amplitude = ref(205)
const moving = ref(true)
let motionPhase = 0
let trailLayer: p5.Graphics | undefined

function reset() {
  frequencyX.value = 3
  frequencyY.value = 2
  phase.value = 1.05
  amplitude.value = 205
  moving.value = true
  motionPhase = 0
  trailLayer?.background(7, 14, 31)
  stage.redraw()
}

const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    trailLayer = p.createGraphics(960, 540)
    trailLayer.background(7, 14, 31)
    p.describe('İki dalga sinyaliyle oluşan, osiloskop desenlerinden esinlenmiş hareketli bir çizgi.')
  }

  p.draw = () => {
    p.background(7, 14, 31)
    const cx = 480, cy = 270

    if (moving.value) motionPhase += 0.008
    const phaseNow = phase.value + motionPhase
    const amp = amplitude.value
    const points = 1800
    const coords: [number, number][] = []
    for (let i = 0; i <= points; i++) {
      const t = p.TWO_PI * i / points
      coords.push([
        cx + Math.sin(frequencyX.value * t + phaseNow) * amp,
        cy + Math.sin(frequencyY.value * t) * amp * 0.78,
      ])
    }

    if (!trailLayer) return

    // Fade the previous paths gradually, then draw the current path on top.
    trailLayer.noStroke()
    trailLayer.fill(7, 14, 31, 16)
    trailLayer.rect(0, 0, 960, 540)

    trailLayer.noFill()
    trailLayer.drawingContext.shadowColor = 'rgba(78, 235, 221, 0.8)'
    trailLayer.drawingContext.shadowBlur = 16
    trailLayer.stroke(72, 225, 218, 38)
    trailLayer.strokeWeight(11)
    trailLayer.beginShape()
    for (const [x, y] of coords) trailLayer.vertex(x, y)
    trailLayer.endShape()

    trailLayer.drawingContext.shadowBlur = 0
    trailLayer.stroke(119, 255, 231, 90)
    trailLayer.strokeWeight(4)
    trailLayer.beginShape()
    for (const [x, y] of coords) trailLayer.vertex(x, y)
    trailLayer.endShape()

    trailLayer.stroke(216, 255, 246, 240)
    trailLayer.strokeWeight(1.5)
    trailLayer.beginShape()
    for (const [x, y] of coords) trailLayer.vertex(x, y)
    trailLayer.endShape()
    p.image(trailLayer, 0, 0)

    p.stroke(35, 61, 83, 110)
    p.strokeWeight(1)
    for (let x = 80; x <= 880; x += 80) p.line(x, 52, x, 488)
    for (let y = 70; y <= 470; y += 50) p.line(66, y, 894, y)
    p.stroke(73, 113, 139, 150)
    p.line(cx, 40, cx, 500)
    p.line(52, cy, 908, cy)
  }
})

watch([frequencyX, frequencyY, phase, amplitude, moving], () => stage.redraw())
</script>

<template>
  <div class="demo-shell oscillon-demo" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="demo-canvas" role="img" aria-label="Osiloskop dalgalarından esinlenmiş interaktif çizgi deseni" />
    <img v-else class="demo-canvas" src="/fallbacks/oscillon.svg" alt="Koyu zeminde, iki sinyalden oluşmuş parlak turkuaz osiloskop izi">
    <div v-if="!stage.isPrintMode.value" class="demo-controls">
      <label>X sinyali <input v-model.number="frequencyX" type="range" min="1" max="7" step="1"></label>
      <label>Y sinyali <input v-model.number="frequencyY" type="range" min="1" max="7" step="1"></label>
      <label>Faz <input v-model.number="phase" type="range" min="0" max="6.28" step="0.05"></label>
      <label>Genlik <input v-model.number="amplitude" type="range" min="120" max="250" step="5"></label>
      <button type="button" @click.stop="moving = !moving">{{ moving ? 'Durdur' : 'Hareket ettir' }}</button>
      <button type="button" @click.stop="reset">Sıfırla</button>
    </div>
    <p class="demo-caption">İki elektrik sinyali X ve Y hareketini belirler; izler zamanla solar. Çağdaş matematiksel benzetim; Laposky’nin devresi veya eserinin kopyası değildir.</p>
  </div>
</template>
