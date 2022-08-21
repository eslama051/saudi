import Vue from "vue";
import Vuex from "vuex";
import ProductsModule from "./products/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule,
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
