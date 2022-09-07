<template>
  <div class="password-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="password" @submit.prevent="submitting">
      <h3>{{ title }}</h3>
      <h4>
        Please Enter The Code That Sent To Your Email Address Or Mobile Number
      </h4>
      <base-verif></base-verif>
      <h4 class="mt-2">Resndding Code After</h4>
      <h4>1:50</h4>
      <h4 class="resend-btn">Resend Code</h4>
      <button class="main-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["title"],
  emits: ["submit-verif"],
  methods: {
    submitting() {
      const inputElements = [...document.querySelectorAll("input.code-input")];
      const code = inputElements.map(({ value }) => value).join("");
      this.$emit("submit-verif", code);
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
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.3rem;
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
    padding: 0.4rem 4rem;
  }
  .resend-btn {
    cursor: pointer;
    font-weight: 600;
    color: rgb(27, 26, 26);
    &:hover {
      opacity: 0.6;
    }
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
