<template>
  <div class="post-page">
    <div class="header-text pt-5 text-center">
      <div class="h2 font-weight-bold">
        Welcome to the DevTribe Community
      </div>
      <div class="h5 font-weight-bold">
        Ask questions, share content, introduce yourself. Be nice!
      </div>
    </div>
    <TextareaForm />
    <Posts
      :btn-text="btnText"
    />
  </div>
</template>

<script>
import TextareaForm from './PostPage/TextareaForm.vue';
import Posts from './PostPage/Posts.vue';
export default {
  name: 'PostPage',
  components: {
    TextareaForm,
    Posts
  },
  data() {
    return {
      btnText: 'Start Discussion'
    }
  }
}
</script>

<style lang="scss" scoped>
.post-page {
    background-color: #ffffff;
    height: 100%;
    padding: 0 20%;

}
</style>
