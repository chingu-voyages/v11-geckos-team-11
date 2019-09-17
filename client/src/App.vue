<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import LoginPage from "./components/LoginPage.vue";
import axios from "axios";
export default {
  name: "App",
  components: {}
  // This checks for all unauthorized responses (HTTP 401) and if so, dispatches a logout
  // created: function() {
  //   axios.interceptors.response.use(undefined, function(err) {
  //     return new Promise(function(resolve, reject) {
  //       if (err.status === 401) {
  //         this.$store.dispatch("logout");
  //       }
  //       throw err;
  //     });
  //   });
  // }
};
</script>

<style lang="scss">
#app {
  background-color: #161618;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  .container {
    max-width: 1920px;
    padding: 0;
    margin: 0 auto;
  }
}
</style>
