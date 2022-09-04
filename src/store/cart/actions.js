import server from "@/apis/server";
import iziToast from "izitoast";
export default {
  addItem(context, payload) {
    server
      .post("client/add_item", payload, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        new Audio(require("../../assets/audio/mangkeyou_sharingan.mp3")).play();
        iziToast.success({
          message: `${res.data.message}`,
        });
        context.dispatch("getCart");
      })
      .catch((err) => {
        iziToast.error({
          message: `${err.response.data.message}`,
        });
      });
  },

  async getCart(context) {
    await server
      .get("client/get_cart", {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        context.commit("cart", res.data);
      });
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
