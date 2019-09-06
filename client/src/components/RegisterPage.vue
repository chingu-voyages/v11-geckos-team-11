<template>
  <div class="register-form">
    <div class="back-link mx-5 mb-4 pt-5">
      <a href="/">Go Back</a>
    </div>
    <div class="text-center mx-5 my-5">
      <h3 class="main-header font-weight-bold">
        Great to have you.
      </h3>
      <h3 class="sub-header mx-4 my-5 font-italic">
        Register. It's free.
      </h3>
      <!-- <div class="form-group">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
              </div>
            <input type="email" class="form-control" placeholder="Email">
          </div>
        </div> -->
      <form
        action="POST"
        class="w-50 mx-auto form-group"
      >
      <div class="input-group input-group-lg mb-4">
        <span class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </span>
        <input
          id="email"
          type="text"
          class="form-control"
          placeholder="Email"
        >
      </div>
      <div class="input-group input-group-lg mb-4">
        <span class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-key"></i></span>
        </span>
        <input
          id="password"
          type="text"
          class="form-control"
          placeholder="Password"
        >
      </div>
      <div class="input-group input-group-lg mb-4">
        <span class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-key"></i></span>
        </span>
        <input
          id="email"
          type="passwordconf"
          class="form-control"
          placeholder="Password Confirm"
        >
      </div>
        <button
          id="submit"
          type="submit"
          class="btn btn-outline-success py-2 px-5 my-3"
        >
          Join Now
        </button>
      </form>
      <div class="login-text mb-3">
        Already registered?
        <a href="/login">Log In Here</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.register-form {
    height: 100vh;
    background-color: #ffffff;
}
</style>
