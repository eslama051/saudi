<template>
  <section class="about-section">
    <div class="container about-container">
      <div class="about-info">
        <h1>معلومات عنا</h1>
        <p v-html="about"></p>
        <base-button title="اقرا المزيد" :link="true" to="/about" />
      </div>
      <div class="about-img">
        <img :src="about_image" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["about_image", "about"],
};
</script>
