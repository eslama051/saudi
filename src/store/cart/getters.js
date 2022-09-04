export default {
  cartAll(state) {
    return state.cart;
  },
  cartState(state) {
    return state.cartState;
  },
  cartQuantity(_, getters) {
    return getters.cartAll.data.items.reduce(
      (prev, curr) => curr.quantity + prev,
      0
    );
  },
  wishState(state) {
    return state.wishState;
  },
};
