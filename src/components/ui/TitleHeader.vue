<template>
  <div class="title-header">
    <img class="img-1" src="../../assets/images/store2-home-bags.png" alt="" />
    <img class="img-2" src="../../assets/images/store2-home-bags.png" alt="" />
    <h1>{{ title }}</h1>
    <div v-if="link">
      <router-link to="/">الرئيسية</router-link>
      >
      <router-link :to="link" class="title-gray">{{ title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.title-header {
  color: #43290a;
  text-align: center;
  padding: 2rem;
  background: #f7f5ef;
  overflow: hidden;
  position: relative;
  h1 {
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }
  img {
    position: absolute;
    height: 90%;
    bottom: 0;
    &.img-1 {
      right: 0;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    &.img-2 {
      left: 0;
      opacity: 0.5;
    }
  }
  a {
    color: #43290a;
    font-size: 1rem;
  }
  a.title-gray {
    color: gray;
  }

  @media screen and (max-width: 750px) {
    padding: 1rem;
  }
}
</style>
