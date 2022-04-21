<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MainMenu />
  <!-- <PreLoader /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 import MainMenu from './components/Header/MainMenu.vue'
// import PreLoader from './components/PreLoader/PreLoader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
     MainMenu
    // PreLoader
  }
}
</script>

<style>
#app {
  font-family: Poppins,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
