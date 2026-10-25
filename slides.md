---
theme: default
colorSchema: light
title: Kodla Eskiz — Processing, Yaratıcı Kodlama ve Birlikte Üretmek
info: Processing Community Day İzmir 2026 için etkileşimli sunum
aspectRatio: 16/9
transition: fade-out
duration: 30min
drawings:
  persist: false
class: cover-slide
---

<div class="pcd-cover" style="background-color: #f8f6ef; color: #202b3f;">
  <img class="pcd-cover-main" src="/logos/pcd-2026-black@2x.png" alt="Processing Community Day 2026 logosu">
  <div class="pcd-cover-logos" aria-label="Etkinlik logoları">
    <div class="pcd-cover-logo-slot"><img src="/logos/pcd-izmir.svg" alt="PCD İzmir logosu"></div>
    <div class="pcd-cover-logo-slot"><img src="/logos/ieu.svg" alt="İzmir Ekonomi Üniversitesi logosu"></div>
    <div class="pcd-cover-logo-slot"><img src="/logos/ffad.svg" alt="FFAD logosu"></div>
    <div class="pcd-cover-logo-slot"><img src="/logos/flooowlab.svg" alt="Flooow Lab logosu"></div>
  </div>
</div>

<!-- Süre 1:15. Etkinliği ve yerel ortakları tanıtın. Ana logo PCD 2026 Press Kit'ten; alt sıra projenin logos/ klasöründeki dört farklı logodan alınmıştır. -->

---

<div class="processing-intro">
  <img class="processing-intro-logo" src="/logos/processing-logo.svg" alt="Processing logosu">
  <div class="processing-intro-copy">
    <h1>Processing Nedir?</h1>
    <p><strong>Processing, kod yazarak görseller, animasyonlar ve etkileşimli işler üretmemizi sağlayan ücretsiz bir araçtır.</strong></p>
    <p>Bir kalemle kâğıda çizmek gibi düşünebilirsiniz. Burada kalemimiz kod, tuvalimiz ise ekrandır. Birkaç satırla şekiller çizebilir, onları hareket ettirebilir ve fareye, sese ya da dokunuşa tepki vermelerini sağlayabiliriz.</p>
    <p>Kod yazmayı öğrenirken yaratmak, yaratırken kod yazmayı öğrenmek için.</p>
  </div>
</div>

<!-- Süre 1:00. Processing'i basitçe tanımlayın; kodu hem araç hem üretim ortamı olarak tanıtın. Kaynak: https://processing.org/overview/ . Logo: PCD 2026 Press Kit, Logo Stickers/Copy of logo-processing.svg. -->

---

# Processing Topluluk Günü Nedir?

<div class="two-col-visual pcd-community-intro">
  <div>
    <p class="lede">Kodla bir şeyler üretenlerin ve “Acaba ben de yapabilir miyim?” diyenlerin buluşma günü.</p>
    <p>Sanatçılar, tasarımcılar, yazılımcılar ve meraklılar bir araya gelir; işlerini paylaşır, birbirinden öğrenir ve birlikte dener.</p>
    <p><strong>Kod bilmek şart değil. Merak etmek yeterli.</strong></p>
  </div>
  <img class="single-visual" src="/visuals/community-workshop.png" alt="Yaratıcı kodlama topluluğunun güncel illüstrasyonu">
</div>

<div class="pcd-community-stickers" aria-label="PCD 2026 Press Kit sanatçı ve p5.js görselleri">
  <!-- <figure><img src="/visuals/smiling-p5js-logo.jpg" alt="Gülen p5.js logosu"><figcaption></figcaption></figure> -->
  <figure><img src="/logos/p5-js-mark.svg" alt="p5.js logosu"><figcaption></figcaption></figure>
  <figure><img src="/logos/processing-logo.svg" alt="Processing logosu"><figcaption></figcaption></figure>
  <figure><img src="/logos/processing-foundation-icon.png" alt="Processing Foundation mavi daire logosu"><figcaption></figcaption></figure>
  <figure><img src="/logos/p5-square-reverse-preview.png" alt="Pembe zemin üzerinde beyaz p5 logosu"><figcaption></figcaption></figure>
  <!-- <figure><img src="/logos/p5js-rect-reverse-preview.png" alt="Pembe zemin üzerinde beyaz p5.js yatay logosu"><figcaption></figcaption></figure>
  <figure><img src="/visuals/qianqian-ye-sticker.png" alt="Qianqian Ye için hazırlanmış Processing Sticker"><figcaption></figcaption></figure>
  <figure><img src="/visuals/amanda-stojanov-sticker.png" alt="Amanda Stojanov için hazırlanmış p5.js Sticker"><figcaption></figcaption></figure> -->
</div>

<!-- Süre 1:15. Processing Community Day'i yeni katılımcılara tanıtın. Ana kaynak: https://processingfoundation.org/programs/processing-community-day/ . İllüstrasyon güncel bir kavramsal görseldir. Alt sıradaki Processing, p5.js, Foundation ve katılımcı sticker görselleri PCD 2026 Press Kit'ten alınmıştır. -->

---

# Processing Neyi Değiştirdi?

<p class="lede processing-change-lede">Processing’den önce bilgisayarda görsel üretmek ya da etkileşimli işler yapmak için karmaşık grafik kütüphaneleriyle (OpenGL, C++) boğuşmak gerekiyordu. Fare ile ekranda çizim yapan bir programın kodu:</p>

<CodeCompare />
<!-- <p class="small-note">Aynı fare izi. Fark, bu DOS/Turbo C ortamında girdiye ulaşmak için gereken açık adımlar.</p> -->

<!-- Süre 1:00. Processing Java modunda hızlı eskiz yapmaya yönelik bir ortam sundu. Kod karşılaştırması, DOS dönemi Turbo C/BGI örneğindeki açık kurulum ve fare girdisi adımlarını somutlaştırır. Bu kısa tarihsel genellemede OpenGL bir grafik API'si, C++ ise bir dildir; her üretici OpenGL veya C++ kullanmıyordu. Modern C++ kütüphaneleri bu işleri kolaylaştırabilir. Tam örnek: examples/mouse-trail-turboc.c. Kaynaklar: https://processing.org/overview/ ; https://processing.org/reference/mousePressed ; https://processing.org/reference/pmouseX ; https://www.bitsavers.org/pdf/microsoft/mouse/Microsoft_-_Microsoft_Mouse_Programmers_Reference_2nd_1991.pdf ; https://bitsavers.org/pdf/borland/turbo_c/Turbo_C_Reference_Guide_Ver_2.0_1988.pdf . Yedek: statik kod. -->

---

# Nasıl başladı?

<h2>Fırça yerine elektrik: Ben Laposky ve <em>Oscillons</em></h2>

