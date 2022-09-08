<template>
  <section
    :class="cartState == true ? 'show-cart cart-component' : 'cart-component'"
    @click="closeCart"
  >
    <div class="cart-component-container" @click.stop>
      <button class="close-cart" @click="closeCart">
        <i class="fa fa-xmark"></i>
      </button>

      <div v-if="cart.data">
        <h1>السله</h1>
        <h3>
          <span>{{ cartElements }} </span> عناصر في السله
        </h3>
        <div class="cart-items-container">
          <cart-item
            v-for="item in cart.data.items"
            :key="item.cart_item_id"
            :item="item"
          />
        </div>
        <div class="cart-footer">
          <form class="coupon-container" @submit.prevent="applyCoupon">
            <input type="text" placeholder="أدخل كوبون الخصم" />
            <button>إرسال</button>
          </form>
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
          <button class="pay-btn" @click="goToCheckout">الدفع</button>
        </div>
      </div>
      <div v-else class="no-cart-items">
        <img src="../../assets/images/products.a6f24877.svg" alt="" />
        <h1>لايوجد منتجات للحين</h1>
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
    cartElements() {
      return this.$store.getters.cartElements;
    },
  },
  methods: {
    closeCart() {
      this.$store.dispatch("closeCart");
      document.body.style.overflowY = "auto";
    },
    goToCheckout() {
      this.$router.push("/checkout");
    },
    applyCoupon() {
      this.$store.dispatch("applyCoupon");
    },
  },
};
</script>
<style lang="scss" scoped>
.no-cart-items {
  height: 100%;
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
