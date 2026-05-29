<template>
  <MainLayout>
    <div v-if="tour" class="min-h-screen bg-slate-50 pt-24 pb-16 font-poppins text-slate-800 text-left">
      <div class="max-w-5xl mx-auto px-4">
        
        <button 
          @click="$router.back()" 
          class="text-sky-600 hover:text-sky-700 font-semibold mb-6 flex items-center gap-2 cursor-pointer text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 transition-all w-fit"
        >
          ← Kembali ke Daftar Paket
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div class="lg:col-span-2 space-y-6">
            <div class="w-full h-62.5 sm:h-95 md:h-105 overflow-hidden rounded-3xl shadow-md bg-slate-200">
              <img 
                :src="tour.image" 
                :alt="tour.name" 
                class="w-full h-full object-cover object-center hover:scale-105 transition duration-700" 
              />
            </div>

            <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
                {{ tour.name }}
              </h1>
              
              <div class="flex items-center gap-2">
                <span class="text-amber-400 text-base">★★★★★</span>
                <span class="text-slate-500 text-xs font-semibold bg-slate-100 px-2 py-1 rounded-md">
                  {{ tour.rating || '5.0' }} Rating Premium
                </span>
              </div>
            </div>

            <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 class="text-lg font-bold text-slate-900 border-l-4 border-sky-500 pl-3 mb-4">
                Deskripsi Paket Wisata
              </h2>
              <p class="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {{ tour.description || 'Nikmati keindahan destinasi premium pilihan di Bali bersama layanan Murti Bali Tour. Paket ini sudah dirancang secara private untuk memastikan kenyamanan maksimal, fleksibilitas waktu, serta pengalaman liburan lokal yang tak terlupakan bersama driver berpengalaman kami.' }}
              </p>
            </div>
          </div>

          <div class="lg:col-span-1 lg:sticky lg:top-24">
            <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-100">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Harga Paket</span>
              
              <div class="flex items-baseline gap-1 mt-1 mb-6">
                <span class="text-3xl font-black text-sky-500">
                  {{ tour.price }}
                </span>
                <span class="text-xs font-medium text-slate-400">/ pax</span>
              </div>

              <div class="border-t border-dashed border-slate-100 my-4 pt-4 space-y-3 text-xs text-slate-500">
                <div class="flex items-center gap-2">➔ <span class="font-medium text-slate-700">Private Tour</span> (Tidak digabung peserta lain)</div>
                <div class="flex items-center gap-2">➔ <span class="font-medium text-slate-700">Termasuk:</span> Mobil, Driver & BBM</div>
                <div class="flex items-center gap-2">➔ <span class="font-medium text-slate-700">Penjemputan:</span> Area Hotel Bali</div>
              </div>

              <a 
                :href="whatsappUrl"
                target="_blank"
                class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all shadow-md shadow-emerald-500/20 text-sm flex items-center justify-center gap-2 cursor-pointer mt-6"
              >
                💬 Pesan via WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div v-else class="min-h-screen bg-slate-50 flex items-center justify-center text-slate-400 font-poppins">
      <div class="text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 max-w-sm">
        <p class="text-base font-semibold text-slate-700">Detail Paket Wisata Tidak Ditemukan</p>
        <p class="text-xs text-slate-400 mt-1 mb-4">Slug rute salah atau data belum didaftarkan di JSON.</p>
        <router-link to="/" class="text-xs bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 py-2 rounded-xl transition-all inline-block">
          Kembali ke Home
        </router-link>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import CategoryData from '../data/categories.json' // Mengambil data master JSON

// 1. Menangkap string rute param ':tourSlug' yang dikirim dari router
const props = defineProps({
  tourSlug: {
    type: String,
    required: true
  }
})

// 2. Mengurai array bertingkat (nested array) untuk mencari objek paket yang cocok
const tour = computed(() => {
  for (const category of CategoryData) {
    if (category.packages_list) {
      const found = category.packages_list.find(p => p.slug === props.tourSlug)
      if (found) return found
    }
  }
  return null
})

// 3. Membuat tautan otomatis template pesan pesanan ke WhatsApp admin
const whatsappUrl = computed(() => {
  if (!tour.value) return '#'
  
  const nomorWa = '6281234567890' // ➔ GANTI menggunakan nomor WhatsApp asli bisnismu
  const teksPesan = `Halo Murti Bali Tour, saya tertarik dan ingin memesan paket wisata berikut:\n\n*Nama Paket:* ${tour.value.name}\n*Harga:* ${tour.value.price}/pax\n\nMohon informasi ketersediaan jadwalnya, terima kasih.`
  
  return `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodeURIComponent(teksPesan)}`
})
</script>