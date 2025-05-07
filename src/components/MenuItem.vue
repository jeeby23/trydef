<template>
  <RouterLink
    :to="to"
    class="flex items-center justify-between border border-black dark:border dark:border-white w-full px-4 py-2 hover:bg-blue-400 hover:text-white mb-3"
  >
    <span class="text-sm md:text-base font-semibold">{{ label }}</span>
    <font-awesome-icon :icon="['fas', 'greater-than']" />
  </RouterLink>
</template>

<script setup>
defineProps({
  to: String,   // Expected to be a string (e.g., "/audit")
  label: String // Expected to be a string (e.g., "IT Auditing")
});
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse,faGreaterThan);
defineExpose();  
</script>

<!-- <RouterLink
    :to="to"
    class="flex items-center justify-between border border-black w-full px-4 py-2 hover:bg-blue-400 hover:text-white mb-3"
  >
    <span class="text-sm md:text-base font-semibold">{{ label }}</span>
    <font-awesome-icon :icon="['fas', 'greater-than']" />
  </RouterLink> -->