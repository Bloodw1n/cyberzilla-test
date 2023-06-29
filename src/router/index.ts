import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Users from '../components/UsersList.vue';
import Payments from '../components/PaymentList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
