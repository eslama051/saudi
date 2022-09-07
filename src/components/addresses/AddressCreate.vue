<template>
  <section class="address-container-container">
    <title-header title="العناوين" link="/addresses" />
    <div class="address-container container">
      <div class="address_header">
        <input type="text" v-model="name" placeholder="إضافه نوع العنوان" />
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
        <button class="main-btn" @click="updateAddress">إضافة عنوان</button>
      </div>
    </div>
  </section>
</template>
<script>
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
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
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

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("lat", this.center.lat);
      formData.append("lng", this.center.lng);
      formData.append("is_default", this.is_default);
      formData.append("address", this.currentPlace.name);
      this.$store.dispatch("addAddress", formData);
    },
  },
  created() {
    this.geolocate();
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
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
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
