<template>
  <section class="addresses-item">
    <h3>{{ item.name }}</h3>
    <h4>{{ item.address }}</h4>
    <div class="addresses-item-btns">
      <base-button
        class="edit-btn"
        title="تعديل"
        :to="`/addresses/edit/${item.id}`"
        :link="true"
      />
      <button class="del-btn" @click="$emit('delete-item', item.id)">
        حذف
      </button>
    </div>
  </section>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["item"],
  emits: ["delete-item"],
};
</script>

<style lang="scss" scoped>
.addresses-item {
  padding: 1rem;
  background: #f7f5ef;
  border-radius: 10px;
  text-align: right;
  width: 49%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  h3 {
    color: #43290a;
    font-size: 1.5rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1.2rem;
    color: gray;
  }
  .addresses-item-btns {
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
    align-items: center;
    font-size: 1rem;
    .del-btn {
      border: none;
      color: red;
      background: inherit;
    }
  }
}
</style>
