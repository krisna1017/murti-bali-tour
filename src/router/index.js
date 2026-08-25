import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Gallery = () => import('../views/Gallery.vue')
const Blog = () => import('../views/Blog.vue')
const CategoryDetail = () => import('../views/CategoryDetail.vue')
const TourDetail = () => import('../views/TourDetail.vue')
const BlogDetail = () => import('../views/BlogDetail.vue')

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
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'blog-detail',
    component: BlogDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

   scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router