<template>
  <div id="app">
    <div class="container-fluid">
      <MainPage />
    </div>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    .container-fluid {
        height: 100vh;
        width: 100vw;
        padding: 0 0;
        margin: 0 0;
    }
}
</style>
