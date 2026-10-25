import { mkdirSync, writeFileSync } from 'node:fs'

const dir = new URL('../public/fallbacks/', import.meta.url)
mkdirSync(dir, { recursive: true })
const W = 960, H = 540
const paper = '#f8f6ef', ink = '#202b3f', coral = '#e95367', blue = '#2556ac'

function svg(body, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}"><rect width="960" height="540" fill="${paper}"/>${body}</svg>`
}
function save(name, body, label) { writeFileSync(new URL(name, dir), svg(body, label)) }
function randomMaker(seed) {
  let value = seed >>> 0
  return () => { value += 0x6D2B79F5; let t = value; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
}

for (const varied of [false, true]) {
  const rand = randomMaker(2026)
  let body = ''
  for (let row = 0; row < 10; row++) for (let col = 0; col < 18; col++) {
    const dx = (rand() * 2 - 1) * (varied ? 12 : 0)
    const dy = (rand() * 2 - 1) * (varied ? 12 : 0)
    const a = (rand() * 2 - 1) * (varied ? 15 : 0)
    const x = 107 + col * 44 + dx, y = 71 + row * 44 + dy
    body += `<rect x="${(x - 12).toFixed(2)}" y="${(y - 12).toFixed(2)}" width="24" height="24" fill="none" stroke="${ink}" stroke-width="1.7" transform="rotate(${a.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)})"/>`
  }
  save(`rule-${varied ? 'variation' : 'ordered'}.svg`, body, varied ? 'Kontrollü varyasyon içeren kare alanı' : 'Düzenli kare alanı')
}

save('mouse-trail.svg', `<path d="M 115 388 C 210 185 316 402 405 238 S 587 103 666 306 S 799 426 874 165" fill="none" stroke="${coral}" stroke-width="5" stroke-linecap="round"/>`, 'Fare sürüklenerek çizilmiş kırmızı iz')
save('pointer.svg', `<path d="M 110 370 C 270 440 350 150 485 195 S 710 428 835 188" fill="none" stroke="${coral}" stroke-width="2" stroke-dasharray="8 10" opacity=".48"/><circle cx="835" cy="188" r="27" fill="${coral}"/>`, 'İşaretçiyi takip eden daire')

const rand = randomMaker(2026)
let randomPath = '', noisePath = ''
for (let i = 0; i < 100; i++) {
  const x = 70 + i * 820 / 99
  const y1 = 106 + rand() * 120
  const y2 = 322 + 70 + Math.sin(i * 0.085) * 36 + Math.sin(i * 0.21) * 14
  randomPath += `${i ? 'L' : 'M'}${x.toFixed(1)},${y1.toFixed(1)} `
  noisePath += `${i ? 'L' : 'M'}${x.toFixed(1)},${y2.toFixed(1)} `
}
save('random-noise.svg', `<line x1="70" y1="166" x2="890" y2="166" stroke="#d5d2c7"/><line x1="70" y1="382" x2="890" y2="382" stroke="#d5d2c7"/><path d="${randomPath}" fill="none" stroke="${coral}" stroke-width="3"/><path d="${noisePath}" fill="none" stroke="${blue}" stroke-width="3"/>`, 'Bağımsız rastgele örnekler ve ilişkili değişim')

const circles = randomMaker(2026)
let circleBody = ''
for (let i = 0; i < 80; i++) {
  const x = 42 + circles() * 876, y = 42 + circles() * 456, diameter = 8 + circles() * 28
  circleBody += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(diameter / 2).toFixed(1)}" fill="none" stroke="${ink}" stroke-width="2" opacity=".75"/>`
}
save('seed-2026.svg', circleBody, '2026 tohumu ile daire kompozisyonu')

let remixBody = '<line x1="480" y1="28" x2="480" y2="510" stroke="#d2cec4"/>'
for (let side = 0; side < 2; side++) for (let row = 0; row < 14; row++) for (let col = 0; col < 12; col++) {
  const x = (side ? 520 : 48) + col * 33, y = 47 + row * 33
  const angle = side ? (Math.sin(row * 0.35 + col * 0.2) + 1) * Math.PI / 2 : ((row * 17 + col * 37) % 17) / 17 * Math.PI
  const dx = Math.cos(angle) * 12, dy = Math.sin(angle) * 12
  remixBody += `<line x1="${(x - dx).toFixed(1)}" y1="${(y - dy).toFixed(1)}" x2="${(x + dx).toFixed(1)}" y2="${(y + dy).toFixed(1)}" stroke="${side ? coral : ink}" stroke-width="2"/>`
}
save('remix.svg', remixBody, 'Kaynak çizgi sistemi ve varyasyonu')
save('tiny-rect.svg', '<rect x="330" y="190" width="300" height="180" fill="#e63c5a"/>', 'Açık zemin üstünde pembe dikdörtgen')

let oscillonPath = ''
for (let i = 0; i <= 1800; i++) {
  const t = Math.PI * 2 * i / 1800
  const x = 480 + Math.sin(3 * t + 1.05) * 205
  const y = 270 + Math.sin(2 * t) * 205 * 0.78
  oscillonPath += `${i ? 'L' : 'M'}${x.toFixed(2)},${y.toFixed(2)} `
}
const oscillonGrid = '<rect width="960" height="540" fill="#070e1f"/>'
  + Array.from({ length: 11 }, (_, i) => `<line x1="${80 + i * 80}" y1="52" x2="${80 + i * 80}" y2="488" stroke="#233d53"/>`).join('')
  + Array.from({ length: 9 }, (_, i) => `<line x1="66" y1="${70 + i * 50}" x2="894" y2="${70 + i * 50}" stroke="#233d53"/>`).join('')
  + '<line x1="480" y1="40" x2="480" y2="500" stroke="#496f8b"/><line x1="52" y1="270" x2="908" y2="270" stroke="#496f8b"/>'
  + `<path d="${oscillonPath}" fill="none" stroke="#48e1da" stroke-opacity=".22" stroke-width="11" stroke-linejoin="round" stroke-linecap="round"/>`
  + `<path d="${oscillonPath}" fill="none" stroke="#77ffe7" stroke-opacity=".72" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>`
  + `<path d="${oscillonPath}" fill="none" stroke="#d8fff6" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>`
save('oscillon.svg', oscillonGrid, 'İki dalganın oluşturduğu parlak osiloskop izi, güncel matematiksel benzetim')
console.log('Generated deterministic demo fallbacks')
