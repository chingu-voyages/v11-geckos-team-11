<template>
  <div>
    <Navigation />
    <div class="dashboard">
      <template v-if="profile === 'null' || loading">
        <Spinner />
      </template>
      <template v-else>
        <template v-if="profile && Object.keys(profile).length < 1 ">
          <div class="container">
            <p class="lead text-muted">
              Welcome
              <router-link to="/profile">
                <a>{{ profile.user.email }}</a>
              </router-link>
            </p>
            <p>You have not yet setup a profile, please add some info</p>
            <router-link tag="a" to="/create-profile" class="btn btn-lg btn-info">Create Profile</router-link>
          </div>
        </template>
        <template v-else>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center mx-auto mt-4">
                <div class="mb-1">
                  <h1>Dashboard</h1>
                  <h3>Welcome back, {{ user.email }}</h3>
                </div>
                <div class="btn-group btn-grou-lg mt-5" role="group">
                  <router-link to="/edit-profile" class="btn btn-outline-secondary mr-2" tag="a">
                    <i class="fas fa-user-circle text-info mr-1"></i> Edit Profile
                  </router-link>
                  <router-link to="/add-experience" class="btn btn-outline-secondary mr-2" tag="a">
                    <i class="fas fa-user-tie text-info mr-1"></i> Add Experience
                  </router-link>
                  <router-link to="/add-education" class="btn btn-outline-secondary mr-2" tag="a">
                    <i class="fas fa-graduation-cap text-info mr-1"></i> Add Education
                  </router-link>
                </div>

                <!-- Experience -->
                <template>
                  <div class="container">
                    <div class="experience">
                      <h4>Experience Credentials</h4>
                      <table v-if="profile.experience.length > 0" class="table">
                        <thead>
                          <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Years</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(experience) in profile.experience" :key="experience._id">
                            <td>{{ experience.company }}</td>
                            <td>{{ experience.title }}</td>
                            <td>
                              {{ experience.from }} -
                              <span>{{ !experience.to ? " Now" : ' ' + experience.to }}</span>
                            </td>
                            <td>
                              <button
                                class="btn btn-danger"
                                @click.prevent="deleteExperience(experience._id)"
                              >Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div v-else>
                        <p>No Experience Yet</p>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- Education -->
                <template>
                  <div class="container">
                    <div class="experience">
                      <h4>Education Credentials</h4>
                      <table v-if="profile.education.length > 0" class="table">
                        <thead>
                          <tr>
                            <th>School</th>
                            <th>Field of Study</th>
                            <th>Degree</th>
                            <th>Years</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(education) in profile.education" :key="education._id">
                            <td>{{ education.school }}</td>
                            <td>{{ education.fieldofstudy }}</td>
                            <td>{{ education.degree }}</td>
                            <td>
                              {{ education.from }} -
                              <span>{{ !education.to ? " Now" : ' ' + education.to }}</span>
                            </td>
                            <td>
                              <button
                                class="btn btn-danger"
                                @click.prevent="deleteEducation(education._id)"
                              >Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div v-else>
                        <p>No Education Credentials Yet</p>
                      </div>
                    </div>
                  </div>
                </template>
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
  methods: {
    deleteExperience(id) {
      this.$store.dispatch("deleteExperience", id);
    },
    deleteEducation(id) {
      this.$store.dispatch("deleteEducation", id);
    }
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

  .experience {
    max-width: 970px;
    margin: 40px auto;
    text-align: left;
  }
}
</style>
