<template>
  <div class="my-orders-container">
    <title-header title="طلباتي" />
    <div class="my-orders container">
      <order-item />
      <order-item />
      <order-item />
    </div>
  </div>
</template>

<script>
import OrderItem from "../../components/orders/OrderItem.vue";
export default {
  components: {
    OrderItem,
  },
};
</script>

<style lang="scss" scoped>
.my-orders-container {
  background: #fbf9f4;
}
.my-orders {
  //   background: #f7f5ef;
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  gap: 1rem;
  padding: 4rem 0;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}
</style>
