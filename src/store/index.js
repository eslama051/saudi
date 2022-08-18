import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
  modules: {},
});
