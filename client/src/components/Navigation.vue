<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a
      class="navbar-brand"
      href="#"
    >DevTribe</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNavAltMarkup"
      class="collapse navbar-collapse justify-content-end"
    >
      <div class="navbar-nav">
        <a
          class="nav-item nav-link mx-3"
          href="#"
        >Browse Devs</a>

        <a
          v-if="!isLoggedIn"
          class="nav-item nav-link mx-3"
          href="/login"
        >Login</a>
        <a
          v-if="!isLoggedIn"
          href="/register"
          class="btn btn-outline-success mx-3 px-4"
          role="button"
        >Join</a>
        <a
          v-if="isLoggedIn"
          href="/posts"
          class="nav-item nav-link mx-3"
          role="button"
        >Posts</a>
        <a
          v-if="isLoggedIn"
          href="/dashboard"
          class="nav-item nav-link mx-3"
          role="button"
        >Dashboard</a>
        <a
          v-if="isLoggedIn"
          href="/dashboard"
          class="btn btn-outline-danger mx-3 px-4"
          role="button"
          @click.prevent="logoutUser"
        >Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #424242 !important;
  a {
    font-size: 20px;
  }
  .navbar-brand {
    font-size: 20px;
  }
}
</style>
