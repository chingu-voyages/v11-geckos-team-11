<template>
  <div class="reset-page">
      <Navigation />
      <h1 class="my-5">This is the reset password webpage</h1>
      <Footer />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Footer from './MainPage/Footer.vue';
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.reset-page {
    background-color: #ffffff;
}
</style>
