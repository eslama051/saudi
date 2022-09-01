<template>
  <div class="product-detail-page">
    <div class="product-detail container" v-if="product">
      <!-- <div class="product-detail-img-container">
        <img :src="product.img" alt="" />
      </div> -->
      <slick-carousel :imgs="[product.image]" class="slick" />
      <div class="product-detail-info-container">
        <div class="product-detail-info">
          <h1>{{ product.name }}</h1>
          <h2>الازياء والملابس</h2>
          <h3>{{ product.desc }}</h3>
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
                v-for="(item, index) in product.colors"
                :key="index"
                :style="{ background: item.color.hex_value }"
                @click="selecetColor(item)"
                :class="item.id == selecetedColor.id ? 'seleceted-color' : ''"
              >
              </span>
            </div>
          </div>
          <transition name="fade" mode="out-in" v-if="selecetedColor">
            <div class="product-details-sizes">
              <h1>الأحجام</h1>
              <div>
                <span
                  v-for="(size, index) in sizes"
                  :key="index"
                  @click="selecetSize(size)"
                  :class="size.id == selecetedSize.id ? 'seleceted-size' : ''"
                >
                  {{ size.name }}
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
          <h2><span>ر.س</span>{{ product.price_after_dicount }}</h2>
          <h2 style="text-decoration: line-through; color: gray">
            <span>ر.س</span>{{ product.price_before_dicount }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import server from "@/apis/server";
import SlickCarousel from "../../components/ui/SlickCarousel.vue";
export default {
  data() {
    return {
      product: "",
      selecetedColor: "",
      quantity: 0,
      selecetedSize: "",
      sizes: "",
    };
  },
  props: ["id"],
  components: { SlickCarousel },
  // computed: {
  //   product() {
  //     return this.$store.getters.product(this.id);
  //   },
  // },
  methods: {
    selecetColor(item) {
      this.selecetedColor = item;
      this.sizes = item.sizes;
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
  created() {
    server
      .get(`client/show_product/${this.id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        this.product = res.data.data;
      });
  },
};
</script>
