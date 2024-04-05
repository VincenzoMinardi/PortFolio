import { createRouter, createWebHistory } from "vue-router";
import informations from "./views/Informations.vue";
import Projects from "./views/Projects.vue";
import Contacts from "./views/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "informations",
      component: informations,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

export default router;
