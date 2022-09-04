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
    <button @click="removeItem(item.id)"><i class="fa fa-trash"></i></button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    decrementQuan() {
      if (this.item.quantity <= 1) {
        this.$store.dispatch("removeItem", this.item.id);
      }
      this.$store.dispatch("decreaseItemQuantity", this.item.id);
    },
    incrementQuan() {
      this.$store.dispatch("increaseItemQuantity", this.item.id);
      console.log(this.item);
    },
    removeItem(id) {
      this.$store.dispatch("removeItem", id);
    },
  },
};
</script>
