<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    toggleNavbar() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
<template>
  <nav class="color navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', { 'show': !collapsed }]" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link ms-1 text-md font-medium text-gray-200 md:ms-2">
            Home
          </router-link>
          <router-link to="/project" class="nav-link ms-1 text-md font-medium text-gray-200 md:ms-2">
            Progetti
          </router-link>
          <router-link to="/contacts" class="nav-link ms-1 text-md font-medium text-gray-200 md:ms-2">
            Contatti
          </router-link>
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
