<template>
  <section>
    <title-header title="العناوين" link="/addresses" />
    <div class="addresses-container container" v-if="addresses.length > 0">
      <addresses-item v-for="item in addresses" :key="item.id" :item="item" />
    </div>
    <div class="new-address-btn-container">
      <router-link to="/addresses/create" class="new-address-btn main-btn"
        >إضافه عنوان جديد</router-link
      >
    </div>
  </section>
</template>

<script>
import AddressesItem from "../../components/addresses/AddressesItem.vue";
export default {
  components: {
    AddressesItem,
  },
  computed: {
    addresses() {
      return this.$store.getters.addresses;
    },
  },
  created() {
    this.$store.dispatch("getAddresses");
  },
};
</script>

<style lang="scss" scoped>
.addresses-container {
  padding: 4rem 0rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  row-gap: 1rem;
  flex-wrap: wrap;
}
.new-address-btn-container {
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .new-address-btn {
    a {
      text-align: center;
    }
  }
}
</style>
