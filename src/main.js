import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './style.css'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#app')

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  AOS.init({
    duration: 600,
    once: true,
    mirror: false,
    disable: prefersReduced,
    throttleDelay: 150,
    debounceDelay: 50
  })
})