export default {
  categories(state) {
    return state.categories;
  },
  latest(state) {
    return state.latest;
  },
  mostSelled(state) {
    return state.mostSelled;
  },
  product: (state) => (id) => {
    return state.mostSelled.find((item) => item.id == id);
  },

  wished(state) {
    return state.wished;
  },
};
