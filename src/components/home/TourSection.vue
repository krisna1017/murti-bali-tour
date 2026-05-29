<template>
  <section class="py-16 bg-white font-poppins">
    
    <!-- Heading -->
    <div class="text-center mb-14">
      <p class="text-gray-600 text-sm">
        Wonderful Place For You
      </p>

      <h2 class="text-3xl md:text-4xl font-bold text-sky-900 font-sans">
        Tour Category
      </h2>
    </div>

    <!-- Category Grid -->
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">

      <!-- Item -->
      <div
        v-for="item in categories"
        :key="item.title"
        class="group text-center"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-3xl shadow-lg">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <!-- Content -->
        <div class="mt-4">
          <h3 class="text-sm md:text-lg font-semibold text-gray-800 font-sans">
            {{ item.title }}
          </h3>

          <p class="text-gray-500 text-[12px] md:text-sm">
            {{ item.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Day Bali Tours',
    description: 'Beauty and culture.',
    image:
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Nusa Penida Tours',
    description: 'Explore beauty island.',
    image:
      'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Activity',
    description: 'Adventure and culture.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Car Charter',
    description: 'Private & flexible travel.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
]
</script>