<template>

  <MainLayout>
    <div v-if="category">
      <HeroSection :category="category" />
      <TourListSection :tours="category.packages_list" />
    </div>
  </MainLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HeroSection from '../components/package/HeroSection.vue'
import CategoryData from '../data/categories.json'
import TourListSection from '../components/package/TourListSection.vue'

const route = useRoute()

// Cari 1 data yang sesuai dengan slug yang ada di URL aktif
const category = computed(() => {
  return CategoryData.find(item => item.slug === route.params.slug)
})
</script>