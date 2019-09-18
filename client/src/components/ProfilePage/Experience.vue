<template>
  <div class="container">
    <div class="experience">
      <div class="text-center mb-5">
        <h2>Experience Credentials</h2>
      </div>
      <div class="row text-center">
        <table v-if="experience.length > 0" class="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(experience) in experience" :key="experience._id">
              <td>{{ experience.company }}</td>
              <td>{{ experience.title }}</td>
              <td>
                {{ moment(experience.from).format('LL') }} -
                <span>{{ experience.current ? " Present" : moment(' ' + experience.to).format('LL') }}</span>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteExperience(experience._id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <p>This looks pretty empty. You have no experience credentials yet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Array
    }
  },
  methods: {
    deleteExperience(id) {
      this.$emit("delete", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.experience {
  padding: 5% 10%;

  height: 100%;
  background-color: #ffffff;

  .row {
    padding: 0 15%;
  }
}
</style>
