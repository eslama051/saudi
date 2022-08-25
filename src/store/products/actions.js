export default {
  addToWished(context, id) {
    context.commit("addToWished", id);
  },
  removeFromWished(context, id) {
    context.commit("removeFromWished", id);
  },
};
