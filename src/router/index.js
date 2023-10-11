import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: function () {
      return import(/* webpackChunkName: "homepage" */ "../views/Homepage.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
