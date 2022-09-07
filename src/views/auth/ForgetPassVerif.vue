<template>
  <verif-input-container
    :title="'Forget Your Password?'"
    @submit-verif="verifing"
  ></verif-input-container>
</template>

<script>
import VerifInputContainer from "@/components/auth/VerifInputContainer.vue";

export default {
  components: { VerifInputContainer },
  methods: {
    verifing(code) {
      if (code == "") {
        this.$ziToast.error({
          message: "حقل الكود فارغ",
        });
        return;
      }
      this.$store.dispatch("checkCode", { code });
      // this.$router.push("/auth/newpassword");
    },
  },
};
</script>
