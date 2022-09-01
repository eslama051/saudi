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
  <div v-else style="height: 300px; margin: auto" class="no-thing-to-show">
    <img src="../../assets/images/products.a6f24877.svg" alt="" />
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

<style lang="scss" scoped>
.no-thing-to-show {
  h1 {
    font-size: 1.5rem;
    color: #43290a;
  }
}
</style>
