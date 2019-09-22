<template>
  <div class="input-group mb-3 w-50 mt-5 mx-auto">
    <input
      v-model="search"
      type="text"
      class="form-control"
      placeholder="Search for Devs..."
      @input="onSearch(search)"
    >
    <div class="input-group-append">
      <button
        id="button-addon2"
        class="btn btn-outline-primary"
        type="button"
        @click="onSearch(search)"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevSearch',
  data() {
    return {
      search: '',
    }
   },
   methods: {
     onSearch(data) {
      // init and catch input 
      console.log(data);
      
     },
     filterSearchResult() {
       // search by input
     }

   },

};
</script>

<style lang="scss" scoped>
</style>