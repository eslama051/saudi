import axios from "axios";

export default {
  async signin(_, payload) {
    const res = await axios.post(
      "https://khlod.aait-d.com/saudi_marsheeh/public/api/client-register",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      }
    );
    // console.log(res);
    if (res.status == "fail") {
      const error = new Error(res.message || "something went wrong");
      //   console.log(res);
      throw error;
    }
    const data = res.data;
    localStorage.setItem("saudi_marche_user_type", data.data.user_type);
    localStorage.setItem("saudi_marche_verification_code", data.dev_message);
    localStorage.setItem("saudi_marche_user_phone", data.data.phone);
  },

  async checkCode(context, payload) {
    const code = JSON.parse(
      localStorage.getItem("saudi_marche_verification_code")
    );
    console.log(code);
    const phone = JSON.parse(localStorage.getItem("saudi_marche_user_phone"));
    const formData = new FormData();
    formData.append("code", code);
    formData.append("phone", phone);
    if (code != payload.code) {
      const error = new Error("wrong code");
      throw error;
    }

    const res = await axios.post(
      "https://khlod.aait-d.com/saudi_marsheeh/public/api/check_code",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      }
    );
    if (res.statusText != "OK") {
      const error = new Error(res.message || "something went worong!");
      throw error;
    }
  },
};
