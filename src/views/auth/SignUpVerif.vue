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
    submitting() {
      this.$router.push("/");
    },
  },
};
</script>
