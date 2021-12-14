<script setup lang="ts">
import births from '../data/births.json';
import immigrants_by_nationality from '../data/immigrants_by_nationality.json';
import life_expectancy from '../data/life_expectancy.json';
import most_frequent_baby_names from '../data/most_frequent_baby_names.json';
import most_frequent_names from '../data/most_frequent_names.json';
import population from '../data/population.json';
import { ref } from 'vue';
import DropDown from '../components/DropDown.vue';
import DataTable from '../components/DataTable.vue';
const selected = ref(births);
const columnDefs = ref([Object.keys(births[1])]);
const rowData = ref([births]);

// const selectDataSet = (selected) => {
//   case selected.value === 'births':
//   columnDefs.value = Object.keys(births[1]);
//   rowData.value = eval(births);
//   break
//   case selected.value === 'immigrants_by_nationality':
// };

// const selectDataSet = () => {
//   console.log(selected.value);
// };

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
    name: 'population',
  },
];
const selectDataSet = () => {
  debugger;
  console.log('selected:');
  console.log(selected.value);
  console.log('columnDefs.value:');
  console.log(columnDefs.value);
  console.log('selected:');
  console.log(rowData.value);
};
</script>

<template>
  <select class="form-control" v-model="selected" @change="selectDataSet">
    <option>Choose a Data Set</option>
    <option v-for="option in options" v-bind:value="option.id">
      {{ option.name }}
    </option>
  </select>
  <DataTable :columnDefs="columnDefs" :rowData="rowData" />
</template>
