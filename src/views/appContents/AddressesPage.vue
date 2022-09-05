<template>
  <section>
    <title-header title="العناوين" link="/addresses" />
    <div class="addresses-container container" v-if="addresses.length > 0">
      <addresses-item v-for="item in addresses" :key="item.id" :item="item" />
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
}
</style>
