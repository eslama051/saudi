<template>
  <div class="auth-page">
    <img
      class="img-1"
      src="../../assets/images/auth/freepik--floor--inject-42.png"
      alt=""
    />
    <img
      class="img-2"
      src="../../assets/images/auth/freepik--floor--inject-42.png"
      alt=""
    />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.auth-page {
  width: 100vw;
  min-height: 100vh;
  background: #fbf9f4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -2;

  img {
    position: fixed;
    &.img-1 {
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
    &.img-2 {
      bottom: 0;
      left: 0;
      transform: translate(-40%, 40%);
    }
  }
}
</style>
