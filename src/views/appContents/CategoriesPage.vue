<template>
  <section class="categories-page" v-if="categories">
    <title-header
      :title="categories.main_category_name"
      :link="`/categories/${id}`"
    ></title-header>
    <div class="categories-page-container container">
      <div class="filter_content_btns_wrapper">
        <button
          class="categories_filter_content_btn active_btn"
          @click="(e) => getSubCategories(e, 'all')"
        >
          الكل
        </button>
        <button
          v-for="sub_category in categories.sub_category"
          :key="sub_category.id"
          @click="(e) => getSubCategories(e, sub_category.id)"
          class="categories_filter_content_btn"
        >
          {{ sub_category.name }}
        </button>
      </div>
      <button class="filter-btn" @click="openFilter">
        فلتر<i class="smth fa-solid fa-sliders"></i>
      </button>
      <Transition name="slide" mode="out-in">
        <div class="categories_page_products" v-if="products.length > 0">
          <latest-item
            v-for="product in products"
            :key="product.id"
            :item="product"
          />
        </div>
        <div v-else class="categories_page_no_products">
          <img src="../../assets/images/products.a6f24877.svg" alt="" />
          <h1>لايوجد منتجات للحين</h1>
        </div>
      </Transition>
    </div>
    <filter-box></filter-box>
  </section>
</template>

<script>
import server from "@/apis/server";
import LatestItem from "../../components/home/LatestItem.vue";
import FilterBox from "../../components/categories/FilterBox.vue";
export default {
  components: { LatestItem, FilterBox },
  data() {
    return {
      categories: "",
      products: [],
    };
  },
  props: ["id"],
  methods: {
    getSubCategories(e, subCategoryId) {
      document
        .querySelectorAll(".categories_filter_content_btn")
        .forEach((ele) => {
          ele.classList.remove("active_btn");
        });
      e.target.classList.add("active_btn");
      server
        .get(`categories/${this.id}`, {
          params: {
            sub_category_id: `${subCategoryId}`,
          },
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
            "Accept-Language": "ar",
          },
        })
        .then((res) => {
          this.products = res.data.data.products;
        });
    },
    openFilter() {
      this.$store.dispatch("openFilter");
    },
  },
  created() {
    server
      .get(`categories/${this.id}`, {
        params: {
          sub_category_id: "all",
        },
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        this.categories = res.data.data;
        this.products = res.data.data.products;
      });
  },
};
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 2s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
