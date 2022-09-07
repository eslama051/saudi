import router from "@/router";

export default {
  addItem(state, payload) {
    let newItem = payload.item;
    state.items = state.items.map((item) => {
      if (item.id != payload.item.id) {
        return item;
      }

      if (item.color == payload.item.color && item.size == payload.item.size) {
        item.quantity += payload.item.quantity;
        console.log(item.quantity);
        newItem = "";
        return item;
      }
      return item;
    });
    if (newItem) {
      state.items.push(newItem);
    }
  },

  cart(state, payload) {
    state.cart = payload;
  },
  closeCart(state) {
    state.cartState = false;
  },
  openCart(state) {
    state.cartState = true;
  },
  openWallet(state) {
    state.walletState = true;
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
  addresses(state, payload) {
    state.addresses = payload;
  },

  search(state, payload) {
    state.search = payload;
    if (router.currentRoute.fullPath == "/search/results") {
      return;
    }
    router.push("/search/results");
  },
};
