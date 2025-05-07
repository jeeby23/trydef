<template>
  <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10">
    <div class="w-full flex items-center flex-col md:items-start ">
       <transition appear
  @before-enter="beforeEnter"
  @enter="enter">
      <h1 class="text-2xl md:text-[2rem] leading-tight w-[100%] text-slate-700  my-1 font-bold dark:text-white" > <strong class="text-blue-700 text-5xl lg:text-4xl font-bold "> D<span class="text-blue-900">efend</span>Net</strong></h1>
      </transition>
      <p class="text-2xl md:text-xl lg:w-[80%] text-slate-700 my-1 dark:text-white ">A trusted partner in IT compliance and auditing—helping organizations meet regulatory standards, enhance cybersecurity, and stay audit-ready through expert-led solutions.</p>
      <router-link :to="visit" class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium "> Get Started</router-link>
    </div>
    <div class="image">
      <img :src="imgsrc" alt="home"  />
    </div>
  </div>
</template>

<script setup>
import imgsrc from '../assets/images/home.jpg'
import gsap from 'gsap'

const beforeEnter = (el) =>{
  el.style.trasform = 'translateY(-60px)'
  el.style.opacity = 0
}
const enter = (el) =>{
  gsap.to(el,{
    y:0,
    opacity:1,
    duration:3,
    ease:'bounce.out'
  })
}


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