<template>
  <div id="post-page">
    <div class="header-text pt-5 text-center">
      <div class="h2 font-weight-bold">
        Welcome to the DevTribe Community
      </div>
      <div class="h5 font-weight-bold">
        Ask questions, share content, introduce yourself. Be nice!
      </div>
    </div>

    <Form />
    <Posts />
  </div>
</template>

<script>
import Form from './PostPage/Form.vue';
import Posts from './PostPage/Posts.vue';
export default {
  name: 'PostPage',
  components: {
    Form,
    Posts
  },
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
    padding: 0 20%;

}
</style>
