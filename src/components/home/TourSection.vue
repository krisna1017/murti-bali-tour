<template>
  <section class="py-20 bg-gray-100">
    
    <!-- Heading -->
    <div class="text-center mb-14">
      <p class="text-gray-600 text-lg">
        Wonderful Place For You
      </p>

      <h2 class="text-4xl font-bold text-sky-900 mt-2">
        Tour Category
      </h2>
    </div>

    <!-- Category Grid -->
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

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
            class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <!-- Content -->
        <div class="mt-4">
          <h3 class="text-2xl font-semibold text-gray-800">
            {{ item.title }}
          </h3>

          <p class="text-gray-500 text-lg mt-1">
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