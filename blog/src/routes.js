import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Footer.vue";
// import AboutView from "./AboutView.vue";

const routes = [
  { path: "/", component: Home },
  //   { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
