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
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">

      <!-- Card -->
      <div
        v-for="tour in tours"
        :key="tour.title"
        class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
      >
        
        <!-- Image -->
        <div class="overflow-hidden">
          <img
            :src="tour.image"
            :alt="tour.title"
            class="w-full h-34 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <!-- Content -->
        <div class="p-2">

          <!-- Title -->
          <h3 class="text-[12px] font-semibold text-sky-900 leading-snug">
            {{ tour.title }}
          </h3>

          <!-- Rating -->
          <div class="flex items-center gap-1">
            <span class="text-yellow-400 text-[12px]">★★★★★</span>
            <span class="text-gray-500 text-[12px]">(5,0 rating)</span>
          </div>

          <!-- Price -->
          <div class="mt-2">
            <span class="text-md font-semibold text-gray-800">
              IDR {{ tour.price }}k
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
      </div>

    </div>
  </section>
</template>

<script setup>
const tours = [
  {
    title: 'Kintamani - Ubud Tour',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'East Bali Tour',
    price: 600,
    image:
      'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Nusa Penida - West Part Trip',
    price: 750,
    image:
      'https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Bedugul - Tanah Lot Tour',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop',
  },
]
</script>