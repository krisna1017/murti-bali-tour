<template>
  <Disclosure
    as="nav"
    v-slot="{ open }"
    :class="[
      isScrolled 
      ? 'bg-sky-600/80 shadow-xl backdrop-blur-sm' 
      : 'bg-sky-600 backdrop-blur-md',
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 text-gray-300 font-poppins'
    ]"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton 
           @click="mobileMenuOpen = !mobileMenuOpen"
            class="relative inline-flex items-center justify-center cursor-pointer rounded-md p-2 hover:bg-white/5 hover:text-white focus:outline-none text-white transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img
              class="h-12 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
          </div>

          <div class="hidden sm:flex flex-1 justify-center">
            <div class="flex space-x-4 items-center">
              <template v-for="item in navigation" :key="item.name">
                
                <Menu v-if="item.children" as="div" class="relative inline-block text-left">
                  <MenuButton 
                    :class="[
                    isDropdownActive(item.children)
                    ? 'text-white underline underline-offset-[6px] decoration-2 decoration-white'
                    : 'text-gray-300 hover:text-white hover:underline hover:underline-offset-[6px] hover:decoration-2 hover:decoration-sky-500',
                    'block px-4 py-2.5 text-sm font-medium'
                    ]"
                  >
                    {{ item.name }}
                    <span class="text-[10px] transition-transform duration-200">▼</span>
                  </MenuButton>

                  <transition
                    enter-active-class="transition duration-150 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems class="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white border border-gray-700 shadow-2xl focus:outline-none overflow-hidden z-50">
                      <div class="py-1">
                        <MenuItem 
                          v-for="subItem in item.children" 
                          :key="subItem.name"
                          v-slot="{ isActive }"
                        >
                          <router-link
                            :to="{ name: 'package-detail', params: { slug: subItem.slug } }"
                            :class="[
                              isActive 
                              ? 'text-white underline underline-offset-[6px] decoration-2 decoration-white' 
                              : 'text-black hover:underline hover:underline-offset-[6px] hover:decoration-2 hover:decoration-sky-500',
                              'block px-4 py-2.5 text-sm font-medium'
                            ]"
                          >
                            {{ subItem.name }}
                          </router-link>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>

                <router-link
                  v-else
                  :to="item.to"
                  v-slot="{ isActive }"
                >
                  <span
                    :class="[
                      isActive
                        ? 'text-white underline underline-offset-[6px] decoration-2 decoration-white'
                        : 'text-gray-300 hover:underline hover:underline-offset-[6px] hover:decoration-2 hover:decoration-white hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300'
                    ]"
                  >
                    {{ item.name }}
                  </span>
                </router-link>

              </template>
            </div>
          </div>

          <div class="hidden lg:flex">
            <button class="py-0 px-6 bg-white hover:bg-sky-50 text-sky-700 hover:text-sky-700 rounded-3xl text-sm cursor-pointer font-regular">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <DisclosurePanel class="sm:hidden bg-white shadow-inner">
        <div class="space-y-1 px-3 pt-3 pb-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <template v-for="item in navigation" :key="item.name">
            
            <div v-if="item.children" class="space-y-1 py-2">
              <span class="block px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">
                {{ item.name }}
              </span>
              <router-link
                v-for="subItem in item.children"
                :key="subItem.name"
                :to="{ name: 'package-detail', params: { slug: subItem.slug } }"
                custom
                v-slot="{ navigate, isActive }"
              >
                <DisclosureButton
                  as="button"
                  @click="handleMobileNavigation(navigate)"
                  :class="[
                    isActive
                      ? ' text-black underline underline-offset-10 decoration-2 decoration-sky-500' 
                      : 'text-black hover:underline-offset-10 hover:decoration-sky-500 hover:underline hover:decoration-2',
                    'block w-full rounded-md pl-6 pr-3 py-2 text-left text-sm font-medium transition-colors'
                  ]"
                >
                  {{ subItem.name }}
                </DisclosureButton>
              </router-link>
            </div>

            <router-link
              v-else
              :to="item.to"
              custom
              v-slot="{ navigate, isActive }"
            >
              <DisclosureButton
                as="button"
                @click="handleMobileNavigation(navigate)"
                :class="[
                  isActive
                      ? ' text-black underline underline-offset-10 decoration-2 decoration-sky-500' 
                      : 'text-black hover:underline-offset-10 hover:decoration-sky-500 hover:underline hover:decoration-2',
                  'block w-full rounded-md px-3 py-2.5 text-left text-base font-medium transition-colors'
                ]"
              >
                {{ item.name }}
              </DisclosureButton>
            </router-link>

          </template>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import categoriesData from '../../data/categories.json' // Menggunakan alias @ yang sudah diperbaiki

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from '@headlessui/vue'

import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import { routeLocationKey } from 'vue-router'

const mobileMenuOpen = ref(false)

watchEffect(() => {
  document.body.classList.toggle(
    'overflow-hidden',
    mobileMenuOpen.value
  )
})

const handleMobileNavigation = (navigate) => {
  navigate()
  mobileMenuOpen.value = false
}

const route = useRoute()

// fungsi untuk mengecek apakah salah satu sub-menu dari dropdown cocok dengan halaman aktif
const isDropdownActive = (children) => {
  return children.some(subItem => route.params.slug === subItem.slug)
}

// Menata data sub-menu dari file JSON kategori Anda
const packageChildren = categoriesData.map(cat => ({
  name: cat.title,
  slug: cat.slug
}))

const navigation = [
  { name: 'Home', to: '/' },
  { 
    name: 'Packages', 
    children: packageChildren
  },
  { name: 'About', to: '/about' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Blog', to: '/blog' },
]

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll),
  document.body.classList.remove('overflow-hidden')
})
</script>