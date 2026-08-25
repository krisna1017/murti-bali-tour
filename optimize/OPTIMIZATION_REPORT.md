# Laporan Optimasi Website — Murti Bali Tour

**Tanggal:** 25 Agustus 2026
**Lingkup:** Optimasi performa (ukuran aset, loading) & SEO dasar
**Status:** Perubahan belum di-commit (masih di working tree)

---

## Ringkasan

| Kategori | Yang dilakukan | Dampak |
|---|---|---|
| Kompresi gambar | Script otomatis `sharp` | **73% lebih kecil** (65,7 MB → 17,7 MB) |
| Lazy loading | `loading="lazy"` + `decoding="async"` | Render awal lebih cepat |
| Code splitting | Route di-load按需 (dynamic import) | Bundle awal lebih ringan |
| SEO | Meta description, Open Graph, canonical | Crawl & share sosial lebih baik |
| Font loading | `preconnect` + pindah `@import` ke `<link>` | Hilangkan render-blocking CSS |
| Animasi (AOS) | Turun durasi, `once:true`, dukung reduced-motion | Lebih ringan & aksesibel |

Total **78 file gambar** di `public/` dan `src/assets/` berhasil dioptimasi.

---

## 1. Optimasi Gambar (Kompresi)

Dibuat script `scripts/optimize-images.mjs` yang memproses semua gambar di
`public/` dan `src/assets/` menggunakan library `sharp` (ditambahkan ke `devDependencies`).

**Pengaturan kompresi:**
- Resize maksimal lebar **1920px**
- JPEG → kualitas **70** dengan `mozjpeg`
- WebP → kualitas **68**
- PNG → `compressionLevel: 9` + `palette: true`

**Hasil:**
- Sebelum: **67.281 KB** (~65,7 MB)
- Sesudah: **18.094 KB** (~17,7 MB)
- Penghematan: **49.187 KB (73%)**

**Contoh terbesar:**
- `public/home/bg-hero.jpeg`: 8.484 KB → 233 KB (**-97%**)
- `public/gallery/g-42.webp`: 2.447 KB → 1.004 KB (-59%)
- `public/gallery/g-41.webp`: 1.677 KB → 678 KB (-60%)
- `public/gallery/g-35.webp`: 1.455 KB → 633 KB (-57%)

> Catatan: untuk menjalankan ulang kompresi cukup `node scripts/optimize-images.mjs`.
> Sebaiknya ditambahkan sebagai npm script, mis. `"optimize:img": "node scripts/optimize-images.mjs"`.

---

## 2. Lazy Loading & Async Decoding

Menambahkan atribut `loading="lazy"` dan `decoding="async"` pada tag `<img>`
di komponen & view agar browser tidak memuat semua gambar di awal:

- `src/components/home/TourSection.vue`
- `src/components/blog/BlogSection.vue`
- `src/views/TourDetail.vue` (galeri + thumbnail tur)
- `src/views/BlogDetail.vue` (gambar + related posts)
- `src/components/layout/Header.vue` (logo)
- Gambar hero di `TourDetail.vue` tetap `decoding="async"` (tanpa lazy, karena di atas lipatan).

---

## 3. Code Splitting (Lazy Routes)

Di `src/router/index.js`, semua route diubah dari static import menjadi
dynamic import (`() => import(...)`):

```js
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Gallery = () => import('../views/Gallery.vue')
const Blog = () => import('../views/Blog.vue')
const CategoryDetail = () => import('../views/CategoryDetail.vue')
const TourDetail = () => import('../views/TourDetail.vue')
const BlogDetail = () => import('../views/BlogDetail.vue')
```

Efek: Vite memecah setiap halaman menjadi chunk terpisah → halaman awal
tidak perlu mengunduh kode halaman lain.

---

## 4. Perbaikan SEO

Dibuat composable `src/composable/useSeo.js` (memakai `@vueuse/head` yang
sudah ada di dependencies) untuk menyetel:

- `<title>`
- `<meta name="description">`
- Open Graph: `og:title`, `og:description`, `og:image`
- `<link rel="canonical">`

Composable ini sudah diterapkan di beberapa view/components
(`TourDetail.vue`, `BlogDetail.vue`, section home/about/blog, dll).

---

## 5. Font Loading (Hilangkan Render-Blocking)

- `index.html`: ditambahkan `<link rel="preconnect">` ke
  `fonts.googleapis.com` & `fonts.gstatic.com` (plus `crossorigin`).
- `src/style.css`: baris `@import url('...fonts.googleapis.com...')` **dihapus**
  dan dipindah ke `<link rel="stylesheet">` di `index.html` agar tidak
  mem-block render melalui CSS import.

---

## 6. Tuning Animasi AOS

Di `src/main.js`, inisialisasi AOS disetel ulang agar lebih efisien & aksesibel:

```js
AOS.init({
  duration: 600,            // sebelumnya 800
  once: true,               // sebelumnya false (animasi tidak diulang)
  mirror: false,            // sebelumnya true
  disable: prefersReduced,  // mati jika user prefer reduced-motion
  throttleDelay: 150,
  debounceDelay: 50
})
```

---

## Catatan / Rekomendasi Lanjutan

1. **Bersihkan file `.tmp`** — terdapat ~128 file sampah `*.tmp` (sisa proses
   kompresi) yang belum terhapus. Sebaiknya dihapus agar tidak ikut ter-commit:
   `Get-ChildItem -Recurse -Filter *.tmp | Remove-Item -Force`.
2. **Tambahkan npm script** untuk kompresi gambar agar bisa dijalankan ulang
   dengan mudah (`npm run optimize:img`).
3. **Aktifkan Gzip/Brotli** di server/hosting (Vercel/Netlify) untuk kompresi
   teks (JS/CSS/HTML) di level transfer.
4. **Optimalkan lebih lanjut**: servis gambar via CDN/responsive `srcset`,
   dan tambahkan `width`/`height` pada gambar penting untuk menghindari
   layout shift (CLS).
5. **Verifikasi SEO**: pastikan setiap route memanggil `useSeo()` dengan
   data spesifik (title & description unik per halaman).
