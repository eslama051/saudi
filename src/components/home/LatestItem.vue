<template>
  <div class="latest-item" @click="openProductDetails(item.id)">
    <div class="img-container">
      <img :src="item.product_image[0].url" alt="" />
    </div>
    <h2>{{ item.name }}</h2>
    <h3 class="right-h3">الازياء والملابس</h3>
    <div class="itemfooter-container">
      <div class="item-footer">
        <div>
          <font-awesome-icon
            @click.stop="ToggleToWished"
            v-if="item.is_fav"
            class="heart-icon-wished"
            icon="fa fa-heart"
          ></font-awesome-icon>
          <font-awesome-icon
            @click.stop="ToggleToWished"
            v-else
            class="heart-icon"
            icon="fa fa-heart"
          ></font-awesome-icon>
        </div>
        <div class="prices">
          <!-- <span class="oldPrice">
            <span>{{ item.price_before_dicount }}</span
            ><span>ر.س </span></span
          > -->
          <span class="price">
            <span>{{ item.price_before_dicount }}</span
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
    ToggleToWished() {
      this.$store.dispatch("toggleToFavs", { id: this.item.id });
    },
    removeFromWished() {
      this.$store.dispatch("removeFromWished", this.item.id);
    },
  },
};
</script>
