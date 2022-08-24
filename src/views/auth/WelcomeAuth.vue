<template>
  <div class="welcome-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <div class="welcome">
      <h1>أهلا بك</h1>
      <p>سجل الان و تمتع بمميزات و تجربة فريدة من نوعها</p>
      <router-link to="/auth/signup" class="main-btn">إنشاء حساب</router-link>
      <p>
        لديك حساب بالفعل؟
        <router-link class="signup-btn" to="/auth/login"
          >تسجيل الدخول</router-link
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-container {
  text-align: center;
  z-index: 2;
  img {
    margin-bottom: 1rem;
  }
}
.welcome {
  background: white;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  .signup-btn {
    color: black;
    font-weight: bold;
  }
}
</style>
