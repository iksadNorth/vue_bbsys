<template>
  <insta_header />
  <router-view />
  <insta_footer />
</template>

<script>
import insta_header from './components/Header.vue'
import insta_footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
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
