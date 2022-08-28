<template>
  <div
    class="profile-component-container"
    id="profile-component-container"
    @click="hideProfile"
  >
    <div class="profile-component" @click.stop>
      <span @click="hideProfile" class="close-profile"
        ><i class="fa fa-xmark"></i
      ></span>
      <div class="profile-component-header">
        <div class="user-info">
          <div class="user-img-container">
            <img src="../../assets/images/unnamed.jpg" alt="img" />
          </div>
          <h2>إسلام أحمد</h2>
        </div>
        <div @click="hideProfile">
          <router-link to="/account/details" class="user-edit-btn"
            ><i class="fa fa-edit"></i
          ></router-link>
        </div>
      </div>
      <div class="profile-component-body">
        <profile-item icon="box" title="طلباتي" link="/orders" />
        <profile-item icon="wallet" title="رصيد الحساب" link="/" />
        <profile-item icon="location-dot" title="العناوين" link="/" />
        <profile-item icon="circle-question" title="الأسئلة الشائعة" link="/" />
        <profile-item icon="note-sticky" title="سياية خصوصيه" link="/" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileItem from "./ProfileItem.vue";
export default {
  components: {
    ProfileItem,
  },
  methods: {
    hideProfile() {
      document
        .getElementById("profile-component-container")
        .classList.remove("show-profile");
      document.body.style.overflowY = "auto";
    },
  },
};
</script>
