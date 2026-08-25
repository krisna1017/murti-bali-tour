<template>
  <footer class="bg-sky-50 rounded-t-3xl overflow-hidden font-poppins">

    <!-- Main Footer -->
    <div class="max-w-6xl mx-auto px-4 py-20">

      <!-- Grid -->
      <div class="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">

        <!-- Left -->
        <div class="text-left pb-2 md:py-0">
          
          <img
            class="h-12 w-auto"
            src="/logo-mobile.png"
            alt="Your Company"
            decoding="async"
          />
          <p class="mt-2 md:mt-4 text-gray-700 text-sm leading-relaxed max-w-md">
            Bali Murti Tour creates unforgettable Bali journeys with authentic
            experiences and trusted local guides.
          </p>

          <!-- Social on Desktop-->
          <div class="flex justify-start items-center gap-4 mt-10">

            <!-- Whatsapp -->
            <a
              :href="whatsappUrl"
              target="_blank"
              class="text-white bg-sky-900 rounded-full p-4 flex justify-center items-center"
            >
              <span class="pi pi-whatsapp" style="font-size: 1.5rem"></span>  
            </a>

            <!-- Mail -->
            <a
              :href="gmailUrl"
              target="_blank"
              class="text-white bg-sky-900 rounded-full p-4 flex justify-center items-center"
            >
              <span class="pi pi-envelope" style="font-size: 1.5rem"></span>  
            </a>

          </div>

        </div>
        
        <!-- right -->
         <div class="flex flex-col md:flex-row gap-10">
           <div class="flex flex-col gap-4">
   
             <h3 class="text-[20px] md:text-2xl font-bold text-sky-900 font-sans">
               Pages
             </h3>
   
             <ul class="space-y-2">
   
               <li
                 v-for="link in links"
                 :key="link.name"
                 class="flex items-center gap-4 text-md text-gray-700"
               >
                   {{ link.name }}
               </li>
   
             </ul>
   
           </div>
   
           <div class="flex flex-col gap-4 md:py-0">
   
             <h3 class="text-[20px] md:text-2xl font-bold text-sky-900 font-sans">
               Contact Us
             </h3>
   
             <div class="space-y-4 text-gray-700">
                
                  <a
                    :href="whatsappUrl"
                    target="_blank"
                    class="flex gap-2 items-center"
                    
                  >
                    <span class="pi pi-whatsapp text-sky-900 bg-sky-600/20 rounded-2xl p-3 flex items-center" style="font-size: 1.3rem"></span>

                    <div>
                      <h4 class="font-semibold text-sm text-sky-900">
                        Whatsapp :
                      </h4>
        
                      <p class="text-sm">
                        08970254743
                      </p>
                    </div> 
                  </a> 
   
                  <a
                    :href="gmailUrl"
                    target="_blank"
                    class="flex gap-2 items-center"
                  >
                    <span class="pi pi-envelope text-sky-900 bg-sky-600/20 rounded-2xl p-3 flex items-center" style="font-size: 1.3rem"></span>

                    <div>
                      <h4 class="font-semibold text-sm text-sky-900">
                        Gmail :
                      </h4>
        
                      <p class="text-sm">
                        murtibalitour@gmail.com
                      </p>
                    </div> 
                  </a> 
   
             </div>
   
           </div>
         </div>

        

      </div>

    </div>

    <!-- Bottom -->
    <div class="bg-sky-600 flex flex-col py-2 text-center text-white text-[12px]">
      <span>
        © Copyright 2026 Murti Bali Tour. All Rights Reserved.
      </span>
      <p>Powered By
        <span class="underline">
          Strict.Creative
        </span>
      </p>
    </div>

  </footer>
</template>

<script setup>
const links = [
  { name: 'Home', to: '/' },
  { name: 'Packages', to: '/packages' },
  { name: 'About', to: '/about' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Blog', to: '/blog' },
]

const email = 'murtibalitour@gmail.com'
const subject = 'Booking Tour'
const body = 'Halo saya ingin booking tour.'

const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent(email)}` +
  `&su=${encodeURIComponent(subject)}` +
  `&body=${encodeURIComponent(body)}`


  
const nomorWa = '628970254743'
const teksPesan =
  'Halo Murti Bali Tour, saya ingin bertanya mengenai paket wisata Bali.'

const whatsappUrl =
  `https://api.whatsapp.com/send?phone=${nomorWa}` +
  `&text=${encodeURIComponent(teksPesan)}`
  
</script>