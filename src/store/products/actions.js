import server from "@/apis/server";
import iziToast from "izitoast";

export default {
  toggleToFavs(context, payload) {
    const formData = new FormData();
    formData.append("product_id", payload.id);
    server
      .post("client/favorite_products", formData, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res.data.message);
        iziToast.success({
          message: `${res.data.message}`,
        });
        new Audio(require("../../assets/audio/anya.mp3")).play();
        context.dispatch("getFavs");
      });
  },
  getFavs(context) {
    server
      .get("client/favorite_products", {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        context.commit("favs", res.data.data);
      });
  },
  removeFromWished(context, id) {
    context.commit("removeFromWished", id);
  },
  sendRate(context, payload) {
    server
      .post("client/rating", payload, {
        headers: {
          Authorization: `Bearer ${context.rootState.auth.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res);
        iziToast.success({
          message: "rate sended",
        });
      });
  },
};
