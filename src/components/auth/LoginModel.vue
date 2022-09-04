<template>
  <div class="login_model_container" @click="closeLoginModel">
    <dialog class="login_model" open @click.stop>
      <button class="close-btn" @click="closeLoginModel">
        <i class="fa fa-xmark"></i>
      </button>
      <form class="login" @submit.prevent="signingIn">
        <h4>need to sign in first</h4>
        <input
          type="text"
          placeholder="Email Address Or Mobile Number"
          v-model.trim="phone"
        />
        <input type="password" placeholder="Password" v-model="password" />
        <router-link to="/auth/forget/password"
          >Forget Your Password!</router-link
        >
        <button class="main-btn">Sign In</button>
      </form>

      <p>
        Don't You Have An Account?
        <span
          ><router-link class="signup-btn" to="/auth/signup"
            >Sign Up</router-link
          ></span
        >
      </p>
    </dialog>
  </div>
</template>

<script>
export default {
  emit: ["close-login-model"],
  methods: {
    closeLoginModel() {
      this.$emit("close-login-model");
    },
    async signingIn() {
      if (this.phone == "") {
        this.$iziToast.error({
          message: "بالرجاء ادخال رقم الهاتف",
        });
        return;
      }
      if (this.password == "") {
        this.$iziToast.error({
          message: "كلمه السر غير صحيحه",
        });
        return;
      }
      const formData = new FormData();
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("device_token", "token");
      formData.append("type", "ios");
      try {
        await this.$store.dispatch("signin", formData);
      } catch (error) {
        this.$iziToast.error({
          message: error.message,
        });
        return;
      }
      this.$iziToast.success({
        message: "تم الدخول",
      });
      this.closeLoginModel();
    },
  },
};
</script>

<style lang="scss" scoped>
.login_model_container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  /* background: yellowgreen; */
  .login_model {
    justify-self: center;
    margin: 0rem auto;
    padding: 1rem;
    width: 80%;
    max-width: 30rem;
    border-radius: 20px;
    border: 1px solid gray;
    margin-top: -10rem;
    text-align: center;
    a {
      font-weight: bold;
      color: black;
    }
    .login {
      a {
        color: red;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 1rem;
      margin-bottom: 1rem;
      input {
        width: 90%;
        max-width: 20rem;
        padding: 0.5rem;
        border: none;
        background: #f7f5ef;
        border-radius: 10px;
      }
      h4 {
        text-transform: capitalize;
        color: #43290a;
      }
    }
    .close-btn {
      position: absolute;
      top: 0.5rem;
      left: 1rem;
      cursor: pointer;
      border: none;
      background: inherit;
      font-size: 1.5rem;
      transition: all 0.3s;
      &:hover {
        color: red;
        transform: rotate(90deg);
      }
    }
    .main-btn {
      padding: 0.3rem 1rem;
    }
  }
}
</style>
