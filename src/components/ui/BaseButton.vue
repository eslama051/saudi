<template>
  <span>
    <button class="base-button" @click="this.$emit('click')" v-if="!link">
      <font-awesome-icon icon="fa-arrow-left-long"></font-awesome-icon>
      {{ title }}
    </button>
    <router-link class="base-link" v-else :to="to">
      <font-awesome-icon icon="fa-arrow-left-long"></font-awesome-icon
      >{{ title }}</router-link
    >
  </span>
</template>

<script>
export default {
  props: ["title", "link", "to"],
  methods: {},
};
</script>

<style lang="scss" scoped>
.base-button,
.base-link {
  background: inherit;
  border: none;
  display: flex;
  column-gap: 1rem;
  align-items: center;
}
a {
  color: #43290a;
}
</style>
