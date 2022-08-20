<template>
  <div>
    <slider-container></slider-container>
    <about-container></about-container>
  </div>
</template>
<script>
import SliderContainer from "../../components/home/SliderContainer.vue";
import AboutContainer from "../../components/home/AboutContainer.vue";
export default {
  components: { SliderContainer, AboutContainer },
};
</script>
