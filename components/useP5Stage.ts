import { useIsSlideActive, useNav } from '@slidev/client'
import { onBeforeUnmount, onMounted, watch, type Ref } from 'vue'
import type p5 from 'p5'

type Sketch = (p: p5) => void

/** Keep a fixed drawing coordinate system while fitting the slide container. */
export function useP5Stage(host: Ref<HTMLElement | null>, sketch: Sketch) {
  const { isPrintMode } = useNav()
  const isActive = useIsSlideActive()
  let instance: p5 | undefined
  let observer: ResizeObserver | undefined
  let disposed = false

  function fitCanvas() {
    const canvas = host.value?.querySelector('canvas')
    if (!canvas || !host.value) return
    canvas.style.width = `${host.value.clientWidth}px`
    canvas.style.height = `${host.value.clientHeight}px`
    canvas.style.display = 'block'
  }

  onMounted(async () => {
    if (isPrintMode.value || !host.value) return
    const { default: P5 } = await import('p5')
    if (disposed || !host.value) return
    instance = new P5((p: p5) => {
      sketch(p)
      const setup = p.setup
      p.setup = () => {
        p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2))
        setup?.()
        p.frameRate(30)
        fitCanvas()
      }
    }, host.value)
    observer = new ResizeObserver(fitCanvas)
    observer.observe(host.value)
    if (!isActive.value) instance.noLoop()
  })

  watch(isActive, (active) => {
    if (!instance) return
    if (active) instance.loop()
    else instance.noLoop()
  })

  onBeforeUnmount(() => {
    disposed = true
    observer?.disconnect()
    instance?.remove()
    instance = undefined
  })

  return { isPrintMode, redraw: () => instance?.redraw(), instance: () => instance }
}
