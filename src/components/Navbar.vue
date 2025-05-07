<template>
  <header :class="[
    'top-0 z-50 w-full flex justify-between items-center bg-white shadow-md h-[80px] px-5 dark:bg-black lg:px-24 transition-all duration-300',
    isSticky ? 'fixed shadow-lg' : 'relative'
  ]" ref="headerRef">
    <div class="text-3xl font-extrabold text-blue-600 hover:text-blue-700  dark:text-white cursor-pointer">
      <router-link to="/">
        <img :src="isDark ? hopeDark : hopeDef" alt=" defen logo" class="w-[170px] h-[80px] object-cover">
      </router-link>
    </div>
    <div class="absolute right-[60px] top-[28px] md:right-2 lg:right-16 cursor-pointer z-30" @click="toggleDarkMode">
      <img :src="isDark ? moonIcon : sunIcon" alt="Theme Toggle" class="w-5 h-5 sm:w-6 sm:h-6">
    </div>
    <nav class="fixed top-0 left-0 w-full bg-white dark:bg-black z-60 flex flex-col p-5 gap-4 transition-all duration-500
         md:static md:flex-row md:w-auto md:shadow-none md:h-[80px] md:items-center"
      :class="[open ? 'top-0' : 'top-[-1000%]']">
      <router-link to="/"
        class="text-slate-500 dark:text-white py-5 dark:hover:text-gray-300 hover:text-slate-700 text-xl font-medium"   @click="closeServices">
        Home </router-link>
      <router-link to="/about"
        class="text-slate-500 dark:text-white py-5 dark:hover:text-gray-300 hover:text-slate-700 text-xl font-medium"   @click="closeServices">
        About</router-link>
      <div class="relative" @click="toggleServicesMobile">
        <!-- Mobile + Desktop Trigger -->
        <div
          class="flex justify-between items-center cursor-pointer text-slate-500 dark:text-white py-5 dark:hover:text-gray-300 hover:text-slate-700 text-xl font-medium"
          @click="showServicesMobile = !showServicesMobile" >
          <span class="flex items-center gap-1">
            <i class=""></i>
            Services
          </span>
          <i :class="['fa-solid', showServicesMobile ? 'fa-minus' : 'fa-plus', 'ml-2', 'block', 'md:hidden']"></i>
          <i class="fa-solid fa-chevron-down text-[1rem] ml-2 hidden md:block"></i>
        </div>
      <!-- swipper vue -->
    

        <!-- Services Dropdown -->
        <div v-if="showDropdown || showServicesMobile"
          class="md:absolute md:right-[50%] md:translate-x-[30%] md:top-[40px] mt-2 bg-white dark:bg-blue-950 shadow-lg rounded-md p-4 z-50 flex flex-wrap gap-4 md:w-[50vw] w-full">
          <div class="flex flex-col md:flex-row w-full">
            <div class="py-3 w-full md:w-1/2">
              <router-link to="/readAudit"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                IT Auditing</router-link><br>
              <router-link to="/readCloud"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                Cloud Security Advisory</router-link><br>
              <router-link to="/readCyber"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                Cybersecurity Advisory</router-link><br>
              <router-link to="/readPolicy"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                Policy Development & Governance Advisory</router-link><br>
            </div>
            <div class="py-3 w-full md:w-1/2">
              <router-link to="/readRisk"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                Risk Treatment Planning</router-link><br>
              <router-link to="/readSox"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                SOX Compliance Support</router-link><br>
              <router-link to="/readSupport"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                IT Support & Operational Readiness</router-link><br>
              <router-link to="/readThird"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                Third-Party Risk Assessment Strategy</router-link><br>
              <router-link to="/readMore"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-white hover:dark:text-blue-600"   @click="closeServices">
                Business Continuity & Incident Management Advisory</router-link><br>
            </div>
          </div>
        </div>
      </div>
      <router-link to="career"  class="text-slate-500 dark:text-white py-5 dark:hover:text-gray-300 hover:text-slate-700 text-xl font-medium "   @click="closeServices">Career</router-link>
      <router-link to="/contactus"
        class="text-slate-500 dark:text-white py-5 dark:hover:text-gray-300 hover:text-slate-700 text-xl font-medium "   @click="closeServices">
        Contact Us </router-link>
    </nav>
    <div class="text-4xl text-black dark:text-white cursor-pointer md:hidden z-20 "  @click="meauOpen">
      <i :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' ]"></i>
    </div>

  </header>

</template>

<script setup>
import {RouterLink,useRouter, useRoute} from 'vue-router'
import {ref,onMounted,onBeforeUnmount } from 'vue'
import hopeDef from '../assets/images/hopeDef.jpg'
import hopeDark from '../assets/images/hopeDark.jpg'



      
const open = ref(false)

const showDropdown = ref(false) 
const showServicesMobile = ref(false)

const meauOpen = () => {
  open.value =!open.value
}
const closeMenu = () => {
  open.value = false
}
const closeServices = () => {
  showDropdown.value = false
  showServicesMobile.value = false
  closeMenu()
}
const router = useRouter()
const route = useRoute()

function goToServices() {
  if (route.path === '/') {
    // Already on home page, just scroll
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Go to home, then scroll after navigation
    router.push({ path: '/', hash: '#services' })
  }
}
const isDark = ref(false)
const sunIcon = new URL('@/assets/images/sun.png', import.meta.url).href // ☀️ Your light-mode icon
const moonIcon = new URL('@/assets/images/moon.png', import.meta.url).href // 🌙 Your dark-mode icon

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})
const isSticky = ref(false)
const headerRef = ref(null)

const handleScroll = () => {
  const scrollY = window.scrollY
  isSticky.value = scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>

</style>