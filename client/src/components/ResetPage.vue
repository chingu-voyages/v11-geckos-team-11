<template>
  <div class="reset-page">
    <div class="back-link mx-5 mb-4 pt-5">
      <a
        class="mt-5"
        href="/"
      >
        Go Back
      </a>
    </div>
    <div class="text-center mx-5 my-5">
      <h3 class="main-header font-weight-bold">
        Recover your password
      </h3>
      <div class="reset-main-text text-center mb-4">
        Enter the email address that you used to register. 
        You'll get an email with a link to reset your password.
      </div>
      <form
        class="w-50 mx-auto form-group"
        @submit.prevent="resetPassword"
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
        <button 
          id="submit" 
          type="submit" 
          class="btn btn-outline-success py-2 px-5 my-3"
        >
          Reset Password
        </button>
      </form>
      <div class="reset-help">
        If you still need help, contact our 
        <a href="#">Support</a>.
      </div>
    </div>
  </div>
</template>

<script>

export default {}

</script>

<style lang="scss" scoped>
.reset-page {
    background-color: #ffffff;
    .reset-main-text {
        font-size: smaller;
    }
}
</style>
