import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import DataDashboard from '../views/DataDashboard.vue';
import SoccerTeam from '../views/SoccerTeam.vue';
import WhyILove from '../views/WhyILove.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/why-i-love',
    name: 'Why I Love',
    component: WhyILove,
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
