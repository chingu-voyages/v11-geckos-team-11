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
                <a>{{ profile.user.email }}</a>
              </router-link>
            </p>
            <p>You have not yet setup a profile, please add some info</p>
            <router-link
              tag="a"
              to="/create-profile"
              class="btn btn-lg btn-info"
            >
              Create Profile
            </router-link>
          </div>
        </template>
        <template v-else>
          <div class="row">
            <div class="col-md-12 text-center mx-auto mt-4">
              <div class="mb-1">
                <h1>Dashboard</h1>
                <h3>Welcome back, {{ user.email }}</h3>
              </div>
              <div
                class="btn-group btn-grou-lg mt-5"
                role="group"
              >
                <button class="btn btn-outline-secondary mx-2">
                  Edit Profile
                </button>
                <button class="btn btn-outline-secondary mx-2">
                  Add Experience
                </button>
                <button class="btn btn-outline-secondary mx-2">
                  Add Education
                </button>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import Spinner from "./common/Spinner";
import Navigation from "./Navigation";
import { mapState } from "vuex";

export default {
  components: {
    Spinner,
    Navigation
  },
  computed: {
    ...mapState({
      profile: state => state.profile.profile,
      user: state => state.profile.profile.user,
      loading: state => state.profile.loading
    })
  },
  mounted() {
    this.$store.dispatch("getCurrentUserProfile");
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  background-color: white;

  .lead {
    color: black;
  }
}
</style>
