<template>
  <section class="lastest-addition-section">
    <div class="container section-container text-center">
      <h1 class="latest-additions-title section-title">أحدث الإضافات</h1>
      <base-carousel :items="newer_product_additions" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["newer_product_additions"],
};
</script>
