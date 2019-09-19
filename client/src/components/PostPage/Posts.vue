<template>
  <div
    id="posts"
    class="mx-auto w-75"
  >
    <div class="posts-box border border-dark">
      <div class="row">
        <div class="col">
          <img
            src="https://via.placeholder.com/100x100"
            class="img-fluid"
            alt="Responsive image"
          >
          <div class="user">
            <p>John Doe</p>
            <p>Member since May 2018</p>
          </div>
        </div>
        <div class="col">
          <div class="text-box">
            <div class="text">
              Make your work consistent but not fucking
              predictable. While having drinks with Tibor Kalman one night, he
              told me, “When you make something no one hates, no one fucking loves
              it.” When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would
            </div>
            <div class="date">posted on 17 July 2019</div>
          </div>
          <div class="votings">
            <span class="up-vote badge badge-success">12</span>
            <span class="down-vote badge badge-danger">1</span>
            <button type="button" class="btn btn-outline-primary">Start Discussion</button>
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
    }
</style>
