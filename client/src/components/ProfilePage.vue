<template>
  <div>
    <Navigation />
    <Hero class="border-bottom" />
    <UserName class="border-bottom" />
    <SkillsBio class="border-bottom" />
    <Experience class="border-bottom" />
    <Education class="border-bottom" />
    <Projects class="border-bottom" />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Hero from './ProfilePage/Hero.vue';
import UserName from './ProfilePage/UserName.vue';
import SkillsBio from './ProfilePage/SkillsBio.vue';
import Experience from './ProfilePage/Experience.vue';
import Education from './ProfilePage/Education.vue';
import Projects from './ProfilePage/Projects.vue';
export default {
  components: {
    Navigation,
    Hero,
    UserName,
    SkillsBio,
    Experience,
    Education,
    Projects
  }
}
</script>

<style lang="scss" scoped>

</style>
