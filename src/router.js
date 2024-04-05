import { createRouter, createWebHistory } from "vue-router";
import Information from "./views/Information.vue";
import Project from "./views/Project.vue";
import Contacts from "./views/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "information",
      component: Information,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

export default router;
