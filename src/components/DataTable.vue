<script setup lang="ts">
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridVue } from 'ag-grid-vue3';
const columnDefs = [
  { field: 'make', sortable: true, filter: true },
  { field: 'model', sortable: true, filter: true },
  { field: 'price', sortable: true, filter: true },
];
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
];
</script>
<template>
  <div>Data Dashboard</div>
  <img src="../assets/fcb_logo_PNG25.png" />

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
