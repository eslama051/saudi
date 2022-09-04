import server from "@/apis/server";
import iziToast from "izitoast";

export default {
  addToFavs(context, payload) {
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
      });
  },
  removeFromWished(context, id) {
    context.commit("removeFromWished", id);
  },
};
