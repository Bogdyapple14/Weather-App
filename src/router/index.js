import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favourite from "../views/Favourite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/favourite",
    name: "Favourite",
    component: Favourite
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
