<template>
  <section 
  class="py-16 bg-white font-poppins scroll-mt-16" 
  id="tourSection"
  >
    
    <!-- Heading -->
    <div 
    class="text-center mb-14"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="30"
    >
      <p class="text-gray-600 text-sm">
        Wonderful Place For You
      </p>

      <h2 class="text-3xl md:text-4xl font-bold text-sky-900 font-sans">
        Tour Category
      </h2>
    </div>

    <!-- Category Grid -->
    <div 
    class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="60"
    >

      <!-- Item -->
      <RouterLink
        v-for="item in categories"
        :key="item.slug"
        :to="{ name: 'package-detail', params: { slug: item.slug } }"
        class="group text-center"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-3xl shadow-lg">
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            decoding="async"
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
      </RouterLink>

    </div>
  </section>
</template>

<script setup>
import categories from '../../data/categories.json'
</script>