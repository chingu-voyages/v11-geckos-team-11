<template>
  <div
    id="posts"
    class="mx-auto w-100"
  >
    <div class="posts-box border border-dark">
      <div class="row px-3 py-4">
        <div class="col-md-3 user mx-auto my-auto text-center">
          <img
            src="https://via.placeholder.com/100x100"
            class="img-fluid text-center rounded-circle"
            alt="Responsive image"
          >
          <div class="mt-1">
            <span class="username">John Doe</span>
            <br>
            <span class="member-date">Member since May 2018</span>
          </div>
        </div>
        <div class="col-md-9">
          <div class="text-box mb-2">
            <div class="text">
              Make your work consistent but not fucking
              predictable. While having drinks with Tibor Kalman one night, he
              told me, “When you make something no one hates, no one fucking loves
              it.” When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would.
            </div>
            <span class="posted-date">posted on 17 July 2019</span>
          </div>
          <div class="votings">
            <span class="up-vote badge badge-success mr-3"><i
              class="fas fa-thumbs-up mx-1"
            />12</span>
            <span class="down-vote badge badge-danger"><i
              class="fas fa-thumbs-down mx-1"
            />100</span>
            <button
              type="button"
              class="btn btn-outline-primary ml-3"
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
        height: 100%;
        font-size: 14px;

        .member-date {
            color: #707070;
            font-size: 12px;
        }

        .posted-date {
            font-size: 12px;
            color: #707070;
        }

        .votings {
            position: relative;
            top: 20px;
            .badge {
                cursor: pointer;
                position: relative;
                font-size: 14px;
                height: 25px;
                width: 70px;
                .fa-thumbs-down {
                    top: 2px;
                    position: relative;
                }

            }

        }

    }

}
</style>
