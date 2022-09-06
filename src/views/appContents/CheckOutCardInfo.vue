<template>
  <div @click="closeDropdowns">
    <title-header title="الدفع" link="/checkout" />
    <form class="checkout-container container" @submit.prevent="submitForm">
      <input
        type="text"
        placeholder="الإسم علي البطاقة"
        v-model.trim="IDName"
      />
      <input
        type="text"
        placeholder="الرقم علي البطاقة"
        v-model.trim="IDNumber"
      />
      <date-picker
        v-model="time1"
        valueType="format"
        placeholder="تاريخ الإنتهاء"
        class="date_picker"
      ></date-picker>
      <input type="text" placeholder="cvv" v-model.trim="cvv" />
      <button class="main-btn">دفع</button>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
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
}

.main-btn {
  align-self: center;
  padding: 0.3rem 5rem;
}
.date_picker {
  width: 100%;
}
</style>
