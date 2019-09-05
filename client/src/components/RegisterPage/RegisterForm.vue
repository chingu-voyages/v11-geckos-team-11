<template>
  <div class="register-form">
    <div class="back-link">
      <a href="#">Go Back</a>
    </div>
    <div class="text-center">
      <h3 class="main-header">Great to have you.</h3>
      <h3 class="sub-header">Register. It's free.</h3>
      <form action="POST">
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user">icon</i></span>
          <input id="email" type="text" class="form-control" placeholder="Email">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-eye-close">icon</i></span>
          <input type="text" class="form-control" placeholder="Password">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-eye-close">icon</i></span>
          <input type="text" class="form-control" placeholder="Password Confirm">
        </div>
        <button id="submit" type="submit" class="btn btn-outline-success">Join Now</button>
      </form>
      <div class="login-text">
        Already registered?
        <a href="#">Log In Here</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.register-form {
  background-color: white;
  .back-link{
    margin: 25px;
  }
  .text-center{
      margin-top: 5%;
    .main-header {
      font-weight: 600;
    }
    .sub-header{
      margin: 1.5em;
      font-style: italic;
    }
    form {
      margin: auto;
      width: 45%;
      .input-group {
        .form-control {
          margin-bottom: 30px!important;
        }
      }
      button {
        padding: 6px 40px;
        margin: 25px 0;;
      }
    }
    .login-text {
      margin-bottom: 20px;
    }
  }
}
</style>
