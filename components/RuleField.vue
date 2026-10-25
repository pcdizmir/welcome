<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useP5Stage } from './useP5Stage'

const props = defineProps<{ compact?: boolean }>()
const host = ref<HTMLElement | null>(null)
const displacement = ref(0)
const rotation = ref(0)
const seed = ref(2026)
const coefficients = ref<number[]>([])
const description = computed(() => `${18 * 10} karelik alan. Yer değiştirme ${displacement.value} piksel, dönüş ${Math.round(rotation.value * 100) / 100} radyan, tohum ${seed.value}.`)

function makeRandom(initial: number) {
  let value = initial >>> 0
  return () => {
    value += 0x6D2B79F5
    let t = value
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function regenerate() {
  const random = makeRandom(seed.value)
  coefficients.value = Array.from({ length: 18 * 10 * 3 }, () => random() * 2 - 1)
  stage.redraw()
}

function preset(which: 'ordered' | 'variation' | 'reset') {
  if (which === 'reset') seed.value = 2026
  displacement.value = which === 'variation' ? 12 : 0
  rotation.value = which === 'variation' ? 0.26 : 0
  regenerate()
}

const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    p.noLoop()
    regenerate()
  }
  p.draw = () => {
    p.background(248, 246, 239)
    p.rectMode(p.CENTER)
    p.noFill()
    p.stroke(27, 33, 44)
    p.strokeWeight(1.7)
    const gap = 44
    const left = 107
    const top = 71
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 18; col++) {
        const index = (row * 18 + col) * 3
        const x = left + col * gap + coefficients.value[index] * displacement.value
        const y = top + row * gap + coefficients.value[index + 1] * displacement.value
        const angle = coefficients.value[index + 2] * rotation.value
        p.push()
        p.translate(x, y)
        p.rotate(angle)
        p.square(0, 0, 24)
        p.pop()
      }
    }
  }
})

watch([displacement, rotation], () => stage.redraw())
watch(seed, regenerate)
</script>

<template>
  <div class="demo-shell" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="demo-canvas" role="img" :aria-label="description" />
    <img v-else class="demo-canvas" src="/fallbacks/rule-variation.svg" :alt="description">
    <div v-if="!stage.isPrintMode.value" class="demo-controls">
      <button type="button" @click.stop="preset('ordered')">Düzenli</button>
      <button type="button" @click.stop="preset('variation')">Varyasyon</button>
      <label>Dağılma <input v-model.number="displacement" type="range" min="0" max="20" step="1"></label>
      <label>Dönüş <input v-model.number="rotation" type="range" min="0" max="0.45" step="0.01"></label>
      <label v-if="!props.compact">Tohum <input v-model.number="seed" class="seed-input" type="number" min="0" max="999999"></label>
      <button type="button" @click.stop="preset('reset')">Sıfırla</button>
    </div>
    <!-- <p class="demo-caption">Özgün öğretim demosu, 2026 · {{ description }}</p> -->
  </div>
</template>
