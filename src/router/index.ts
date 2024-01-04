import { createRouter, createWebHistory } from "vue-router";
import Guide from "../views/Guide.vue";
import Dashboard from "../views/Dashboard.vue";
import Series from "../views/Series.vue";
import InfoSeries from "../views/InfoSeries.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Guide",
      component: Guide,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/series",
      name: "Series",
      component: Series,
    },
    {
      path: "/series/:id",
      name: "InfoSeries",
      component: InfoSeries,
    }
  ],
});

export default router;