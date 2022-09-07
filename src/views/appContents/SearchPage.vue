<template>
  <section>
    <title-header title="نتائج البحث" link="/search/results" />
    <div class="search-results-container container">
      <div class="search-items" v-if="searchResults.length > 0">
        <latest-item
          v-for="item in searchResults"
          :key="item.id"
          :item="item"
        />
      </div>
      <div v-else class="no-search-items">
        <div>
          <img src="../../assets/images/search.svg" alt="" />
          <h1>no results</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LatestItem from "../../components/home/LatestItem.vue";
export default {
  components: {
    LatestItem,
  },
  computed: {
    searchResults() {
      return this.$store.getters.searchResults;
    },
  },
};
</script>
<style lang="scss" scoped>
.search-results-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  .search-items {
    display: flex;
  }
}
.no-search-items {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 0rem;
  h1 {
    color: #43290a;
    font-size: 2rem;
    margin-top: 1rem;
    letter-spacing: 4px;
  }
}
</style>
