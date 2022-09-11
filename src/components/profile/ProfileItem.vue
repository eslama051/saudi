<template>
  <div @click="hideProfile">
    <router-link class="profile-body-item" :to="link" v-if="link">
      <div class="profile-item-icon-container">
        <div class="profile-item-icon-icon-container">
          <i :class="`fa fa-${icon}`"></i>
        </div>
        <h4>{{ title }}</h4>
      </div>
      <i class="fa-solid fa-angle-left"></i>
    </router-link>
    <button
      class="profile-body-item"
      @click="() => this.$emit('clicked-item')"
      :to="link"
      v-else
    >
      <div class="profile-item-icon-container">
        <div class="profile-item-icon-icon-container">
          <i :class="`fa fa-${icon}`"></i>
        </div>
        <h4>{{ title }}</h4>
      </div>
      <i class="fa-solid fa-angle-left"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "link"],
  methods: {
    hideProfile() {
      document
        .getElementById("profile-component-container")
        .classList.remove("show-profile");
      document.body.style.overflowY = "auto";
    },
  },
};
</script>
