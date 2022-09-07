<template>
  <transition name="fade">
    <div class="model_container" @click="closeLoginModel">
      <dialog class="model" open @click.stop>
        <slot></slot>
      </dialog>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["close-login-model"],
  methods: {
    closeLoginModel() {
      this.$emit("close-login-model");
    },
  },
};
</script>

<style lang="scss" scoped>
.model_container {
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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  .model {
    justify-self: center;
    margin: 0rem auto;

    padding: 1.5rem;
    width: 80%;
    max-width: 30rem;
    border-radius: 10px;
    border: 1px solid rgb(177, 169, 169);
    margin-top: -10rem;
    text-align: center;
    background: #f7f5ef;
    color: #43290a;
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
      padding: 0.3rem 2rem;
    }
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
}
</style>
