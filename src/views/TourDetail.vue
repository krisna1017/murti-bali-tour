<template>
  <MainLayout>
    <div v-if="tour" class="min-h-screen px-4 bg-white pt-24 pb-16 font-poppins text-slate-800 text-left">
      <div class="max-w-6xl mx-auto lg:col-span-2 space-y-3">

        <div class="bg-transparent rounded-3xl md:flex items-center justify-between">
          <h1 class="text-lg md:text-3xl font-regular tracking-tight text-sky-800 mb-1">
            {{ tour.name }}
          </h1>
          
          <div class="flex items-center gap-2">
            <span class="text-amber-400 text-base">★★★★★</span>
            <span class="text-slate-500 text-xs font-semibold bg-slate-100 px-2 py-1 rounded-md">
              {{ tour.rating || '5.0' }} Rating Premium
            </span>
          </div>
        </div>

        <!-- MOBILE SLIDER -->
        <div class="relative md:hidden">
          <!-- Image -->
          <div class="overflow-hidden rounded-2xl">
            <img
              :src="tourImages[currentImage]"
              alt=""
              class="w-full h-65 object-cover transition-all duration-300"
            />
          </div>

          <!-- Button Prev -->
          <button
            @click="prevImage"
            class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 w-10 h-10 rounded-full shadow flex items-center justify-center"
          >
            ❮
          </button>

          <!-- Button Next -->
          <button
            @click="nextImage"
            class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 w-10 h-10 rounded-full shadow flex items-center justify-center"
          >
            ❯
          </button>

          <!-- Indicator -->
          <div class="flex justify-center gap-2 mt-4">
            <button
              v-for="(img, index) in tourImages"
              :key="index"
              @click="currentImage = index"
              class="w-2.5 h-2.5 rounded-full transition-all"
              :class="currentImage === index ? 'bg-sky-500 w-6' : 'bg-slate-300'"
            ></button>
          </div>
        </div>

        <!-- DESKTOP GRID -->
        <div class="hidden md:grid grid-cols-12 grid-rows-2 h-150">

          <div 
            class="row-span-2 col-span-6 cursor-pointer overflow-hidden rounded-lg mr-3"
            @click="openDesktopGallery(0)"
          >
            <img 
              :src="tour.images[0]" 
              alt="" 
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            >
          </div>

          <div 
            class="row-span-1 col-span-3 cursor-pointer overflow-hidden rounded-lg mb-3"
            @click="openDesktopGallery(1)"
          >
            <img 
              :src="tour.images[1]" 
              alt="" 
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            >
          </div>

          <div 
            class="row-span-1 col-span-3 cursor-pointer overflow-hidden rounded-lg mb-3 ml-3"
            @click="openDesktopGallery(2)"
          >
            <img 
              :src="tour.images[2]" 
              alt="" 
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            >
          </div>

          <div 
            class="row-span-2 col-span-3 cursor-pointer overflow-hidden rounded-lg"
            @click="openDesktopGallery(3)"
          >
            <img 
              :src="tour.images[3]" 
              alt="" 
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            >
          </div>

          <div 
            class="row-span-2 col-span-3 cursor-pointer overflow-hidden rounded-lg ml-3"
            @click="openDesktopGallery(4)"
          >
            <img 
              :src="tour.images[4]" 
              alt="" 
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            >
          </div>
        </div>

        <!-- DESKTOP LIGHTBOX -->
        <div
          v-if="showDesktopGallery"
          class="hidden md:flex fixed inset-0 z-50 bg-black/90 items-center justify-center h-screen"
        >
          
          <!-- Close -->
          <button
            @click="closeDesktopGallery"
            class="absolute top-6 right-6 text-white text-4xl z-50"
          >
            ✕
          </button>

          <!-- Prev -->
          <button
            @click="prevImage"
            class="absolute left-6 text-white text-5xl bg-black/40 hover:bg-black/70 w-14 h-14 rounded-full flex items-center justify-center"
          >
            ❮
          </button>

          <!-- Image -->
          <img
            :src="tourImages[currentImage]"
            alt=""
            class="max-w-6xl max-h-[85vh] object-contain rounded-xl"
          />

          <!-- Next -->
          <button
            @click="nextImage"
            class="absolute right-6 text-white text-5xl bg-black/40 hover:bg-black/70 w-14 h-14 rounded-full flex items-center justify-center"
          >
            ❯
          </button>

        </div>
    

        <div class="mx-auto block lg:grid lg:grid-cols-12 gap-12 md:gap-6 items-start">
          <div class="lg:col-span-8 space-y-5 lg:text-2xl">
            <a 
              :href="whatsappUrl"
              target="_blank"
              class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all shadow-md shadow-emerald-500/20 text-md flex items-center justify-center cursor-pointer mt-6 md:hidden"
            >
              Book This Package
            </a>

            <div class="">
              <p class="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line text-justify md:mt-6">
                {{ tour.description }}
              </p>
            </div>

            <div 
            v-if="tour.highlight_list?.length"
            class="">
              <h2 class="font-bold">Hightlight :</h2>
            <div
              v-for="highlight in tour.highlight_list" :key="highlight.id"
              class="relative-group">
              <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                {{ highlight.name }}
              </li>
              </div>
            </div>

            <div 
            v-if="tour.destination_list?.length"
            class="">
              <h2 class="font-bold">Destination :</h2>
              <div
              v-for="dest in tour.destination_list" :key="dest.id"
              class="relative-group">
                <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                  {{ dest.name }}
                </li>
              </div>
            </div>

            <div 
            v-if="tour.price_list?.length"
            class="">
              <h2 class="font-bold">Price :</h2>
              <div
              v-for="price in tour.price_list" :key="price.id"
              class="relative-group">
                <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                  {{ price.name }} {{ price.detail }}
                </li>
              </div>
            </div>

            <div 
            v-if="tour.include_list?.length"
            class="">
              <h2 class="font-bold">Includes :</h2>
              <div
              v-for="include in tour.include_list" :key="include.id"
              class="relative-group">
                <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                  {{ include.name }}
                </li>
              </div>
            </div>

            <div 
            v-if="tour.exclude_list?.length"
            class="">
              <h2 class="font-bold">Excludes :</h2>
              <div
              v-for="exclude in tour.exclude_list" :key="exclude.id"
              class="relative-group">
                <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                  {{ exclude.name }}
                </li>
              </div>
            </div>

            <div 
            v-if="tour.what_to_bring_list?.length"
            class="">
              <h2 class="font-bold">What to Bring :</h2>
              <div
              v-for="whatToBring in tour.what_to_bring_list" :key="whatToBring.id"
              class="relative-group">
                <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                  {{ whatToBring.name }}
                </li>
              </div>
            </div>
            <div 
            v-if="tour.terms_list?.length"
            class="">
              <h2 class="font-bold">Terms and Conditions :</h2>
              <div
              v-for="term in tour.terms_list" :key="term.id"
              class="relative-group">
                <li class="text-slate-600 text-sm md:text-base leading-relaxed ml-7">
                  {{ term.name }}
                </li>
              </div>
            </div>

          </div>

          <div class="lg:col-span-4 mt-6 self-start">
            <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-300">
              <div class="flex items-baseline gap-2 mt-1 mb-6">
                <span class="text-3xl md:text-2xl font-thin">From</span>
                <span class="text-3xl md:text-2xl font-regular text-sky-500">
                  {{ tour.price_list[0]?.name }}
                </span>
              </div>
  
              <div class="my-4 space-y-3 text-xs text-black">
                <div class="flex items-center gap-2">
                  <i class="pi pi-calendar text-xl"></i>
                  <span class="text-md">Book now pay later</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-thumbs-up text-xl"></i>
                  <span class="text-md">The best services guarantee</span>
                </div>
              </div>
  
              <a 
                :href="whatsappUrl"
                target="_blank"
                class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all shadow-md shadow-emerald-500/20 text-sm flex items-center justify-center gap-2 cursor-pointer mt-6"
              >
                Book Right Now !
              </a>
            </div>
            <div class="border border-slate-200 mt-10"></div>
            <h2 class="text-xl font-bold text-slate-900 border-l-4 border-sky-500 pl-3 mt-6 mb-6">
              Rekomendasi Paket Wisata Lainnya
            </h2>
            <div class="md:overflow-y-auto md:pr-2 md:max-h-120 md:mt-6">
              <div v-if="otherTours.length > 0" class="col-span-1">
                <div class="grid grid-cols-1 gap-6">
                  <RouterLink 
                    v-for="item in otherTours" 
                    :key="item.slug"
                    :to="`/packages/${currentCategory.slug}/${item.slug}`" 
                    class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                  >
                    <div class="overflow-hidden aspect-6/3 w-full bg-gray-100">
                      <img
                        :src="item.image"
                        :alt="item.name"
                        class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
          
                    <div class="p-4 text-left flex-1 flex flex-col justify-between">
                      <div>
                        <h3 class="text-base font-bold text-sky-900 leading-snug group-hover:text-sky-500 transition-colors">
                          {{ item.name }}
                        </h3>
          
                        <div class="flex items-center gap-1 mt-1">
                          <span class="text-yellow-400 text-sm">★★★★★</span>
                          <span class="text-gray-500 text-xs font-medium">({{ item.rating || '5.0' }} rating)</span>
                        </div>
                      </div>
          
                      <div class="flex items-center justify-between mt-5 pt-3 border-t border-slate-100">
                        <div class="flex items-baseline gap-0.5">
                          <span class="text-lg font-extrabold text-gray-800">
                            {{ item.price_list[0]?.name }}
                          </span>
                          <span class="text-gray-400 text-xs">/pax</span>
                        </div>
          
                        <span class="text-xs font-bold text-gray-600 group-hover:text-sky-500 transition-colors flex items-center gap-1">
                          Read More ➔
                        </span>
                      </div>
          
                    </div>
                  </RouterLink>
                </div>
  
              </div>
  
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
import { computed, ref } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import CategoryData from '../data/categories.json' // Mengambil data master JSON

