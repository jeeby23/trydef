<template>
  <div class="dark:bg-black dark:text-white  text-black min-h-screen transition-colors duration-300">
    <div class="relative w-full h-[60vh] bg-transparent overflow-hidden">
      <h1
        class="absolute inset-0 flex  items-center justify-center text-center px-4 text-blue-400 font-bold text-[3rem] md:text-5xl z-10 bg-transparent">
        About Us</h1>
      <img :src="dAbout" alt=" about us " class="absolute top-0 left-0 w-full h-full object-cover  z-0 grayscale ">


    </div>

    <div
      class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10">
      <div class=" w-full flex items-center flex-col md:items-start">
        <h1
          class="text-2xl md:text-[2rem] leading-tight w-[100%] text-slate-700  my-1 font-bold dark:text-white font-mono pt-12">
          About Us <br> <strong class="text-blue-700 text-5xl lg:text-4xl font-bold"> DefendNet</strong>
        </h1>
        <p class="text-base mt-4 text-gray-500 w-50">
          DefendNet Technology is a trusted partner in IT audit, compliance, and cybersecurity advisory services.
          Founded with a mission to empower organizations to build secure, compliant, and resilient digital
          environments, we stand by our core values: Protect. Detect. Comply. At DefendNet, we understand that today's
          businesses operate in an increasingly complex and regulated digital landscape. With cyber threats evolving
          rapidly and compliance standards becoming more stringent, organisations need more than just tools — they need
          strategic guidance and expert oversight. That’s where we come in.
        </p>

        <router-link :to="'/contactUs'"
          class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium ">Contact
          Us</router-link>
      </div>

      <div class="image">
        <img :src="imgsrc" alt="about" class=" mt-[290px] md:mt-0" />
      </div>
    </div>
    <div>
    </div>
    <div>
      <div class=" mt-[290px] text-center md:mt-0">
        <h2 class=" md:text-center text-[50px] font-mono font-extrabold pt-12">Our Expertise</h2>
        <p class="text-center text-slate-400">We specialise in a full suite of IT audit and compliance services tailored
          to meet the needs of modern enterprises. Our offerings include:
        </p>
      </div>
      <div class="flex flex-wrap justify-center mt-[100px]">
        <div v-for="(card, index) in cards" :key="index" ref="card">
          <div class="w-[325px] bg-white rounded-lg overflow-hidden shadow-lg  ml-10 mt-10">
            <img :src="card.img" alt=" it aduit" class="w-[100%] h-48 object-cover">
            <div class="flex flex-col flex-grow p-5">
              <h3 class="font-bold mb-5 dark:text-black">{{ card.title }}</h3>
              <P class="text-slate-400">{{ card.description }}</P>
            </div>
          </div>
          <!-- flex flex-wrap justify-center mt-[100px] -->
          <!-- w-full sm:w-[90%] md:w-[45%] lg:w-[325px] bg-[#f0f0f0] rounded-md overflow-hidden shadow-lg ml-10 mb-10  -->
        </div>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 pt-[100px]" id="stop"
      ref="beforeFoot">
      <!-- <div
      class="flex flex-col items-center justify-center gap-6 px-4 py-8 md:flex-row md:justify-between lg:px-16 lg:py-12"
      id="stop"> -->
      <!-- Left Text Block -->
      <div class="text-center w-full md:w-1/3">
        <h1 class="font-mono font-extrabold text-lg sm:text-xs md:text-xl">
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
      <div class="text-center w-full md:w-[30%]">
        <h1 class="font-mono font-extrabold text-lg sm:text-xs md:text-xl">
          Have any questions?
        </h1>
        <p class="text-lg sm:text-xs text-indigo-500 font-mono mt-2 md:text-xl">
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
          <h1 class="w-[70%]">At DefendNet Technology, we don’t just help you meet compliance standards — we help you
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
            <li>Risk Treatment Planning</li>
            <li>Cloud Security Advisory</li>
            <li>SOX Compliance Support</li>
          </ul>

        </div>
        <div class="text-white">
          <h1 class="text-lg font-semibold mb-2">Quick Links</h1>
          <div class="flex flex-col space-y-1">
            <router-link to="/"> Home </router-link>
            <router-link to="/about"> About</router-link>
            <router-link to="#"> Services</router-link>
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
import AboutHero from '../views/AboutHero.vue'
import imgsrc from '../assets/images/home.jpg'
import dAbout from '../assets/images/dAbout.jpg'
import cardAudit from '../assets/images/cardAudit.jpg'
import cardSox from '../assets/images/cardSox.jpg'
import cardCyber from '../assets/images/cardCyber.jpg'
import cardThird from '../assets/images/cardThird.jpg'
import cardPolicy from '../assets/images/cardPolicy.jpg'
import cardCloud from '../assets/images/cardCloud.jpg'
import cardBuisness from '../assets/images/cardBuisness.jpg'
import cardSupport from '../assets/images/cardSupport.jpg'
import bgImage from '@/assets/images/circleMap.png'
import woman from '../assets/images/woman.png'
import hopeDef from '../assets/images/hopeDef.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref, onMounted, nextTick } from 'vue'
gsap.registerPlugin(ScrollTrigger)

 const phoneNumber =' +4407349146384';
 const email = 'DefendNettechnology.com';
 const twitt = 'https://x.com/DefendNetTech'
 const link = 'https://www.linkedin.com/company/107200419/admin/dashboard/'


const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
}

