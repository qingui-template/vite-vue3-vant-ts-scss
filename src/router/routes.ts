import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../views/home/index.vue') },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "404",
  //   component: () => import("../views/404/index.vue"),
  // },
]

export default routes