<div class="two-col-visual pcd-oscillon-slide">
  <div>
    <p>1950’lerin başında Ben Laposky, elektrik sinyallerini ekranda görünür kılan bir osiloskopla soyut şekiller üretti. Dalgaları değiştirerek ışıkla çizim yaptı ve bu görüntüleri fotoğrafladı. <em>Oscillons</em> adını verdiği çalışmalar, elektronik sanatın ilk örnekleri arasında yer aldı.</p>
    <div class="laposky-image-pair">
      <figure>
        <img src="/visuals/LaposkiSideView.jpg" alt="Ben Laposky, yandan görünüm">
        <figcaption>Ben Laposky · Computer Timeline</figcaption>
      </figure>
      <figure>
        <img src="/visuals/LaposkyOscillon2.jpg" alt="Ben Laposky'nin iki oscillon çalışması">
        <figcaption>Oscillon örnekleri · © Sanford Museum</figcaption>
      </figure>
    </div>
  </div>
  <OscillonDemo />
</div>

<!--
Süre 1:15. Oscilloscope X ve Y girişlerindeki sinyallerin frekansını ve fazını değiştirerek örüntünün nasıl değiştiğini gösterin. Laposky analog devreler kullandı; bu p5.js demosu Lissajous benzeri çağdaş bir matematiksel benzetimdir, tarihsel eserin rekonstrüksiyonu değildir. Kaynaklar: https://www.vam.ac.uk/articles/patric-d-prince-digital-art-visionary ; https://www.computerhistory.org/revolution/artifact/208/563 ; https://www.vasulka.org/archive/Artists3/Laposky%2CBenF/ElectronicAbstractions.pdf .
-->

---

# 1959: Bilgisayar yoksa hayal et!

<div class="molnar-intro">
  <div class="molnar-copy">
    <p>Vera Molnár, henüz bir bilgisayara erişimi yokken “hayali makine” adını verdiği bir yöntem geliştirdi. Kurallar belirliyor, sonra bu kuralları bir bilgisayar gibi adım adım uygulayarak çizimler yapıyordu.</p>
    <p>1968’de gerçek bir bilgisayarla çalışmaya başladı. Ama sanatının temelindeki fikir zaten oradaydı:</p>
    <p class="molnar-key-idea">Tek bir resim çizmek yerine, birçok resim üretebilecek bir kural tasarlamak.</p>
  </div>
  <figure class="molnar-image">
    <img src="/visuals/vera-molnar-develops-her-machine-imaginaire-4313130047.jpg" alt="Vera Molnár, Quatre éléments distribués au hasard, 1959">
    <figcaption>© Adagp, Paris<br>Crédit photographique : Centre Pompidou, MNAM-CCI/Georges Meguerditchian/Dist. GrandPalaisRmn<br>Réf. image : 4N04567<br>Diffusion image : GrandPalaisRmnPhoto</figcaption>
  </figure>
</div>

---

# 1963: Ekran bir çizim alanına dönüşüyor

<div class="two-col-visual sketchpad-slide">
  <div class="sketchpad-copy">
    <p class="lede">Ivan Sutherland’ın geliştirdiği Sketchpad ile kullanıcılar bir ışık kalemi kullanarak doğrudan ekranda şekiller çizebiliyor, onları değiştirebiliyor ve çoğaltabiliyordu.</p>
    <p>İnsan-bilgisayar etkileşimi (HCI) açısından önemli bir dönüm noktasıydı: Bilgisayar, yalnızca komut yazdığımız değil, hareketlerimize anında görsel yanıt veren bir yaratım aracına dönüşüyordu.</p>
  </div>
  <figure class="sketchpad-image">
    <img src="/visuals/Sketchpad.jpg" alt="Ivan Sutherland, Sketchpad sistemini kullanırken">
    <figcaption>Ivan Sutherland Sketchpad’i kullanırken · Tarama: Kerry Rodden · CC BY-SA 3.0</figcaption>
  </figure>
</div>

<!--
Süre 1:15. Sketchpad, Sutherland’ın 1963 tarihli doktora çalışmasıydı. Işık kalemiyle doğrudan ekranda çizim yapmayı, çizim öğelerini değiştirmeyi ve çoğaltmayı mümkün kıldı. Bu, bilgisayarı yalnızca komutla çalışan bir makine olmaktan çıkarıp etkileşimli bir çizim ortamına taşıdı. Görsel: Ivan Sutherland’ın tezindeki fotoğraf; Kerry Rodden tarafından tarandı, CC BY-SA 3.0. Kaynaklar: https://history-computer.com/software/sketchpad-guide/ ; https://commons.wikimedia.org/wiki/File:SketchpadDissertation-Fig1-2.tif ; https://doi.org/10.1145/1461551.1461591 .
-->

---

# 1965: Kodun Galeriye İlk Adımı

<p class="pcd-1965-spot">Dijital Sanatın Doğuşu <span>· Nake, Noll, Nees</span></p>

<div class="pcd-1965-grid">
  <div class="pcd-1965-timeline">
    <div class="pcd-1965-event">
      <time>5–19 Şubat 1965</time>
      <div><strong>Georg Nees · Stuttgart</strong><p>Bilgisayarla üretilen çizimler, Studiengalerie’de izleyiciyle buluştu.</p></div>
    </div>
    <div class="pcd-1965-event">
      <time>6–24 Nisan 1965</time>
      <div><strong>A. Michael Noll ve Béla Julesz · New York</strong><p><em>Computer-Generated Pictures</em>, Howard Wise Gallery’de açıldı.</p></div>
    </div>
    <div class="pcd-1965-event">
      <time>5–26 Kasım 1965</time>
      <div><strong>Frieder Nake ve Georg Nees · Stuttgart</strong><p>Bilgisayar grafikleri Galerie Wendelin Niedlich’te sergilendi.</p></div>
    </div>
  </div>
  <figure class="pcd-1965-figure">
    <img src="/visuals/Zuse_Z64_Graphomat.jpg" alt="Bir müzede sergilenen Zuse Z64 Graphomat çizici">
    <figcaption>Zuse Z64 Graphomat · Steve Parker · CC BY 2.0</figcaption>
  </figure>
</div>

<p class="pcd-1965-takeaway">1965’te bilim insanları ve sanatçılar ana bilgisayarları ve çizicileri yaratıcı araçlara dönüştürdü. Processing bu mirasın güncel araçlarından biri.</p>

