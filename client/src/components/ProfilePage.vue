<template>
  <div>
    <Navigation />
    <Hero />
    <UserName />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Hero from './ProfilePage/Hero.vue';
import UserName from './ProfilePage/UserName.vue';
export default {
  components: {
    Navigation,
    Hero,
    UserName,
  }
}
</script>

<style lang="scss" scoped>

</style>