// 1. Menangkap string rute param ':tourSlug' yang dikirim dari router
const props = defineProps({
  tourSlug: {
    type: String,
    required: true
  }
})

const currentImage = ref(0)

const showDesktopGallery = ref(false)

const openDesktopGallery = (index) => {
  currentImage.value = index
  showDesktopGallery.value = true
  document.body.style.overflow = 'hidden'
}

const closeDesktopGallery = () => {
  showDesktopGallery.value = false
  document.body.style.overflow = ''
}

const tourImages = computed(() => {
  if (!tour.value) return []

  // sementara memakai image yang sama
  // nanti bisa diganti multiple image dari JSON
  return tour.value.images
})

const nextImage = () => {
  currentImage.value =
    (currentImage.value + 1) % tourImages.value.length
}

const prevImage = () => {
  currentImage.value =
    (currentImage.value - 1 + tourImages.value.length) %
    tourImages.value.length
}

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

// ⭐ TAMBAHKAN LOGIKA INI: Ambil paket wisata lainnya selain yang sedang dibuka
const currentCategory = computed(() => {
  return CategoryData.find(category =>
    category.packages_list?.some(
      p => p.slug === props.tourSlug
    )
  )
})

const otherTours = computed(() => {
  if (!currentCategory.value?.packages_list) return []

  return currentCategory.value.packages_list
    .filter(p => p.slug !== props.tourSlug)
})

// 3. Membuat tautan otomatis template pesan pesanan ke WhatsApp admin
const whatsappUrl = computed(() => {
  if (!tour.value) return '#'
  
  const nomorWa = '6281234567890' // ➔ GANTI menggunakan nomor WhatsApp asli bisnismu
  const teksPesan = `Halo Murti Bali Tour, saya tertarik dan ingin memesan paket wisata berikut:\n\n*Nama Paket:* ${tour.value.name}\n*Harga:* ${tour.value.price_list[0]?.name}/pax\n\nMohon informasi ketersediaan jadwalnya, terima kasih.`
  
  return `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodeURIComponent(teksPesan)}`
})
</script>