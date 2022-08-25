export default {
  addItem(state, payload) {
    let newItem = payload.item;
    state.items = state.items.map((item) => {
      if (item.id != payload.id) {
        return item;
      }
      item.quantity += payload.quan;
      newItem = "";
      return item;
    });
    if (newItem) {
      state.items.push(newItem);
    }
  },
  closeCart(state) {
    state.cartState = false;
  },
  openCart(state) {
    state.cartState = true;
  },
  removeItem(state, id) {
    state.items = state.items.filter((item) => item.id != id);
  },
  decreaseItemQuantity(state, id) {
    state.items = state.items.map((item) => {
      if (item.id != id) {
        return item;
      }
      item.quantity--;
      return item;
    });
  },
  increaseItemQuantity(state, id) {
    state.items = state.items.map((item) => {
      if (item.id != id) {
        return item;
      }
      item.quantity++;
      return item;
    });
  },

  //wish login
  closeWish(state) {
    state.wishState = false;
  },
  openWish(state) {
    state.wishState = true;
  },
};
