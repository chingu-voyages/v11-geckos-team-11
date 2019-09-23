<template>
  <div class="dev-card w-75 mx-auto mt-5 border border-dark">
    <div class="row px-3 py-4">
      <div class="col-md-3 user mx-auto my-auto text-center">
        <img
          :src="userImage"
          class="img-fluid text-center"
          alt="user profile image"
        >
      </div>
      <div class="col-md-6 my-auto">
        <div class="user-data mb-2">
          <div class="user-name h3">
            {{ userName }}
          </div>
          <div class="user-role font-weight-bold h5">
            {{ userRole }}
          </div>
          <div class="user-location">
            <i class="pr-2 fas fa-map-marker-alt h3" />
            {{ userLocation }}
          </div>
          <router-link to="/profile">
            <button class="btn btn-outline-warning mt-2">
              View Profile
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <ul class="user-skills">
          <li>
            <i class="fas fa-check-circle pr-2" />{{ firstSkill }}
          </li>
          <li>
            <i class="fas fa-check-circle pr-2" />{{ secondSkill }}
          </li>
          <li>
            <i class="fas fa-check-circle pr-2" />{{ thirdSkill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevCards',
  props: {
    userImage: {
      type: String,
      default: 'https://via.placeholder.com/250x200'
    },
    userName: {
      type: String,
      default: 'John Doe'
    },
    userRole: {
      type: String,
      default: "Doing nothing tbh, but it's ok for me"
    },
    userLocation: {
      type: String,
      default: 'Somewhere over the rainbow!'
    },
    firstSkill: {
      type: String,
      default: 'not set'
    },
    secondSkill: {
      type: String,
      default: 'not set'
    },
    thirdSkill: {
      type: String,
      default: 'not set'
    }
    // userProfileLink: {
    //   type: String,
    //   default: '<router-link :to="/profile">View Profile</router-link>'
    // }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.dev-card {
  .user-skills {
    list-style-type: none;
    li {
      margin: 10% 0;
      i {
        font-size: 25px;
        position: relative;
        top: 5px;
      }
    }
  }
}
</style>