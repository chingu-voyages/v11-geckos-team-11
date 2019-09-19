<template>
  <div class="skills-bio">
    <div class="row">
      <div class="col">
        <div class="skills">
          <div class="h2 text-center">
            Skills
          </div>
          <div class="skill-checks text-center">
            <div class="row">
              <div
                v-for="(skill, index) in skills"
                :key="`skill-${index}`"
                class="col-lg-4 col-sm-12"
              >
                <i class="fas fa-check-circle pr-2">
                  <span>{{ skill }}</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bio px-5">
          <div class="h2 text-center">
            Bio
          </div>
          <div
            v-if="bio"
            class="text-justify"
          >
            The details are not the details. They make the
            fucking design. Creativity is a fucking work-ethic. A good fucking
            composition is the result of a hierarchy consisting of clearly
            contrasting elements set with distinct alignments containing irregular
            intervals of negative space. Practice won’t get you anywhere if you
            mindlessly fucking
          </div>
          <p
            v-else
            class="text-center"
          >
            This looks pretty empty. You have no bio yet.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: function() {
        return [];
      }
    },
    bio: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.skills-bio {
  padding: 5% 15%;
  background-color: #ffffff;
  height: 100%;

  .skill-checks {
    font-size: 22px;
    span {
      font-family: Arial;
    }

    .row {
      margin: 0;
    }
  }
}
</style>
