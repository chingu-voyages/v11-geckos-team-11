<template>
  <div
    id="posts"
    class="mx-auto w-75"
  >
    <div class="posts-box border border-dark">
      <div class="row">
        <div class="col-4 user mx-auto my-auto">
          <img
            src="https://via.placeholder.com/120x100"
            class="img-fluid text-center"
            alt="Responsive image"
          >
          <div>
            <div class="username text-center">
              John Doe
            </div>
            <div class="member-date">
              Member since May 2018
            </div>
          </div>
        </div>
        <div class="col-7 mx-auto my-auto">
          <div class="text-box">
            <div class="text">
              Make your work consistent but not fucking
              predictable. While having drinks with Tibor Kalman one night, he
              told me, “When you make something no one hates, no one fucking loves
              it.” When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would
            </div>
            <div class="posted-date">
              posted on 17 July 2019
            </div>
          </div>
          <div class="votings">
            <span class="up-vote badge badge-success">12</span>
            <span class="down-vote badge badge-danger">1</span>
            <button
              type="button"
              class="btn btn-outline-primary"
            >
              Start
              Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
#posts {
  height: 100%;


  .posts-box {
    height: 200px;
    font-size: 14px;
  }

}
</style>
