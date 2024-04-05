<script>
import { RouterLink, RouterView } from 'vue-router';
import Information from './views/Information.vue';

export default {
  components: { Information },

}
</script>

<template>
  <nav class="color navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link ms-1 text-md font-medium text-gray-200 md:ms-2">
            Home
          </RouterLink>
          <RouterLink to="/project" class="nav-link ms-1 text-md font-medium text-gray-200 md:ms-2">
            Progetti
          </RouterLink>
          <RouterLink to="/contacts" class="nav-link ms-1 text-md font-medium text-gray-200 md:ms-2">
            Contatti
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
