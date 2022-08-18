<template>
  <header class="nav-bar-header">
    <nav>
      <div class="container p-0">
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
              <div class="cart">
                <font-awesome-icon icon="fa-shopping-cart" /><span>1</span>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/heart.svg" alt="" /></div>
            </li>
            <li>
              <div><img src="../../assets/images/user.svg" alt="" /></div>
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
  },
};
</script>
