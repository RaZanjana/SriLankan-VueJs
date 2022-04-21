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
      /* Scrollbar Styling */
::-webkit-scrollbar {
    width: 10px;
    overflow: scroll !important;
}
 
::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0, 136, 221, .3);
}
</style>
