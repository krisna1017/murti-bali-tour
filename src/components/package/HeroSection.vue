<template>
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white font-poppins transition-all duration-500"
    :style="{ backgroundImage: `url(${props.category?.image || '/home/bg-hero.jpeg'})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    
    <div class="text-center px-4 z-10 max-w-3xl">
      <p class="text-xs md:text-sm mb-3 uppercase tracking-widest text-sky-400 font-semibold">
        murti bali tour
      </p>

      <h1 class="text-3xl md:text-5xl font-sans font-bold mb-4 capitalize">
        {{ props.category?.title || 'Tour Package' }}
      </h1>

      <p class="text-sm md:text-base font-light text-gray-200">
        {{ props.category?.subtitle || 'Private tours, local experiences, and curated trips designed to make every moment in Bali memorable.' }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue'
// Mengubah props dari Array menjadi Object tunggal (Single Category)


const props = defineProps({
  category: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
// console.log(props)
</script>