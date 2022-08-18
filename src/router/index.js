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
    ],
  },
  { path: "/auth", component: AuthWrapper },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active-link",
});

export default router;
