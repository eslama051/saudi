<template>
  <div>
    <VueSlider
      v-model="value"
      railStyle="red"
      :enable-cross="false"
    ></VueSlider>
  </div>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
      value: [0, 30],
    };
  },
};
</script>

<style lang="scss">
.vue-slider-process {
  background-color: #43290a !important;
}
</style>
