<template>
  <div class="my-orders-item">
    <div class="my-order-item-header">
      <div>رقم الطلب <span>#123-456</span></div>
      <h5>20/18</h5>
    </div>
    <div class="green">ر.س<span>650</span></div>
    <div class="my-order-item-footer">
      <h5>جاري التنفيذ</h5>
      <div class="orders-imgs">
        <div class="order-img-container">
          <img
            src="https://www.technology-arab.net/wp-content/uploads/2021/07/shrug.jpg"
            alt=""
          />
        </div>
        <div class="order-img-container">
          <img
            src="https://img.freepik.com/premium-vector/woman-holding-garland-decorate-smth-christmas-new-year-person-with-xmas-lights-winter-holidays-outdoors-female-decoration-flat-vector-illustration-isolated-white-background_633472-612.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-orders-item {
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  border-radius: 15px;
  cursor: pointer;
  .my-order-item-header {
    display: flex;
    flex-direction: row-reverse;

    justify-content: space-between;
    margin-bottom: 1rem;
    & > div {
      display: flex;
      flex-direction: row-reverse;
      column-gap: 1rem;
    }
    h5 {
      color: gray;
      font-size: 1rem;
    }
  }
  .green {
    color: green;
    text-align: right;
    justify-content: flex-end;
    display: flex;
    column-gap: 0.5rem;
  }

  .my-order-item-footer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    color: orange;
    font-size: 1rem;
    .orders-imgs {
      display: flex;
      column-gap: 1rem;
      .order-img-container {
        width: 70px;
        height: 70px;
        border-radius: 10px;

        overflow: hidden;
      }
    }
  }
}
img {
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
