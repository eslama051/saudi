<template>
  <div class="carousel-container" v-if="items.length">
    <owl-carousel
      :margin="20"
      :responsive="{
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        1200: { items: 5 },
      }"
      responsiveBaseElement=".carousel-container"
      class="latest-additions-items"
    >
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
