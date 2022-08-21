<template>
  <section>
    <div class="section-container container categories-container">
      <CategoryItem
        v-for="category in categories"
        :key="category.id"
        :category="category"
      ></CategoryItem>
    </div>
  </section>
</template>
<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: {
    CategoryItem,
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
