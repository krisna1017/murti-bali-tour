<template>
  <div class="min-h-screen bg-gradient-to-b from-[#e1f3f9] via-[#e1f3f9] to-white px-4 py-12 font-sans">
    
    <div class="text-center mb-10">
      <p class="text-gray-500 font-medium text-sm tracking-wide">
        Blog & Article
      </p>
      <h2 class="text-3xl sm:text-4xl font-bold text-[#074e74] mt-1">
        Murti Bali Tour Blog
      </h2>
    </div>

    <div class="max-w-xl mx-auto space-y-8">
      
      <div 
        v-for="(post, index) in blogPosts" 
        :key="index" 
        class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div class="h-64 sm:h-72 w-full overflow-hidden">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div class="p-6 sm:p-8 space-y-4">
          <div class="flex items-center text-xs text-gray-400 font-medium space-x-2">
            <span>{{ post.date }}</span>
            <span>|</span>
            <span>{{ post.readTime }}</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-[#074e74] leading-snug cursor-pointer hover:text-cyan-700 transition-colors">
            {{ post.title }}
          </h3>

          <div class="pt-2">
            <button class="px-6 py-2.5 border border-gray-400 text-gray-700 text-sm font-medium rounded-full hover:bg-[#074e74] hover:text-white hover:border-[#074e74] transition-all duration-300">
              Read More
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data Artikel Blog fleksibel (bisa ditambah/dikurangi)
const blogPosts = ref([
  {
    title: '10 Reason why you should visit New Jersey',
    date: 'Mei 26, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' // Gambar Scuba Diving
  },
  {
    title: '10 Reason why you should visit New Jersey',
    date: 'Mei 26, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' // Gambar Broken Beach / Cliff
  }
])
</script>