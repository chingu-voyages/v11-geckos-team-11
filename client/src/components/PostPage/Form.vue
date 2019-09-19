<template>
  <div id="form">
    <form class="text-area text-center mt-5 mx-auto w-100">
      <div class="row">
        <div class="col-12">
          <textarea
            name="post-text"
            rows="6"
            class="w-100"
          />
        </div>
        <div class="col text-left">
          <button
            type="button"
            class="btn btn-outline-primary"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.text-area {
    height: 300px;

    button {
        width: 120px;
    }
}
</style>
