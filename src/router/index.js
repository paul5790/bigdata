import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/SelectOnData.vue"),
  },
  {
    path: "/third",
    name: "third",
    component: () => import("../views/SelectArrayData.vue"),
  },
  {
    path: "/googlemap",
    name: "googlemap",
    component: () => import("../views/GoogleMap.vue"),
  },
  {
    path: "/datatable",
    name: "datatable",
    component: () => import("../views/DataTable.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
