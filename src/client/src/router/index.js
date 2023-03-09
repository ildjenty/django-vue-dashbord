import { createRouter, createWebHistory } from 'vue-router';
import BasicPage from '@/components/layout/BasicPage.vue';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

const routes = [
  {
    path: '/',
    component: BasicPage,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  },
];

export default createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});
