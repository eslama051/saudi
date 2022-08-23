<template>
  <header class="nav-bar-header">
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
            <li><router-link to="/auth">سجل الان</router-link></li>
            <li>
              <div><font-awesome-icon icon="fa-search" /></div>
            </li>
            <li>
              <div @click="openCart" class="cart">
                <font-awesome-icon icon="fa-shopping-cart" /><span>{{
                  cartAmount()
                }}</span>
              </div>
            </li>
            <li>
              <div>
                <img
                  class="nav-icon-img"
                  src="../../assets/images/heart.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  class="nav-icon-img"
                  src="../../assets/images/user.svg"
                  alt=""
                />
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
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
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
    },
    cartAmount() {
      return this.$store.getters.itemAmount;
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
    console.log(this.$store.getters.itemAmount);
  },
};
</script>
