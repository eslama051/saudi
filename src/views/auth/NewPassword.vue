<template>
  <div class="password-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="password" @submit.stop="submitting">
      <h4>Forget Your Password?</h4>
      <h4>Please Enter Your New Password</h4>
      <input type="text" placeholder="New Password" />
      <input type="text" placeholder="Confirm Newpassword" />
      <button class="main-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitting() {
      this.$router.push("/");
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
  h4 {
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
