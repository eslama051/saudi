<template>
  <div>
    <title-header title="الدفع" link="/checkout" />
    <div class="checkout-container container">
      <h2>بيانات العميل</h2>
      <input type="text" placeholder="إسم العميل" />
      <input type="text" placeholder="رقم الجوال" />
      <div class="dropdown">
        <input
          type="text"
          placeholder="طريقه الدفع"
          @focus="showDropdown('paymentMethods')"
          @blur="closeDropdown('paymentMethods')"
        />
        <ul v-if="isPaymentMethods">
          <li class="active">كاش</li>
          <li>بطاقة إئتمانية</li>
          <li>محفظة</li>
        </ul>
      </div>
      <div class="dropdown">
        <input
          type="text"
          placeholder="طريقه الشحن"
          @focus="showDropdown('shipmentMethods')"
          @blur="closeDropdown('shipmentMethods')"
        />
        <ul v-if="isShipmentMethods">
          <li v-for="item in shippingTypes" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <h2>العناوين المسجلة</h2>

      <button class="main-btn">إرسال</button>
    </div>
  </div>
</template>

<script>
import server from "../../apis/server";
export default {
  data() {
    return {
      isPaymentMethods: false,
      isShipmentMethods: false,
      shippingTypes: [],
    };
  },
  methods: {
    showDropdown(type) {
      if (type == "paymentMethods") {
        this.isPaymentMethods = true;
      }
      if (type == "shipmentMethods") {
        this.isShipmentMethods = true;
      }
    },
    closeDropdown(type) {
      if (type == "paymentMethods") {
        this.isPaymentMethods = false;
      }
      if (type == "shipmentMethods") {
        this.isShipmentMethods = false;
      }
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
  padding: 4rem 0rem;
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
}
</style>
