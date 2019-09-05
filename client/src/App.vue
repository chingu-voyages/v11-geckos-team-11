<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
#app {
    background-color: #161618;
    height: 100%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    .container {
        max-width: 1920px;
        padding: 0;
        margin: 0 auto;
    }
}
</style>
