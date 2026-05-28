<template>
  <section class="py-20 bg-gray-100">

    <!-- Heading -->
    <div class="max-w-4xl mx-auto text-center px-6">

      <p class="text-gray-500 text-lg">
        Get To Know About
      </p>

      <h2 class="text-4xl md:text-5xl font-bold text-sky-900 mt-2">
        Murti Bali Tour
      </h2>

      <p class="mt-8 text-gray-700 text-lg leading-relaxed">
        <span class="font-bold">Bali Murti Tour</span>, we create unforgettable
        journeys across Bali by combining beautiful destinations,
        authentic local culture, and personalized travel experiences.
        Our mission is to help every traveler explore Bali comfortably,
        safely, and meaningfully with trusted local guides and carefully
        curated tours.
      </p>

    </div>

    <!-- Feature Grid -->
    <div class="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-2 gap-4">

      <!-- Card -->
      <div
        v-for="feature in features"
        :key="feature.title"
        class="relative overflow-hidden rounded-2xl group h-56"
      >

        <!-- Background Image -->
        <img
          :src="feature.image"
          :alt="feature.title"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/45"></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <!-- Icon -->
          <component
            :is="feature.icon"
            class="w-14 h-14 text-white mb-4"
          />

          <!-- Title -->
          <h3 class="text-white text-2xl font-semibold">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="text-white/90 text-sm mt-2 leading-relaxed">
            {{ feature.description }}
          </p>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import {
  UserGroupIcon,
  ShareIcon,
  TruckIcon,
  CheckBadgeIcon,
} from '@heroicons/vue/24/outline'

const features = [
  {
    title: 'Trusted Local Driver',
    description:
      'Explore Bali with experienced, English speaking driver.',
    icon: UserGroupIcon,
    image:
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Private & Flexible Tours',
    description:
      'Customize your itinerary with private day trips and activity packages.',
    icon: ShareIcon,
    image:
      'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Comfortable Transport',
    description:
      'Travel in air-conditioned vehicles with professional drivers.',
    icon: TruckIcon,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Hassle Free Booking',
    description:
      'Easy online booking with transparent prices for all tours.',
    icon: CheckBadgeIcon,
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
  },
]
</script>