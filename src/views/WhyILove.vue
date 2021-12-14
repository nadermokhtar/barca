<script setup lang="ts">
import dynamic_text from '../data/dynamic_text.json';
import ContentCard from '../components/ContentCard.vue';
</script>
<template>
  <div>
    <div class="font-bold text-xl mb-2">
      Some of the Reasons I love Barcelona
    </div>
    <div class="container mx-auto grid grid-cols-3 gap-2">
      <ContentCard
        v-for="card in dynamic_text.cards"
        :key="card.id"
        :title="card.title"
        :text="card.text"
        :image="card.image"
      />
    </div>
  </div>
</template>
