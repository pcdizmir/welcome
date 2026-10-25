<script setup lang="ts">
import { ref, watch } from 'vue'
import { useP5Stage } from './useP5Stage'

const host = ref<HTMLElement | null>(null)
const showVariation = ref(true)
const stage = useP5Stage(host, (p) => {
  p.setup = () => {
    p.createCanvas(960, 540)
    p.noLoop()
  }
  p.draw = () => {
    p.background(248, 246, 239)
    p.strokeWeight(2)
    for (let side = 0; side < 2; side++) {
      if (side === 1 && !showVariation.value) continue
      const baseX = side === 0 ? 48 : 520
      const color = side === 0 ? [31, 48, 76] : [224, 81, 98]
      p.stroke(...color)
      for (let row = 0; row < 14; row++) {
        for (let col = 0; col < 12; col++) {
          const x = baseX + col * 33
          const y = 47 + row * 33
          const theta = side === 0 ? ((row * 17 + col * 37) % 17) / 17 * p.PI : p.noise(row * 0.13, col * 0.13) * p.PI
          p.line(x - Math.cos(theta) * 12, y - Math.sin(theta) * 12, x + Math.cos(theta) * 12, y + Math.sin(theta) * 12)
        }
      }
    }
    p.stroke(210, 206, 196)
    p.line(480, 28, 480, 510)
  }
})
watch(showVariation, () => stage.redraw())
</script>

<template>
  <div class="demo-shell" @click.stop>
    <div v-if="!stage.isPrintMode.value" ref="host" class="demo-canvas" role="img" aria-label="Solda bağımsız çizgi yönleri, sağda ilişkili yön alanı" />
    <img v-else class="demo-canvas" src="/fallbacks/remix.svg" alt="Özgün çizgi sistemi ile ilişkili yönler kullanan varyasyon yan yana">
    <div class="remix-labels"><span>Kaynak: bağımsız yönler</span><span>Varyasyon: ilişkili alan</span></div>
    <div v-if="!stage.isPrintMode.value" class="demo-controls">
      <button type="button" @click.stop="showVariation = !showVariation">{{ showVariation ? 'Değişikliği gizle' : 'Değişikliği göster' }}</button>
    </div>
    <p class="demo-caption">İki çalışma da bu sunum için üretildi. Değişen kural: çizgilerin yön ilişkisi.</p>
  </div>
</template>
