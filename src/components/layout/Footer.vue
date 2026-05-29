<template>
  <footer class="bg-sky-50 rounded-t-3xl overflow-hidden font-poppins">

    <!-- Main Footer -->
    <div class="max-w-6xl mx-auto px-4 py-20">

      <!-- Grid -->
      <div class="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">

        <!-- Left -->
        <div class="text-left pb-10 md:py-0">
          
          <h2 class="text-3xl font-extrabold uppercase text-sky-900">
            Murti Bali Tour
          </h2>

          <p class="mt-2 md:mt-4 text-gray-700 text-sm leading-relaxed max-w-md">
            Bali Murti Tour creates unforgettable Bali journeys with authentic
            experiences and trusted local guides.
          </p>

          <!-- Social on Desktop-->
          <div class="flex justify-start items-center gap-4 mt-10">

            <!-- Whatsapp -->
            <a
              href="#"
              class="text-black hover:text-sky-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-14 h-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 21l1.65-4.95A9 9 0 1112 21a8.96 8.96 0 01-4.35-1.12L3 21z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.5 10.5c1.5 3 3.5 4.5 5 5"
                />
              </svg>
            </a>

            <!-- Mail -->
            <a
              href="#"
              class="text-black hover:text-sky-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-14 h-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 7l9 6 9-6"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7"
                />
              </svg>
            </a>

          </div>

        </div>
        
        <!-- right -->
         <div class="flex flex-col md:flex-row gap-10">
           <div class="flex flex-col gap-8 md:gap-4">
   
             <h3 class="text-[20px] md:text-2xl font-bold text-sky-900 font-sans">
               Useful link
             </h3>
   
             <ul class="space-y-2">
   
               <li
                 v-for="link in links"
                 :key="link.name"
               >
                 <router-link
                   :to="link.to"
                   class="flex items-center gap-4 text-sm text-gray-700 hover:text-sky-700 transition"
                 >
                   {{ link.name }}
                 </router-link>
               </li>
   
             </ul>
   
           </div>
   
           <div class="flex flex-col gap-8 md:gap-4 pb-10 md:py-0">
   
             <h3 class="text-[20px] md:text-2xl font-bold text-sky-900 font-sans">
               Contact Us
             </h3>
   
             <div class="space-y-4 text-gray-700">
   
               <div>
                 <h4 class="font-regular text-sm">
                   Whatsapp :
                 </h4>
   
                 <p class="text-sm">
                   08970254743
                 </p>
               </div>
   
               <div>
                 <h4 class="font-regular text-sm">
                   Gmail :
                 </h4>
   
                 <p class="text-sm break-all">
                   murtibalitour@gmail.com
                 </p>
               </div>
   
             </div>
   
           </div>
         </div>

        

      </div>

    </div>

    <!-- Bottom -->
    <div class="bg-[#1BA7CB] flex flex-col py-2 text-center text-white text-[12px]">
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
</script>