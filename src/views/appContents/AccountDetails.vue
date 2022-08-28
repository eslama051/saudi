div
<template>
  <div>
    <title-header title="حسابي" link="/account/details"></title-header>
    <form action="" @submit.stop>
      <h2 class="account-detail-title">تعديل الحساب</h2>
      <div class="img-edit">
        <img
          src="../../assets/images/unnamed.jpg"
          id="account-detail-img-output"
          alt=""
        />
        <label for="file" class="img-input"><i class="fa fa-edit"></i></label>
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png"
          name="image"
          id="file"
          @change="(e) => loadFile(e)"
          style="display: none"
        />
      </div>
      <input type="text" placeholder="الإسم " />
      <input type="text" placeholder="إسم المستخدم" />
      <input type="text" placeholder="البريد الإلكتروني" />
      <input type="text" placeholder="رقم الجوال" />

      <h2 class="account-detail-title">تعديل كلمه المرور</h2>

      <input type="text" placeholder="كلمة المرور الحليه" />
      <input type="text" placeholder="كلمة المرور الجديدة" />
      <input type="text" placeholder="تأكيد كلمه المرور الجديدة" />
      <button class="main-btn">حفظ</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    loadFile(event) {
      console.log("smth");
      let image = document.getElementById("account-detail-img-output");
      image.src = URL.createObjectURL(event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.account-detail {
  background: #fbf9f4;
  padding: 2rem 0rem;
}
form {
  width: 80%;
  margin: 0rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0rem;
  .account-detail-title {
    margin: 2rem;
    color: #43290a;
  }

  .img-edit {
    width: 200px;
    height: 200px;
    position: relative;
    // overflow: hidden;
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      //   object-fit: cover;
    }
    .img-input {
      cursor: pointer;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 60%);
      color: black;
      background: white;
      border-radius: 50%;
      font-size: 1.5rem;
      padding: 0.3rem 0.7rem;
    }
  }
  input {
    width: 100%;
    border: none;
    background: inherit;
    text-align: right;
    padding: 1rem 0rem;
    border-bottom: 2px solid #dddddd;
    outline: none;
    color: #43290a;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    max-width: 1000px;
  }
  .main-btn {
    margin-top: 3em;
    padding: 0.6rem 4rem;
  }
}
</style>
