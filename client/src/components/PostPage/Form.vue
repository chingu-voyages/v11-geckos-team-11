<template>
  <div class="form">
    <form class="text-area text-center mt-5 mx-auto w-100">
      <div class="row">
        <div class="col-12">
          <textarea
            v-model="textarea"
            name="post-text"
            rows="6"
            class="w-100"
            placeholder="Create a post..."
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
import { mapState } from "vuex";
export default {
  name: 'Form',
  data() {
    return {
      textarea: ''

    }
  },
  watch: {
    textarea: function() {
      if (this.textarea !== '') {
        this.$store.commit('change');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-area {
    height: 300px;
    textarea {
        border: solid black 1px;
    }
    button {
        width: 120px;
    }
}
</style>
