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
  },
  {
    path: '/legal/impressum',
    name: 'Impressum',
    component: function () {
      return import(/* webpackChunkName: "Impressum" */ '../views/legal/Imprint.view.vue');
    }
  },
  {
    path: '/legal/datenschutz',
    name: 'Datenschutz',
    component: function () {
      return import(/* webpackChunkName: "Datenschutz" */ '../views/legal/Privacy.view.vue');
    }
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: function () {
      return import(/* webpackChunkName: "Datenschutz" */ '../views/Contact/Contact.view.vue');
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
