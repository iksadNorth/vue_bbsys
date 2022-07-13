<template>
  <insta_header />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <insta_footer />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import insta_header from './components/Header.vue'
import insta_footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    insta_header,
    insta_footer,
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
  margin-top: 60px;
}
</style>
