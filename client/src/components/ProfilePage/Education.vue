<template>
  <div class="container">
    <div class="education">
      <div class="text-center mb-5">
        <h2>Education Credentials</h2>
      </div>
      <div class="row text-center">
        <table v-if="education.length > 0" class="table">
          <thead>
            <tr>
              <th>School / Course Provider</th>
              <th>Field of Study</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(education) in education" :key="education._id">
              <td>{{ education.school }}</td>
              <td>{{ education.fieldofstudy }}</td>
              <td>{{ education.degree }}</td>
              <td>
                {{ education.from }} -
                <span>{{ education.current ? " present" : ' ' + education.to }}</span>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteEducation(education._id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <p>No Education Credentials Yet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    education: {
      type: Array
    }
  },
  methods: {
    deleteEducation(id) {
      this.$emit("delete", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.education {
  padding: 5% 10%;

  height: 100%;
  background-color: #ffffff;

  .row {
    padding: 0 15%;
  }
}
</style>
