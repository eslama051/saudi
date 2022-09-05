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

  getCart(context) {
    server
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
  applyCoupon(context) {
    server
      .get("client/apply_coupon/saudi_marsheeh_2022", {
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
  openWallet(context) {
    context.commit("openWallet");
  },
  removeItem(context, payload) {
    server
      .delete(`client/delete_item/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res);
        context.commit("cart", res.data);
      });
  },
  updateItemQuantity(context, payload) {
    const formData = new FormData();
    formData.append("quantity", payload.quantity);
    server
      .post(`client/update_item_quantity/${payload.id}`, formData, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        context.commit("cart", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  refund(context, payload) {
    server
      .post("wallet/refund", payload, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        iziToast.error({
          message: `${res.data.message}`,
        });
      })
      .catch((err) => {
        console.log(err);
        throw new Error("smth went wrong come back late");
      });
  },
  getAddresses(context) {
    server
      .get("client/address", {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log("LOL =>", res.data.data);
        context.commit("addresses", res.data.data);
      });
  },
};
