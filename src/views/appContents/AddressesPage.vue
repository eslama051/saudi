<template>
  <section>
    <base-model v-if="isDeleteModel" @close-login-model="closeModel">
      <h1>هل انت متاكد؟</h1>
      <div class="model-btn">
        <button @click="closeModel">إلغاء</button>
        <button class="model-del-btn" @click="deleteConfirming">حذف</button>
      </div>
    </base-model>

    <title-header title="العناوين" link="/addresses" />
    <div class="addresses-container container">
      <div v-if="addresses.length > 0">
        <addresses-item
          v-for="item in addresses"
          @delete-item="deleteItem"
          :key="item.id"
          :item="item"
        />
      </div>
      <div v-else class="no-addresses-container">
        <h1>لا يوجد عنوانين مسجله</h1>
        <h2>يمكنك إضافه عنوان</h2>
      </div>
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
  data() {
    return {
      isDeleteModel: false,
      id: null,
    };
  },
  components: {
    AddressesItem,
  },
  computed: {
    addresses() {
      return this.$store.getters.addresses;
    },
  },
  methods: {
    deleteItem(id) {
      this.id = id;
      this.isDeleteModel = true;
    },
    deleteConfirming() {
      try {
        this.$store.dispatch("deleteAddress", { id: this.id });
      } catch {
        return;
      }
      this.closeModel();
    },
    closeModel() {
      this.isDeleteModel = false;
    },
  },
  created() {
    this.$store.dispatch("getAddresses");
  },
};
</script>

<style lang="scss" scoped>
.addresses-container {
  > div {
    padding-top: 3rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    row-gap: 1rem;
    flex-wrap: wrap;
  }

  .no-addresses-container {
    display: block;
    text-align: center;
    h1 {
      color: #43290a;
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    h2 {
      color: gray;
      font-size: 1.5rem;
    }
  }
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
.model-btn {
  margin-top: 3rem;
  button {
    padding: 0.4rem 3rem;
    border-radius: 20px;
    text-align: center;
    margin: 1rem;
    color: white;
    border: none;
    background: #43290a;
    transition: all 0.3s;
    &.model-del-btn {
      box-shadow: 0px 0px 9px 0px rgba(255, 14, 14, 0.75);
      background: #fa4248;
    }
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
