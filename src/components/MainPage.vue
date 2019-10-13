<template>
  <div>
    <Jumbotron />
    <WhyJoin />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from './MainPage/Jumbotron.vue';
import WhyJoin from './MainPage/WhyJoin.vue';
import Footer from './MainPage/Footer.vue';
export default {
  components: {
    Jumbotron,
    WhyJoin,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
