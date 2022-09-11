export default {
  cartAll(state) {
    return state.cart;
  },
  cartState(state) {
    return state.cartState;
  },
  cartElements(_, getters) {
    if (!getters.cartAll.data) {
      return 0;
    }
    return getters.cartAll.data.items.length;
  },
  wishState(state) {
    return state.wishState;
  },
  walletState(state) {
    return state.walletState;
  },
  addresses(state) {
    return state.addresses;
  },
  searchResults(state) {
    return state.search;
  },
  filterState(state) {
    return state.filterState;
  },
};
