<template>
  <div class="carousel-container">
    <div class="carousel-container" v-if="items.length">
      <owl-carousel :margin="20" :items="4" class="latest-additions-items">
        <latest-item
          v-for="item in items"
          :key="item.id"
          :item="item"
        ></latest-item>
      </owl-carousel>
    </div>
    <div v-else>
      <h1>لايوجد منتجات للحين</h1>
    </div>
  </div>
</template>

<script>
import LatestItem from "../home/LatestItem.vue";
export default {
  props: {
    items: {
      default: [],
    },
  },
  components: {
    LatestItem,
  },
};
</script>
