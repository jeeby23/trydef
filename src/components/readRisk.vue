<template>
  <div class="dark:bg-black dark:text-white  text-black min-h-screen transition-colors duration-300">
    <div class="relative w-full h-[60vh] bg-transparent overflow-hidden">
      <h1
        class="absolute inset-0 flex  items-center justify-center text-center px-4 text-blue-400 font-bold text-[2rem] z-10 bg-transparent">
        Risk Treatment Planning</h1>
      <!-- <video autoplay loop muted class="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="../assets/videos/businessVideo.mp4 " type="video/webm" />
        <source src="../assets/videos/businessVideo.mp4 " type="video/mp4" />
    </video> -->
      <div class="absolute top-0 left-0 w-full h-full object-cover z-0">
        <img :src="EditRisk" alt="">
      </div>
    </div>
    <div class="min-h-screen flex flex-wrap flex-col md:flex-row  " id="go">
      <div class=" flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6">
        <img :src="changeRisk" alt="Risk Management"
          class=" w-[100vw] h-[80vh] md:w-[40%] md:h-[100vh] px-6 flex items-center py:[0] md:py-[4rem] object-cover">
        <div class=" text-center px-6  pt-20 ">
          <h1 class="text-2xl font-bold mb-4 dark:text-white">Turn Cyber Risk Into Strategic Action with DefendNet</h1>
          <p class=" text-base md:text-lg mb-4 dark:text-white"> At DefendNet, we understand that identifying risks is
            only the beginning. The real value lies in how you respond. Our Risk Treatment Planning services are
            designed to help organizations develop and implement effective strategies to reduce, mitigate, or transfer
            risk — all tailored to your specific business needs and risk appetite.</p>
          <h2 class="font-semibold mb-2">What We Deliver: </h2>
          <ul class="text-left space-y-2 list-disc list-inside">
            <li class="w-[80%]">Risk Prioritization & Scoring
              Focus on what matters most with a clear hierarchy of risk impact and likelihood. </li> <br>
            <li class="w-[80%]">Customized Risk Treatment Strategies
              Choose from risk avoidance, mitigation, transfer (e.g., cyber insurance), or acceptance — all aligned with
              your goals and budget. </li> <br>
            <li class="mx-w-[100%]">Control Selection & Implementation Guidance
              Get expert help identifying and deploying the right technical, administrative, and physical controls.</li>
          </ul>
        </div>

      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 pt-[100px] " id="stop"
      ref="beforeFoot">
      <div class="text-center md:w-1/3">
        <h1 class="font-mono font-extrabold text-[20px]">Don't just manage risks — master them</h1>
        <button class="bg-blue-400 hover:bg-blue-800 py-3 px-9 rounded-full text-white font-semibold mt-2">Road to
          success</button>
      </div>
      <div class="">
        <img :src="woman" alt="woman image">
      </div>
      <div class="text-center md:w-1/3">
        <h1 class="font-mono font-extrabold text-[20px]">Have any questions ?</h1>
        <p class="text-[23px] text-indigo-500 font-mono"><a :href="`tel:${phoneNumber}`">Call: {{ phoneNumber }}</a></p>
      </div>
    </div>
    <footer class="bg-blue-900 dark:bg-gray-800 py-10 px-6 text-gray-800 dark:text-white" ref="footerSection">
      <div :style="backgroundStyle"
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-contain bg-center ">
        <div class="text-white">
          <div class="flex items-center gap-2 text-xl font-bold mb-2 text-white"><img
              :src=" isDark ? hopeDark : hopeDef" alt=""></div>
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
            <router-link to="/"> Home </router-link>
            <router-link to="/about"> About</router-link>
            <router-link to="/services"> services</router-link>
             <router-link to="/career" class="hover:text-blue-500"> Career</router-link>
            <router-link to="/contactus"> Contact Us </router-link>
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
  </div>
</template>
 
<script setup>
import changeRisk from '../assets/images/changeRisk.jpg'
import woman from '../assets/images/woman.png'
import bgImage from '@/assets/images/circleMap.png'
import hopeDef from '../assets/images/hopeDef.jpg'
import EditRisk from '../assets/images/EditRisk.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref, onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const phoneNumber = '+4407349146384'
const email = ' DefendNettechnology.com'
const twitt = 'https://x.com/DefendNetTech'
 const link = 'https://www.linkedin.com/company/107200419/admin/dashboard/'


const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
}
const footerSection = ref(null)

onMounted(() => {
  gsap.fromTo(
    footerSection.value,
    { opacity: 0, x: '-70%' },
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
</script>

<style>

</style>