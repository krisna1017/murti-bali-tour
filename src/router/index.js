import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import Blog from '../views/Blog.vue'
import CategoryDetail from '../views/CategoryDetail.vue'
import TourDetail from '../views/TourDetail.vue'

// import CategoryDetailView from '../views/CategoryDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/packages/:slug',
    name: 'package-detail', // <-- Samakan dengan yang dipanggil di Navbar
    component: CategoryDetail, // sesuaikan dengan path file detail kamu
    props: true
  },
  {
    path: '/packages/:slug/:tourSlug', // Rute untuk detail satu tour
    name: 'tour-detail',
    component: TourDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router