<template>
  <div class="category">
    <router-link :to="`/categories/${category.id}`" class="category-container">
      <img :src="category.category_image" alt="" />
      <h1>{{ category.name }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>
