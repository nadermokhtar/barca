<script setup lang="ts">
const props = defineProps({
  title: String,
  text: String,
});
console.log(props);
</script>
<template>
  <div class="p-10">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        :src="'https://source.unsplash.com/random/?' + title"
        :alt="title"
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
