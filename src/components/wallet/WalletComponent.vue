<template>
  <div
    class="profile-component-container"
    id="wallet-component-container"
    @click="hideProfile"
  >
    <div class="profile-component" @click.stop>
      <span @click="hideProfile" class="close-profile"
        ><i class="fa fa-xmark"></i
      ></span>

      <h3>رصيد الحساب</h3>
      <div class="wallet-data">
        <h5>رصيدك هو</h5>
        <h5 class="wallet">
          <span>{{ wallet }}</span> ر.س
        </h5>
      </div>
      <button class="main-btn" @click="showRefund">طلب استرداد المبلغ</button>
    </div>
  </div>
</template>

<script>
import serve from "../../apis/server.js";
export default {
  data() {
    return {
      wallet: "",
    };
  },
  computed: {},
  methods: {
    hideProfile() {
      document
        .getElementById("wallet-component-container")
        .classList.remove("show-profile");
      document.body.style.overflowY = "auto";
    },
    showRefund() {
      document
        .getElementById("refund-component-container")
        .classList.add("show-profile");
      document.body.style.overflowY = "hidden";
      this.hideProfile();
    },
  },
  created() {
    serve
      .get("wallet", {
        headers: {
          Authorization: `Bearer ${this.$store.getters.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        this.wallet = res.data.data.wallet;
      });
  },
};
</script>
<style lang="scss" scoped>
.wallet-data {
  padding: 2rem;
  background: #eee9db;
  margin: 3rem 0rem;
  border-radius: 10px;
  .wallet {
    font-weight: bold;
  }
}
</style>
