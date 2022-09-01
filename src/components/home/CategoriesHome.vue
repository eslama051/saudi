<template>
  <section>
    <div class="section-container container categories-container">
      <CategoryItem
        v-for="category in main_category"
        :key="category.id"
        :category="category"
        class="grid-ele"
      ></CategoryItem>
    </div>
  </section>
</template>
<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  props: ["main_category"],
  components: {
    CategoryItem,
  },
  // computed: {
  //   categories() {
  //     return this.$store.getters.categories;
  //   },
  // },
};
</script>
