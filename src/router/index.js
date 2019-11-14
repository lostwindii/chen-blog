import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/sport",
    name: "sport",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sport.vue")
  },
  {
    path: "/movie",
    name: "movie",
    component: () =>
        import("../views/Movie.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
