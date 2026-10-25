<script setup lang="ts">
import { ref, watch } from 'vue'
import { useP5Stage } from './useP5Stage'

const host = ref<HTMLElement | null>(null)
const seed = ref(2026)
const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    p.noLoop()
  }
  p.draw = () => {
    p.randomSeed(seed.value)
    p.background(248, 246, 239)
    p.noFill()
    p.stroke(32, 43, 63, 190)
    p.strokeWeight(2)
    for (let i = 0; i < 80; i++) {
      const x = p.random(42, 918)
      const y = p.random(42, 498)
      p.circle(x, y, p.random(8, 36))
    }
  }
})
watch(seed, () => stage.redraw())
</script>

<template>
  <div class="demo-shell" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="demo-canvas" role="img" :aria-label="`Tohum ${seed} ile üretilmiş 80 daire`" />
    <img v-else class="demo-canvas" src="/fallbacks/seed-2026.svg" alt="2026 tohumu ile oluşturulmuş, tekrarlanabilir daire kompozisyonu">
    <div v-if="!stage.isPrintMode.value" class="demo-controls">
      <button type="button" @click.stop="seed = 2026">2026'yı yeniden göster</button>
      <button type="button" @click.stop="seed = 2027">2027'ye geç</button>
      <span class="seed-display">Tohum {{ seed }}</span>
    </div>
    <p class="demo-caption">Aynı kod, aynı sürüm ve aynı çağrı dizisiyle aynı sonuç.</p>
  </div>
</template>