<!--
Süre 1:15. 1965’te dijital bilgisayar grafikleri üç sergide izleyiciyle buluştu: Georg Nees’in Stuttgart’taki sergisi (5–19 Şubat), A. Michael Noll ve Béla Julesz’in New York’taki Howard Wise Gallery sergisi (6–24 Nisan), Frieder Nake ve Georg Nees’in Stuttgart sergisi (5–26 Kasım). Zuse Z64, 1961’den itibaren satılan ve delikli şerit sinyallerini çizici hareketine dönüştüren erken dönem bir plotter’dı. “Processing bu mirasın güncel araçlarından biri” cümlesi tarihsel süreklilik için anlatı köprüsüdür; Processing doğrudan tek bir 1965 sergisinden türemiş değildir. Kaynaklar: https://dam.org/museum/essays_ui/essays/frieder-nake-interview-lines-fiction/ ; https://ethw.org/First-Hand%3AHoward_Wise_Gallery_Show_of_Digital_Art_and_Patterns_%281965%29%3A_A_50th_Anniversary_Memoir ; https://technikmuseum.berlin/programm/dauerausstellungen/informatik ; https://commons.wikimedia.org/wiki/File%3AZuse_Z64_Graphomat.jpg .
-->

---

# 1968–1970’ler: Deneylerden sergilere ve topluluklara

<p class="pcd-1968-intro">Bilgisayarla sanat, laboratuvarlardan çıkıp galerilere, müzelere ve ortak üretim ortamlarına yayılmaya başladı.</p>

<div class="pcd-1968-grid">
  <div class="pcd-1968-events">
    <div class="pcd-1968-event">
      <span class="pcd-1968-year">1968</span>
      <div><strong><em>Cybernetic Serendipity</em> · Londra</strong><p>Sanat, müzik ve teknolojiyi buluşturan sergide bilgisayar grafikleri, animasyonlar ve sibernetik makineler bir araya geldi.</p></div>
    </div>
    <div class="pcd-1968-event">
      <span class="pcd-1968-year">1968</span>
      <div><strong>Computer Arts Society</strong><p>Sanatçılar ve teknolojiyle çalışanlar, bilgi ve deneyim paylaşmak için bir topluluk kurdu.</p></div>
    </div>
    <div class="pcd-1968-event">
      <span class="pcd-1968-year">1968</span>
      <div><strong>Vera Molnár · Gerçek bilgisayar</strong><p>Hayali makinenin yerini gerçek bilgisayar aldı. Geometrik şekillerde düzeni ve küçük düzensizlikleri araştırmayı kodla sürdürdü.</p></div>
    </div>
    <div class="pcd-1968-event">
      <span class="pcd-1968-year">1971</span>
      <div><strong>Manfred Mohr · Paris</strong><p>Bilgisayarla ürettiği çizimleri modern sanat müzesinde sergiledi; çalışan bir plotter da izleyicilerin önünde çizim yaptı.</p></div>
    </div>
    <div class="pcd-1968-event">
      <span class="pcd-1968-year">1973</span>
      <div><strong>Harold Cohen · AARON</strong><p>Cohen, çizim programına AARON adını verdi. Sanat üreten öncü yapay zekâ sistemlerinden biri doğdu.</p></div>
    </div>
  </div>
  <figure class="pcd-mohr-visual">
    <img src="/visuals/mohr.jpg" alt="Manfred Mohr ve ziyaretçiler, Paris'teki sergide plotter çizimini izlerken">
    <figcaption>Manfred Mohr, Computer Graphics — Une Esthétique Programmée, Paris, 1971.<small>Fotoğraf: Rainer Mürle, Pforzheim · emohr.com</small></figcaption>
    <!-- <div class="pcd-comment-panel">
      <img src="https://emohr.com/paris-1971/images-text/museum_W.jpg" alt="Ziyaretçilerin yorum yazdığı sergi panosu">
      <figcaption>Sergide ziyaretçilerin yorumlarını bıraktığı bir pano da vardı. © Manfred Mohr</figcaption>
    </div> -->
  </figure>
</div>

<p class="pcd-1968-takeaway">Sanatçı artık yalnızca resmi değil, resmi üreten sistemi de tasarlıyordu.</p>

<!--
Süre 1:30. Cybernetic Serendipity, ICA’da 2 Ağustos–20 Ekim 1968 arasında düzenlendi ve sanat, bilim ve yeni teknoloji arasındaki ilişkileri gösterdi. Computer Arts Society 1968’de sanatlarda bilgisayarların yaratıcı kullanımını teşvik etmek ve bilgi alışverişini sağlamak için kuruldu. Vera Molnár 1968’de bilgisayar kullanmaya başladı; geometrik biçimler ve düzen/rastlantı arasındaki ilişkiyi kodla araştırdı. Manfred Mohr’un Computer Graphics — Une Esthétique Programmée sergisi ARC/Musée d’Art Moderne de la Ville de Paris’te 11 Mayıs–6 Haziran 1971 arasında açıldı; bir plotter ve manyetik bant sürücüsü müzeye kuruldu, ziyaretçilere açık gösteriler yapıldı ve yorum panosu kullanıldı. Harold Cohen, AARON’ı 1973’te geliştirmeye ve adlandırmaya başladı. Kaynaklar: https://archive.ica.art/sites/default/files/downloads/Educator%27s%20Resource%20Pack%20Cybernetic%20Serendipity/index.pdf ; https://computer-arts-society.com/casarchive/cas/about.html ; https://www.vam.ac.uk/articles/digital-art ; https://www.emohr.com/paris-1971/index.html ; https://www.emohr.com/paris-1971/p1.html ; https://www.emohr.com/paris-1971/m1.html ; https://www.vam.ac.uk/info/collection-selection-boxes-artificial-intelligence .
-->

---
class: demo-slide
---

# 1974–1979: Algoritmik estetikten kamusal kültüre

<p class="pcd-1974-spot">Sistematik üretim, grafik toplulukları ve kişisel bilgisayarlar.</p>

<div class="pcd-1974-grid">
  <div class="pcd-1974-timeline">
    <div class="pcd-1974-event">
      <span class="pcd-1974-year">1974–76</span>
      <div><strong>Vera Molnár · <em>Molnart</em> ve <em>(Des)Ordres</em></strong><p>François Molnár ile geliştirdiği Fortran programında ızgaralı kareleri küçük rastlantısal sapmalarla değiştirerek düzen ve düzensizliği araştırdı.</p></div>
    </div>
    <div class="pcd-1974-event">
      <span class="pcd-1974-year">1974</span>
      <div><strong>İlk SIGGRAPH konferansı</strong><p>Bilgisayar grafikleri alanındaki araştırmacı ve uygulayıcılar ilk yıllık konferansta buluştu.</p></div>
    </div>
    <div class="pcd-1974-event">
      <span class="pcd-1974-year">1977</span>
      <div><strong>Kişisel bilgisayarlar</strong><p>Apple II ve Commodore PET, bilgisayarı evlere ve okullara taşıdı; Apple II renkli grafik sunabiliyordu.</p></div>
    </div>
    <div class="pcd-1974-event">
      <span class="pcd-1974-year">1979</span>
      <div><strong>Ars Electronica · Linz</strong><p>Sanat, teknoloji ve toplumu bir araya getiren festival kamusal etkinliklerle başladı.</p></div>
    </div>
  </div>
  <RuleField compact />
