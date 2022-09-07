<template>
  <transition>
    <div class="search-container" v-if="isSearchOpened" @click="closeSearch">
      <div class="search-box" @click.stop>
        <form action="" @submit.prevent="searchSubmit">
          <input type="text" placeholder="Search Here" v-model="seaechInput" />
          <span @click="clearSearchInput"><i class="fa fa-xmark"></i></span>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      seaechInput: "",
    };
  },
  computed: {
    isSearchOpened() {
      return this.$store.getters.isSearchOpened;
    },
  },
  methods: {
    closeSearch() {
      this.$store.dispatch("closeSearch");
    },
    clearSearchInput() {
      if (this.seaechInput != "") {
        this.seaechInput = "";
      } else {
        this.$store.dispatch("closeSearch");
      }
    },
    searchSubmit() {
      try {
        this.$store.dispatch("search", { keyword: this.seaechInput });
      } catch {
        console.log("smth went wrong");
        return;
      }
      this.seaechInput = "";
      this.closeSearch();
    },
  },
};
</script>
<style lang="scss" scoped>
.search-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .search-box {
    width: 80%;
    position: relative;
    input {
      font-size: 2rem;
      border: none;
      border-bottom: 2px solid gray;
      text-align: center;
      width: 100%;
      background: inherit;
      outline: none;
      color: white;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    span {
      position: absolute;
      top: -20%;
      right: 0;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        color: red;
      }
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
