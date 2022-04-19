<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MainMenu />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainMenu from './components/Header/MainMenu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
