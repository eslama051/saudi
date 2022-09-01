<template>
  <section class="most-selled-section">
    <div class="container section-container text-center">
      <h1 class="section-title">الأكثر مبيعا</h1>
      <base-carousel :items="best_seller"></base-carousel>
    </div>
  </section>
</template>
<script>
export default {
  props: ["best_seller"],
};
</script>
