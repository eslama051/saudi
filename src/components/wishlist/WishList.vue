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
      <div v-if="favs.length == 0" class="no-cart-items">
        <img src="../../assets/images/products.a6f24877.svg" alt="" />
        <h1>لايوجد منتجات للحين</h1>
      </div>
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
<style lang="scss" scoped>
.no-cart-items {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #43290a;
  img {
    width: 200px !important;
    display: block;
    margin: 0 auto;
  }
  h1 {
    font-size: 1.5rem !important;
    margin-top: 2rem;
  }
}
</style>
