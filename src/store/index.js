import Vue from "vue";
import Vuex from "vuex";
import authModule from "./auth/";
import ProductsModule from "./products/";
import cartModule from "./cart/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    products: ProductsModule,
    cart: cartModule,
  },
  state: {
    isSearchOpened: false,
  },
  getters: {
    isSignedIn(state) {
      return state.isSignedIn;
    },
    isSearchOpened(state) {
      return state.isSearchOpened;
    },
  },
  mutations: {
    openSearch(state) {
      state.isSearchOpened = true;
    },
    closeSearch(state) {
      state.isSearchOpened = false;
    },
  },
  actions: {
    openSearch(context) {
      context.commit("openSearch");
    },
    closeSearch(context) {
      context.commit("closeSearch");
    },
  },
});
