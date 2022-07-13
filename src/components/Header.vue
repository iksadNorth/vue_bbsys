<template>
  <div class="container">
    <div class="col"></div>
    <div class="col">
      <a href=""><img src="../assets/logo.png" alt=""></a>
    </div>
    <div class="col">
      <input type="검색">
    </div>
    <div class="col">
      <button><img src="../assets/icon_home.png" alt=""></button>
      <button><img src="../assets/icon_fly.png" alt=""></button>
      <button><img src="../assets/icon_plus.png" alt=""></button>
      <button><img src="../assets/icon_compass.png" alt=""></button>
      <button><img src="../assets/icon_heart.png" alt=""></button>
      <button><img src="../assets/icon_account.png" alt=""></button>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
export default {
    name: 'insta_header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
  }
  .container > .col {
    flex: 1;
    margin: auto;
  }
</style>
