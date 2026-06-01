<template>
  <MainLayout>

    <HeroSection />
    <GetToKnowSection />
    <GallerySection />

  </MainLayout>
</template>

<script setup>
import GallerySection from '../components/about/GallerySection.vue';
import GetToKnowSection from '../components/about/GetToKnowSection.vue';
import HeroSection from '../components/about/HeroSection.vue';
import MainLayout from '../layouts/MainLayout.vue'
</script>