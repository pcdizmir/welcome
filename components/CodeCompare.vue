<script setup lang="ts">
defineProps<{ compact?: boolean }>()

const processing = `void setup() {
  size(640, 480);
  background(255);
  stroke(255, 0, 0);
  strokeWeight(4);
}

void draw() {
  if (mousePressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}`

const processingShort = `void draw() {
  if (mousePressed)
    line(pmouseX, pmouseY, mouseX, mouseY);
}`

const turbo = `int driver = DETECT, mode;
union REGS in, out;
int x, y, previousX, previousY;
int drawing = 0;

initgraph(&driver, &mode, "C:\\\\TURBOC3\\\\BGI");
in.x.ax = 0;                  // Fare sürücüsü?
int86(0x33, &in, &out);
if (out.x.ax == 0) return 1;

while (!kbhit()) {
  in.x.ax = 3;                // Durumu oku
  int86(0x33, &in, &out);
  x = out.x.cx; y = out.x.dx;
  if (out.x.bx & 1) {
    if (drawing)
      line(previousX, previousY, x, y);
    previousX = x; previousY = y;
    drawing = 1;
  } else drawing = 0;
  delay(10);
}
getch();
closegraph();`

const turboShort = `initgraph(...);
int86(0x33, &in, &out);
previousX = x;
previousY = y;
closegraph();`
</script>

<template>
  <div class="code-compare">
    <div>
      <h2>Processing</h2>
      <pre><code>{{ compact ? processingShort : processing }}</code></pre>
      <p v-if="compact" class="small-note">Önceki ve şimdiki fare konumu hazır.</p>
    </div>
    <div class="code-preview">
      <h2>Turbo C</h2>
      <pre><code>{{ compact ? turboShort : turbo }}</code></pre>
      <!-- <p class="small-note">Grafik modu, fare sürücüsü, konum takibi ve kapatma açık adımlar. Tam kod: <code>examples/mouse-trail-turboc.c</code></p> -->
    </div>
  </div>
</template>
