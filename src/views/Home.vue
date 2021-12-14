<script setup lang="ts">
import router from '../router';
const routes = router.getRoutes();
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center font-bold text-xl mb-2">
        Welcome to I love Barcelona
      </div>
      <img
        src="../assets/catalan_flag.png"
        style="width: 300px; height: 300px"
        class="mx-auto"
      />
      <div class="text-center text-gray-700 text-base">
        Barcelona is a great city, I wanted to share my love for the city and
        share some stats to encourage people to learn About it/ Explore it.
      </div>
      <div class="ml-10 flex items-baseline space-x-4 place-content-center">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          class="text-center text-blue-500"
          >{{ route.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>
