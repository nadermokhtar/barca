<script setup lang="ts">
import births from '../data/births.json';
import immigrants_by_nationality from '../data/immigrants_by_nationality.json';
import life_expectancy from '../data/life_expectancy.json';
import most_frequent_baby_names from '../data/most_frequent_baby_names.json';
import most_frequent_names from '../data/most_frequent_names.json';
import population from '../data/population.json';
import { ref } from 'vue';

console.log(Object.keys(births[1]));
console.log(Object.keys(immigrants_by_nationality[1]));
console.log(Object.keys(life_expectancy[1]));
console.log(Object.keys(most_frequent_baby_names[1]));
console.log(Object.keys(most_frequent_names[1]));
console.log(Object.keys(population[1]));
const options = [
  'births',
  'immigrants_by_nationality',
  'life_expectancy',
  'most_frequent_baby_names',
  'most_frequent_names',
  'population',
];
const selected = ref('');
</script>
<template>
  <!-- <select class="form-control" v-model="selected" @change="selectDataSet">
    <option>Choose Province</option>
    <option v-for="option in options" v-bind:value="option.id">
      {{ option.name }}
    </option>
  </select> -->
</template>
