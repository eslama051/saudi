import Vue from "vue";
import Vuex from "vuex";
import ProductsModule from "./products/";
import cartModule from "./cart/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule,
    cart: cartModule,
  },
  state: {
    isSignedIn: false,
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
