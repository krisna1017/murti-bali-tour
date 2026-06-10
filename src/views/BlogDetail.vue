<template>
  <MainLayout>

    <section class="py-16 bg-white min-h-screen font-poppins">

      <!-- Container -->
      <div
        v-if="blog"
        class="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10"
      >

        <!-- Main Content -->
        <div class="lg:col-span-2 mt-8">

          <!-- Title -->
          <h1 class="text-xl md:text-4xl font-bold text-sky-900 leading-tight">
            {{ blog.title }}
          </h1>

          <!-- Featured Image -->
          <div class="mt-8 overflow-hidden rounded-2xl shadow-lg">
            <img
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-62.5 md:h-125 object-cover"
            />
          </div>

          <!-- Meta -->
          <div class="flex items-center gap-4 text-gray-700 mt-6 text-sm md:text-base">

            <div class="flex items-center gap-2">
              <CalendarDaysIcon class="w-5 h-5" />
              <span>{{ blog.date }}</span>
            </div>

            <div class="w-px h-5 bg-gray-400"></div>

            <div class="flex items-center gap-2">
              <BookOpenIcon class="w-5 h-5" />
              <span>{{ blog.category }}</span>
            </div>

          </div>

          <!-- Description -->
          <div class="mt-8">
            <p class="text-gray-700 leading-relaxed text-justify">
              {{ blog.description }}
            </p>
          </div>

          <!-- Dynamic Content -->
          <div class="mt-4 space-y-4">

            <div
              v-for="section in blog.content"
              :key="section.heading"
            >

              <h2 class="text-xl font-bold text-gray-800 mb-3">
                {{ section.heading }}
              </h2>

              <p class="text-gray-700 leading-relaxed text-justify">
                {{ section.text }}
              </p>

            </div>

          </div>

        </div>

        <!-- Sidebar -->
        <div class="mt-0 lg:mt-38">

          <h2 class="text-3xl font-bold text-sky-900">
            Latest Article
          </h2>

          <div class="w-full h-px bg-gray-400 mt-3 mb-6"></div>

          <div class="space-y-5">

            <router-link
              v-for="item in latestBlogs"
              :key="item.id"
              :to="{
                name: 'blog-detail',
                params: { id: item.id }
              }"
              class="bg-white rounded-2xl p-3 shadow-md hover:shadow-lg transition-all duration-300 flex gap-4"
            >

              <!-- Image -->
              <img
                :src="item.image"
                :alt="item.title"
                class="w-28 h-24 object-cover rounded-xl"
              />

              <!-- Content -->
              <div class="flex-1">

                <h3 class="font-bold text-gray-800 text-md  leading-tight line-clamp-2">
                  {{ item.title }}
                </h3>

                <p class="text-gray-600 text-sm mt-2 line-clamp-2">
                  {{ item.description }}
                </p>

              </div>

            </router-link>

          </div>

        </div>

      </div>

      <!-- Not Found -->
      <div
        v-else
        class="text-center py-32"
      >

        <h1 class="text-3xl font-bold text-red-500">
          Article Not Found
        </h1>

      </div>

    </section>

  </MainLayout>
</template>

<script setup>
import { computed } from 'vue'

import {
  CalendarDaysIcon,
  BookOpenIcon,
} from '@heroicons/vue/24/solid'

import datablog from '../data/blog.json'
import MainLayout from '../layouts/MainLayout.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// Detail blog
const blog = computed(() => {
  return datablog.find(item => item.id == props.id)
})

// Latest articles
const latestBlogs = computed(() => {
  return datablog
    .filter(item => item.id != props.id)
    .slice(0, 3)
})
</script>