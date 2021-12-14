<script setup lang="ts">
const props = defineProps({
  title: String,
  text: String,
  image: String,
});
</script>
<template>
  <div class="p-10">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="object-cover h-48 w-96"
        :src="'https://source.unsplash.com/random/?' + image"
        :alt="image"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
