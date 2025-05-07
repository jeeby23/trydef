<template>

  <div class=" flex flex-col items-center text-center px-4 py-10">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 ref="heading" class="font-bold text-5xl py-6 font-mono"> Our Featured Services</h1>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <p ref="headingPara" class="max-w-xl text-gray-600 dark:text-white "> Delivering tailored solutions that support
        your
        professional growth. Partnering with you to develop a standout digital presence, credible certifications, and a
        globally recognized portfolio.</p>
    </transition>
  </div>
  <div class="">
    <div class="flex justify-center px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full  ">
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="thirdParty" alt="" class="w-40 h-40 rounded-full shadow-md text-center">
          <h1 class="font-semibold text-[19px]">🧩 Third-Party Risk Assessment Strategy</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Identify and manage risks across your
            vendor ecosystem.
            We help you assess the security posture and compliance status of your third-party vendors. Our structured
            approach evaluates potential vulnerabilities, contract obligations, and data-handling risks to ensure your
            partners don’t become your weakest link..</p>
          <router-link to="/readThird" class="text-orange-300">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="changeIt" alt="" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">🕵 IT Auditing</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Independent audits for clarity, compliance,
            and confidence.
            We conduct thorough internal and external IT audits, identifying control gaps, validating configurations,
            and providing clear reports that prepare your business for certification or regulatory inspection.</p>
          <router-link to="/readAudit" class="text-orange-300">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="changeSupport" alt="IT support" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">🛠 IT Support & Operational Readiness</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Keep systems secure, compliant, and running
            smoothly.
            Our IT support services ensure your infrastructure meets compliance standards while maintaining performance.
            We work with your teams to resolve vulnerabilities, apply patches, and implement technical controls that
            satisfy audit requirements.</p>
          <router-link to="/readSupport" class="text-orange-300">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="cloud" alt="cloud" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">☁ Cloud Security Advisory</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Secure your cloud environments with
            confidence.
            Whether you're on AWS, Azure, or Google Cloud, we provide strategic cloud security advice to help you
            implement secure architecture, identity controls, data protection measures, and compliance-ready
            configurations.</p>
          <router-link to="/readCloud" class="text-orange-300">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <div class="flex flex-col items-center text-center p-6 service-card  ">
          <img :src="cyber" alt=" cyber security" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">🛡 Cybersecurity Advisory</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Strengthen your defenses with expert
            guidance.
            We assess your cybersecurity posture, recommend risk mitigation strategies, and align your security program
            with compliance requirements. Whether it's threat detection, access control, or endpoint protection, we help
            you stay ahead of cyber threats.
          </p>
          <router-link to="/readCyber" class="text-orange-200">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <!-- <div class="flex flex-col items-center text-center p-6 service-card">
          <img :src="changeRisk" alt="risk management" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]"> ⚖ Risk Treatment Planning</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Turn risk insights into action.
            Once risks are identified, DefendNet helps you prioritize and treat them through mitigation, transfer,
            acceptance, or avoidance. We support you with practical, audit-aligned risk treatment plans that enhance
            your overall resilience.</p>
          <router-link to="/readRisk" class="text-orange-200">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div> -->
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="sox" alt=" SOX compliance" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">✅ SOX Compliance Support</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Simplify your Sarbanes-Oxley (SOX)
            compliance journey.
            We guide public companies and their partners through IT General Controls (ITGCs), audit trails, and access
            management aligned with SOX Section 404. Our team ensures your financial systems and reporting processes
            meet all audit expectations.</p>
          <router-link to="/readSox" class="text-orange-200">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="cheap" alt=" business" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">📉 Business Continuity & Incident Management Advisory</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">Prepare for the unexpected and recover
            quickly.
            DefendNet designs and evaluates business continuity and incident response plans to ensure your organization
            can react effectively to cyber incidents, outages, or disasters—minimizing downtime and compliance risk.</p>
          <router-link to="/readMore" class="text-orange-200">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
        <div class="flex flex-col items-center text-center p-6 service-card ">
          <img :src="policy" alt="policy" class="w-40 h-40 rounded-full shadow-md object-cover">
          <h1 class="font-semibold text-[19px]">Policy Development & Governance Advisory</h1>
          <p class="max-w-[100%] text-gray-600 text-[13px] dark:text-white ">DefendNet provides expert guidance in
            creating and implementing IT policies that meet industry standards and regulatory requirements. We help
            organizations build strong governance frameworks to ensure compliance, reduce risk, and support secure,
            efficient operations.</p>
          <router-link to="/readPolicy" class="text-orange-200">Read More <i
              class="fa-solid fa-plus bg-white dark:bg-black text-blue-400"></i></router-link>
        </div>
      </div>
    </div>
    <div class="mb-9">
      <h3 class="font-bold text-[2rem] text-center my-10 capitalize">Our Values at <span
          class="text-blue-500 font-mono font-extrabold"> DefendNet </span></h3>
      <p class="max-w-xl mx-auto text-gray-600 text-center dark:text-white ">At <span
          class="text-blue-500 font-mono font-extrabold"> DefendNet</span>, our mission goes beyond auditing systems—we
        build confidence in them. As a trusted leader in IT auditing and compliance, we stand on the firm foundation of
        three core values: Assurance, Effectiveness, and Integrity. These principles guide how we serve clients, conduct
        assessments, and ensure regulatory alignment in today’s complex digital landscape.
      </p>

    </div>
    <!-- swiper  -->
    <!-- In your template section -->