</div>

<p class="pcd-1974-processing"><strong>Processing bağlantısı:</strong> Bir <code>for</code> döngüsüyle 2D ızgara kurup <code>random()</code> veya <code>noise()</code> ile kareleri küçükçe saptırmak, bu algoritmik fikrin bugünkü bir uygulamasıdır.</p>

<!--
Süre 1:30. Molnart, Vera ve François Molnár’ın 1974–76’da geliştirdiği Fortran programı olarak belgeleniyor. 1974 tarihli (Des)Ordres serisinde eş merkezli karelerden oluşan ızgara, dereceli rastgele sapmalarla düzen/düzensizlik gerilimini araştırır. SIGGRAPH grafik alanı grubu 1969’da kurumsallaştı; ilk yıllık konferansı 1974’te yapıldı. 1977’de Apple II ve Commodore PET gibi hazır kişisel bilgisayarlar ev ve okul pazarına yayıldı; Apple II renkli grafik sunuyordu. Ars Electronica’nın ilk festivali 1979’da Linz’de sanat, teknoloji ve toplum kesişiminde başladı. Alttaki Processing bağlantısı tarihsel bir doğrudan soy ilişkisi değil, bugünkü kodla benzer bir görsel fikri yeniden kurma örneğidir. Kaynaklar: https://dam.org/museum/artists_ui/artists/molnar-vera/ ; https://dam.org/museum/artists_ui/artists/molnar-vera/des-ordres/ ; https://www.siggraph.org/about/history/ ; https://www.computerhistory.org/revolution/personal-computers/17/298 ; https://www.computerhistory.org/timeline/1977/ ; https://ars.electronica.art/aeblog/en/2021/08/05/throwback-the-first-ars-electronica-festival/ .
-->

---
class: demo-slide pcd-1980s
---

# 1980’ler: Yatak odasından çıkan dijital sanat

<div class="pcd-1980s-slide">
  <div class="pcd-1980s-copy">
    <p><strong>Commodore 64, Atari ST ve Amiga…</strong></p>
    <p><strong>Demoscene’de</strong> amaç, sınırlı bellek ve işlem gücüyle şaşırtıcı işler yapmaktı. Kod, grafik ve müzik; bilgisayarda gerçek zamanlı çalışan gösterilere dönüşüyordu.</p>
    <blockquote>1985 yılında Commodore, gelişmiş grafik ve ses çiplerine sahip Amiga 1000'i tanıttı. Tanıtım etkinliğinde Andy Warhol, Amiga Paint yazılımını kullanarak Debbie Harry’nin dijital portresini canlı olarak çizdi.</blockquote>
  </div>
  <PlasmaDemo />
</div>

<div class="pcd-warhol-footer">
  <img src="/visuals/andy-warhol-debbie-harry-1985-2.webp" alt="Andy Warhol ve Debbie Harry, Amiga bilgisayarında dijital portreyle">
  <p>Bir yanda ekranı tuvale dönüştüren sanatçılar, diğer yanda kodla görüntü ve müzik üreten topluluklar vardı. Bilgisayar artık bir ifade aracıydı.</p>
</div>

<!--
Süre 1 dakika. Commodore 64 1982’de tanıtıldı. Atari 520ST ve Amiga 1000 1985’te çıktı. Demoscene, 1980’lerde ev bilgisayarlarının yaygınlaşmasıyla gelişen; kod, grafik ve müziği gerçek zamanlı, çoğu kez dosya boyutu ya da donanım sınırları içinde birleştiren bir dijital kültürdür. Sağdaki canlı plasma animasyonu bu estetiğe özgün, çağdaş bir selamdır; tarihî bir demo değildir. Kaynaklar: https://americanhistory.si.edu/collections/object/nmah_334636 ; https://www.si.edu/object/atari-520st-microcomputer%3Anmah_1330999 ; https://www.computerhistory.org/timeline/1985/ ; https://www.immateriellkulturarv.no/en/bidrag/the-demoscene-a-digital-community-across-borders-before-the-internet/ ; https://blog.siggraph.org/2019/10/demoscene-the-underground-art-of-real-time.html
-->

---
class: pcd-cooper
---

# Ekranı Yaşayan Bir Tuval Yapmak: Muriel Cooper & VLW

<p class="pcd-cooper-spot">MIT Media Lab’in öncü kadınlarından, Processing’e uzanan tasarım mirası · 1974–1994</p>

<div class="pcd-cooper-grid">
  <div class="pcd-cooper-points">
    <section>
      <span class="pcd-cooper-date">1974 · VISIBLE LANGUAGE WORKSHOP</span>
      <h2>Görsel dili kodla yeniden tanımladı</h2>
      <p>Ron MacNeil ile kurduğu VLW, grafik tasarımı baskıdan etkileşimli ekrana taşıyan öncü ortamlardan biriydi. Şeffaflık, katmanlar ve farklı ölçeklerde okunabilen tipografi araştırıldı.</p>
    </section>
    <section>
      <span class="pcd-cooper-date">1994 · INFORMATION LANDSCAPES</span>
      <h2>Bilgiyi 3B uzaya taşıdı</h2>
      <p>Cooper ve ekibi, metin ve veriler arasında gezilebilen üç boyutlu bilgi alanları geliştirdi. Tipografi, hareket ve kullanıcı etkileşimiyle değişen bir tasarım malzemesine dönüştü.</p>
    </section>
    <section>
      <span class="pcd-cooper-date">1996 → 1999 → 2001</span>
      <h2>Maeda’dan Processing’e uzanan miras</h2>
      <p>John Maeda, 1996’da kurduğu Aesthetics and Computation Group ile bu yaklaşımı sürdürdü. Design By Numbers (1999), Casey Reas ve Ben Fry’ın Processing’ine (2001) doğrudan zemin hazırladı.</p>
    </section>
  </div>
  <figure class="pcd-cooper-image">
    <img src="/visuals/information-landscapes-1994.jpg" alt="Information Landscapes’in MoMA’da sergilenişi; duvara yansıtılan üç boyutlu tipografi ve bilgi alanı">
    <figcaption>Muriel Cooper ve VLW ekibi, <em>Information Landscapes</em>, 1994.<br>MoMA sergileme görünümü, 2016 · Fotoğraf: John Wronn · <a href="https://www.moma.org/calendar/exhibitions/1654" target="_blank" rel="noopener noreferrer">Kaynak</a></figcaption>
  </figure>
