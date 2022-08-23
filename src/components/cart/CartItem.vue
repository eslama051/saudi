<template>
  <div class="cart-item">
    <div class="cart-item-info">
      <div class="cart-item-img-container">
        <img :src="item.img" alt="" />
      </div>
      <div class="cart-item-text">
        <h2>{{ item.title }}</h2>
        <h3>{{ item.type }}</h3>
        <h2 class="item-price">{{ item.price }}</h2>
      </div>
    </div>
    <div class="item-control">
      <div class="order-quantity">
        <span class="decrement">-</span>
        <span class="order-quantity-input">0</span>
        <span class="increment">+</span>
      </div>
    </div>
    <button><i class="fa fa-trash"></i></button>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
