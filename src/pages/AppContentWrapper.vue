<template>
  <div>
    <the-nav-bar></the-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavBar from "../components/layouts/TheNavBar.vue";
export default {
  // importing the navbar
  components: {
    TheNavBar,
  },
};
</script>
