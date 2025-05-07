<template>
  <div class="relative w-full h-[60vh] bg-transparent overflow-hidden">
    <h1
      class="absolute inset-0 flex items-center justify-center text-center px-4 text-blue-500 font-bold text-[3rem] md:text-5xl z-10 bg-transparent">
      Contact Us</h1>
    <img :src="happyCall" alt="About Us" class="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale">
  </div>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black">
    <transition-group appear @before-enter="beforeEnter" @enter="enter" tag="div"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-row-2 gap-6 p-8 mt-10 w-full max-w-[600px] justify-center items-center">
      <div v-for="(item, index) in icons" data-index="index" :key="index"
        class=" scroll-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center transition-transform hover:scale-105 duration-300">
        <FontAwesomeIcon :icon="['fas', item.icon]" class="text-4xl text-blue-500 mb-4" />
        <p class="text-lg font-semibold text-gray-700 dark:text-white">{{ item.text }}</p>
        <p class="text-md font-mono font-bold text-gray-700 dark:text-white">
          <a v-if="item.text === 'By Email'" :href="`mailto:${item.description.trim()}`"
            class="hover:underline text-blue-600 dark:text-blue-400">
            {{ item.description }}
          </a>
          <a v-else-if="item.text === 'By Phone'" :href="`tel:${item.description.replace(/[^+\d]/g, '')}`"
            class="hover:underline text-blue-600 dark:text-blue-400">
            {{ item.description }}
          </a>
          <span v-else>
            {{ item.description }}
          </span>
        </p>
      </div>
    </transition-group>

  </div>
  <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 pt-[100px]" id="stop"
    ref="beforeFoot">
    <div class="text-center md:w-1/3">
      <h1 class="font-mono font-extrabold text-[20px]">Let secure Your business Togther</h1>
      <button class=" mb-10 bg-blue-400 hover:bg-blue-800 py-3 px-9 rounded-full text-white font-semibold mt-2">Road to
        success</button>
    </div>
    <div class="">
      <img :src="woman" alt="woman image">
    </div>
    <div class="text-center md:w-1/3">
      <h1 class="font-mono font-extrabold text-[20px]">Have any questions ?</h1>
      <p class="text-[23px] text-indigo-500 font-mono">{{ phoneNumber }}</p>
    </div>
  </div>
  <footer class="bg-blue-900 dark:bg-gray-800 py-10 px-6 text-gray-800 dark:text-white" ref="footerSection">
    <div :style="backgroundStyle"
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-contain bg-center ">
      <div class="text-white">
        <div class="flex items-center gap-2 text-xl font-bold mb-2 text-white"><img :src=" isDark ? hopeDark : hopeDef"
            alt=""></div>
        <h1 class="md:w-[70%]">At DefendNet Technology, we don’t just help you meet compliance standards — we help you
          build trust with your stakeholders, improve your risk posture, and future-proof your operations.</h1>
        <div class="flex gap-4 mt-4 text-xl">
          <a :href="`tel:${phoneNumber}`"><i class="fa-brands fa-square-whatsapp"></i></a>
          <a :href="twitt"> <i class="fa-brands fa-square-x-twitter"></i></a>
          <a :href="link"> <i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <div class="text-white ">
        <h1 class="text-lg font-semibold mb-2   ">Services</h1>
        <ul class="text-sm space-y-1">
          <li>Third-Party Risk Assessment Strategy</li>
          <li>Policy Advisory & Documentation</li>
          <li>IT Auditing</li>
          <li>IT Support & Operational Readiness</li>
          <li> Business Continuity & Incident Management Advisory</li>
          <li>Cybersecurity Advisory</li>
          <li>Cloud Security Advisory</li>
          <li>SOX Compliance Support</li>
        </ul>

      </div>
      <div class="text-white">
        <h1 class="text-lg font-semibold mb-2">Quick Links</h1>
        <div class="flex flex-col space-y-1">
         <router-link to="/" class="hover:text-blue-500"> Home </router-link>
            <router-link to="/about" class="hover:text-blue-500"> About</router-link>
            <router-link to="#" class="hover:text-blue-500"> Services</router-link>
            <router-link to="/career" class="hover:text-blue-500"> Career</router-link>
            <router-link to="/contactus" class="hover:text-blue-500"> Contact Us </router-link>
        </div>
      </div>
      <div class="text-white">
        <h1 class="text-lg font-semibold mb-2">Contact Us</h1>
        <Address> Address: 20 Northwood Drive BT15 3QP</Address>
        <p class="text-sm"><a :href="`mailto:${email}`"> <span
              class="font-sans text-[0.8rem] font-bold text-blue-400">Email:</span>{{ email }}</a></p>
        <p class="text-sm"><a :href="`tel:${phoneNumber}`"><span
              class="font-sans text-[0.8rem] font-bold text-blue-400"> Call:
            </span> {{ phoneNumber }}</a></p>
      </div>
    </div>

  </footer>
  <div class="h-[50px] m-0 bg-blue-950 md:px-6 md:py-4 text-center py-4">
    <p class="text-white text-sm ">All &copy; Copyright Reserved. 2025 DefendNet Technology</p>
  </div>


</template>

<script setup>
import hopeDef from '../assets/images/hopeDef.jpg'
import woman from '../assets/images/woman.png'
import bgImage from '@/assets/images/circleMap.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faPhone, faLocationDot, faClock)
import { createApp, ref, onMounted } from 'vue'
import happyCall from '../assets/images/happyCall.jpg'


const icons = [
  { icon: 'envelope', text: 'By Email',description: ' DefendNettechnology.com ' },
  { icon: 'phone', text: 'By Phone',description: '+44(0)7469275888' },
  { icon: 'location-dot', text: 'By Address',description: '20 Northwood Drive BT15 3QP' },
  { icon: 'clock', text: 'Open Hours',description: ' Monday-friday, 9AM – 5PM' }
]

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
}

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.scroll-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%', // When top of card reaches 80% of viewport
        toggleActions: 'play none none reverse',
      },
      delay: index * 0.2,
    });
  });
});

const footerSection = ref(null)

onMounted(() => {
  gsap.fromTo(
    footerSection.value,
    { opacity: 0, x: '-100%' },
    {
      opacity: 1,
      x: '0%',
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reset',
        markers: false
      }
    }
  )
})
const beforeFoot = ref(null)

onMounted(() => {
  gsap.fromTo(
    beforeFoot.value,
    { opacity: 0, x: '-100%' },
    {
      opacity: 1,
      x: '0%',
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: beforeFoot.value,
        start: 'top 80%',
        toggleActions: 'play none none reset',
        markers: false
      }
    }
  )
})
 

  const phoneNumber = '+4407349146384'
const email = 'DefendNettechnology.com'
const twitt = 'https://x.com/DefendNetTech'
 const link = 'https://www.linkedin.com/company/107200419/admin/dashboard/'
</script>

<style scoped>

</style>