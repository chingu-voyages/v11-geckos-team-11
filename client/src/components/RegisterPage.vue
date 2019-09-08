<template>
  <div class="register-form">
    <div class="back-link mx-5 mb-4 pt-5">
      <a href="/">Go Back</a>
    </div>
    <div class="text-center mx-5 my-5">
      <h3 class="main-header font-weight-bold">Great to have you.</h3>
      <h3 class="sub-header mx-4 my-5 font-italic">Register. It's free.</h3>
      <!-- <div class="form-group">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
              </div>
            <input type="email" class="form-control" placeholder="Email">
          </div>
      </div>-->
      <form @submit.prevent="registerUser" class="w-50 mx-auto form-group">
        <div class="input-group input-group-lg mb-4">
          <span class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope" />
            </span>
          </span>
          <input
            id="email"
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
            required
          />
        </div>
        <div class="input-group input-group-lg mb-4">
          <span class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key" />
            </span>
          </span>
          <input
            id="password"
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="input-group input-group-lg mb-4">
          <span class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key" />
            </span>
          </span>
          <input
            id="passwordConfirm"
            type="password"
            class="form-control"
            placeholder="Password Confirm"
            v-model="passwordConfirm"
            required
          />
        </div>
        <button id="submit" type="submit" class="btn btn-outline-success py-2 px-5 my-3">Join Now</button>
      </form>
      <div class="login-text mb-3">
        Already registered?
        <a href="/login">Log In Here</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    registerUser() {
      console.log(this.email, this.password, this.passwordConfirm);
    }
  }
};
</script>

<style lang="scss" scoped>
.register-form {
  height: 100vh;
  background-color: #ffffff;
}
</style>
