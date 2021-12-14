<script setup lang="ts">
import births from '../data/births.json';
import immigrants_by_nationality from '../data/immigrants_by_nationality.json';
import life_expectancy from '../data/life_expectancy.json';
import most_frequent_baby_names from '../data/most_frequent_baby_names.json';
import most_frequent_names from '../data/most_frequent_names.json';
import population from '../data/population.json';
import { ref } from 'vue';

// console.log(Object.keys(births[1]));
// console.log(Object.keys(immigrants_by_nationality[1]));
// console.log(Object.keys(life_expectancy[1]));
// console.log(Object.keys(most_frequent_baby_names[1]));
// console.log(Object.keys(most_frequent_names[1]));
// console.log(Object.keys(population[1]));
const options = [
  { id: 1, name: 'births' },
  {
    id: 2,
    name: 'immigrants_by_nationality',
  },
  {
    id: 3,
    name: 'life_expectancy',
  },
  {
    id: 4,
    name: 'most_frequent_baby_names',
  },
  {
    id: 5,
    name: 'most_frequent_names',
  },
  {
    id: 6,
    name: 'population',
  },
];
// const selected = ref('');
const props = defineProps({
  selected: String,
});
const selectDataSet = (e) => {
  selected.value = e.target.value;
};
</script>
<template>
  <select class="form-control" v-model="selected" @change="selectDataSet">
    <option>Choose a Data Set</option>
    <option v-for="option in options" v-bind:value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>
