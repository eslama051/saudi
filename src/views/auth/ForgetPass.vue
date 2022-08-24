<template>
  <div class="password-container" @submit.stop="submiting">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="password">
      <h4>Forget Your Password?</h4>
      <input type="text" placeholder="Email Address Or Mobile Number" />
      <button class="main-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submiting() {
      this.$router.push("/auth/Forget/password/veirf");
    },
  },
};
</script>
<style lang="scss" scoped>
.password-container {
  text-align: center;
  z-index: 2;
  img {
    margin-bottom: 1rem;
  }
}
.password {
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
  p {
    color: red;
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
    margin: 1rem;
    outline: none;
  }
  .main-btn {
    margin-top: 1rem;
    padding: 0.6rem 4rem;
  }
}
</style>
