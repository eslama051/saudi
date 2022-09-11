<template>
  <div>
    <the-nav-bar></the-nav-bar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <cart-component />
    <wish-list />
    <profile-component />
    <wallet-component />
    <refund-component />
    <search-box />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "@/components/layouts/TheFooter.vue";
import TheNavBar from "../components/layouts/TheNavBar.vue";
import CartComponent from "../components/cart/CartComponent.vue";
import WishList from "../components/wishlist/WishList.vue";
import ProfileComponent from "../components/profile/ProfileComponent.vue";
import WalletComponent from "../components/wallet/WalletComponent.vue";
import RefundComponent from "../components/wallet/RefundComponent.vue";
import SearchBox from "../components/search/SearchBox.vue";
export default {
  // importing the navbar
  components: {
    TheNavBar,
    TheFooter,
    CartComponent,
    WishList,
    ProfileComponent,
    SearchBox,
    WalletComponent,
    RefundComponent,
  },
  created() {
    this.$store.dispatch("getCart");
    this.$store.dispatch("getFavs");
    this.$store.dispatch("getProfile");
  },
};
</script>

<style lang="scss" scoped></style>
