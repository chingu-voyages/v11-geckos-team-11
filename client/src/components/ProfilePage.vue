<template>
  <div>
    <Navigation />
    <Hero />
    <UserName />
    <SkillsBio />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Hero from './ProfilePage/Hero.vue';
import UserName from './ProfilePage/UserName.vue';
import SkillsBio from './ProfilePage/SkillsBio.vue';
export default {
  components: {
    Navigation,
    Hero,
    UserName,
    SkillsBio
  }
}
</script>

<style lang="scss" scoped>

</style>
