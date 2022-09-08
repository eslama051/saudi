<template>
  <section class="address-container-container">
    <title-header title="العناوين" link="/addresses" />
    <div class="address-container container">
      <div class="address_header">
        <input type="text" v-model="name" />
        <GmapAutocomplete @place_changed="addMarker" />
      </div>
      <br />
      <GmapMap
        :center="center"
        :zoom="12"
        style="width: 100%; height: 500px"
        class="address_map"
      >
      </GmapMap>

      <div class="main-btn-container">
        <button class="main-btn" @click="updateAddress">تعديل العنوان</button>
      </div>
    </div>
  </section>
</template>
<script>
import server from "../../apis/server";

export default {
  data() {
    return {
      address: {},
      center: { lat: 77.508, lng: -40.587 },
      currentPlace: null,
      name: "",
      is_default: 0,
    };
  },
  props: ["id"],
  methods: {
    addMarker(place) {
      this.currentPlace = place;
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.center = marker;
        console.log(this.currentPlace);
      }
    },
    // geolocate: function () {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     };
    //   });
    // },
    updateAddress() {
      if (this.name == "") {
        this.$iziToast.error({
          message: "حقل نوع العنوان لا يمكن ان يكون فارغ",
        });
        return;
      }
      if (this.address == "") {
        this.$iziToast.error({
          message: "حقل  العنوان لا يمكن ان يكون فارغ",
        });
        return;
      }
      if (this.center == "" || !this.center) {
        this.$iziToast.error({
          message: "something went wrong",
        });
        return;
      }
      const object = {
        name: this.name,
        lat: this.center.lat,
        lng: this.center.lng,
        address: this.currentPlace.name,
        is_default: this.is_default,
      };
      console.log(object);
      this.$store.dispatch("editAddress", { id: this.id, object: object });
    },
  },
  created() {
    server
      .get(`client/address/${this.id}`, {
        headers: {
          Authorization: `Bearer ${this.$store.getters.token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        this.center.lat = res.data.data.lat;
        this.center.lng = res.data.data.lng;
        this.name = res.data.data.name;
        this.is_default = res.data.data.is_default == true ? 1 : 0;
      });
  },
};
</script>

<style lang="scss" scoped>
.address-container-container {
  background: #fbf9f4;
}
.address-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.address_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.address_map {
  border-radius: 20px;
  overflow: hidden;
}
input {
  padding: 0.5rem 1rem;
  text-align: right;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
  outline: none;
  width: 49%;
}
.main-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  .main-btn {
    padding: 0.3rem 3rem;
  }
}
</style>
