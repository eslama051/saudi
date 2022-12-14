export default {
  userData(state, payload) {
    state.user_data = payload;
  },
  signin(state) {
    state.token = localStorage.getItem("saudi_marche_user_token");
    state.user_name = localStorage.getItem("saudi_marche_user_name");
    state.user_avatar = localStorage.getItem("saudi_marche_user_avatar");
    state.user_type = localStorage.getItem("saudi_marche_user_type");
  },
  getProfile(state, payload) {
    localStorage.setItem("saudi_marche_user_name", payload.user_name);
    localStorage.setItem("saudi_marche_user_avatar", payload.image);

    localStorage.getItem("saudi_marche_user_type", payload.user_type);
  },
  signOut(state) {
    localStorage.clear();
    state.token = "";
    state.user_name = "";
    state.user_avatar = "";
    state.user_type = "";
    document.body.style.overflowY = "auto";
  },
};
