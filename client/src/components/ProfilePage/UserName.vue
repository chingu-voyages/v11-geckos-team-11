<template>
  <div class="user-name text-center">
    <div class="h3">
      John Doe
    </div>
    <div class="h4 font-weight-bold">
      Senior Frontend Developer
    </div>
    <div class="icon-location">
      <i class="pr-2 fas fa-map-marker-alt" />
      <div class="h5">
        Hamburg, Germany
      </div>
    </div>
    <!-- ONLY IF EXISTS -->
    <div class="user-link">
      <a href="#">www.johndoe.com</a>
    </div>
    <!-- ONLY IF EXISTS -->
    <div class="social-media-icons">
      <!-- icons -->
    </div>
    <!-- ONLY IF CURRENT USER MATCHES THE PROFILE -->
    <button
      type="button"
      class="btn btn btn-outline-warning text-uppercase mt-3"
    >
      Edit Profile
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.user-name {
    height: 400px;
    background-color: #ffffff;
    .icon-location {
        display: -webkit-inline-box;
        i {
            font-size: 22px;
        }
    }
    .user-link {
      a {
        text-decoration: underline;
      }
    }
}
</style>
