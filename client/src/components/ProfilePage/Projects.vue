<template>
  <div class="projects">
    <div class="h2 text-center mb-5">
      Projects / GitHub Repos
    </div>
    <div class="card">
      <div class="card-body">
        <div
          v-for="(repo, index) in repos"
          :key="`repo-${index}`"
          class="row mb-4"
        >
          <div class="col-md-6 col-lg-10">
            <h4>{{ repo.name }}</h4>
            <div class="description">
              {{ repo.description }}
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="repo-stats">
              <div class="stars">
                Stars: {{ repo.stargazers_count }}
              </div>
              <div class="watcher">
                Watcher: {{ repo.watchers_count }}
              </div>
              <div class="forks">
                Forks: {{ repo.forks_count }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repos: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 5% 20%;

  height: 100%;
  background-color: #ffffff;
}
</style>
