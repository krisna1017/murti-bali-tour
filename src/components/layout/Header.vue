<template>
  
  <Disclosure
    as="nav"
    v-slot="{ open }"
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-gray-900/60 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
          <!-- Logo -->
          <div class="flex shrink-0 items-center ">
            <img
              class="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>

          <!-- Menu Center -->
          <div class="hidden flex-1 sm:flex justify-center">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                v-slot="{ isActive }"
              >
                <span
                  :class="[
                    isActive
                      ? 'bg-gray-950/50 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300'
                  ]"
                >
                  {{ item.name }}
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden bg-gray-900/95 backdrop-blur-xl min-h-screen border-t border-white/10">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          custom
          v-slot="{ navigate, isActive }"
        >
          <DisclosureButton
            as="button"
            @click="navigate"
            :class="[
              isActive
                ? 'bg-gray-950/50 text-white'
                : 'text-gray-300 hover:bg-white/5 hover:text-white',
              'block w-full rounded-md px-3 py-2 text-left text-base font-medium'
            ]"
          >
            {{ item.name }}
          </DisclosureButton>
        </router-link>
      </div>
    </DisclosurePanel>

  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Packages', to: '/packages' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>