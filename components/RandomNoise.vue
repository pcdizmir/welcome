<script setup lang="ts">
import { ref, watch } from 'vue'
import { useP5Stage } from './useP5Stage'

const host = ref<HTMLElement | null>(null)
const step = ref(0.04)
const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    p.noLoop()
  }
  p.draw = () => {
    p.background(248, 246, 239)
    const left = 70, width = 820
    const panels = [86, 302]
    p.stroke(213, 210, 199)
    p.strokeWeight(1)
    for (const top of panels) {
      p.line(left, top + 80, left + width, top + 80)
      p.line(left, top, left, top + 160)
    }
    p.randomSeed(2026)
    p.noFill()
    p.strokeWeight(3)
    p.stroke(232, 89, 105)
    p.beginShape()
    for (let i = 0; i < 100; i++)
      p.vertex(left + i * width / 99, panels[0] + 20 + p.random() * 120)
    p.endShape()
    p.noiseSeed(2026)
    p.stroke(36, 82, 169)
    p.beginShape()
    for (let i = 0; i < 100; i++)
      p.vertex(left + i * width / 99, panels[1] + 20 + p.noise(i * step.value) * 120)
    p.endShape()
  }
})
watch(step, () => stage.redraw())
</script>

<template>
  <div class="demo-shell" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="demo-canvas" role="img" aria-label="Üstte bağımsız rastgele örnekler, altta ilişkili noise örnekleri" />
    <img v-else class="demo-canvas" src="/fallbacks/random-noise.svg" alt="Rastgele örnekler ve ilişkili noise örneklerinin karşılaştırması">
    <div class="trace-labels"><span>Bağımsız örnekler · random()</span><span>İlişkili örnekler · noise()</span></div>
    <div v-if="!stage.isPrintMode.value" class="demo-controls">
      <label>Örnekleme adımı <input v-model.number="step" type="range" min="0.01" max="0.12" step="0.005"></label>
      <button type="button" @click.stop="step = 0.04">Sıfırla</button>
    </div>
    <p class="demo-caption">Aynı aralık ve ölçekte iki davranış. Özgün öğretim karşılaştırması.</p>
  </div>
</template>
