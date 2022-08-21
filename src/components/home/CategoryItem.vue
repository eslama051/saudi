<template>
  <div class="category">
    <div class="category-container">
      <img :src="category.img" alt="" />
      <h1>{{ category.type }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>
