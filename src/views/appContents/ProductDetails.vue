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
          <transition name="fade" mode="out-in" v-if="selecetedColor">
            <div class="product-details-sizes">
              <h1>الأحجام</h1>
              <div>
                <span
                  v-for="(size, index) in product.sizes"
                  :key="index"
                  @click="selecetSize(size)"
                  :class="size == selecetedSize ? 'seleceted-size' : ''"
                >
                  {{ size }}
                </span>
              </div>
            </div>
          </transition>
          <div class="order-control">
            <div class="order-quantity">
              <span class="decrement" @click="decrementQuan">-</span>
              <span class="order-quantity-input">{{ quantity }}</span>
              <span class="increment" @click="incrementQuan">+</span>
            </div>
            <button @click="addToCart">أضف إالي السلة</button>
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
      selecetedSize: "",
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
    selecetSize(size) {
      this.selecetedSize = size;
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
    playSound() {
      new Audio(require("../../assets/audio/mangkeyou_sharingan.mp3")).play();
    },
    addToCart() {
      if (this.selecetedColor == "") {
        this.$iziToast.error({
          title: "Error: ",
          message: "plase Pick A  Color",
        });
        return;
      }
      if (this.selecetedSize == "") {
        this.$iziToast.error({
          title: "Error: ",
          message: "plase Pick A  Size",
        });
        return;
      }
      if (this.quantity == 0) {
        this.$iziToast.error({
          title: "Error: ",
          message: "plase Pick The Mount Desired",
        });
        return;
      }
      this.$store.dispatch("addItem", {
        item: {
          id: this.id,
          ...this.product,
          quantity: this.quantity,
          color: this.selecetedColor,
          size: this.selecetedSize,
        },
      });
      // this.$router.push("/");
      this.playSound();
      this.$iziToast.success({
        title: "Item",
        message: "Add To The Cart",
      });
      // this.$store.dispatch("openCart");
    },
  },
};
</script>
