<template>
  <div class="input-group mb-3 w-50 mt-5 mx-auto">
    <input
      v-model="searchInput"
      type="text"
      class="form-control"
      placeholder="Search for Devs..."
      @input="onSearch(searchInput)"
    >
    <div class="input-group-append">
      <button
        id="button-addon2"
        class="btn btn-outline-primary"
        type="button"
        @click="onSearch(searchInput)"
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
      searchInput: '',
    }
   },
   methods: {
     onSearch(inputValue) {
      // init and catch input 
      console.log(inputValue);
      
     },
     filterSearchResult() {
       // search by input
     }

   },

};
</script>

<style lang="scss" scoped>
</style>