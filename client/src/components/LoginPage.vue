<template>
  <div class="login-form">
    <div class="back-link mx-5 mb-4 pt-5">
      <a
        class="mt-5"
        href="/"
      >Go Back</a>
    </div>
    <div class="text-center mx-5 my-5">
      <h3 class="main-header font-weight-bold">
        Great to see you back.
      </h3>
      <h3 class="sub-header mx-4 my-4">
        Sign In
      </h3>
      <form
        class="w-50 mx-auto form-group"
        @submit.prevent="loginUser"
      >
        <div class="input-group input-group-lg mb-4">
          <span class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope" />
            </span>
          </span>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Email"
          >
        </div>
        <div class="input-group input-group-lg mb-4">
          <span class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key" />
            </span>
          </span>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Password"
          >
        </div>
        <button
          id="submit"
          type="submit"
          class="btn btn-outline-success py-2 px-5 my-3"
        >
          Log In
        </button>
      </form>
      <div class="reset-text">
        <a href="/reset">I forgot my password</a>
      </div>
      <div class="register-text my-2">
        New to DevTribe?
        <a href="/register">Create account</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      console.log(this.email, this.password);
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.status === "success") {
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  height: 100vh;
  background-color: #ffffff;
}
</style>
