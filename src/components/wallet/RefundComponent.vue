<template>
  <div
    class="profile-component-container"
    id="refund-component-container"
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
      <form action="" @submit.prevent="submitForm">
        <input type="text" placeholder="إسم العميل" v-model.trim="clientName" />
        <input type="text" placeholder="إسم البنك" v-model.trim="bankName" />
        <input type="text" placeholder="فرع البنك" v-model.trim="bankBranch" />
        <input type="text" placeholder="رقم الحساب" v-model.trim="accNumber" />
        <input
          type="text"
          placeholder="رقم الإيبان"
          v-model.trim="ibanNumber"
        />
        <button class="main-btn">إرسال البيانات</button>
      </form>
    </div>
  </div>
</template>

<script>
import serve from "../../apis/server";
export default {
  data() {
    return {
      wallet: "",
      clientName: "",
      bankName: "",
      bankBranch: "",
      accNumber: "",
      ibanNumber: "",
    };
  },
  computed: {},
  methods: {
    hideProfile() {
      document
        .getElementById("refund-component-container")
        .classList.remove("show-profile");
      document.body.style.overflowY = "auto";
    },
    submitForm() {
      if (this.clientName == "") {
        this.$iziToast.error({
          message: "Please Enter your Name ",
        });
        return;
      }
      if (this.bankName == "") {
        this.$iziToast.error({
          message: "Please Enter your Bank Name ",
        });
        return;
      }
      if (this.bankBranch == "") {
        this.$iziToast.error({
          message: "Please Enter your Bank Name ",
        });
        return;
      }
      if (this.accNumber == "") {
        this.$iziToast.error({
          message: "Please Enter your Account Number ",
        });
        return;
      }
      if (this.ibanNumber == "") {
        this.$iziToast.error({
          message: "Please Enter your Iban Number ",
        });
        return;
      }
      const formdata = new FormData();
      formdata.append("client_name", this.clientName);
      formdata.append("bank_name", this.bankName);
      formdata.append("bank_branch", this.bankBranch);
      formdata.append("account_number", this.accNumber);
      formdata.append("iban_number", this.ibanNumber);
      try {
        this.$store.dispatch("refund", formdata);
      } catch (err) {
        this.$iziToast.error({
          message: err.message,
        });
        return;
      }
      this.clientName = "";
      this.bankBranch = "";
      this.bankName = "";
      this.accNumber = "";
      this.ibanNumber = "";
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
  margin: 1rem 0rem;
  border-radius: 10px;
  .wallet {
    font-weight: bold;
  }
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  input {
    border: none;
    background: inherit;
    border-bottom: 1px solid rgba(143, 140, 140, 0.2);
    padding: 0.5rem 1rem;
    text-align: right;
    outline: none;
  }
  .main-btn {
    margin-top: 1rem;
    align-self: center;
    padding: 0.3rem 3rem;
  }
}
</style>