const cards = [
  {
    img: cardSox,
    alt: 'Sox ',
    title: 'SOX Compliance & IT General Controls',
    description: 'Focused on SOX Compliance & IT General Controls, providing assurance that financial systems and processes meet regulatory standards. Delivers robust control frameworks to support audit readiness, data integrity, and risk mitigation.',
  },
  {
    img: cardCyber,
    alt: 'cyber ',
    title: 'Cybersecurity & Risk Treatment Strategies',
    description: 'Experts in Cybersecurity & Risk Treatment Strategies, delivering tailored solutions to identify threats, reduce vulnerabilities, and align security measures with business goals. Ensures a proactive, resilient defense posture in an evolving threat landscape.',
  },
  {
    img: cardThird,
    alt: 'Third party',
    title: 'Third-Party Risk Management',
    description: 'Focused on Third-Party Risk Management, offering strategic insight and proactive solutions to identify, assess, and mitigate risks across vendor ecosystems. Ensures secure, compliant, and resilient partnerships that support business continuity and trust.',
  },
  {
    img: cardAudit,
    alt: 'IT audit',
    title: 'IT  Auditing and Compliance Assessments',
    description: 'Independent audits for clarity, compliance, and confidence We conduct thorough internal and external IT audits, identifying control gaps, validating configurations, and providing clear reports that prepare your business for certification or regulatory inspection.',
  },
  {
    img: cardPolicy,
    alt: 'Policy',
    title: ' Policy Development & Governance Advisory',
    description: 'Specialized in Policy Development & Governance Advisory, providing organizations with clear frameworks, regulatory alignment, and strategic oversight to strengthen compliance and operational integrity. Trusted guidance ensures policies are effective, scalable, and aligned with business objectives',
    
  },
  {
    img: cardCloud,
    alt: 'Cloud security',
    title: ' Cloud Security Advisory',
    description: 'Defend Net delivers expert Cloud Security Advisory to protect cloud environments with strategic guidance, risk management, and compliance-focused solutions. Trusted by organizations across industries, Defend Net ensures secure, scalable, and resilient cloud operations',
  },
  {
    img: cardBuisness,
    alt: 'Business ',
    title: ' Business Continuity & Incident Management Planning',
    description: 'We develop customized strategies that minimize downtime, protect critical operations, and safeguard your reputation. From risk assessments to response frameworks and recovery procedures, our team delivers clear, actionable plans to keep you prepared and in control.',
  },
  {
    img: cardSupport,
    alt: 'Support',
    title: 'Comprehensive IT Support Services',
    description: 'we specialize in delivering comprehensive IT support services tailored to keep your business secure, connected, and running efficiently. With a proactive approach to cybersecurity, network management, and technical support, our mission is to defend your digital infrastructure so you can focus on growth and innovation.',
  }
]
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


const cardRefs = ref([])

onMounted(async () => {
  await nextTick()
  cardRefs.value = cardRefs.value = cardRefs.value = cardRefs.value.concat(
    document.querySelectorAll('[ref="card"]')
  )

  cardRefs.value.forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.2,
      }
    )
  })
})



</script>

<style scoped>
.image{
  animation: up-down 1s alternate infinite;
}
@keyframes up-down {
  0%{
    transform: translateY(15px);
  }
  100%{
    transform: translateY(-10px);
  }
  
}
</style>