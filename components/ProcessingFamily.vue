<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const chart = ref<SVGSVGElement | null>(null)
const nodes = [
  { id: 'arduino', title: 'Arduino', relation: 'Wiring üzerinden', fill: '#e1f0ef', color: '#008184' },
  { id: 'of', title: 'openFrameworks', relation: 'Ortak yaratıcı kodlama kültürü', fill: '#e9e6f0', color: '#303044' },
  { id: 'p5', title: 'p5.js', relation: 'Web için yeniden yorumlama', fill: '#f9e3ec', color: '#ed225d' },
]
const viewBox = ref('0 0 370 252')
const transforms = ref<Record<string, string>>({ processing: 'translate(12 90)', arduino: 'translate(180 12)', of: 'translate(180 96)', p5: 'translate(180 180)' })
const links = ref<{ id: string; d: string }[]>([])
const collisions = ref(0)
let observer: ResizeObserver | undefined
let disposed = false

type Box = { x: number; y: number; width: number; height: number }
function overlaps(a: Box, b: Box, gap = 0) {
  return a.x < b.x + b.width + gap && a.x + a.width + gap > b.x
    && a.y < b.y + b.height + gap && a.y + a.height + gap > b.y
}

function arrange() {
  if (!chart.value || disposed) return
  const measure = (id: string) => chart.value!.querySelector<SVGGElement>(`[data-node="${id}"]`)!.getBBox()
  const source = measure('processing')
  const measured = nodes.map(node => ({ ...node, box: measure(node.id) }))
  const targetX = 12 + source.width + 76
  const placed: Box[] = []
  const next: Record<string, string> = {}
  let cursor = 12
  for (const node of measured) {
    const box = { x: targetX, y: cursor, width: node.box.width, height: node.box.height }
    // Pack measured bounds, including logos and labels, with a 20-unit clearance.
    for (const previous of placed) {
      if (overlaps(box, previous, 20)) box.y = previous.y + previous.height + 20
    }
    placed.push(box)
    next[node.id] = `translate(${box.x - node.box.x} ${box.y - node.box.y})`
    cursor = box.y + box.height + 20
  }
  const totalHeight = cursor - 8
  const sourceBox = { x: 12, y: (totalHeight - source.height) / 2, width: source.width, height: source.height }
  next.processing = `translate(${sourceBox.x - source.x} ${sourceBox.y - source.y})`
  const all = [sourceBox, ...placed]
  collisions.value = all.reduce((count, box, i) => count + all.slice(i + 1).filter(other => overlaps(box, other)).length, 0)
  transforms.value = next
  const startX = sourceBox.x + sourceBox.width + 6
  const startY = sourceBox.y + sourceBox.height / 2
  links.value = placed.map((box, i) => {
    const endY = box.y + 42
    const endX = box.x - 8
    return { id: nodes[i].id, d: `M${startX} ${startY} C${startX + 30} ${startY} ${endX - 30} ${endY} ${endX} ${endY}` }
  })
  viewBox.value = `0 0 ${targetX + Math.max(...placed.map(box => box.width)) + 12} ${totalHeight}`
}

onMounted(async () => {
  await nextTick()
  arrange()
  observer = new ResizeObserver(arrange)
  if (chart.value) observer.observe(chart.value)
  document.fonts.ready.then(() => { if (!disposed) arrange() })
})
onBeforeUnmount(() => { disposed = true; observer?.disconnect() })
</script>

<template>
  <div class="pcd-family-lower">
    <figure class="pcd-family-map">
      <svg ref="chart" :viewBox="viewBox" :data-collisions="collisions" role="img" aria-label="Processing ile Arduino, openFrameworks ve p5.js arasındaki ilişkiler">
        <g fill="none" stroke="#8b95a5" stroke-width="1.5">
          <path v-for="link in links" :key="link.id" :d="link.d" :stroke-dasharray="link.id === 'of' ? '4 4' : undefined" />
        </g>
        <g data-node="processing" :transform="transforms.processing">
          <image href="/logos/processing-logo.svg" x="12" y="0" width="66" height="66" />
          <text x="45" y="86" text-anchor="middle" style="font: 700 14px Arial, sans-serif; fill: #202b3f">Processing</text>
        </g>
        <g v-for="node in nodes" :key="node.id" :data-node="node.id" :transform="transforms[node.id]">
          <text x="0" y="10" style="font: 10px Arial, sans-serif; fill: #586275">{{ node.relation }}</text>
          <rect x="0" y="20" width="170" height="44" rx="4" :fill="node.fill" />
          <image v-if="node.id === 'p5'" href="/logos/p5-js-mark.svg" x="12" y="27" width="30" height="30" />
          <text :x="node.id === 'p5' ? 100 : 85" y="48" text-anchor="middle" :style="{ font: `700 ${node.id === 'of' ? 16 : 23}px Arial, sans-serif`, fill: node.color }">{{ node.title }}</text>
        </g>
      </svg>
      <figcaption>Ortak yaklaşım, farklı yollar.</figcaption>
    </figure>
    <div class="pcd-family-code-pair">
      <section>
        <h3>Processing <span>ekranda çizim</span></h3>
        <pre><code>void setup() {
  size(300, 300);
}

void <b>draw</b>() {
  background(255);
  circle(mouseX, mouseY, 30);
}</code></pre>
      </section>
      <section>
        <h3>Arduino <span>LED yakıp söndürme</span></h3>
        <pre><code>void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void <b>loop</b>() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}</code></pre>
      </section>
      <p>Bir kez hazırla: <code>setup()</code> · Sürekli tekrarla: <code>draw()</code> / <code>loop()</code></p>
    </div>
  </div>
</template>
