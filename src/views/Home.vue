<script setup lang="ts">
import dynamic_text from '../data/dynamic_text.json';
import ContentCard from '../components/ContentCard.vue';
</script>
<template>
  <div class="grid grid-cols-3 gap-4 place-content-center">
    <h2>Hello I love barcelona</h2>
    <p>
      Barcelona is a great city And I wanted to share my love for the city and
      some stats
    </p>

    <ContentCard
      v-for="card in dynamic_text.cards"
      :key="card.id"
      :title="card.title"
      :text="card.text"
    />
  </div>
</template>
