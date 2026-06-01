<template>
  <MainLayout>

    <section class="py-16 bg-gray-100 min-h-screen font-poppins">

      <!-- Container -->
      <div
        v-if="blog"
        class="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10"
      >

        <!-- Main Content -->
        <div class="lg:col-span-2">

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl font-bold text-sky-900 leading-tight">
            {{ blog.title }}
          </h1>

          <!-- Featured Image -->
          <div class="mt-8 overflow-hidden rounded-2xl shadow-lg">
            <img
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-[250px] md:h-[500px] object-cover"
            />
          </div>

          <!-- Meta -->
          <div class="flex items-center gap-4 text-gray-700 mt-6 text-sm md:text-base">

            <div class="flex items-center gap-2">
              <CalendarDaysIcon class="w-5 h-5" />
              <span>{{ blog.date }}</span>
            </div>

            <div class="w-[1px] h-5 bg-gray-400"></div>

            <div class="flex items-center gap-2">
              <BookOpenIcon class="w-5 h-5" />
              <span>{{ blog.category }}</span>
            </div>

          </div>

          <!-- Description -->
          <div class="mt-8">
            <p class="text-gray-700 leading-relaxed">
              {{ blog.description }}
            </p>
          </div>

          <!-- Dynamic Content -->
          <div class="mt-10 space-y-10">

            <div
              v-for="section in blog.content"
              :key="section.heading"
            >

              <h2 class="text-2xl font-bold text-gray-800 mb-3">
                {{ section.heading }}
              </h2>

              <p class="text-gray-700 leading-relaxed">
                {{ section.text }}
              </p>

            </div>

          </div>

        </div>

        <!-- Sidebar -->
        <div>

          <h2 class="text-3xl font-bold text-sky-900">
            Latest Article
          </h2>

          <div class="w-full h-[1px] bg-gray-400 mt-3 mb-6"></div>

          <div class="space-y-5">

            <router-link
              v-for="item in latestBlogs"
              :key="item.id"
              :to="{
                name: 'blog-detail',
                params: { id: item.id }
              }"
              class="bg-white rounded-2xl p-3 shadow-md hover:shadow-xl transition-all duration-300 flex gap-4 block"
            >

              <!-- Image -->
              <img
                :src="item.image"
                :alt="item.title"
                class="w-28 h-24 object-cover rounded-xl"
              />

              <!-- Content -->
              <div class="flex-1">

                <h3 class="font-bold text-gray-800 text-lg leading-tight line-clamp-2">
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