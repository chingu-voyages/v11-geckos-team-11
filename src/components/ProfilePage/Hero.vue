<template>
  <div class="hero-image">
    <img
      src="https://via.placeholder.com/1920x600"
      class="img-fluid"
      alt="Responsive image"
    >
    <img
      src="https://via.placeholder.com/300x300"
      alt="..."
      class="img-thumbnail profile position-relative"
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero-image {
    margin-bottom: -80px;
    background-color: #ffffff;
    .profile {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 100%;

    }
}
</style>
