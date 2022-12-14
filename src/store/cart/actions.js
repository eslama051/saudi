import server from "@/apis/server";
import router from "@/router";

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
  closeFilter(context) {
    context.commit("closeFilter");
  },
  openFilter(context) {
    context.commit("openFilter");
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
        context.commit("addresses", res.data.data);
      });
  },
  createOrder(context, payload) {
    server
      .post("client/client_order", payload, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        iziToast.success({
          message: res.data.message,
        });
        router.push("/checkout/payment-card-info");
      })
      .catch((err) => {
        iziToast.error({
          message: err.response.data.message,
        });
      });
  },
  editAddress(context, payload) {
    server
      .put(`client/address/${payload.id}`, payload.object, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        iziToast.success({
          message: res.data.message,
        });
        router.push("/addresses");
      });
  },
  addAddress(context, payload) {
    server
      .post("client/address", payload, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        iziToast.success({
          message: res.data.message,
        });
        router.push("/addresses");
      });
  },
  deleteAddress(context, payload) {
    server
      .delete(`client/address/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        context.commit("addresses", res.data.data);
        iziToast.success({
          message: "???? ?????? ?????????????? ??????????",
        });
      })
      .catch(() => {
        throw new Error("smth went wrong");
      });
  },
  search(context, payload) {
    server
      .get("search", {
        params: {
          keyword: payload.keyword,
          type: false,
        },
      })
      .then((res) => {
        context.commit("search", res.data.data);
      })
      .catch((error) => {
        iziToast.error({
          message: error.response.data.message || "smth is quite missing ",
        });
      });
  },
};
