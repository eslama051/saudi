<template>
  <div class="password-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="password" @submit.prevent="submiting">
      <h4>Forget Your Password?</h4>
      <input
        type="text"
        placeholder="Email Address Or Mobile Number"
        v-model="phoneNumber"
      />
      <button class="main-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    submiting() {
      if (this.phoneNumber == "") {
        this.$iziToast.error({
          message: "حقل الهاتف فارغه",
        });
        return;
      }
      const formData = new FormData();
      formData.append("phone", this.phoneNumber);

      this.$store.dispatch("forgotPassword", formData);

      localStorage.setItem("suadi_phone", this.phoneNumber);
    },
  },
};
</script>
<style lang="scss" scoped>
.password-container {
  text-align: center;
  z-index: 2;
  background: white;
  padding: 1rem 2rem;
  border-radius: 20px;
  width: 80%;
  max-width: 35rem;
  img {
    margin-bottom: 1rem;
  }
}
.password {
  //   background: white;
  padding: 2rem 1rem;
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
  p {
    color: red;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  input {
    background: inherit;
    padding: 0.8rem 1rem;
    // border-radius: 20px;
    width: 100%;
    border: none;
    border-bottom: 2px solid gray;
    margin: 1rem;
    outline: none;
  }
  .main-btn {
    margin-top: 1rem;
    padding: 0.5rem 3.5rem;
  }
}
</style>
