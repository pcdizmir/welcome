<script setup lang="ts">
import { ref, watch } from 'vue'
import { useP5Stage } from './useP5Stage'

const props = withDefaults(defineProps<{ trail?: boolean }>(), { trail: false })
const host = ref<HTMLElement | null>(null)
const trails = ref(props.trail)
const paused = ref(false)
const keyboard = ref(false)
const x = ref(480)
const y = ref(270)
const lastX = ref(480)
const lastY = ref(270)
const presetPath = ref(false)
let tick = 0
let drawing = false

function reset() {
  paused.value = false
  x.value = 480; y.value = 270
  lastX.value = 480; lastY.value = 270
  tick = 0
  drawing = false
  stage.instance()?.background(248, 246, 239)
  stage.redraw()
}

function onKey(event: KeyboardEvent) {
  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return
  event.preventDefault()
  event.stopPropagation()
  keyboard.value = true
  lastX.value = x.value; lastY.value = y.value
  if (event.key === 'ArrowLeft') x.value = Math.max(24, x.value - 20)
  if (event.key === 'ArrowRight') x.value = Math.min(936, x.value + 20)
  if (event.key === 'ArrowUp') y.value = Math.max(24, y.value - 20)
  if (event.key === 'ArrowDown') y.value = Math.min(516, y.value + 20)
  stage.redraw()
}

const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    p.background(248, 246, 239)
  }
  p.draw = () => {
    if (paused.value) return
    if (!trails.value) p.background(248, 246, 239)
    if (presetPath.value) {
      tick += 0.035
      x.value = 480 + Math.cos(tick * 1.3) * 260
      y.value = 270 + Math.sin(tick * 2.1) * 150
    }
    else if (!keyboard.value && p.mouseX > 0 && p.mouseX <= 960 && p.mouseY > 0 && p.mouseY <= 540) {
      x.value = p.mouseX; y.value = p.mouseY
    }
    if (props.trail) {
      const active = (p.mouseIsPressed && p.mouseX > 0 && p.mouseX <= 960 && p.mouseY > 0 && p.mouseY <= 540) || keyboard.value || presetPath.value
      if (active && drawing) {
        p.stroke(229, 57, 67)
        p.strokeWeight(4)
        p.line(lastX.value, lastY.value, x.value, y.value)
      }
      drawing = active
    } else {
      p.noStroke()
      p.fill(234, 84, 98)
      p.circle(x.value, y.value, 54)
    }
    lastX.value = x.value; lastY.value = y.value
  }
})

watch(trails, reset)
</script>

<template>
  <div class="demo-shell" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="demo-canvas" role="img" :aria-label="props.trail ? 'Fareyle çizilen kırmızı iz' : 'İşaretçiyi izleyen pembe daire'" />
    <img v-else class="demo-canvas" :src="props.trail ? '/fallbacks/mouse-trail.svg' : '/fallbacks/pointer.svg'" :alt="props.trail ? 'Kırmızı bir fare izi örneği' : 'İşaretçi yolu ve bir daire'">
    <div v-if="!stage.isPrintMode.value" class="demo-controls">
      <button type="button" @click.stop="paused = !paused">{{ paused ? 'Devam' : 'Duraklat' }}</button>
      <button v-if="!props.trail" type="button" @click.stop="trails = !trails">İzler {{ trails ? 'açık' : 'kapalı' }}</button>
      <button type="button" @click.stop="presetPath = !presetPath; keyboard = false">{{ presetPath ? 'Ön ayarı durdur' : 'Hazır yol' }}</button>
      <button type="button" @click.stop="reset">Sıfırla</button>
      <span class="keyboard-hint" tabindex="0" @keydown="onKey">Odaklanıp ok tuşlarıyla hareket ettirin</span>
    </div>
    <p class="demo-caption">{{ props.trail ? 'Fare düğmesini basılı tutup çiziniz. Özgün p5.js öğretim gösterimi.' : 'Özgün p5.js öğretim demosu.' }}</p>
  </div>
</template>
