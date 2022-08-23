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
  },
  getters: {
    isSignedIn(state) {
      return state.isSignedIn;
    },
  },
  mutations: {},
  actions: {},
});
