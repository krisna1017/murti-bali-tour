<template>
  <MainLayout>

    <HeroSection />
    <TourSection />
    <PopularSection />
    <AboutSection />
    <GallerySection />
    <BlogSection />

  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'

import HeroSection from '../components/home/HeroSection.vue'
import TourSection from '../components/home/TourSection.vue';
import PopularSection from '../components/home/PopularSection.vue';
import AboutSection from '../components/home/AboutSection.vue';
import GallerySection from '../components/home/GallerySection.vue';
import BlogSection from '../components/home/BlogSection.vue';
</script>