import { createRouter, createWebHistory } from "vue-router";

const login = () => import("../views/Login.vue");

const routes = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
