<template>
  <div>
    <Navigation />
    <div class="dashboard">
      <template v-if="profile === 'null' || loading">
        <Spinner />
      </template>
      <template v-else>
        <template v-if="profile && Object.keys(profile).length < 1 ">
          <div>
            <p class="lead text-muted">
              Welcome
              <router-link to="/profile">
                <a>{{ user.email }}</a>
              </router-link>
            </p>
            <p>You have not yet setup a profile, please add some info</p>
            <router-link tag="a" to="/create-profile" class="btn btn-lg btn-info">Create Profile</router-link>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import Spinner from "./common/Spinner";
import Navigation from "./Navigation";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Spinner,
    Navigation
  },
  computed: {
    ...mapState(["profile", "loading", "user"])
  },
  mounted() {
    this.$store.dispatch("getCurrentUserProfile");
  }
};
</script>

<style lang="scss" scoped>
</style>
