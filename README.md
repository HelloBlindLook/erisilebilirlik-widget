# BlindLook Erişilebilirlik Widget'ı

Web sitenize tek satır kodla eklenen, ücretsiz erişilebilirlik widget'ı. Ziyaretçileriniz metin boyutundan kontrasta, sesli okumadan okuma moduna kadar sitenizi kendi ihtiyaçlarına göre ayarlar.

- 10 erişilebilirlik profili, 24 içerik ayarı, renk özelleştirme
- 33 dil; sitenin dili otomatik algılanır
- Kişisel veri toplamaz, çerez kullanmaz
- Tek dosya, bağımlılık yok

Geliştiren: [BlindLook](https://blindlook.com/tr) · Türkiye'nin öncü erişilebilirlik girişimi

---

## Kurulum

### A) Wix, Squarespace, Webflow ve dosya yükleyemediğiniz tüm siteler

Aşağıdaki kodu sitenizin özel kod alanına, tüm sayfalarda sayfa sonuna (body sonu / footer) ekleyin:

```html
<!-- BlindLook Erişilebilirlik Widget'ı -->
<script src="https://cdn.jsdelivr.net/gh/blindlook/erisilebilirlik-widget@1/blindlook-widget.js" defer charset="utf-8"></script>
```

| Platform | Kodun ekleneceği yer |
|---|---|
| Wix | Settings › Custom Code › Add Custom Code · Konum: *Body – end* · *All pages* |
| Squarespace | Settings › Developer Tools › Code Injection › Footer |
| Webflow | Site settings › Custom code › Footer code › siteyi yeniden yayınlayın |

`@1` adresi her zaman 1.x serisinin en yeni sürümünü getirir; güncellemeler kendiliğinden gelir. Belirli bir sürümde sabit kalmak isterseniz `@1.0.0` yazın.

### B) Kendi sunucunuzda barındırma (WordPress, Shopify, özel siteler)

1. [Releases](../../releases) sayfasından son sürümün `blindlook-widget.js` dosyasını indirip sitenizin ana klasörüne yükleyin.
2. Tüm sayfalarda `</body>` öncesine ekleyin:

```html
<!-- BlindLook Erişilebilirlik Widget'ı -->
<script src="/blindlook-widget.js" defer charset="utf-8"></script>
```

Yeni sürümde yalnızca dosyayı eskisinin üzerine yükleyin; kod değişmez.

---

## İsteğe bağlı ayarlar

| Öznitelik | Ne yapar | Örnek |
|---|---|---|
| `data-lang` | Dili sabitler (varsayılan: sitenin dili) | `data-lang="en"` |
| `data-position` | Butonu sağa veya sola alır | `data-position="left"` |
| `data-color` | Vurgu rengi | `data-color="#1D20B4"` |
| `data-offset-x`, `data-offset-y` | Butonun kenardan uzaklığı (px) | `data-offset-y="96"` |

Kısayol: **ALT + B**

---

## Sürümler ve geri bildirim

- Kullandığınız sürüm widget panelinin en altında yazar (ör. `v1.0`).
- Sürüm notları: [SURUM-NOTLARI.md](SURUM-NOTLARI.md)
- Hata, eksik dil veya istek: [Issues](../../issues) üzerinden ya da https://blindlook.com/tr adresinden bize yazın; sürüm numarasını belirtin.

---

## English

Free accessibility widget by [BlindLook](https://blindlook.com/tr). Add this line before `</body>` on every page:

```html
<script src="https://cdn.jsdelivr.net/gh/blindlook/erisilebilirlik-widget@1/blindlook-widget.js" defer charset="utf-8"></script>
```

33 languages, no cookies, no tracking, no dependencies. Shortcut: ALT + B.
