<template>
  <div class="latest-item" @click="openProductDetails(item.id)">
    <div class="img-container">
      <img :src="item.img" alt="" />
    </div>
    <h2>{{ item.title }}</h2>
    <h3>{{ item.type }}</h3>
    <div class="itemfooter-container">
      <div class="item-footer">
        <font-awesome-icon icon=" fa-heart"></font-awesome-icon>
        <div class="prices">
          <span class="oldPrice">
            <span>{{ item.oldPrice }}</span
            ><span>ر.س </span></span
          >
          <span class="price">
            <span>{{ item.price }}</span
            ><span>ر.س </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    openProductDetails(id) {
      this.$router.push(`/product-details/${id}`);
    },
  },
};
</script>
