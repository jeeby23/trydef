<template>
  <div>
    <div class="h-[30vh] md:h-[49vh] bg-blue-400 px-4 md:px-0 ">
      <!-- On small screens, image goes full width and outside of blue background -->
      <div class="relative">
        <h1 class="absolute left-[0] md:left-[60%] top-[30%] text-white text-[3rem] font-bold pb-7 md:pb-0">Audit</h1>
        <div class="sm:hidden absolute inset-x-0 top-[60px]">
          <img
            :src="defendCareer"
            alt=""
            class="w-full h-[200px] object-cover object-top [overflow-clip-margin:content-box]"
          />
        </div>
        <!-- For larger screens, keep image inline -->
        <img
          :src="defendCareer"
          alt=""
          class="hidden sm:block h-[300px] w-1/2 object-cover object-top [overflow-clip-margin:content-box]"
        />
      </div>
    </div>
    <div class=" mx-0 md:mx-[100px] ">
      <div class="relative mb-7 md:mb-7">
        <div class="relative bg-white p-7 mt-6 md:mt-[-40px] dark:bg-black">
        <h1 class="font-bold text-[1.3rem] md:text-[2rem] pb-4">Discover What Drives Business with DefendNet</h1>
        <p class="text-[1.3rem]">At DefendNet, auditing opens the door to some of the UK’s most exciting and influential organisations. To deliver real value, we delve into how companies operate — how they earn revenue, control expenditure, and plan for the future. This means our team builds a strong foundation across diverse industries and business models. The unique insight and broad exposure you gain at DefendNet help you grow your capabilities and explore what you’re truly capable of achieving.</p>
      </div>
      </div>
      <div class="">
       <div class="flex flex-col md:flex-row justify-center items-center bg-slate-700 px-8 py-6">
        <div class="text-white " id="black">
          <h1 class="py-5 font-light text-[2rem] px-6">Our Commitment to Quality.</h1>
          <p class="md:w-[100%] px-6 mb-10">At DefendNet, quality is the cornerstone of our work. It guides every audit we perform and informs every interaction we have. This unwavering focus on excellence is embedded in our processes, our team, and the way we serve our clients. Our Transparency Report highlights the robust quality control systems we employ, the challenges we face in today’s dynamic environment, and the proactive measures we’re taking to continuously improve and uphold the highest standards..</p>
          <div class="px-6">
          <router-link to="/about"  class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium ">About Us</router-link>
          </div>
        </div>
        <div ><img :src="qualityDefend" alt="" class=" md:w-[300vh] mt-7 md:mt-0"></div> 
      </div>
      </div>
      <div class="flex flex-col md:flex-row">
      <div class="px-6 py-10 bg-white w-[] md:mt-[100px] dark:bg-black">
          <div class="bg-blue-400 h-[6px] md:h-2 my-4  px-6 " style="width: 48px;"></div>
  <h1 class="font-light text-[2rem] ">Building Trust Through Transparent Auditing.</h1>
  <p class="text-[1.3rem]">At DefendNet, our Audit team plays a vital role in verifying the integrity of the UK’s leading organisations. We examine financial reports, regulatory disclosures, and sustainability practices to ensure they are accurate, fair, and transparent. Boards of directors, investors, stakeholders, and the wider market depend on our insights to make informed decisions..</p><br>
  <p class="text-[1.3rem]">Trust is the foundation of a healthy economy. Without it, investments falter, credit is withheld, consumers lose confidence, and uncertainty disrupts progress. That’s why every audit we conduct at DefendNet carries deep significance — it helps keep the business world moving with confidence and clarity.</p>
  </div>
  <div class="md:mt-[120px]"><img :src="defendjob"  class="w-[1000px] translate-y-[10px]"></div>
