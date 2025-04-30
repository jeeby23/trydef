<template>
  <TwoInOne :name="'Empower Your mind. Elevate your income With'" :imgsrc="home" :visit="'/about'" :btnName="'Get Started'"  />
  <HomeHero />
    <section id="services">
      <services/>
    </section>
   
</template>

<script setup>
import HomeHero from '../views/HomeHero.vue'
import TwoInOne from '../components/TwoInOne.vue'
import home from '../assets/images/home.jpg'
import services from '../components/services.vue'




</script>

<style scoped>
html {
  scroll-behavior: smooth; /* Smooth scrolling for anchor links */
}
</style>