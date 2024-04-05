<script>
import { RouterLink, RouterView } from 'vue-router';
import Informations from './views/Informations.vue';

export default {
  components: { Informations },

}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center p-1">
    <nav class="color d-flex align-items-center">
      <ul class="mt-2 d-flex align-items-center justify-content-center p-2">
        <li class="ms-2 text">
          <RouterLink to="/" class="text">
            <span class="text fs-5">Home</span>
            <img class="icons ms-2" src="/img/home.png" alt="" style="width: 35px; height: auto;">
          </RouterLink>
        </li>
        <li class="ms-2 text d-flex align-items-center">
          <RouterLink to="/projects" class="text">
            <span class="text fs-5">Progetti</span>
            <img class="icons ms-2" src="/img/cartel.png" alt="" style="width: 35px; height: auto;">
          </RouterLink>
        </li>
        <li class="ms-2 text">
          <RouterLink to="/contacts" class="text">
            <span class="text fs-5">Contatti</span>
            <img class="icons ms-2" src="/img/contacts.png" alt="" style="width: 35px; height: auto;">
          </RouterLink>
        </li>
      </ul>
    </nav>
    <router-link to="/">
      <img src="/img/computer.png" alt="" style="width: 50px; height: 50px;">
    </router-link>
  </header>
  <router-view />
</template>

<style scoped>
.text {
  list-style: none;
  text-decoration: none;
  color: white;
}

.icons {
  display: inline-block;
}

header {
  background-color: #1F2937;
}
</style>
