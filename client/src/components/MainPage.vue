<template>
  <div>
    <Navigation />
    <Jumbotron />
    <WhyJoin />
  </div>
</template>

<script>
import Navigation from './MainPage/Navigation.vue';
import Jumbotron from './MainPage/Jumbotron.vue';
import WhyJoin from './MainPage/WhyJoin.vue';
export default {
  components: {
    Navigation,
    Jumbotron,
    WhyJoin

  }
}
</script>

<style lang="scss" scoped>
</style>
