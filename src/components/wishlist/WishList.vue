<template>
  <section
    :class="wishState == true ? 'show-cart cart-component' : 'cart-component'"
    @click="closeWish"
  >
    <div class="cart-component-container wish-list" @click.stop>
      <button class="close-cart" @click="closeWish">
        <i class="fa fa-xmark"></i>
      </button>
      <h1>المفضلة</h1>
      <div class="wish-container">
        <latest-item v-for="item in favs" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
<script>
import LatestItem from "../home/LatestItem.vue";
export default {
  components: {
    LatestItem,
  },
  computed: {
    wishState() {
      return this.$store.getters.wishState;
    },
    favs() {
      return this.$store.getters.favs;
    },
  },
  methods: {
    closeWish() {
      this.$store.dispatch("closeWish");
      document.body.style.overflowY = "auto";
    },
  },
};
</script>
