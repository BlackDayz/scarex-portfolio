import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: function () {
      return import(/* webpackChunkName: "homepage" */ '../views/Homepage.view.vue');
    },
  },
  {
    path: '/clients/:name',
    name: 'Client',
    component: function () {
      return import(/* webpackChunkName: "client" */ '../views/Client-Details/Client-Details.view.vue');
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
