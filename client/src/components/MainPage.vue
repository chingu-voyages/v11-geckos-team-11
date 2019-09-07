<template>
  <div>
    <Navigation />
    <Jumbotron />
    <WhyJoin />
    <Footer />
  </div>
</template>

<script>
import Navigation from './MainPage/Navigation.vue';
import Jumbotron from './MainPage/Jumbotron.vue';
import WhyJoin from './MainPage/WhyJoin.vue';
import Footer from './MainPage/Footer.vue';
export default {
  components: {
    Navigation,
    Jumbotron,
    WhyJoin,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
