# Kodla Eskiz — PCD İzmir 2026

Processing, yaratıcı kodlama ve topluluk üzerine Türkçe, etkileşimli Slidev sunumu.

| Akış | Dosya | Süre | Slayt |
| --- | --- | ---: | ---: |
| Ana | `slides.md` | 30 dakika | 24 |
| Kısa | `slides-short.md` | 15 dakika | 9 |

## Çalıştırma

Node.js 20 veya üstü gerekir. Bağımlılıkları `npm ci` ile kurun.

```sh
npm ci
npm run dev
```

Slidev adresi terminalde gösterir. Kısa akış için `npm run dev:short` kullanın. Slayt notları ve zamanlar her slaydın Markdown yorumunda bulunur; Slidev sunucu görünümü bunları konuşmacıya gösterir.

## Derleme ve dışa aktarma

```sh
npm run build          # dist/
npm run build:short    # dist-short/
```

Bu çıktılar p5.js ve kullanılan görselleri yerel olarak içerir. İlk `npm ci` işlemi için paketlere erişim gerekir; ondan sonra sunumu çalıştırmak için canlı internet bağlantısı gerekmez. Slaytlardaki kaynak bağlantıları açılmak istenirse internet gerekir.

PDF için Slidev'in Playwright Chromium bağımlılığını kurup aşağıdaki komutları çalıştırın:

```sh
npm install --save-dev playwright-chromium
npm run export
npm run export:short
```

PDF dışa aktarımında canlı p5.js tuvalleri, `public/fallbacks/` içindeki sabit öğretim görsellerine dönüşür. Bu görseller `npm run fallbacks` ile yeniden üretilebilir. Bu oturumun yalıtılmış çalışma ortamı yerel port açmaya izin vermediğinden PDF dosyaları burada üretilemedi; iki Slidev derlemesi başarıyla oluşturuldu.

## Konuşmacı için

- Açılış ve kapanışta kare alanı demosunun **Varyasyon**, **Dağılma**, **Dönüş** ve **Tohum** denetimlerini kullanın.
- Fare izi demosunda fare düğmesini basılı tutarak çizin. Klavye için odaklanabilir ipucunda ok tuşlarını kullanın; **Hazır yol** sunum sırasında güvenilir bir alternatif sağlar.
- Kod karşılaştırmasında iki **çalışma ortamını** kıyaslayın: Processing Java modu ile DOS dönemi Turbo C/BGI. Tam örnekler `examples/` klasöründedir. Bu örnek, genel olarak C veya C++ için elle bellek yönetimi gerektiği iddiası değildir; modern C kütüphaneleri girdi işini kolaylaştırabilir.
- Tarihsel illüstrasyonlar arşiv fotoğrafı değildir. Kaynak bağlantıları, görsel kayıtları ve kullanım sınırları [`sources.md`](./sources.md) dosyasındadır.

Sunumun araştırma ve editoryal çerçevesi [`md/PCD_2026_Processing_Research_and_Slidev_Brief.md`](./md/PCD_2026_Processing_Research_and_Slidev_Brief.md) dosyasındadır.
