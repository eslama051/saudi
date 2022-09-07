import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

mutations;

export default {
  state: {
    cartState: false,
    wishState: false,
    cart: {},
    walletState: false,
    addresses: [],
    search: [],
  },
  mutations,
  actions,
  getters,
};
