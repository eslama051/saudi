<template>
  <section class="filter_box_container">
    <div class="fitler_box">
      <date-picker />
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.filter_box_container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  //   z-index: 10000;
  background: rgba(0, 0, 0, 0.3);
  .fitler_box {
    width: 50%;
    max-width: 40rem;
    background: #fbf9f4;
    height: 100%;
  }
}
</style>
