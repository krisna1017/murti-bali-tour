<template>
  <section class="py-12 font-poppins">
    <div v-if="tours && tours.length > 0" class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

      <router-link
        v-for="tour in tours"
        :key="tour.id"
        :to="{ name: 'tour-detail', params: { tourSlug: tour.slug } }"
        class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group flex flex-col justify-between cursor-pointer"
      >
        
        <div class="overflow-hidden aspect-4/3 w-full bg-gray-100">
          <img
            :src="tour.image"
            :alt="tour.name"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div class="p-4 text-left flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-bold text-sky-900 leading-snug group-hover:text-sky-500 transition-colors">
              {{ tour.name }}
            </h3>

            <div class="flex items-center gap-1 mt-1">
              <span class="text-yellow-400 text-sm">★★★★★</span>
              <span class="text-gray-500 text-xs font-medium">({{ tour.rating || '5.0' }} rating)</span>
            </div>
          </div>

          <div class="flex items-center justify-between mt-5 pt-3 border-t border-slate-100">
            <div class="flex items-baseline gap-0.5">
              <span class="text-lg font-extrabold text-gray-800">
                {{ tour.price_list[0]?.name }}
              </span>
              <span class="text-gray-400 text-xs">/pax</span>
            </div>

            <span class="text-xs font-bold text-gray-600 group-hover:text-sky-500 transition-colors flex items-center gap-1">
              Read More ➔
            </span>
          </div>

        </div>
      </router-link>

    </div>

    <div v-else class="text-center py-12 bg-gray-800/20 rounded-2xl border border-gray-800 max-w-6xl mx-auto">
      <p class="text-gray-400 text-sm">Belum ada pilihan paket wisata khusus untuk kategori ini.</p>
    </div>
  </section>
</template>

<script setup>
// Menangkap kiriman array paket dari CategoryDetailView
defineProps({
  tours: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>