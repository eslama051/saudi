<template>
  <div v-if="homeData.length == 0">
    <landing-page />
  </div>
  <div class="home-page" v-else>
    <slider-container :sliderData="homeData.slider_header"></slider-container>
    <about-container
      :about_image="homeData.about_image"
      :about="homeData.about"
    ></about-container>
    <categories-home :main_category="homeData.main_category"></categories-home>
    <latest-additions
      :newer_product_additions="homeData.newer_product_additions"
    ></latest-additions>
    <adver-banner />
    <most-selled :best_seller="homeData.best_seller"></most-selled>
  </div>
</template>
<script>
import SliderContainer from "../../components/home/SliderContainer.vue";
import AboutContainer from "../../components/home/AboutContainer.vue";
import CategoriesHome from "../../components/home/CategoriesHome.vue";
import LatestAdditions from "../../components/home/LatestAdditions.vue";
import AdverBanner from "../../components/home/AdverBannner.vue";
import MostSelled from "../../components/home/MostSelled.vue";
import LandingPage from "../../components/ui/LoadingPage.vue";

import server from "../../apis/server";
export default {
  data() {
    return {
      homeData: [],
    };
  },

  components: {
    SliderContainer,
    AboutContainer,
    CategoriesHome,
    LatestAdditions,
    AdverBanner,
    MostSelled,
    LandingPage,
  },
  created() {
    server
      .get("client/home", {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        this.homeData = res.data.data;
        console.log(this.homeData);
      });
  },
};
</script>
