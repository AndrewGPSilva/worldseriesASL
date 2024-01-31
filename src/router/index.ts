import { createRouter, createWebHistory } from "vue-router";
import Guide from "../views/Guide.vue";
import NotFound from "../views/NotFound.vue";
import Anime from "../views/Anime.vue";
import Blog from "../views/Blog.vue";
import Community from "../views/Community.vue";
import Faq from "../views/Faq.vue";
import Serie from "../views/Serie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Guide",
      component: Guide,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/anime",
      name: "Anime",
      component: Anime
    },
    {
      path: "/serie",
      name: "Serie",
      component: Serie
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/community",
      name: "Community",
      component: Community
    }
  ],
});

export default router;