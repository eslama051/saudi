<template>
  <section class="lastest-addition-section">
    <div class="container section-container text-center">
      <h1 class="latest-additions-title section-title">أحدث الإضافات</h1>
      <div class="carousel-container">
        <owl-carousel
          :margin="20"
          :autoplay="true"
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
            v-for="item in newer_product_additions"
            :key="item.id"
            :item="item"
          ></latest-item>
        </owl-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import LatestItem from "./LatestItem.vue";
export default {
  props: ["newer_product_additions"],
  components: {
    LatestItem,
  },
  // computed: {
  //   latest() {
  //     return this.$store.getters.latest;
  //   },
  // },
  created() {
    // console.log(this.newer_product_additions);
  },
};
</script>
