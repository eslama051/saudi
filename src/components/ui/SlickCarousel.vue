<template>
  <div class="slick-item">
    <VueSlickCarousel ref="c1" :asNavFor="c2" :focusOnSelect="true">
      <div v-for="(img, index) in imgs" :key="index">
        <img :src="img" alt="" />
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel
      ref="c2"
      :asNavFor="c1"
      :slidesToShow="4"
      :focusOnSelect="true"
    >
      <div v-for="(img, index) in imgs" :key="index">
        <img class="slick-img" :src="img" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      c1: undefined,
      c2: undefined,
    };
  },
  props: ["imgs"],
  name: "MyComponent",
  components: { VueSlickCarousel },

  mounted() {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
  },
};
</script>
<style lang="scss" scoped>
.slick-item {
  width: 100%;
}
img {
  width: 100%;
  display: block;
}
.slick-img {
  padding-right: 10%;
}
</style>