<Swiper
  class="w-full h-screen"
  :modules="[Autoplay]"
  :slides-per-view="1"
  :space-between="0"
  :loop="true"
  :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
    // pauseOnMouseEnter: true
  }"
>
  <SwiperSlide v-for="(slide, index) in slides" :key="index" class="relative">
    <img :src="slide.img" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30 p-4">
      <div class="text-center max-w-2xl">
        <h1 class="text-4xl font-bold mb-4 drop-shadow-lg">
         {{slide.description}}
        </h1>
     
        <p class="text-xl font-semibold drop-shadow-lg">
          {{ slide.text }}
        </p>

      </div>
    </div>
  </SwiperSlide>
</Swiper>
    <div class=" pl-3 md:pl-10 pt-15 text-blue-400 text-[1rem] ">
      <h4 class="font-bold py-7">Why Our Values Matter</h4>
      <p class="text-slate-500">In the world of IT auditing and compliance, trust is not optional—it’s essential.
        Organizations rely on us to validate their systems, safeguard their data, and ensure they’re on the right side
        of every regulation. These responsibilities require more than technical knowledge—they demand a deep commitment
        to values that stand the test of time. At DefendNet, our values are more than words. They are promises to our
        clients, our partners, and the industries we serve.</p>
    </div>
    <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      <div v-for="(card, index) in cardx" :key="index" @mouseenter="hovered = index" @mouseleave="hovered = null"
        class="w-[400px] h-[230px] bg-slate-100 dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer px-10 text-sm py-5"
        :class="hovered === index ? 'scale-[100%] shadow-xl z-10' : 'scale-[80%]'">
        <h2 class="text-xl font-bold text-black dark:text-white">{{ card.title }}</h2>
        <div v-if="card.title === 'Industry'" class="">
          <p class="font-semibold "></p>
          <ul class=" mb-2">
            <li>Financial services</li>
            <li>Government & NGO </li>
            <li>Healthcare </li>
            <li>Manufacturing </li>
            <li>Real Estate</li>
            <li>Education </li>
            <li>Transportation</li>
          </ul>

        </div>
        <p v-else> {{ card.description }} </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 pt-[100px]" id="stop"
      ref="beforeFoot">
      <div class="text-center w-full md:w-1/3">
        <h1 class="font-mono font-extrabold text-lg sm:text-xl md:text-2xl">
          Let’s secure your business together
        </h1>
        <button class="bg-blue-400 hover:bg-blue-800 py-3 px-9 rounded-full text-white font-semibold mt-4">
          Road to success
        </button>
      </div>

      <!-- Image Block -->
      <div class="w-full md:w-1/3 flex justify-center">
        <img :src="woman" alt="woman image" class="max-w-full h-auto object-contain" />
      </div>

      <!-- Right Text Block -->
      <div class="text-center w-full md:w-1/3">
        <h1 class="font-mono font-extrabold text-lg sm:text-xs md:text-xl">
          Have any questions?
        </h1>
        <p class="text-lg sm:text-xl text-indigo-500 font-mono mt-2">
          <a :href="`tel:${phoneNumber}`">Call: {{ phoneNumber }}</a>
        </p>
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
            <router-link to="/" class="hover:text-blue-400"> Home </router-link>
            <router-link to="/about" class="hover:text-blue-400"> About</router-link>
            <router-link to="#" class="hover:text-blue-400"> services</router-link>
            <router-link to="/career" class="hover:text-blue-500"> Career</router-link>
            <router-link to="/contactus" class="hover:text-blue-400"> Contact Us </router-link>
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
import hopeDef from '../assets/images/hopeDef.jpg'
import hopeDark from '../assets/images/hopeDark.jpg'
import thirdParty from '../assets/images/thirdParty.jpg'
import changeIt from '../assets/images/changeIt.jpg'
import changeSupport from '../assets/images/changeSupport.jpg'
import cloud from '../assets/images/cloud.jpg'
import cyber from '../assets/images/cyber.jpg'
import changeRisk from '../assets/images/changeRisk.jpg'
import sox from '../assets/images/SOX.jpg'
import cheap from '../assets/images/cheap.jpg'
import policy from '../assets/images/policy.jpg'
import cardPolicy from '../assets/images/cardPolicy.jpg'
import cardAus from '../assets/images/cardAus.jpg'
import cardEffect from '../assets/images/cardEffect.jpg'
import cardInt from '../assets/images/cardInt.jpg'
import woman from '../assets/images/woman.png'
import  deEfi from'../assets/images/deEfi.jpg'
import bgImage from '@/assets/images/circleMap.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'