</div>

<p class="pcd-cooper-lineage">Cooper / VLW <span>→</span> Maeda / DBN <span>→</span> Reas + Fry / Processing</p>

<!--
1970’lerde bilgisayar grafikleri zaten vardı; Muriel Cooper’ın katkısı, grafik tasarımın düşünme biçimini etkileşimli ekrana taşımaktı. MIT Press’in tasarım direktörlüğünden gelen Cooper, 1974’te Ron MacNeil ile Visible Language Workshop’u kurdu. Atölye, 1985’te MIT Media Lab’in ilk araştırma gruplarından biri oldu.

Cooper ve öğrencileri, bilgiyi sabit bir sayfa gibi düzenlemek yerine hareket, şeffaflık, ölçek ve katmanlarla araştırdı. 1994’te TED5’te gösterilen Information Landscapes, metin ve veriler arasında üç boyutlu bir uzayda gezinmeyi mümkün kılan çalışmalarını bir araya getiriyordu. Bu, tek kişinin icadından çok, Cooper’ın tasarım vizyonu etrafında çalışan bir ekibin üretimiydi.

Cooper 1994’te hayatını kaybetti. John Maeda, 1996’da MIT Media Lab’de Aesthetics and Computation Group’u kurarak tasarım ile kodu birleştiren bu geleneği sürdürdü. Maeda’nın Design By Numbers projesi 1999’da yayımlandı; Casey Reas ve Ben Fry, 2001’de Processing’i geliştirmeye başladı.

Processing’in kurucuları, fikirlerinin bir bölümünün Cooper’ın atölyesine uzandığını, yazılımın ise doğrudan DBN’den geliştiğini açıkça söylüyor. Buradaki güçlü bağ, tek bir komutun icadından ziyade, ekranı tasarlanabilir ve etkileşimli bir ortam olarak görme yaklaşımıdır.

Editoryal doğruluk: Alpha kanalları, tüm dinamik arayüzler veya 3B tipografinin 1994’te VLW’de ilk kez doğduğu ve Cooper olmadan Processing’in var olamayacağı ileri sürülmüyor. VLW kuruluş yılı için MIT ve MoMA’nın 1974 tarihleri esas alındı; Processing Foundation zaman çizelgesinde 1975 yazıyor.

Kaynaklar: https://www.media.mit.edu/posts/muriel-cooper-lasting-imprint/ ; https://www.media.mit.edu/groups/vlw/publications.html ; https://smg.media.mit.edu/library/small1996.html ; https://www.moma.org/collection/works/199050 ; https://www.moma.org/calendar/exhibitions/1654 ; https://processing.org/overview/ ; https://processingfoundation.org/about/history/

Görsel: Kullanıcının public/visuals altına kaydettiği MoMA görseli, information-landscapes-1994.jpg adıyla kopyalandı. Eser ekibi: Muriel Cooper, David Small, Suguru Ishizaki, Earl Rennison, Robert Silvers, Lisa Strausfeld, Jeffrey Ventrella, Yin Yin Wong. Eser 1994; sergileme fotoğrafı 2016, John Wronn.
-->

---
class: pcd-maeda
---

# 1990’lar: Kod, tasarımcının malzemesi oluyor

<p class="pcd-maeda-spot">John Maeda — MIT Media Lab</p>

<div class="pcd-maeda-grid">
  <div class="pcd-maeda-copy">
    <p>Hem tasarımcı hem bilgisayar bilimci olan John Maeda, programlamayı görsel üretimin bir parçası olarak ele aldı. Kod da çizgi, renk ve tipografi gibi bir tasarım malzemesi olabilirdi.</p>
    <p>1996’da MIT Media Lab’de kurduğu <strong>Aesthetics and Computation Group</strong>, tasarım ile hesaplamayı bir araya getirdi.</p>
    <p>1999’da yayımlanan <strong>Design By Numbers</strong>, sanatçılara ve tasarımcılara çizim yaparak kodlamanın temel fikirlerini öğretmeyi amaçladı.</p>
  </div>
  <div class="pcd-maeda-visuals">
    <!-- <figure>
      <img class="pcd-dbn-environment" src="/visuals/environmentdbn.gif" alt="Design By Numbers ortamı: solda çizim, sağda program kodu">
      <figcaption>Design By Numbers ortamı · Kod ve çizim aynı ekranda.</figcaption>
    </figure> -->
    <figure>
      <img class="pcd-dbn-example" src="/visuals/dbn.gif" alt="DBN ile yazılmış örnek program ve ürettiği siyah beyaz çizim">
      <figcaption>Örnek program ve çıktısı · <a href="https://dbn.media.mit.edu/whatisdbn.html" target="_blank" rel="noopener noreferrer">Görseller: MIT Media Lab / DBN</a></figcaption>
    </figure>
    <div class="pcd-dbn-bridge">
      <h3>DBN’den Processing’e</h3>
      <p>Bu ortamda çalışan iki kişi, Casey Reas ve Ben Fry, kodla çizim yapmayı öğrenmenin yanında, kodla özgürce eskiz yapabileceğimiz bir araç geliştirecekti.</p>
    </div>
  </div>
</div>

<blockquote class="pcd-maeda-question">Kendi araçlarını yazabilen bir tasarımcı, neler üretebilir?</blockquote>

<!--
Süre 1 dakika. Muriel Cooper’ın ardından tasarım ve hesaplama arasındaki ilişkiyi John Maeda üzerinden sürdürüyoruz. Maeda’nın Aesthetics and Computation Group’u 1996’da kuruldu. 1999’da yayımlanan Design By Numbers, görsel tasarımcılar ve sanatçılar için hesaplamalı tasarıma giriş olarak geliştirildi.

DBN hem bir programlama dili hem de bir çalışma ortamıydı. Görsel örneklerde programın sağda, çizimin solda yer aldığını gösterin. Nokta, çizgi ve alan gibi görsel öğeler; değişken, koşul ve tekrar gibi programlama fikirleriyle birleşiyordu. Amaç, çizim üzerinden hesaplamanın temel düşünme biçimini öğretmekti.

Son soruyu bir sonraki adım olan Processing’e geçiş için kullanın: Kendi araçlarını yazabilen bir tasarımcı, neler üretebilir? Bu ifade sunumun sorusudur, Maeda’dan doğrudan alıntı değildir.

Görsel ve DBN açıklaması: https://dbn.media.mit.edu/whatisdbn.html . Yerel görseller: public/visuals/environmentdbn.gif ve public/visuals/dbn.gif. DBN © 1999–2001 Massachusetts Institute of Technology. Tarihler: https://processingfoundation.org/about/history/ . Processing ile bağlantı: https://processing.org/overview/ .
-->

