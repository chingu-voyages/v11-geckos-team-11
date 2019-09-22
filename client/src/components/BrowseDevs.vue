<template>
  <div class="browse-devs">
    <div class="header-text pt-5 text-center">
      <div class="h2 font-weight-bold">
        Browse & Connect With Developers
      </div>
    </div>
    <DevSearch />
    <DevCard />
    <DevCard />
    <DevCard />
  </div>
</template>

<script>
import DevCard from './BrowseDevs/DevCard.vue';
import DevSearch from './BrowseDevs/DevSearch.vue';
export default {
  name: 'BrowseDevs',
  components: {
    DevSearch,
    DevCard
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.browse-devs {
  height: 100%;
  background-color: #ffffff;
}
</style>