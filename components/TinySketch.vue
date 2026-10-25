<script setup lang="ts">
const code = `void setup() {
  size(640, 400);
  background(245);
  noStroke();
  fill(230, 60, 90);
  rect(220, 140, 200, 120);
}`
</script>

<template>
  <div class="two-col-visual">
    <div><pre><code>{{ code }}</code></pre><p class="small-note">Tuval, zemin, renk ve biçim: doğrudan görsel kararlar.</p></div>
    <div><img class="single-visual" src="/fallbacks/tiny-rect.svg" alt="Açık zeminde pembe dikdörtgen"><p class="footnote">Processing Java kodu; sağda tarayıcıda hazırlanmış temsilî çıktı.</p></div>
  </div>
</template>
