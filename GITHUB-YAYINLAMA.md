# GitHub'da yayınlama (BlindLook ekibi için, bir kez)

Bu adımlar widget'ı GitHub + jsDelivr üzerinden ücretsiz olarak dünyaya dağıtır. Sunucu, masraf veya bakım gerekmez.

## 1. Depoyu açın (bir kez)

1. github.com'da BlindLook adına bir **organization** açın (ör. `blindlook`). Kişisel hesap da olur ama kurum hesabı daha doğru.
2. **New repository** → ad: `erisilebilirlik-widget` → **Public** seçin → *Create repository*.
   - Farklı bir ad veya hesap seçerseniz rehberdeki ve README'deki adresi de değiştirmek gerekir.
3. Depo sayfasında **Add file › Upload files** → `github/` klasöründeki tüm dosyaları sürükleyip bırakın → *Commit changes*.
4. Bir lisans seçin: **Add file › Create new file** → ad olarak `LICENSE` yazın → sağda çıkan **Choose a license template** ile seçin (açık kaynak için yaygın seçim: MIT).

## 2. Sürüm yayınlayın (her sürümde)

1. Depoda sağdaki **Releases › Create a new release**.
2. **Choose a tag** kutusuna sürümü yazın: `v1.0.0` (sonraki: `v1.1.0`, `v1.2.0` …) → *Create new tag*.
3. Başlık: `v1.0`. Açıklamaya `SURUM-NOTLARI.md` içindeki o sürümün notlarını yapıştırın.
4. **Attach binaries** alanına `dist/` klasöründeki zip'i (`BlindLook_Erisilebilirlik_Widget_v1.0.zip`) sürükleyin. Kendi sunucusunda barındıran markalar buradan indirir.
5. *Publish release*.

## 3. Kontrol

Birkaç dakika sonra tarayıcıda açın; kod görünmeli:

    https://cdn.jsdelivr.net/gh/blindlook/erisilebilirlik-widget@1/blindlook-widget.js

## Yeni sürüm (1.1, 1.2 …)

1. `src/widget.js` içinde `VERSION` değerini artırın (ör. `'1.1.0'`).
2. `SURUM-NOTLARI.md` dosyasının en üstüne yeni sürümün notlarını yazın.
3. `./release.sh` çalıştırın → `github/` klasörü ve `dist/` içindeki zip güncellenir.
4. GitHub'da `github/` klasöründeki değişen dosyaları yükleyin (Upload files) ve 2. adımdaki gibi yeni bir release açın (`v1.1.0`).

`@1` adresini kullanan siteler (Wix, Squarespace, Webflow) yeni sürüme kendiliğinden geçer. jsDelivr önbelleği nedeniyle bu birkaç gün sürebilir; hemen yenilemek için şu adresi bir kez açın:

    https://purge.jsdelivr.net/gh/blindlook/erisilebilirlik-widget@1/blindlook-widget.js

Büyük ve geriye uyumsuz bir değişiklik olursa `v2.0.0` yayınlayın; `@1` kullanan siteler etkilenmez.
