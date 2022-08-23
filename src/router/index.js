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

//Auth veiw
import SignIn from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";
import WelcomeAuth from "../views/auth/WelcomeAuth.vue";

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
    ],
  },
  {
    path: "/auth",
    component: AuthWrapper,
    children: [
      { path: "", component: WelcomeAuth },
      { path: "login", component: SignIn },
      { path: "signup", component: SignUp },
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
