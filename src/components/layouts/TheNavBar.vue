<template>
  <header class="nav-bar-header" id="nav-bar-header">
    <nav>
      <div class="container py-0 my-0">
        <div class="nav-wrapper">
          <span>
            <router-link to="/"
              ><img class="logo" src="../../assets/images/logo.svg" alt=""
            /></router-link>
          </span>
          <ul class="nav-links">
            <li>
              <router-link class="text-decoration-none" to="/"
                >الرئيسيه
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none" to="/about"
                >من نحن
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none" to="/offers"
                >العروض
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none" to="/competitions"
                >مسابقات و جوائز
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none" to="/contact"
                >اتصل بنا
              </router-link>
            </li>
          </ul>
          <ul class="nav-btns">
            <li v-if="!token">
              <router-link to="/auth">سجل الان</router-link>
            </li>
            <li @click="showSearch" v-if="token">
              <div><font-awesome-icon icon="fa-search" /></div>
            </li>
            <li v-if="token">
              <div @click="openCart" class="cart">
                <font-awesome-icon icon="fa-shopping-cart" /><span>{{
                  cartAmount()
                }}</span>
              </div>
            </li>
            <li v-if="token">
              <div @click="openWish">
                <!-- <img
                  class="nav-icon-img"
                  src="../../assets/images/heart.svg"
                  alt=""
                /> -->
                <i class="fa fa-heart"></i>
              </div>
            </li>
            <li v-if="token">
              <div @click="showProfile">
                <!-- <img
                  class="nav-icon-img"
                  src="../../assets/images/user.svg"
                  alt=""
                /> -->
                <i class="fa fa-user"></i>
              </div>
            </li>
          </ul>
          <div class="nav-toggle" @click="showNav">
            <font-awesome-icon icon="fa-bars" />
          </div>
          <ul class="nav-links-small" id="nav-link-small">
            <button class="close-nav" @click="toggleNav">
              <font-awesome-icon icon="fa-xmark"></font-awesome-icon>
            </button>
            <li>
              <router-link class="text-decoration-none link-small" to="/"
                >الرئيسيه
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none link-small" to="/about"
                >من نحن
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none link-small" to="/offers"
                >العروض
              </router-link>
            </li>
            <li>
              <router-link
                class="text-decoration-none link-small"
                to="/competitions"
                >مسابقات و جوائز
              </router-link>
            </li>
            <li>
              <router-link class="text-decoration-none link-small" to="/contact"
                >اتصل بنا
              </router-link>
            </li>
          </ul>
          <ul class="nav-btns-small" id="nav-btns-small">
            <li class="nav-btn">
              <router-link to="/auth">
                <i class="fa fa-user"></i>
                <h5>تسجيل</h5>
              </router-link>
            </li>
            <li class="nav-btn">
              <router-link to="/">
                <i class="fa-regular fa-circle-question"></i>
                <h5>تسجيل</h5>
              </router-link>
            </li>
            <li class="nav-btn nav-btn-home">
              <router-link to="/">
                <i class="fa-solid fa-house-chimney"></i>
                <h5>تسجيل</h5>
              </router-link>
            </li>
            <li class="nav-btn">
              <router-link to="/">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h5>تسجيل</h5>
              </router-link>
            </li>
            <li class="nav-btn">
              <router-link to="/">
                <i class="fa-solid fa-phone"></i>
                <h5>تسجيل</h5>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
  methods: {
    toggleNav() {
      document
        .getElementById("nav-link-small")
        .classList.remove("show-nav-small");
    },
    showNav() {
      document.getElementById("nav-link-small").classList.add("show-nav-small");
    },
    openCart() {
      this.$store.dispatch("openCart");
      document.body.style.overflowY = "hidden";
    },
    cartAmount() {
      return this.$store.getters.itemAmount;
    },
    openWish() {
      this.$store.dispatch("openWish");
      document.body.style.overflowY = "hidden";
    },
    showProfile() {
      document
        .getElementById("profile-component-container")
        .classList.add("show-profile");
      document.body.style.overflowY = "hidden";
    },
    showSearch() {
      this.$store.dispatch("openSearch");
    },
  },
  mounted() {
    document.querySelectorAll(".link-small").forEach((link) => {
      link.addEventListener("click", () => {
        document
          .getElementById("nav-link-small")
          .classList.remove("show-nav-small");
      });
    });
    document.addEventListener("scroll", () => {
      let Yposition = window.scrollY;
      if (Yposition >= 75) {
        document.getElementById("nav-bar-header").classList.add("nav-fixed");
        document
          .getElementById("nav-btns-small")
          .classList.add("nav-btns-small-show");
      } else {
        document.getElementById("nav-bar-header").classList.remove("nav-fixed");
        document
          .getElementById("nav-btns-small")
          .classList.remove("nav-btns-small-show");
      }
    });
  },
};
</script>
