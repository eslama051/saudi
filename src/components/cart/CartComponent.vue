<template>
  <section
    :class="cartState == true ? 'show-cart cart-component' : 'cart-component'"
  >
    <div class="cart-component-container">
      <button class="close-cart"><i class="fa fa-xmark"></i></button>
      <h1>السله</h1>
      <h3>3 عناصر في السله</h3>
      <div class="cart-items-container">
        <cart-item v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    cartState() {
      return this.$store.getters.cartState;
    },
  },
  created() {
    console.log(this.$store.getters.cartState);
  },
};
</script>
