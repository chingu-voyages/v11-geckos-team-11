<template>
  <div id="app">
    <div class="container">
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
    background-color: #161618;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    .container {
        max-width: 1920px;
        padding: 0 0;
        margin: 0 auto;
    }
}
</style>
