<template>
  <span>
    <button
      class="base-button"
      @click="this.$emit('click')"
      :class="reverse"
      v-if="!link"
    >
      <font-awesome-icon :icon="`fa-arrow-${dir}-long`"> </font-awesome-icon>
      {{ title }}
    </button>
    <router-link class="base-link" v-else :to="to">
      <font-awesome-icon icon="fa-arrow-left-long"> </font-awesome-icon
      >{{ title }}</router-link
    >
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: Boolean,
      default: false,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    dir: {
      type: String,
      required: false,
      default: "left",
    },
    reverse: {
      type: String,
      required: false,
    },
  },
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
  &:hover {
    color: gray;
  }
}
.reverse {
  flex-direction: row-reverse;
}
</style>
