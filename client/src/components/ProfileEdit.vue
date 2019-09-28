<template>
  <div class="profile-edit">
    <div class="h2 text-center pt-5 mb-5">
      Hi {{ userName }}, Edit your DevTribe Profile
    </div>
    <form class="w-50 mx-auto">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span
            id="inputGroupFileAddon01"
            class="input-group-text"
          >Profile Image</span>
        </div>
        <div class="custom-file">
          <input
            id="inputGroupFile01"
            type="file"
            class="custom-file-input"
            aria-describedby="inputGroupFileAddon01"
          >
          <label
            class="custom-file-label"
            for="inputGroupFile01"
          >Choose file</label>
        </div>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Professional Status:</label>
        <select
          id="exampleFormControlSelect1"
          class="form-control"
        >
          <option>profession 1</option>
          <option>profession 2</option>
          <option>profession 3</option>
          <option>profession 4</option>
          <option>profession 5</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Company:</label>
        <input
          id="exampleFormControlInput1"
          type="email"
          class="form-control"
          placeholder="DevTribe"
        >
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Webiste or Portfolio:</label>
        <input
          id="exampleFormControlInput1"
          type="email"
          class="form-control"
          placeholder="john-doe.com"
        >
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Location:</label>
        <input
          id="exampleFormControlInput1"
          type="email"
          class="form-control"
        >
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Skillset:</label>
        <input
          id="exampleFormControlInput1"
          type="email"
          class="form-control"
          placeholder="E.g. Javascript, CSS, HTML (Seperate by comma)"
        >
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">GitHub Username:</label>
        <input
          id="exampleFormControlInput1"
          type="email"
          class="form-control"
        >
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">About You:</label>
        <textarea
          id="exampleFormControlTextarea1"
          class="form-control"
          rows="3"
        />
      </div>

      <div class="form-group mx-auto w-50">
        <label for="exampleFormControlInput1">Social Media Links:</label>

        <div class="social-media d-flex">
          <i class="fab fa-twitter h2" />
          <input
            id="exampleFormControlInput1"
            class="form-control mb-2"
          >
        </div>

        <div class="social-media d-flex">
          <i class="fab fa-twitter h2" />
          <input
            id="exampleFormControlInput1"
            class="form-control mb-2"
          >
        </div>
        <div class="social-media d-flex">
          <i class="fab fa-twitter h2" />
          <input
            id="exampleFormControlInput1"
            class="form-control mb-2"
          >
        </div>
        <div class="social-media d-flex">
          <i class="fab fa-twitter h2" />
          <input
            id="exampleFormControlInput1"
            class="form-control mb-2"
          >
        </div>
        <div class="social-media d-flex">
          <i class="fab fa-twitter h2" />
          <input
            id="exampleFormControlInput1"
            class="form-control mb-2"
          >
        </div>
      </div>
      <button class="btn btn-success mt-2">
        Save Changes
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfileEdit',
  data() {
    return {
      userName: 'John Doe'
    };
  }
};
</script>

<style lang="scss" scoped>
.profile-edit {
  background-color: #ffffff;
  height: 100%;
  padding: 0 20%;
  .social-media {
    i {
      left: -40px;
      position: relative;
      margin-right: -32px;
    }
  }
}
</style>