<template>
  <div v-if="data.length == 0">
    <landing-page />
  </div>
  <div class="home-page" v-else>
    <slider-container></slider-container>
    <about-container></about-container>
    <categories-home></categories-home>
    <latest-additions></latest-additions>
    <adver-banner />
    <most-selled></most-selled>
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
      data: [],
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
    server.get("client/home").then((res) => {
      this.data = res.data.data;
      console.log(this.data);
    });
  },
};
</script>
