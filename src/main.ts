import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';

const vue = createApp(App);
vue.use(router);
vue.mount('#app');
