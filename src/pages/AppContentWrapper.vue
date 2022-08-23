<template>
  <div>
    <the-nav-bar></the-nav-bar>
    <router-view></router-view>
    <cart-component />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "@/components/layouts/TheFooter.vue";
import TheNavBar from "../components/layouts/TheNavBar.vue";
import CartComponent from "../components/cart/CartComponent.vue";
export default {
  // importing the navbar
  components: {
    TheNavBar,
    TheFooter,
    CartComponent,
  },
};
</script>