---
class: pcd-processing-birth
---

# 2001: Processing — Kodla özgürce eskiz yapmak

<p class="pcd-processing-birth-spot">Casey Reas ve Ben Fry · İhtiyaçtan doğan bir araç, birlikte büyüyen bir topluluk</p>

<div class="pcd-processing-pillars">
  <section>
    <span class="pcd-pillar-number">01</span>
    <h2>DBN’nin sınırlarını aşmak</h2>
    <p>Maeda’nın öğrencileri Reas ve Fry, DBN’nin <strong>100 × 100 piksellik, gri tonlu tuvalinin</strong> ötesinde üretmek istiyordu.</p>
    <p>DBN’nin sadeliğini Java’nın olanaklarıyla birleştirdiler: <strong>renk, daha büyük tuval, tam ekran ve 3B grafikler.</strong></p>
    <div class="pcd-pillar-footer">Kolay başla, daha ileri git.</div>
  </section>
  <section>
    <span class="pcd-pillar-number">02</span>
    <h2>“Sketchbook” felsefesi</h2>
    <p>Kod, fikirleri hızla deneyip sonuçlarını görebileceğimiz bir <strong>eskiz defterine</strong> dönüştü.</p>
    <p><code>setup()</code> başlangıcı hazırlar; <code>draw()</code> tekrar tekrar çalışarak çizimi, hareketi ve etkileşimi sürdürür.</p>
    <div class="pcd-pillar-footer">Yaz → Çalıştır → Gör → Değiştir</div>
  </section>
  <section>
    <span class="pcd-pillar-number">03</span>
    <h2>Açık kaynak ve ekosistem</h2>
    <p>Processing başından beri <strong>ücretsiz ve açık kaynaklıydı.</strong> Görsel kodlamayı daha geniş bir kitleye açtı.</p>
    <p>Paylaşılan eskizler, örnekler ve kütüphaneler sayesinde kullanıcılar aracın gelişimine katıldı; bir <strong>öğrenme ve üretim topluluğu</strong> oluştu.</p>
    <div class="pcd-pillar-footer">Öğren, paylaş, birlikte geliştir.</div>
  </section>
</div>

<div class="pcd-processing-ecosystem">
  <span><strong>p5.js</strong><br>Web’de yaratıcı kodlama</span>
  <span><strong>Wiring → Arduino</strong><br>Fiziksel dünyaya uzanan etki</span>
  <span><strong>openFrameworks</strong><br>C++ ile ortak yaratıcı kodlama kültürü</span>
</div>

<!--
Süre 1:30–2 dakika. Casey Reas ve Ben Fry, MIT Media Lab’de John Maeda’nın grubunda çalışırken Processing’i 2001’de başlattı. DBN güçlü bir öğrenme ortamıydı; fakat 100 × 100 piksel, gri tonlar ve tam sayı hesabıyla sınırlıydı. Kurucuların anlattığı ihtiyaç, bu sadeliği korurken renkli, daha büyük ve üç boyutlu işler üretebilmekti. Bu nedenle “siyah-beyaz” ifadesini yalnız iki renk gibi anlaşılmaması için “gri tonlu” olarak kullandık.

Processing bir yazılım eskiz defteri olarak tasarlandı. Birkaç satır yazıp çalıştırmak, sonucu görmek ve değiştirmek, tasarım sürecinin kendisiydi. setup() bir kez başlangıç ayarlarını yapar; draw() sürekli çalışır. Bunlar Processing’in çalışma modelidir; programlama dünyasındaki bütün döngülerin burada icat edildiği ileri sürülmüyor. Renk, tam ekran ve 3B grafikler kurucuların hedefini ve aracın geliştikçe kazandığı olanakları ifade eder; hepsinin ilk sürümde bulunduğu iddiası değildir.

Ücretsiz ve açık kaynaklı yapı, insanların kaynak kodu incelemesine ve değiştirmesine, örnekler ve kütüphaneler paylaşmasına olanak verdi. Processing’le üretilen bütün eserlerin kaynaklarını açmak zorunlu değildir.

Alttaki ekosistem aynı türden üç soy ilişkisi göstermez. p5.js, Processing yaklaşımını web’e taşır. Hernando Barragán’ın Wiring’i Processing’den gelişti; Arduino, Wiring’e dayanan programlama yaklaşımını ve Processing’den gelen IDE mirasını kullandı. openFrameworks ise C++ tabanlı, aynı yaratıcı kodlama kültürünü paylaşan ayrı bir projedir. Casey Reas’ın 2008 tarihli açıklaması iki topluluk arasındaki yakınlığı belgeliyor.

Kaynaklar:
- Kurucuların DBN sınırları ve Java açıklaması: https://old.rhizome.org/editorial/2009/sep/23/interview-with-casey-reas-and-ben-fry/
- Casey Reas’ın renk, tam ekran ve 3B hedeflerini anlattığı görüşme: https://www.lerandom.art/episodes/timeline-chapter-8-tooling-era-2000s
- https://processing.org/overview/
- https://processing.org/tutorials/overview/
- https://wiring.org.co/faq.html
- https://www.arduino.cc/en/Main/AboutUs
- https://openframeworks.cc/about/
- https://forum.processing.org/beta/num_1211301083.html
- https://processingfoundation.org/about/history/
-->

---
class: pcd-family
---

# Bir fikirden birçok araca: Processing’in çevresinde

<div class="pcd-family-top">
  <section>
    <span class="pcd-family-date">2005 · FİZİKSEL DÜNYA</span>
    <h2>Arduino</h2>
    <p>Processing’in IDE mirası ve <strong>Wiring</strong> üzerinden gelişen kodlama yaklaşımı, sensörlere, motorlara, LED’lere ve plotter’lara uzandı.</p>
    <p>Donanımla üretmenin eşiğini düşürdü.</p>
  </section>
  <section>
    <span class="pcd-family-date">2004–2005 · C++ VE PERFORMANS</span>
    <h2>openFrameworks</h2>
    <p><strong>C++ ile yaratıcı deneyler</strong> için sade bir araç takımı: canlı görseller, projeksiyon, bilgisayarlı görü ve ses işleme.</p>
    <p>Aynı üretim kültüründe farklı bir teknik yol.</p>
  </section>
  <section>
    <span class="pcd-family-date">2013 BAŞLANGIÇ · 2014 BETA</span>
    <h2>p5.js</h2>
    <p>Lauren McCarthy, Processing yaklaşımını <strong>JavaScript ve web’e</strong> taşıdı. Erişilebilirlik ve kapsayıcılık merkezdeydi.</p>
    <p>Web editörleriyle tarayıcıda üret, bağlantıyla paylaş.</p>
  </section>
