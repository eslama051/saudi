<template>
  <div class="password-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="password" @submit.prevent="submitting">
      <h4>Forget Your Password?</h4>
      <h4>Please Enter Your New Password</h4>
      <input type="password" placeholder="New Password" v-model="password" />
      <input
        type="password"
        placeholder="Confirm Newpassword"
        v-model="confirmPassword"
      />
      <button class="main-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitting() {
      if (this.password == "") {
        this.$iziToast.error({
          message: "حقل كلمه السر  لا يمكن فارغ",
        });
        return;
      }
      if (this.confirmPassword == "") {
        this.$iziToast.error({
          message: "حقل تاكيد السر لا يمكن فارغ",
        });
        return;
      }
      if (this.password != this.confirmPassword) {
        this.$iziToast.error({
          message: "كلمه السر لا تنطبق",
        });
        return;
      }
      this.$store.dispatch("resetPassword", { password: this.password });
      // this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.password-container {
  text-align: center;
  z-index: 1;
  img {
    margin-bottom: 1rem;
  }
}
.password {
  //   background: white;
  padding: 1rem 4rem;
  text-align: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  h1 {
    // margin-bottom: 1rem;
  }
  h4 {
    font-size: 1rem;
    letter-spacing: 2px;
  }
  p {
    color: red;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  input {
    background: inherit;
    padding: 0.5rem 2rem;
    border-radius: 20px;
    width: 100%;
    max-width: 25rem;
    border: 1px solid gray;
    margin: 0.5rem;
    outline: none;
  }
  .main-btn {
    margin-top: 0.6rem;
    padding: 0.3rem 4rem;
  }

  @media screen and (max-width: 880px) {
    h1 {
      font-size: 1.7rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
}
</style>
