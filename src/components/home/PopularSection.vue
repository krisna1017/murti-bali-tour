<template>
  <section class="py-20 bg-sky-100">
    
    <!-- Heading -->
    <div class="text-center mb-14 px-6">
      <p class="text-gray-500 text-lg">
        Best Tour For You
      </p>

      <h2 class="text-4xl md:text-5xl font-bold text-sky-900 mt-2">
        Most Popular Tour
      </h2>

      <p class="text-gray-600 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
        Experience Bali through exclusive tours combining natural beauty,
        culture, and unforgettable journeys
      </p>
    </div>

    <!-- Card Grid -->
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

      <!-- Card -->
      <div
        v-for="tour in tours"
        :key="tour.title"
        class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
      >
        
        <!-- Image -->
        <div class="overflow-hidden">
          <img
            :src="tour.image"
            :alt="tour.title"
            class="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <!-- Content -->
        <div class="p-4">

          <!-- Title -->
          <h3 class="text-xl font-semibold text-sky-900 leading-snug">
            {{ tour.title }}
          </h3>

          <!-- Rating -->
          <div class="flex items-center gap-1 mt-3">
            <span class="text-yellow-400 text-lg">★★★★★</span>
            <span class="text-gray-500 text-sm">(5,0 rating)</span>
          </div>

          <!-- Price -->
          <div class="mt-4">
            <span class="text-3xl font-semibold text-gray-800">
              IDR {{ tour.price }}k
            </span>

            <span class="text-gray-400 text-sm">/pax</span>
          </div>

          <!-- Button -->
          <button
            class="mt-6 flex items-center gap-2 text-gray-700 hover:text-sky-700 transition font-medium"
          >
            Read More
            <span>→</span>
          </button>

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