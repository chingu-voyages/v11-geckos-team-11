<template>
  <div id="post-page">
    <div class="header-text pt-5 text-center">
      <div class="h2 font-weight-bold">
        Welcome to the DevTribe Community
      </div>
      <div class="h5 font-weight-bold">
        Ask question, share content, introduce yourself. Be nice!
      </div>
    </div>

    <form class="text-area text-center mt-5 w-75 mx-auto">
      <row>
        <div class="col">
          <textarea
            name="post-text"
            rows="6"
            class="w-100"
          />
        </div>
        <div class="col text-left">
          <button
            type="button"
            class="btn btn-outline-dark"
          >
            Send
          </button>
        </div>
      </row>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#post-page {
    background-color: #ffffff;
    height: 100%;

    .text-area {
        height: 300px;
        button {
            width: 120px;
        }
    }
}
</style>
