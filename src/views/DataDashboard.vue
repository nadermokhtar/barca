<script setup lang="ts">
import births from '../data/births.json';
import { ref } from 'vue';

import DataTable from '../components/DataTable.vue';
const selected = ref(1);
const columnDefs = ref([...Object.keys(births[1])]);
const rowData = ref([...births]);

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
  console.log(columnDefs._rawValue.typeOf());
  console.log('selected:');
  console.log(rowData._rawValue.typeOf());
};
</script>

<template>
  <select class="form-control" v-model="selected" @change="selectDataSet">
    <option>Choose a Data Set</option>
    <option v-for="option in options" v-bind:value="option.id">
      {{ option.name }}
    </option>
  </select>
  <DataTable :columnDefs="columnDefs._rawValue" :rowData="rowData._rawValue" />
</template>
