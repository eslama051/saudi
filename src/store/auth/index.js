import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  state: {
    isSignedIn: false,
    token: localStorage.getItem("saudi_marche_user_token") || "",
    user_name: localStorage.getItem("saudi_marche_user_name") || "",
    user_avatar:
      localStorage.getItem("saudi_marche_user_avatar") ||
      "https://khlod.aait-d.com/saudi_marsheeh/public/dashboardAssets/images/backgrounds/avatar.jpg",
    user_type: "",
    user_data: null,
  },
  mutations,
  actions,
  getters,
};