const heading = ref(null)

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
}

// import { vScrollReveal } from 'vue-scroll-reveal';
import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
const vScrollReveal = createScrollRevealDirective({
    delay: 1800,
    // duration: 200,
    scale: 1,
    distance: '100px'
});

// import { useMotion } from '@vueuse/motion'
import { ref,onMounted,onBeforeUnmount,watch, nextTick} from 'vue'
onMounted(() => {
  gsap.fromTo(
    heading.value,
    { opacity: 0, y: -60 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: heading.value,
        start: 'top 80%',
        toggleActions: 'play none none reset', // plays every time it enters
        markers: false // set to true to debug
      }
    }
  )
  
})
const isDark = ref(false)
onMounted(() => {
  const matchDark = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = matchDark.matches
  matchDark.addEventListener('change', (e) => {
    isDark.value = e.matches
  })
})
// Clone cards for seamless looping
const slides = [
  {
    img: cardAus,
    description: "Assurance",
    text: " we provide more than just audit reports. We deliver confidenceOur  assurance comes from deep technical understanding, robust risk management processes, and the ability to interpret and apply complex compliance frameworks (such as ISO 27001, NIST, SOC 2, HIPAA, and more"
  },
  {
    img: deEfi,
       description: "Effectivness",
    text: "Effectiveness in IT auditing is about delivering real value—not just reports. We believe that every recommendation should improve your posture, not complicate it. That’s why our approach is methodical, measurable, and sharply aligned with your business goals",
  },
  {
    img: cardInt,
       description: "Integrity",
    text: "We hold ourselves—and our clients—to the highest ethical standards. At DefendNet, Integrity means conducting audits with transparency, honesty, and a firm commitment to independence. We do not cut corners, inflate risks, or deliver biased assessments.",
  }
]


const currentIndex = ref(0)
const slider = ref(null)
const sliderOffset = ref(0)
let intervalId = null

const updateSliderOffset = () => {
  nextTick(() => {
    if (!slider.value || !slider.value.children || !slider.value.parentElement) {
      return; // Exit if elements aren't ready
    }
    
    const cardEl = slider.value.children[currentIndex.value]
    if (cardEl) {
      const containerWidth = slider.value.parentElement.offsetWidth
      const cardWidth = cardEl.offsetWidth
      const offset = containerWidth / 2 - (cardEl.offsetLeft + cardWidth / 2)
      sliderOffset.value = offset
    }
  })
}

const goToCard = (index) => {
  currentIndex.value = index
}

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.value.length
}

onMounted(() => {
  // Animation for heading
  gsap.fromTo(
    heading.value,
    { opacity: 0, y: -60 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: heading.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Animation for service cards
  const serviceCards = document.querySelectorAll('.service-card'); // Add this class to each card

  serviceCards.forEach(card => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 }, // Start from bottom
      {
        opacity: 1,
        y: 0, // Animate to normal position
        duration: 1.5,
        ease: 'ease-out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
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

// onBeforeUnmount(() => {
//   clearInterval(interval)
// })
const hovered = ref(null)

const cardx = [
  { title: 'Industry', description: '' },
  { title: 'Mission', description: ' We aim to be a top-notch IT audit, consulting, and assurance firm. We’re all about delivering quick, high-quality services that truly offer great value to our clients' },
 
]

const phoneNumber = '+4407349146384'
const email = 'DefendNettechnology.com'
const twitt = 'https://x.com/DefendNetTech'
 const link = 'https://www.linkedin.com/company/107200419/admin/dashboard/'
</script>

<style scoped>


</style>