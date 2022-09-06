<template>
  <div @click="closeDropdowns">
    <title-header title="الدفع" link="/checkout" />
    <form class="checkout-container container" @submit.prevent="submitForm">
      <h2>بيانات العميل</h2>
      <input type="text" placeholder="إسم العميل" v-model.trim="clientName" />
      <input type="text" placeholder="رقم الجوال" v-model.trim="clientNumber" />
      <div class="dropdown">
        <input
          type="text"
          placeholder="طريقه الدفع"
          @click.stop="showDropdown('paymentMethods')"
          v-model="selectedPaymentMethod"
        />
        <ul v-if="isPaymentMethods">
          <li @click="selecetPaymentMethod('كاش')" class="active">كاش</li>
          <li @click="selecetPaymentMethod('بطاقة إئتمانية')">
            بطاقة إئتمانية
          </li>
          <li @click="selecetPaymentMethod('محفظة')">محفظة</li>
        </ul>
      </div>
      <div class="dropdown">
        <input
          type="text"
          placeholder="طريقه الشحن"
          @click.stop="showDropdown('shipmentMethods')"
          v-model="selecetedShipmentMethod.name"
        />
        <ul v-if="isShipmentMethods">
          <li
            v-for="item in shippingTypes"
            :key="item.id"
            @click="selecetShipmentMethod(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <h2>العناوين المسجلة</h2>
      <div class="addresses-container">
        <div
          class="addresses-item"
          v-for="item in addresses"
          :key="item.id"
          @click="selecetAddress(item)"
          :class="selecetedAddress.id == item.id ? 'active' : ''"
        >
          <div>
            <h2>{{ item.name }}</h2>
            <h3>{{ item.address }}</h3>
          </div>
          <div class="addresses-item-btn"></div>
        </div>
      </div>
      <button class="main-btn">إرسال</button>
    </form>
  </div>
</template>

<script>
import server from "../../apis/server";
export default {
  data() {
    return {
      clientName: "",
      clientNumber: "",
      isPaymentMethods: false,
      isShipmentMethods: false,
      shippingTypes: [],
      selectedPaymentMethod: "",
      selecetedShipmentMethod: "",
      selecetedAddress: "",
    };
  },

  computed: {
    addresses() {
      return this.$store.getters.addresses;
    },
  },

  methods: {
    showDropdown(type) {
      if (type == "paymentMethods") {
        this.isPaymentMethods = true;
        this.isShipmentMethods = false;
      }
      if (type == "shipmentMethods") {
        this.isShipmentMethods = true;
        this.isPaymentMethods = false;
      }
    },
    closeDropdowns() {
      this.isPaymentMethods = false;
      this.isShipmentMethods = false;
    },
    closeDropdown(type) {
      if (type == "paymentMethods") {
        this.isPaymentMethods = false;
      }
      if (type == "shipmentMethods") {
        this.isShipmentMethods = false;
      }
    },
    selecetShipmentMethod(item) {
      this.selecetedShipmentMethod = item;
    },
    selecetPaymentMethod(item) {
      this.selectedPaymentMethod = item;
    },
    selecetAddress(item) {
      this.selecetedAddress = item;
    },
    submitForm() {
      if (this.clientName == "") {
        this.$iziToast.error({
          message: "يرجي إدراج الإسم",
        });
        return;
      }
      if (this.clientNumber == "") {
        this.$iziToast.error({
          message: "يرجي إدراج الرقم",
        });
        return;
      }
      if (this.selecetedPaymentMethod == "") {
        this.$iziToast.error({
          message: "يرجي إختيار طريقه الدفع",
        });
        return;
      }
      if (this.selecetedShipmentMethod == "") {
        this.$iziToast.error({
          message: "يرجي إختيار طريقه الإرسال",
        });
        return;
      }
      if (this.selecetedAddress == "") {
        this.$iziToast.error({
          message: "يرجي إختيار العنوان",
        });
        return;
      }
      console.log(this.selecetedShipmentMethod);
      const formData = new FormData();
      formData.append("phone", this.clientNumber);
      formData.append("client_name", this.clientName);
      formData.append("pay_type", "cash");
      formData.append("shipping_type_id", this.selecetedShipmentMethod.id);
      formData.append("address_id", this.selecetedAddress.id);
      this.$store.dispatch("createOrder", formData);
    },
  },
  created() {
    server
      .get("shipping_type", {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        this.shippingTypes = res.data.data;
      });
    this.$store.dispatch("getAddresses");
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  color: #43290a;
  text-align: right;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  input {
    border: none;
    border-bottom: 1px solid rgba(156, 150, 150, 0.2);
    width: 100%;
    outline: none;
    text-align: right;
    padding: 0.5rem 0rem;
    color: #43290a;
  }
  .dropdown {
    position: relative;
    ul {
      margin-top: 0.2rem;
      position: absolute;
      top: 100%;
      z-index: 5;
      text-align: right;
      width: 100%;
      //   padding: 0.5rem 0rem;
      border: 1px solid rgba(156, 150, 150);
      overflow: hidden;
      border-radius: 10px;
      li {
        padding: 0.5rem 1rem;
        background: white;
        cursor: pointer;
        transition: all 0.2s;
        &:hover,
        &.active {
          background: #43290a;
          color: white;
        }
      }
    }
  }
  .main-btn {
    align-self: center;
    padding: 0.3rem 5rem;
  }
  .addresses-container {
    margin-bottom: 1.5rem;
    .addresses-item {
      // border: 1px solid #43290a;
      padding: 0.2rem 1rem;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      cursor: pointer;

      h2 {
        font-size: 1.5rem;
      }
      h3 {
        color: gray;
        font-size: 1.2rem;
      }
      .addresses-item-btn {
        padding: 0.8rem;
        border-radius: 50%;
        align-self: center;
        border: 1px solid #43290a;
      }
      &:hover .addresses-item-btn,
      &.active .addresses-item-btn {
        background: #43290a;
      }
    }
  }
}
</style>
