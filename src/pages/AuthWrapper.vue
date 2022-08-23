<template>
  <div>
    <auth-container>
      <router-view></router-view>
    </auth-container>
  </div>
</template>
<script>
import AuthContainer from "../components/auth/AuthContainer.vue";
export default {
  components: {
    AuthContainer,
  },
};
</script>
