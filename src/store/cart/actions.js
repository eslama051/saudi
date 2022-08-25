export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  closeCart(context) {
    context.commit("closeCart");
  },
  openCart(context) {
    context.commit("openCart");
  },
  removeItem(context, id) {
    context.commit("removeItem", id);
  },
  decreaseItemQuantity(context, id) {
    context.commit("decreaseItemQuantity", id);
  },
  increaseItemQuantity(context, id) {
    context.commit("increaseItemQuantity", id);
  },

  //wishlist logic
  closeWish(context) {
    context.commit("closeWish");
  },
  openWish(context) {
    context.commit("openWish");
  },
};
