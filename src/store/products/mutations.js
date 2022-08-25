export default {
  addToWished(state, id) {
    state.latest = state.latest.map((item) => {
      if (item.id == id) {
        item.wished = true;
      }
      return item;
    });

    //  state.mostSelled.forEach((item) => {
    //    if (item.id == id) {
    //      item.wished = true;
    //    }
    //  });
  },
};
