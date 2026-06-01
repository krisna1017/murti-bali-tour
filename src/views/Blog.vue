<template>
  <MainLayout>

    <HeroSection />
    <BlogDetail />

  </MainLayout>
</template>

<script setup>
import HeroSection from '../components/blog/HeroSection.vue';
import MainLayout from '../layouts/MainLayout.vue'
import BlogDetail from '../components/blog/BlogSection.vue';
</script>