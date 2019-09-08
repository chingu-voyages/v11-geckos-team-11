<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">DevTribe</a>
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
    <div id="navbarNavAltMarkup" class="collapse navbar-collapse justify-content-end">
      <div class="navbar-nav">
        <a class="nav-item nav-link mx-3" href="#">Browse Devs</a>

        <a class="nav-item nav-link mx-3" href="/login" v-if="!isLoggedIn">Login</a>
        <a
          href="/register"
          class="btn btn-outline-success mx-3 px-4"
          role="button"
          v-if="!isLoggedIn"
        >Join</a>
        <a href="/posts" class="nav-item nav-link mx-3" role="button" v-if="isLoggedIn">Posts</a>
        <a
          href="/dashboard"
          class="nav-item nav-link mx-3"
          role="button"
          v-if="isLoggedIn"
        >Dashboard</a>
        <a
          href="/dashboard"
          class="btn btn-outline-danger mx-3 px-4"
          role="button"
          v-if="isLoggedIn"
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
