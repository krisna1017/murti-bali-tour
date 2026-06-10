<template>
  <section class="py-16 bg-white font-poppins">
    <div class="max-w-6xl mx-auto px-4 bg-white text-center">
      <p class="text-gray-500 font-medium text-[12px] sm:text-base tracking-wide">
        Make Your Tour More Pleasant
      </p>
      <h2 class="text-3xl sm:text-4xl font-bold text-[#074e74] mt-1 mb-8 font-sans">
        Recent Gallery
      </h2>
  
      <div class="grid grid-cols-12 gap-3 auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-[180px]">
        <div 
          v-for="(item, index) in paginatedGallery" 
          :key="index"
          :class="item.gridClass"
          class="overflow-hidden rounded-lg cursor-pointer group relative"
          @click="openLightbox(((currentPage - 1) * itemsPerPage) + index)"
        >
          <img 
            :src="item.src" 
            :alt="item.alt" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="text-white bg-black/40 p-2 rounded-full text-sm">zoom</span>
          </div>
        </div>
      </div>

      <!-- PAGINATION -->
      <div class="flex justify-center items-center gap-2 mt-10 flex-wrap">

        <!-- Prev -->
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg border text-sm transition-all
                disabled:opacity-40 disabled:cursor-not-allowed
                hover:bg-sky-700 hover:text-white"
        >
          Prev
        </button>

        <!-- Number -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            currentPage === page
              ? 'bg-sky-700 text-white border-sky-700'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-sky-50',
            'w-10 h-10 rounded-lg border font-medium transition-all'
          ]"
        >
          {{ page }}
        </button>

        <!-- Next -->
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg border text-sm transition-all
                disabled:opacity-40 disabled:cursor-not-allowed
                hover:bg-sky-700 hover:text-white"
        >
          Next
        </button>

      </div>

    </div>

    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 select-none"
        @click.self="closeLightbox"
      >
        <button 
          @click="closeLightbox" 
          class="absolute top-5 right-5 text-white text-4xl font-light hover:text-gray-300 z-50 transition-colors"
        >
          &times;
        </button>

        <button 
          @click="prevImage" 
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all"
        >
          &#10094;
        </button>

        <div class="max-w-4xl max-h-[80vh] flex flex-col items-center">
          <img 
            :src="galleryItems[currentIndex].src" 
            :alt="galleryItems[currentIndex].alt" 
            class="max-w-full max-h-[75vh] object-contain rounded animate-scaleUp"
          />
          <p class="text-white mt-4 text-lg font-medium tracking-wide">
            {{ galleryItems[currentIndex].alt }}
          </p>
        </div>

        <button 
          @click="nextImage" 
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all"
        >
          &#10095;
        </button>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import galleryData from '../../data/gallery.json'
// Data Gallery Dinamis (Menyesuaikan dengan class grid bawaan Anda)

const galleryItems = ref(galleryData)

// State Lightbox
const isOpen = ref(false)
const currentIndex = ref(0)

// Fungsi Navigasi
const openLightbox = (index) => {
  currentIndex.value = index
  isOpen.value = true
  document.body.style.overflow = 'hidden' // Mengunci scroll latar belakang
}

const closeLightbox = () => {
  isOpen.value = false
  document.body.style.overflow = '' // Mengaktifkan kembali scroll latar belakang
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % galleryItems.value.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + galleryItems.value.length) % galleryItems.value.length
}

// Navigasi menggunakan Keyboard (Panah & Escape)
const handleKeyDown = (e) => {
  if (!isOpen.value) return
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))


// pagination
const currentPage = ref(1)
const itemsPerPage = 16

// total halaman
const totalPages = computed(() => {
  return Math.ceil(galleryItems.value.length / itemsPerPage)
})

// data gallery sesuai halaman aktif
const paginatedGallery = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return galleryItems.value.slice(start, end)
})

// pindah halaman
const goToPage = (page) => {
  currentPage.value = page

  // // scroll halus ke atas gallery
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth'
  // })
}
</script>

<style scoped>
/* Animasi Transisi Fade untuk Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animasi Zoom-in Halus untuk Gambar saat Terbuka */
@keyframes scaleUp {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scaleUp {
  animation: scaleUp 0.25s ease-out forwards;
}
</style>