</div>

<ProcessingFamily />

<!--
Süre 1:30–2 dakika. Bu üç araç Processing’in aynı biçimde türemiş sürümleri değildir; ortak yaratıcı kodlama yaklaşımı farklı ortamlara uzanır.

Arduino 2005’te ortaya çıktı. Klasik Arduino IDE’si Processing kodundan yararlandı; programlama yaklaşımı Hernando Barragán’ın Wiring projesine dayanır. Sensörler, LED’ler ve motorlar, kodu fiziksel üretime bağlar. Plotter gibi işler ilave sürücü ve mekanik bileşenler gerektirir.

openFrameworks’in kurucusu Zach Lieberman başlangıcı 2004/2005 olarak anlatır. MIT Aesthetics and Computation Group’ta geliştirilen ACU adlı C++ kütüphanesi, bu tarihin önemli bir parçasıdır. Processing’in doğrudan C++ sürümü olarak tanımlanmamalıdır. C++ ve açık kütüphaneler, ses işleme, bilgisayarlı görü ve sahne görselleri gibi işlerde düşük seviyeli erişim sağlar. Bunlar kullanım alanlarıdır; bütün uygulamalar için yüksek FPS garantisi değildir.

p5.js Lauren McCarthy tarafından 2013’te başlatıldı; ilk beta Ağustos 2014’te yayımlandı. JavaScript ile web için yeniden yorumlanan bu yaklaşım, web editörü veya OpenProcessing gibi ortamlarla yerel IDE kurulmadan denenebilir. OpenProcessing p5.js’ten daha eskidir; burada platformun p5.js ile sonradan ilişkilenmesinden söz ediyoruz.

Kod karşılaştırmasında setup() her iki örnekte bir kez çalışır. Processing draw() ile ekranı tekrar çizer; Arduino loop() ile donanım işlerini tekrarlar. Arduino örneği yerleşik LED’i yarım saniyelik aralıklarla yakıp söndürür. Bu yapı benzerliği ortak öğretim yaklaşımını görünür kılar.

Kaynaklar: https://www.arduino.cc/en/Main/AboutUs ; https://wiring.org.co/faq.html ; https://github.com/arduino/Arduino/blob/master/README.md ; https://openframeworks.cc/ofBook/chapters/foreword.html ; https://openframeworks.cc/about/ ; https://p5js.org/people/ ; https://processingfoundation.org/about/history/ ; https://practices.digital/assets/pdf/p5.pdf ; https://docs.arduino.cc/built-in-examples/basics/Blink/ ; https://processing.org/tutorials/overview/

Şemada yerel Processing ve p5.js logoları kullanıldı. Arduino ve openFrameworks düğümleri tipografik etiketlerdir; kesikli bağlantı ortak kültürü, diğer bağlantılar Wiring üzerinden aktarımı ve web yorumunu gösterir.
-->

---
class: pcd-community-closing
---

# Bu topluluğun bir parçasıyız: PCD İzmir

<div class="pcd-closing-grid">
  <div class="pcd-closing-copy">
    <section>
      <h2>Açık kaynak, açık topluluk demektir</h2>
      <p>Processing sadece kodlardan oluşan bir araç değil; sanatçıların, tasarımcıların, eğitimcilerin ve hobicilerin oluşturduğu küresel bir dayanışma ağıdır.</p>
      <p class="pcd-closing-principle">“Sadece kullanma, nasıl yaptığını paylaş ve yeni başlayanlara yardım et.”</p>
    </section>
    <section>
      <h2>Processing Community Day (PCD) nedir?</h2>
      <p>Processing Foundation’ın küresel girişimi olan PCD, dünyanın dört bir yanında yerel toplulukların ve gönüllülerin bağımsız olarak düzenlediği bir kutlamadır.</p>
      <p>Sanatı, kodlamayı ve çeşitliliği kutlar; yeni insanları bu dünyaya davet eder.</p>
    </section>
    <section>
      <h2>Küresel bir düğüm noktası: İzmir</h2>
      <p>Tokyo’dan New York’a, Berlin’den São Paulo’ya uzanan bu küresel yaratıcılık ağının bugün aktif bir parçasıyız.</p>
      <p>Kodlama herkesin kendini ifade edebildiği bir araca dönüşüyorsa, bu topluluğun paylaşımı ve dayanışması sayesindedir.</p>
    </section>
  </div>
  <div class="pcd-closing-photos" aria-label="Dünyanın farklı şehirlerinden Processing Community Day fotoğrafları">
    <figure class="pcd-world-photo pcd-world-tokyo">
      <img src="/visuals/pcd-worldwide/tokyo.jpg" alt="PCD Tokyo katılımcılarının toplu fotoğrafı">
      <figcaption>Tokyo · 2020</figcaption>
    </figure>
    <figure class="pcd-world-photo pcd-world-ny">
      <img src="/visuals/pcd-worldwide/new-york.jpeg" alt="PCD New York katılımcıları bir arada">
      <figcaption>New York</figcaption>
    </figure>
    <figure class="pcd-world-photo pcd-world-sp">
      <img src="/visuals/pcd-worldwide/sao-paulo.jpg" alt="São Paulo PCD atölyesinde Processing ile görsel üreten bir katılımcı">
      <figcaption>São Paulo</figcaption>
    </figure>
    <figure class="pcd-world-photo pcd-world-bangalore">
      <img src="/visuals/pcd-worldwide/bangalore.png" alt="PCD Bangalore katılımcılarının toplu fotoğrafı">
      <figcaption>Bangalore</figcaption>
    </figure>
    <figure class="pcd-world-photo pcd-world-izmir">
      <div class="pcd-izmir-empty-square" role="img" aria-label="İzmir için boş fotoğraf karesi"></div>
      <figcaption>İzmir</figcaption>
    </figure>
  </div>
</div>

<p class="pcd-closing-credit">Fotoğraflar: PCD 2026 Press Kit / PCD Worldwide Photos · Tokyo: Naoto Hieda · <a href="https://day.processing.org/about/" target="_blank" rel="noopener noreferrer">Processing Community Day</a></p>

<!--
Kapanış. Processing’in tarihini araçlar ve kişiler üzerinden anlattık; bu araçları yaşatan şey onları kullanan, öğreten, geliştiren ve paylaşan insanlar. “Nasıl yaptığını paylaş ve yeni başlayanlara yardım et” cümlesi topluluk yaklaşımının sunum için özetidir, bir kişiden doğrudan alıntı değildir.

