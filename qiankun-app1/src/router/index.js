import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

console.log(qiankunWindow.__POWERED_BY_QIANKUN__)

let router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/app-vue3/" : "/"
  ),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
