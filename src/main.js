import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// //import main scss
import "./assets/scss/main.scss";

//

import owlCarousel from "vue-owl-carousel2";
Vue.component("owl-carousel", owlCarousel);

//base button
import BaseButton from "./components/ui/BaseButton.vue";
Vue.component("base-button", BaseButton);

//base carousel
import BaseCarousel from "./components/ui/BaseCarousel.vue";
Vue.component("base-carousel", BaseCarousel);

//base footer
import TheFooter from "./components/layouts/TheFooter.vue";
Vue.component("the-footer", TheFooter);

//base verif Input
import BaseVerifInput from "./components/ui/BaseVerifInput.vue";
Vue.component("base-verif", BaseVerifInput);

//title Header
import TitleHeader from "./components/ui/TitleHeader.vue";
Vue.component("title-header", TitleHeader);

// START:: IMPORTING FONT AWESOME
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// END:: IMPORTING FONT AWESOME

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
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faUserSecret,
  faSearch,
  faShoppingCart,
  faHeart,
  faCoffee,
  faUser,
  faBars,
  faXmark,
  faFacebookF,
  faInstagram,
  faTwitter,
  faArrowLeftLong
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/js/bootstrap.js";
