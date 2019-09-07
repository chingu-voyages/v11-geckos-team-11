<template>
  <div>
    <Navigation />
    <Hero class="border-bottom" />
    <UserName class="border-bottom" />
    <SkillsBio class="border-bottom" />
    <Experience class="border-bottom" />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Hero from './ProfilePage/Hero.vue';
import UserName from './ProfilePage/UserName.vue';
import SkillsBio from './ProfilePage/SkillsBio.vue';
import Experience from './ProfilePage/Experience.vue';
export default {
  components: {
    Navigation,
    Hero,
    UserName,
    SkillsBio,
    Experience,
  }
}
</script>

<style lang="scss" scoped>

</style>
