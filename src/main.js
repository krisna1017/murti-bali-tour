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

  AOS.init({
    duration: 800,
    once: false,
    mirror: true
  })
})