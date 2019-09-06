<template>
  <div>
    <div class="profile-image">
      <div class="hero container-fluid img-responsive">
        <img
          src="https://via.placeholder.com/300x300"
          alt="..."
          class="img-thumbnail profile position-relative"
        >
      </div>
    <!-- <img
        src="https://via.placeholder.com/1920x600"
        class="img-fluid hero"
        alt="Responsive image"
      > -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-image {
    .hero {
        background: url("https://via.placeholder.com/1920x600");
        height: 600px;
        .profile {
          transform: translate(-50%, -50%);
            left: 50%;
            top: 100%;

        }
    }
}
</style>
