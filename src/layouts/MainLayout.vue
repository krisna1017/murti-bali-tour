<template>
  <Header />

  <main>
    <slot />

    <BackToTopButton />
  </main>

  <Footer />
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import BackToTopButton from '../components/ui/BackToTopButton.vue';
</script>