</div>
<div class="flex flex-col-reverse md:flex-row justify-center items-center">
  <div><img :src="leftDefend" alt="" class="w-[450px] mt-5 md:-mt-0 translate-y-[-2px]"></div>
  <div class="md:w-[80%] px-5 md:px-9 mt-9">
     <div class="bg-blue-400 h-[6px] md:h-2 my-4" style="width: 48px;"></div>
   <h1 class="font-light text-[2rem] ">Driven by Expertise, Enhanced by Technology.</h1>
<p class="text-[1.3rem]">At DefendNet, we harness cutting-edge technology to elevate every aspect of our audit services. As innovation reshapes the industry, we remain at the forefront—leveraging smart solutions to deliver deeper insights and greater value to our clients. Since 2018, we’ve integrated advanced tools like drones into our inventory audits, improving accuracy, efficiency, and assurance every step of the way.</p>
  </div>
</div>
<div class="m-auto  h-auto bg-slate-700 text-white py-4 md:py-[50px] px-4 md:px-[150px] mt-[100px]">
   <div class="bg-blue-400 h-[6px] md:h-2 my-4" style="width: 48px;"></div>
<h2 class="pb-[40px] text-[1rem]">"As part of our ongoing dedication to earning trust and achieving long-term impact, DefendNet is investing in a multi-year initiative to develop advanced global solutions that will drive the future of cybersecurity operations. We remain committed to empowering our teams, strengthening our culture, and advancing skills and technologies to realize our vision of next-generation defense—driven by human expertise, enhanced by cutting-edge technology, and unwavering in our pursuit of excellence."</h2>

<div class="flex"><img :src="ReCeo" alt="" class="rounded-full w-[100px] object-cover">
  <div  class="translate-y-[50px] px-3">
  <h1 class="font-bold">Olasubomi F Kehinde</h1>
<p class="font-medium">Ceo, DefendNet</p></div>
</div>
</div>
<div >
  <div class=" mt-9 px-5 md:px-0">
    <h1 class=" text-[2rem] pb-3">Still Curious ?</h1>
    <p class="font-bold font-sans text-[1.5rem] text-slate-400 pb-2">Check out our other services</p>
  </div>
  <div class="flex flex-col md:flex-row px-8 md:px-0 gap-4">
     <div class="w-full md:w-1/2">
      <MenuItem to="readAudit" label="IT Auditing" />
      <MenuItem to="readCloud" label="Cloud Security Advisory" />
      <MenuItem to="readCyber" label="Cybersecurity Advisory" />
      <MenuItem to="readPolicy" label="Policy Development & Governance Advisory" />
    </div>
      <div class="w-full md:w-1/2">
    <MenuItem to="readRisk" label="Risk Treatment Planning" />
    <MenuItem to="readSox" label="SOX Compliance Support" />
      <MenuItem to="readSupport" label="IT Support & Operational Readiness" />
      <MenuItem to="readThird" label="Third-Party Risk Assessment Strategy" />
      <MenuItem to="readMore" label="Business Continuity & Incident Management Advisory" />
    </div>
    </div> 
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
</template>


<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse,faGreaterThan); 
import defendCareer from '../assets/images/defend_career.jpeg'
import qualityDefend from '../assets/images/qualityDefend.jpeg'
import defendjob from '../assets/images/defendJob.jpeg'
import leftDefend from '../assets/images/leftDefend.jpeg'
import ReCeo from '../assets/images/ReCeo.png'
import bgImage from '@/assets/images/circleMap.png'
import woman from '../assets/images/woman.png'
import MenuItem from '../components/MenuItem.vue';
// import MenuItem from './MenuItem.vue';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger' 
import { ref, onMounted, nextTick} from 'vue'
gsap.registerPlugin(ScrollTrigger)


const phoneNumber =' +4407349146384';
 const email = 'DefendNettechnology.com';
 const twitt = 'https://x.com/DefendNetTech'
 const link = 'https://www.linkedin.com/company/107200419/admin/dashboard/'


const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
}
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


</script>


<style>

</style>