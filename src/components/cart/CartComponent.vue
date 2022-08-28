<template>
  <section
    :class="cartState == true ? 'show-cart cart-component' : 'cart-component'"
    @click="closeCart"
  >
    <div class="cart-component-container" @click.stop>
      <button class="close-cart" @click="closeCart">
        <i class="fa fa-xmark"></i>
      </button>
      <h1>السله</h1>
      <h3>
        <span>{{ cartAmount }} </span> عناصر في السله
      </h3>
      <div class="cart-items-container">
        <cart-item v-for="item in items" :key="item.id" :item="item" />
      </div>
      <div class="cart-footer">
        <div class="coupon-container">
          <input type="text" placeholder="أدخل كوبون الخصم" />
        </div>
        <div class="cart-last-control">
          <h3>سعر المنتج</h3>
          <h3>22</h3>
        </div>
        <div class="cart-last-control">
          <h3>سعر المنتج</h3>
          <h3>22</h3>
        </div>
        <div class="cart-last-control">
          <h3>سعر المنتج</h3>
          <h3>22</h3>
        </div>
        <button class="pay-btn">الدفع</button>
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
    cartAmount() {
      return this.$store.getters.itemAmount;
    },
  },
  methods: {
    closeCart() {
      this.$store.dispatch("closeCart");
      document.body.style.overflowY = "auto";
    },
  },
};
</script>
