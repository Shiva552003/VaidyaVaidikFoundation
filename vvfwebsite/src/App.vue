<template>
  <Navbar />
  <Home msg="Nothing"/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
import Home from './components/home.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Home
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
