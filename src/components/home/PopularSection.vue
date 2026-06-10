<template>
  <section class="py-16 bg-sky-100 font-poppins">
    
    <!-- Heading -->
    <div class="text-center mb-14 px-4">
      <p class="text-gray-500 text-sm">
        Best Tour For You
      </p>

      <h2 class="text-3xl md:text-4xl font-bold text-sky-900 font-sans">
        Most Popular Tour
      </h2>

      <p class="text-gray-600 max-w-2xl md:max-w-3xl mx-auto mt-4 text-[12px] md:text-sm leading-relaxed">
        Experience Bali through exclusive tours combining natural beauty,
        culture, and unforgettable journeys
      </p>
    </div>

    <!-- Card Grid -->
    <div 
    class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

    <template
    v-for="tour in tours"
    :key="tour.id">

    <!-- Card -->
    <RouterLink
      v-for="item in tour.packages_list"
      :key="item.id"
      :to="`packages/${tour.slug}/${item.slug}`"
      class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
    >
      
      <!-- Image -->
      <div class="overflow-hidden">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-34 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <!-- Content -->
      <div class="p-2">

        <!-- Title -->
        <h3 class="text-[12px] font-semibold text-sky-900 leading-snug">
          {{ item.name }}
        </h3>

        <!-- Rating -->
        <div class="flex items-center gap-1">
          <span class="text-yellow-400 text-[12px]">★★★★★</span>
          <span class="text-gray-500 text-[12px]">(5,0 rating)</span>
        </div>

        <!-- Price -->
        <div class="mt-2">
          <span class="text-md font-semibold text-gray-800">
            IDR {{ item.price }}k
          </span>

          <span class="text-gray-400 text-[12px]">/pax</span>
        </div>

        <!-- Button -->
         <div class="flex justify-end">
           <button
             class="mt-3 flex text-[12px] items-center gap-1 text-gray-700 hover:text-sky-700 transition font-medium"
           >
             Read More
             <span>→</span>
           </button>
         </div>

      </div>
    </RouterLink>

    </template>

    </div>
  </section>
</template>

<script setup>
import tours from '../../data/categories.json'

</script>