/*
 * @Author: your name
 * @Date: 2021-09-06 14:34:12
 * @LastEditTime: 2021-09-26 14:12:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eVSM-Viewer\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    redirect: "/view",
  },
  {
    path: "/view",
    name: "view",
    component: () =>
      import(/* : 'SaveView' */ "../views/viewDemo.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});
router.$addRoutes = (params) => {
  router.matcher = new VueRouter({
    routes,
  }).matcher;
  router.matcher.addRoutes(params);
};
export default router;
