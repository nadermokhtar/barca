<script setup lang="ts">
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import births from '../data/births.json';
import immigrants_by_nationality from '../data/immigrants_by_nationality.json';
import life_expectancy from '../data/life_expectancy.json';
import most_frequent_baby_names from '../data/most_frequent_baby_names.json';
import most_frequent_names from '../data/most_frequent_names.json';
import population from '../data/population.json';
import { AgGridVue } from 'ag-grid-vue3';
const props = defineProps({
  columnDefs: Array,
  rowData: Array,
});
// const columnDefs = [
//   { field: 'make', sortable: true, filter: true },
//   { field: 'model', sortable: true, filter: true },
//   { field: 'price', sortable: true, filter: true },
// ];
// const rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxter', price: 72000 },
// ];
</script>
<template>
  <ag-grid-vue
    style="width: 500px; height: 500px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>
<style lang="scss">
@import '../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
@import '../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';
</style>
