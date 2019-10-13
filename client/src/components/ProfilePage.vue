<template>
  <div>
    <template v-if="profile === 'null' || loading">
      <Spinner />
    </template>
    <Hero class="border-bottom" />
    <UserName
      v-if="profile"
      :user="profile.user"
      class="border-bottom"
    />
    <SkillsBio
      v-if="profile"
      :skills="profile.skills"
      :bio="profile.bio"
      class="border-bottom"
    />
    <Experience
      v-if="profile"
      :experience="profile.experience"
      class="border-bottom"
      @delete="deleteExperience"
    />
    <Education
      v-if="profile"
      :education="profile.education"
      class="border-bottom"
      @delete="deleteEducation"
    />
    <Projects
      :repos="repos"
      class="border-bottom"
    />
  </div>
</template>

<script>
import Spinner from "./common/Spinner";
import Hero from "./ProfilePage/Hero.vue";
import UserName from "./ProfilePage/UserName.vue";
import SkillsBio from "./ProfilePage/SkillsBio.vue";
import Experience from "./ProfilePage/Experience.vue";
import Education from "./ProfilePage/Education.vue";
import Projects from "./ProfilePage/Projects.vue";
import { mapState } from "vuex";
export default {
  components: {
    Spinner,
    Hero,
    UserName,
    SkillsBio,
    Experience,
    Education,
    Projects
  },
  computed: {
    ...mapState({
      profile: state => state.profile.profile,
      user: state => state.profile.profile.user,
      repos: state => state.profile.repos,
      loading: state => state.profile.loading
    })
  },
  created() {
    this.$store.dispatch("getCurrentUserProfile").then(() => {
      this.$store.dispatch("getGithubRepos", this.profile.githubusername);
    });
  },
  methods: {
    deleteExperience(id) {
      this.$store.dispatch("deleteExperience", id);
    },
    deleteEducation(id) {
      this.$store.dispatch("deleteEducation", id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
