export default {
  items(state) {
    return state.items;
  },
  cartState(state) {
    return state.cartState;
  },
  itemAmount(state) {
    return state.items.reduce((prev, curr) => curr.quantity + prev, 0);
  },
};
