<template>
  <div class="dev-card w-75 mx-auto mt-5 border border-dark">
    <div class="row px-3 py-4">
      <div class="col-md-3 user mx-auto my-auto text-center">
        <img
          src="https://via.placeholder.com/250x200"
          class="img-fluid text-center"
          alt="user profile image"
        >
      </div>
      <div class="col-md-6">
        <div class="user-data mb-2">
          <div class="user-name h3">
            John Doe
          </div>
          <div class="user-role font-weight-bold h5">
            Senior Frontend Developer
          </div>
          <div class="user-location">
            <i class="pr-2 fas fa-map-marker-alt h3" />
            Hamburg, Germany
          </div>
          <button class="btn btn-outline-warning mt-2">
            View Profile
          </button>
        </div>
      </div>
      <div class="col-md-3">
        <ul class="user-skills">
          <li>
            <i class="fas fa-check-circle pr-2" />JavaScript
          </li>
          <li>
            <i class="fas fa-check-circle pr-2" />HTML
          </li>
          <li>
            <i class="fas fa-check-circle pr-2" />CSS
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevCards',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.dev-card {
  .user-skills {
    list-style-type: none;
    li {
      margin: 10% 0;
      i {
        font-size: 25px;
      }
    }
  }
}
</style>