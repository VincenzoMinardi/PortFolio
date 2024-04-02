<script>
import NavBar from './components/NavBar.vue';
import Information from './components/Information.vue';
import Skills from './components/Skills.vue';
import Project from './components/Project.vue'


export default {
  components: {
    NavBar,
    Information,
    Skills,
    Project,
  }
}
</script>

<template>
  <NavBar />
  <Information />
  <Skills />
  <Project />
</template>

<style scoped></style>
