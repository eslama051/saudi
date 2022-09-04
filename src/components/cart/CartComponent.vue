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
        <span>{{ cartQuantity }} </span> عناصر في السله
      </h3>
      <div class="cart-items-container" v-if="cart.data.items.length > 0">
        <cart-item
          v-for="item in cart.data.items"
          :key="item.cart_item_id"
          :item="item"
        />
      </div>
      <div class="cart-footer">
        <div class="coupon-container">
          <input type="text" placeholder="أدخل كوبون الخصم" />
        </div>
        <div class="cart-last-control">
          <h3>سعر المنتجات</h3>
          <h3>{{ cart.total_products_price }}</h3>
        </div>
        <div class="cart-last-control">
          <h3>الخصم</h3>
          <h3>{{ cart.dicount }}</h3>
        </div>
        <div class="cart-last-control">
          <h3>سعر الشحن</h3>
          <h3>{{ cart.delivery_price }}</h3>
        </div>
        <div class="cart-last-control">
          <h3>الإجمالي</h3>
          <h3>{{ cart.total_price }}</h3>
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
    cart() {
      return this.$store.getters.cartAll;
    },

    cartState() {
      return this.$store.getters.cartState;
    },
    cartQuantity() {
      return this.$store.getters.cartQuantity;
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
