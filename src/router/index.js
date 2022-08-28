import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// pages
import AppContentWrapper from "../pages/AppContentWrapper.vue";
import AuthWrapper from "../pages/AuthWrapper.vue";

// contents views
import HomePage from "../views/appContents/HomePage.vue";
import AboutPage from "../views/appContents/AboutPage.vue";
import OffersPage from "../views/appContents/OffersPage.vue";
import CompetitionsPage from "../views/appContents/CompetitionsPage.vue";
import ContactPage from "../views/appContents/ContactPage.vue";
import ProductDetails from "../views/appContents/ProductDetails.vue";
import MyOrders from "../views/appContents/MyOrders.vue";
import AccountDetails from "../views/appContents/AccountDetails.vue";

//Auth veiw
import SignIn from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";
import WelcomeAuth from "../views/auth/WelcomeAuth.vue";
import SignUpVerif from "../views/auth/SignUpVerif.vue";
import ForgetPass from "../views/auth/ForgetPass.vue";
import ForgetPassVerif from "../views/auth/ForgetPassVerif.vue";
import NewPass from "../views/auth/NewPassword.vue";

// not found
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: AppContentWrapper,
    children: [
      { path: "", component: HomePage },
      { path: "about", component: AboutPage },
      { path: "offers", component: OffersPage },
      { path: "competitions", component: CompetitionsPage },
      { path: "contact", component: ContactPage },
      { path: "product-details/:id", component: ProductDetails, props: true },
      { path: "orders", component: MyOrders },
      { path: "account/details", component: AccountDetails },
    ],
  },
  {
    path: "/auth",
    component: AuthWrapper,
    children: [
      { path: "", component: WelcomeAuth },
      { path: "login", component: SignIn },
      { path: "signup", component: SignUp },
      { path: "signup/verif", component: SignUpVerif },
      { path: "ForgetPass", component: ForgetPass },
      { path: "Forget/password", component: ForgetPass },
      { path: "Forget/password/veirf", component: ForgetPassVerif },
      { path: "newpassword", component: NewPass },
    ],
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active-link",
});

export default router;
