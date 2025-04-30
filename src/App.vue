<script setup>
import { RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";


</script>
<template>

<div class="bg-white text-black dark:bg-black dark:text-white">
  <navbar-vue/>
</div>
<div class="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
  <router-view></router-view>
  </div>
</template>

<style>


</style>

