<template>
  <div class="login-form">
    <div class="back-link mx-5 my-4">
      <a href="/">Go Back</a>
    </div>
    <div class="text-center mx-5 my-5">
      <h3 class="main-header font-weight-bold">
        Great to see you back.
      </h3>
      <h3 class="sub-header mx-4 my-4">
        Sign In
      </h3>
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
        <button
          id="submit"
          type="submit"
          class="btn btn-outline-success py-2 px-5 my-3"
        >
          Log In
        </button>
      </form>
      <div class="register-text mb-3">
        New to DevTribe?
        <a href="/register">Create account</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login-form {
    background-color: #ffffff;
}
</style>
