<template>
  <div class="home-page">
    <slider-container></slider-container>
    <about-container></about-container>
    <categories-home></categories-home>
    <latest-additions></latest-additions>
    <adver-banner />
  </div>
</template>
<script>
import SliderContainer from "../../components/home/SliderContainer.vue";
import AboutContainer from "../../components/home/AboutContainer.vue";
import CategoriesHome from "../../components/home/CategoriesHome.vue";
import LatestAdditions from "../../components/home/LatestAdditions.vue";
import AdverBanner from "../../components/home/AdverBannner.vue";
export default {
  components: {
    SliderContainer,
    AboutContainer,
    CategoriesHome,
    LatestAdditions,
    AdverBanner,
  },
};
</script>
