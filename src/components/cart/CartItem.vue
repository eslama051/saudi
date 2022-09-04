<template>
  <div class="cart-item">
    <div class="cart-item-info">
      <div class="cart-item-img-container">
        <img :src="item.product.image" alt="" />
      </div>
      <div class="cart-item-text">
        <h2>{{ item.product.name }}</h2>
        <h3>{{ item.type }}</h3>
        <h2 class="item-price">{{ item.price }}</h2>
      </div>
    </div>
    <div class="item-control">
      <div class="order-quantity">
        <span class="decrement" @click="decrementQuan">-</span>
        <span class="order-quantity-input">{{ item.quantity }}</span>
        <span class="increment" @click="incrementQuan">+</span>
      </div>
    </div>
    <button @click="removeItem()"><i class="fa fa-trash"></i></button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    decrementQuan() {
      if (this.item.quantity == 1) {
        this.$store.dispatch("removeItem", {
          id: this.item.cart_item_id,
        });
      }
      this.$store.dispatch("updateItemQuantity", {
        id: this.item.cart_item_id,
        quantity: this.item.quantity - 1,
      });
    },
    incrementQuan() {
      this.$store.dispatch("updateItemQuantity", {
        id: this.item.cart_item_id,
        quantity: this.item.quantity + 1,
      });
    },
    removeItem() {
      this.$store.dispatch("removeItem", { id: this.item.cart_item_id });
    },
  },
};
</script>
