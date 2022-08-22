<template>
  <section class="most-selled-section">
    <div class="container section-container text-center">
      <h1 class="section-title">الأكثر مبيعا</h1>
      <base-carousel :items="mostSelled"></base-carousel>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    mostSelled() {
      return this.$store.getters.mostSelled;
    },
  },
};
</script>