PCD, Processing Foundation’ın küresel girişimidir; yerel etkinlikler kendi topluluklarınca bağımsız düzenlenir. Foundation’ın desteği koordinasyon, görünürlük ve organizasyon kaynaklarını kapsar; tüm yerel etkinliklere mali destek sağlandığı anlamına gelmez. Sanatı, kodu ve çeşitliliği kutlamak; özellikle teknolojiye eşit erişimi olmayan kişileri de üretime davet etmek önemlidir.

Bugün İzmir de bu paylaşım ağının bir parçası. Kapanış çağrısı: Eskizini paylaş, bir başkasının kodunu incele, yeni başlayan birine yardımcı ol.

Kaynaklar: https://processingfoundation.org/programs/processing-community-day/ ; https://day.processing.org/about/ ; https://day.processing.org/organize/about-processing-foundation/

Görseller kullanıcının PCD 2026 Press Kit/PCD_Worldwide_Photos klasöründen alındı. Tokyo dosyası: 2020-02-01-processing-community-day-tokyo-2020-group-by-Naoto-Hieda.jpg (fotoğraf Naoto Hieda). Diğerleri: Copy of New York City_PCD_Worldwide.jpeg; Copy of São_Paulo_PCD_Worldwide.jpg; Copy of Bangalore_PCD_Worldwide.png. Diğer fotoğrafçı adları sağlanan dosya adlarında belirtilmiyor. Fotoğraflar farklı yıllardaki buluşmaları gösterir, hepsi 2026’ya ait değildir. Asıllar korundu; sunum kopyaları public/visuals/pcd-worldwide altında.
-->

---

# Kaynaklar

- Ben Laposky — [Timeline Stories, Computer Timeline](https://www.computer-timeline.com/ctl-stories/timeline-stories/page/3/)
- Görsel: [Ben Laposky, yan görünüm](http://www.computer-timeline.com/wp-content/uploads/2023/09/LaposkiSideView.jpg)
- Oscillon görseli: © Sanford Museum
- Sketchpad: [Ivan Sutherland'ın 1963 tarihli çalışması](https://doi.org/10.1145/1461551.1461591), [History-Computer rehberi](https://history-computer.com/software/sketchpad-guide/)
- Görsel: Ivan Sutherland, tarama Kerry Rodden, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SketchpadDissertation-Fig1-2.tif), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- 1965 sergileri: [A. Michael Noll’un anı yazısı](https://ethw.org/First-Hand%3AHoward_Wise_Gallery_Show_of_Digital_Art_and_Patterns_%281965%29%3A_A_50th_Anniversary_Memoir), [Frieder Nake röportajı](https://dam.org/museum/essays_ui/essays/frieder-nake-interview-lines-fiction/)
- 1968–1973: [Cybernetic Serendipity (ICA)](https://archive.ica.art/sites/default/files/downloads/Educator%27s%20Resource%20Pack%20Cybernetic%20Serendipity/index.pdf), [Computer Arts Society tarihçesi](https://computer-arts-society.com/casarchive/cas/about.html), [V&A · Vera Molnár](https://www.vam.ac.uk/articles/digital-art), [V&A · Harold Cohen ve AARON](https://www.vam.ac.uk/info/collection-selection-boxes-artificial-intelligence)
- Manfred Mohr, Paris 1971: [sergi arşivi](https://www.emohr.com/paris-1971/index.html), [fotoğraflar ve plotter gösterimi](https://www.emohr.com/paris-1971/p1.html), [ziyaretçi panosu](https://www.emohr.com/paris-1971/m1.html). Fotoğraf: Rainer Mürle; pano © Manfred Mohr.
- 1974–1979: [Molnart ve Vera Molnár (DAM)](https://dam.org/museum/artists_ui/artists/molnar-vera/), [(Des)Ordres (DAM)](https://dam.org/museum/artists_ui/artists/molnar-vera/des-ordres/), [SIGGRAPH tarihçesi](https://www.siggraph.org/about/history/), [1977 bilgisayarları (Computer History Museum)](https://www.computerhistory.org/revolution/personal-computers/17/298), [Ars Electronica’nın ilk festivali](https://ars.electronica.art/aeblog/en/2021/08/05/throwback-the-first-ars-electronica-festival/)
- 1980’ler ve demoscene: [Commodore 64 (Smithsonian)](https://americanhistory.si.edu/collections/object/nmah_334636), [Atari 520ST (Smithsonian)](https://www.si.edu/object/atari-520st-microcomputer%3Anmah_1330999), [Amiga 1000 (Computer History Museum)](https://www.computerhistory.org/timeline/1985/), [demoscene kültürel miras kaydı](https://www.immateriellkulturarv.no/en/bidrag/the-demoscene-a-digital-community-across-borders-before-the-internet/), [ACM SIGGRAPH · demoscene](https://blog.siggraph.org/2019/10/demoscene-the-underground-art-of-real-time.html)
- Zuse Z64 Graphomat: [Deutsches Technikmuseum](https://technikmuseum.berlin/programm/dauerausstellungen/informatik)
- Fotoğraf: Steve Parker, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Zuse_Z64_Graphomat.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- Muriel Cooper / VLW: [MIT Media Lab tarihçesi](https://www.media.mit.edu/posts/muriel-cooper-lasting-imprint/), [Information Landscapes (MoMA)](https://www.moma.org/collection/works/199050), [sergileme fotoğrafı: John Wronn, 2016](https://www.moma.org/calendar/exhibitions/1654), [Processing’in kurucularının anlatımı](https://processing.org/overview/), [Maeda / DBN zaman çizelgesi](https://processingfoundation.org/about/history/)
- John Maeda / Design By Numbers: [DBN açıklaması ve görseller](https://dbn.media.mit.edu/whatisdbn.html). DBN © 1999–2001 Massachusetts Institute of Technology; [ACG 1996 ve DBN 1999 tarihçesi](https://processingfoundation.org/about/history/).
- Processing’in doğuşu: [Reas ve Fry röportajı (Rhizome)](https://old.rhizome.org/editorial/2009/sep/23/interview-with-casey-reas-and-ben-fry/), [eskiz yaklaşımı ve çalışma modeli](https://processing.org/tutorials/overview/), [Wiring bağlantısı](https://wiring.org.co/faq.html), [Arduino](https://www.arduino.cc/en/Main/AboutUs), [openFrameworks](https://openframeworks.cc/about/).
- Arduino / openFrameworks / p5.js: [Arduino ve Wiring](https://www.arduino.cc/en/Main/AboutUs), [openFrameworks’in kurucusundan tarihçe](https://openframeworks.cc/ofBook/chapters/foreword.html), [p5.js ve Lauren McCarthy](https://p5js.org/people/), [Arduino Blink örneği](https://docs.arduino.cc/built-in-examples/basics/Blink/).
