div
<template>
  <div>
    <title-header title="حسابي" link="/account/details"></title-header>
    <form action="" @submit.stop>
      <h2 class="account-detail-title">تعديل الحساب</h2>
      <div class="img-edit">
        <img :src="userAvatar" id="account-detail-img-output" alt="" />
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
      <input type="text" placeholder="الإسم " v-model="name" />
      <input type="text" placeholder="إسم المستخدم" v-model="userName" />
      <input type="text" placeholder="البريد الإلكتروني" v-model="userEmail" />
      <input type="text" placeholder="رقم الجوال" v-model="userPhone" />

      <h2 class="account-detail-title account-detail-title-password">
        تعديل كلمه المرور
        <div
          class="password-btn-container"
          id="password-btn-container"
          @click="togglePassword"
        >
          <div class="password-btn"></div>
        </div>
      </h2>
      <transition name="fade">
        <div class="password-inputs-container" v-if="passwordChanging">
          <input type="text" placeholder="كلمة المرور الحاليه" />
          <input type="text" placeholder="كلمة المرور الجديدة" />
          <input type="text" placeholder="تأكيد كلمه المرور الجديدة" />
        </div>
      </transition>
      <button class="main-btn" @click="updateProfile">حفظ</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "",
      name: "",
      userName: "",
      userEmail: "",
      userPhone: "",
      passwordChanging: false,
    };
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
    userAvatar() {
      return this.$store.getters.userAvatar;
    },
  },
  methods: {
    loadFile(event) {
      let image = document.getElementById("account-detail-img-output");
      image.src = URL.createObjectURL(event.target.files[0]);
      this.img = event.target.files[0];
    },
    togglePassword() {
      this.passwordChanging = !this.passwordChanging;
      document
        .getElementById("password-btn-container")
        .classList.toggle("active");
    },
    updateProfile() {
      console.log("smt");
    },
  },
  async mounted() {
    await this.$store.dispatch("getProfile");
    const data = this.$store.getters.userData;
    this.userEmail = data.data.email;
    this.userName = data.data.user_name;
    this.userPhone = data.data.phone;
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
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;

    .password-btn-container {
      width: 40px;
      height: 15px;
      background: rgb(160, 157, 157);
      border-radius: 10px;
      display: flex;
      &:hover .password-btn {
        box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.75);
      }
      .password-btn {
        background: white;
        display: inline-block;
        width: 40%;
        height: 100%;
        border-radius: 50%;
        transform: scale(1.4);
        // justify-self: ;
        transition: all 1s;
        // margin-left: auto;
        box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.75);
      }
    }
    .password-btn-container.active {
      background: gray;
      .password-btn {
        margin-left: auto;
        background: black;
        // opacity: 0.6;
      }
    }
  }
  .password-inputs-container {
    // background: #dddddd;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    input {
      width: 100%;
    }
  }
  .img-edit {
    width: 150px;
    height: 150px;
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
