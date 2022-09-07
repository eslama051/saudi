import server from "@/apis/server";
import iziToast from "izitoast";
import router from "@/router";

export default {
  async signup(context, payload) {
    await server
      .post("client-register", payload, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        const data = res.data;
        localStorage.setItem("saudi_marche_user_type", data.data.user_type);
        localStorage.setItem(
          "saudi_marche_verification_code",
          data.dev_message
        );
        localStorage.setItem("saudi_marche_user_phone", data.data.phone);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        throw new Error(error.response.data.message || "error accured");
      });
  },

  async signin(context, payload) {
    await server
      .post("login", payload, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "saudi_marche_user_token",
          res.data.data.token.access_token
        );
        localStorage.setItem("saudi_marche_user_type", res.data.data.user_type);
        localStorage.setItem("saudi_marche_user_avatar", res.data.data.image);
        localStorage.setItem("saudi_marche_user_name", res.data.data.user_name);
        context.commit("signin");
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(
          err.response.data.message || "something went wrong you can try later"
        );
        throw error;
      });
  },

  async verifyCode(_, payload) {
    // const code = JSON.parse(
    //   localStorage.getItem("saudi_marche_verification_code")
    // );

    const phone = JSON.parse(localStorage.getItem("saudi_marche_user_phone"));
    const formData = new FormData();
    formData.append("code", payload.code);
    formData.append("phone", phone);
    formData.append("device_token", "123456789");
    formData.append("type", "android");

    // if (code != payload.code) {
    //   const error = new Error("wrong code");
    //   throw error;
    // }

    await server
      .post("verify", formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(err.response.data.message || "wrong code");
        throw error;
      });
  },

  async getProfile(context) {
    await server
      .get("client/profile", {
        headers: {
          Authorization: `Bearer ${context.state.token}`,
        },
      })
      .then((res) => {
        context.commit("userData", res.data);
      });
  },
  signOut(context) {
    const formData = new FormData();
    formData.append("device_token", "token");
    formData.append("type", "ios");
    server
      .post("logout", formData, {
        headers: {
          Authorization: `Bearer ${context.state.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        iziToast.success({
          message: res.data.message,
        });
        context.commit("signOut");
      });
  },
  forgotPassword(context, payload) {
    server
      .post("forgot_password", payload, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res.data);

        iziToast.success({
          message: res.data.message,
        });
        router.push("/auth/Forget/password/veirf");
      })
      .catch((err) => {
        iziToast.error({
          message: err.response.data.message,
        });
        console.log(err);
        throw new Error();
      });
  },
  checkCode(context, payload) {
    const formData = new FormData();
    formData.append("phone", localStorage.getItem("suadi_phone"));
    formData.append("code", payload.code);
    server
      .post("check_code", formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        localStorage.setItem("suadi_check_code", payload.code);
        iziToast.success({
          message: res.data.message,
        });
        router.push("/auth/password/reset");
      })
      .catch((err) => {
        iziToast.error({
          message: err.response.data.message,
        });
      });
  },
  resetPassword(context, payload) {
    const formData = new FormData();
    formData.append("phone", localStorage.getItem("suadi_phone"));
    formData.append("code", localStorage.getItem("suadi_check_code"));
    formData.append("password", payload.password);
    server
      .post("reset_password", formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        iziToast.success({
          message: res.data.message,
        });
        router.push("/");
      });
  },
};
