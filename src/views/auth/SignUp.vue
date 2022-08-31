<template>
  <div class="signup-container">
    <div class="logo-container">
      <img src="../../assets/images/logo.svg" alt="" />
    </div>
    <form class="signup" @submit.prevent="siginingUP">
      <h4>Welcome To Davina</h4>
      <h4>Create An Account</h4>
      <div class="form-signup-control">
        <input type="text" placeholder="First Name" v-model="firstName" />
        <input type="text" placeholder="Second Name" v-model="secondName" />
      </div>
      <input type="email" placeholder="Email Address" v-model="email" />
      <div class="form-signup-control">
        <div class="flag-dropdown" v-if="countries">
          <div class="flag-input flag-btn" @click="toggleDropdown">
            <img :src="selecetedCountry.flag" alt="smth" />+{{
              selecetedCountry.key
            }}
          </div>
          <div class="flag-options" v-if="dropdownopened">
            <div
              v-for="(country, index) in countries"
              :key="index"
              :class="country == selecetedCountry ? 'showNot' : 'flag-input'"
              @click="selecetCountry(country)"
            >
              <img :src="country.flag" alt="smth" />+{{ country.key }}
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          class="phone-input"
          v-model="phoneNumber"
        />
      </div>
      <input type="password" placeholder="Password" v-model="password" />
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
      <button class="main-btn">Sign Up</button>
    </form>
    <div class="btns">
      <a class="flow-btn"
        ><img src="../../assets/images/auth/googleBtn.png" alt=""
      /></a>
      <a class="flow-btn"
        ><img src="../../assets/images/auth/facebookBtn.png" alt=""
      /></a>
    </div>

    <p>
      Have An Account?
      <span
        ><router-link class="signin-btn" to="/auth/login"
          >Sign In</router-link
        ></span
      >
    </p>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      dropdownopened: false,
      firstName: "",
      secondName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      countries: null,
      selecetedCountry: null,
    };
  },
  methods: {
    // getUrl(path) {
    //   return require(`../../assets/images/auth/${path}`);
    // },
    toggleDropdown() {
      this.dropdownopened = !this.dropdownopened;
    },
    selecetCountry(country) {
      this.selecetedCountry = country;
      this.dropdownopened = false;
    },
    async siginingUP() {
      let bodyFormData = new FormData();
      if (this.firstName == "") {
        this.$iziToast.error({
          title: "Error: ",
          message: "First Name can not be empty ",
        });
        return;
      }

      if (this.secondName == "") {
        this.$iziToast.error({
          title: "Error: ",
          message: "second Name can not be empty ",
        });
        return;
      }
      bodyFormData.append("user_name", `${this.firstName} ${this.secondName}`);

      if (this.email == "" || !this.email.includes("@")) {
        this.$iziToast.error({
          title: "Error: ",
          message: "email is empty or invalid ",
        });
        return;
      }
      bodyFormData.append("email", this.email);

      if (this.phoneNumber == "") {
        this.$iziToast.error({
          title: "Error: ",
          message: "Phone Number is empty or invalid ",
        });
        return;
      }
      bodyFormData.append(
        "phone",
        `${this.selecetedCountry.key}${this.phoneNumber}`
      );

      if (this.password == "") {
        this.$iziToast.error({
          title: "Error: ",
          message: "Password is empty  ",
        });
        return;
      }
      bodyFormData.append("password", this.password);
      if (this.confirmPassword == "" || this.confirmPassword != this.password) {
        this.$iziToast.error({
          title: "Error: ",
          message: "كلمه السر غير متوافقه ",
        });
        return;
      }
      bodyFormData.append("password_confirmation", this.confirmPassword);

      try {
        await this.$store.dispatch("signup", bodyFormData);
      } catch (error) {
        this.$iziToast.error({
          title: "Error: ",
          message: error.message,
        });
        return;
      }
      this.$iziToast.success({
        // title: "Error: ",
        message: "تم التسجيل بنجاح  رجاء تفعيل حسابك",
      });
      this.$router.push("/auth/signup/verif");
    },
  },
  created() {
    this.$axios
      .get("https://khlod.aait-d.com/saudi_marsheeh/public/api/countries")
      .then((reponse) => {
        // console.log(reponse.data.data);
        this.countries = reponse.data.data;
        this.selecetedCountry = this.countries[0];
      });
  },
};
</script>

<style lang="scss" scoped>
.signup-container {
  text-align: center;
  padding: 2rem 0rem;
  //   img {
  //     // margin-bottom: 1rem;
  //   }
  z-index: 1;
}
.showNot {
  display: none;
}
.signup {
  //   background: white;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    color: red;
  }
  .form-signup-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
    .phone-input {
      flex: 1;
    }
    .flag-options {
      position: absolute;
    }
    .flag-input {
      width: 130px;
      cursor: pointer;
      padding: 0.6rem;
      border-radius: 10px;
      background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
      display: flex;
      column-gap: 1rem;
      justify-content: flex-start;
      margin-bottom: 2px;
      align-items: center;

      img {
        display: block;
        width: 50px;
      }
    }
  }
  input {
    background: inherit;
    padding: 0.8rem 2rem;
    border-radius: 20px;
    width: 100%;
    border: 1px solid rgb(175, 168, 168);
    margin-bottom: 0.5rem;
  }
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 2rem;
  a {
    cursor: pointer;
    img {
      display: block;
      width: 100%;
    }
  }
}
.main-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.6rem 4rem;
  border-radius: 25px;
}
.signin-btn {
  color: black;
  font-weight: bold;
  margin-left: 1rem;
}
</style>
