<template>
  <div class="why-join">
    <div class="text-center">
      <div class="h1">
        Why Join?
      </div>
      <div class="text-center m-auto w-50">
        If you’re not being fucking honest with yourself how could you ever hope
        to communicate something meaningful to someone else? Saul Bass on failure:
        Failure is built into creativity… the creative act involves this element
        of ‘newness’ and ‘experimentalism,’ then one must expect and accept the
        fucking possibility of failure.
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-item">
        <i class="far fa-check-circle" />
        <div class="text-box w-75">
          <div class="h3">
            Community
          </div>
          <div class="text">
            Never, never assume that what you have achieved is fucking good
            enough. Form follows fucking function. Think about all the fucking
            possibilities. Nothing of value comes to you without fucking
          </div>
        </div>
      </div>

      <div class="col-md-4 col-item">
        <i class="far fa-check-circle" />
        <div class="text-box w-75">
          <div class="h3">
            Skills
          </div>
          <div class="text">
            You need to sit down and sketch more fucking ideas because stalking
            your ex on facebook isn’t going to get you anywhere. Dedicate yourself
            to lifelong fucking learning. Widows and
          </div>
        </div>
      </div>

      <div class="col-md-4 col-item">
        <i class="far fa-check-circle" />
        <div class="text-box w-75">
          <div class="h3">
            Learning
          </div>
          <div class="text">
            When you design, you have to draw on your own fucking life
            experiences. If it’s not something you would want to read/look at/use
            then why fucking bother? To go partway
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.why-join {
    background-color: white;
    height: 720px;
    padding-top: 5%;
    .text-center {
        .h1 {
            font-size: 40px;
        }
        font-size: 18px;
    }

    .row {
        margin: 7% 10%;
        transform: translate(5%, 0%);

        .col-item {
            display: flex;
            i {
                font-size: 45px;
                height: 50px;
                width: auto;
                left: -30px;
                position: relative;
            }
            .text-box {}
        }

    }

}
</style>
