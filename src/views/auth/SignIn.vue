<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="login" @submit.prevent="signingIn">
      <h4>Sign In To Your Account</h4>
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
    <div class="btns">
      <a class="flow-btn"
        ><img src="../../assets/images/auth/googleBtn.png" alt=""
      /></a>
      <a class="flow-btn"
        ><img src="../../assets/images/auth/facebookBtn.png" alt=""
      /></a>
    </div>

    <p>
      Don't You Have An Account?
      <span
        ><router-link class="signup-btn" to="/auth/signup"
          >Sign Up</router-link
        ></span
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
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
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  text-align: center;
  z-index: 2;
  img {
    margin-bottom: 1rem;
  }
}
.login {
  //   background: white;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  h1 {
    margin-bottom: 1rem;
  }
  a {
    color: red;
    display: inline-block;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  input {
    background: inherit;
    padding: 0.8rem 2rem;
    border-radius: 20px;
    width: 100%;
    border: 1px solid gray;
    margin-bottom: 1rem;
  }
  .main-btn {
    margin-top: -1rem;
    padding: 0.6rem 4rem;
  }
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 2rem;
  a {
    cursor: pointer;
    img {
      display: block;
      width: 100%;
    }
  }
}

.signup-btn {
  color: black;
  font-weight: bold;
  margin-left: 1rem;
}
</style>
