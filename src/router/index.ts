import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import DataDashboard from '../views/DataDashboard.vue';
import SoccerTeam from '../views/SoccerTeam.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/data-dashboard',
    name: 'Data Dashboard',
    component: DataDashboard,
  },
  {
    path: '/soccer-team',
    name: 'Soccer Team',
    component: SoccerTeam,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
