import Vue from "vue";
import VueRouter from "vue-router"; // vueの本体と、Vueのライブラリをインポート
import Home from "../views/Home.vue";
import Addresses from "../views/Addresses.vue";

Vue.use(VueRouter); // useメソッドにrouterを渡して使用できるようにしている。

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/addresses',
    name: 'addresses',
    component: Addresses
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history", // pathの持ち方。historyは"/"など
  base: process.env.BASE_URL,
  routes
});

export default router;
