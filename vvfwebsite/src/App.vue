<template>
  <Navbar />
  <Background />
  <router-view />
</template>

<script>
import Navbar from './components/navbar.vue'
import Background from './components/background.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Background
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
