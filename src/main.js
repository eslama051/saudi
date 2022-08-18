import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// //import main scss
import "./assets/scss/main.scss";

//bootstrap vue

// import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(BootstrapVue);
// Vue.use(BootstrapVueIcons);

//font awesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUserSecret,
  faHeart,
  faCoffee,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faUserSecret,
  faSearch,
  faShoppingCart,
  faHeart,
  faCoffee,
  faUser,
  faBars,
  faXmark
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/js/bootstrap.js";
