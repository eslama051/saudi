<template>
  <section class="lastest-addition-section">
    <div class="container section-container text-center">
      <h1 class="latest-additions-title">أحدث الإضافات</h1>
      <owl-carousel :margin="20" :items="4" class="latest-additions-items">
        <latest-item
          v-for="item in latest"
          :key="item.id"
          :item="item"
        ></latest-item>
      </owl-carousel>
    </div>
  </section>
</template>

<script>
import LatestItem from "./LatestItem.vue";
export default {
  components: {
    LatestItem,
  },
  computed: {
    latest() {
      return this.$store.getters.latest;
    },
  },
};
</script>
