<template>
  <section 
  class="py-20 bg-white font-poppins"
  >

    <!-- Heading -->
    <div 
    class="max-w-4xl mx-auto text-center px-4"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="30"
    >

      <p 
      class="text-gray-500 text-sm"
      >
        Get To Know About
      </p>

      <h2 
      class="text-3xl md:text-4xl font-bold text-sky-900 font-sans"
      >
        Murti Bali Tour
      </h2>

      <p class="mt-8 text-gray-700 text-sm leading-relaxed">
        <span class="font-bold">Bali Murti Tour</span>, we create unforgettable
        journeys across Bali by combining beautiful destinations,
        authentic local culture, and personalized travel experiences.
        Our mission is to help every traveler explore Bali comfortably,
        safely, and meaningfully with trusted local guides and carefully
        curated tours.
      </p>

    </div>

    <!-- Feature Grid -->
    <div 
    class="max-w-6xl mx-auto px-4 mt-14 grid grid-cols-2 md:grid-cols-4 gap-2"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="50"
    >

      <!-- Card -->
      <div
        v-for="feature in featureData"
        :key="feature.title"
        class="relative overflow-hidden rounded-2xl group h-44"
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
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-2">

          <!-- Icon -->
          <component
            :is="icons[feature.icon]"
            class="w-14 h-14 text-white mb-4"
          />

          <!-- Title -->
          <h3 class="text-white text-[12px] font-semibold">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="text-white/90 text-[8px] mt-2 leading-relaxed">
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

import featureData from '../../data/features.json'

const icons = {
  UserGroupIcon,
  ShareIcon,
  TruckIcon,
  CheckBadgeIcon,
}
</script>