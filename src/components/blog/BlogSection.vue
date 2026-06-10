<template>
  <div class="min-h-screen bg-linear-to-b from-sky-100 via-[#ffffff] to-white px-4 py-12 font-poppins">

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
      
      <RouterLink 
        v-for="post in BlogData"
        :to="{name: 'blog-detail', params: {id: post.id}}"
        :key="post.id" 
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

      </RouterLink>

    </div>
  </div>
</template>

<script setup>
import BlogData from '../../data/blog.json'
</script>