import Vue from "vue";

export default {
  favs(state, payload) {
    state.favs = payload;
  },
  removeFromWished(state, id) {
    state.latest.forEach((item) => {
      if (item.id == id) {
        Vue.set(item, "wished", false);
      }
      return item;
    });

    state.mostSelled.forEach((item) => {
      if (item.id == id) {
        Vue.set(item, "wished", false);
      }
      return item;
    });
    state.wished = state.wished.filter((item) => {
      return item.id != id;
    });
  },
};

// addToWished(state, id) {
//   let newItem = null;
//   state.latest.forEach((item) => {
//     if (item.id == id) {
//       Vue.set(item, "wished", true);
//       newItem = item;
//     }
//     return item;
//   });

//   state.mostSelled.forEach((item) => {
//     if (item.id == id) {
//       Vue.set(item, "wished", true);
//       newItem = item;
//     }
//     return item;
//   });
//   state.wished.push(newItem);
// },
