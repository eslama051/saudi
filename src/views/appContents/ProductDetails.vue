<template>
  <div class="product-detail-page">
    <div class="product-detail container">
      <!-- <div class="product-detail-img-container">
        <img :src="product.img" alt="" />
      </div> -->
      <slick-carousel :imgs="product.imgs" class="slick" />
      <div class="product-detail-info-container">
        <div class="product-detail-info">
          <h1>{{ product.title }}</h1>
          <h2>{{ product.type }}</h2>
          <h3>{{ product.title }}</h3>
          <div class="product-detail-info-flex">
            <h2>
              <span style="color: black; padding: 10px">{{ product.id }}</span
              >:كود المنتج
            </h2>
            <h2>
              <span style="color: black; padding: 10px">{{
                product.quantity
              }}</span
              >:الكمية المتاحه
            </h2>
          </div>
          <div class="product-details-color">
            <h1>الألوان</h1>
            <div>
              <span
                v-for="(color, index) in product.colors"
                :key="index"
                :style="{ background: color }"
                @click="selecetColor(color)"
                :class="color == selecetedColor ? 'seleceted-color' : ''"
              >
              </span>
            </div>
          </div>
          <div class="order-control">
            <div class="order-quantity">
              <span class="decrement" @click="decrementQuan">-</span>
              <span class="order-quantity-input">{{ quantity }}</span>
              <span class="increment" @click="incrementQuan">+</span>
            </div>
            <button>أضف إالي السلة</button>
          </div>
        </div>
        <div class="product-detail-prices">
          <h2><span>ر.س</span>{{ product.price }}</h2>
          <h2 style="text-decoration: line-through; color: gray">
            <span>ر.س</span>{{ product.oldPrice }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SlickCarousel from "../../components/ui/SlickCarousel.vue";
export default {
  data() {
    return {
      selecetedColor: "",
      quantity: 0,
    };
  },
  props: ["id"],
  components: { SlickCarousel },
  computed: {
    product() {
      return this.$store.getters.product(this.id);
    },
  },
  methods: {
    selecetColor(color) {
      this.selecetedColor = color;
    },
    decrementQuan() {
      if (this.quantity == 0) {
        return;
      }
      this.quantity--;
    },
    incrementQuan() {
      if (this.product.quantity == this.quantity) {
        return;
      }
      this.quantity++;
    },
  },
};
</script>
