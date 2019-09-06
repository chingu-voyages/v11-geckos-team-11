<template>
  <div>
    <div class="profile-image">
      <img
        src="https://via.placeholder.com/1920x600"
        class="img-fluid hero"
        alt="Responsive image"
      >
      <img
        src="https://via.placeholder.com/450x450"
        alt="..."
        class="img-thumbnail profile position-absolute"
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-image {
    .hero {}
    .profile {
        top: 40%;
        left: 50%;
        transform: translate(-50%, 0);

    }
}
</style>
