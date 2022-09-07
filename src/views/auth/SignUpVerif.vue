<template>
  <verif-input-container
    :title="'Verification'"
    @submit-verif="submitting"
  ></verif-input-container>
</template>

<script>
import VerifInputContainer from "@/components/auth/VerifInputContainer.vue";

export default {
  components: { VerifInputContainer },
  methods: {
    async submitting(code) {
      try {
        await this.$store.dispatch("verifyCode", { code: code });
      } catch (error) {
        this.$iziToast.error({
          // title: "Error: ",
          message: error.message,
        });
        return;
      }
      this.$iziToast.success({
        // title: "Error: ",
        message: "تم تأكيد حسابك",
      });
      this.$router.push("/auth/login");
    },
  },
};
</script>
