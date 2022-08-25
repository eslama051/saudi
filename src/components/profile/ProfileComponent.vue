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
            <img
              src="https://yt3.ggpht.com/ytc/AMLnZu-bO90A6zQnn7Q60dFLYHV1ajwkxzEMLlSh70ztng=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <h2>إسلام أحمد</h2>
        </div>
        <div class="user-edit-btn"><i class="fa fa-edit"></i></div>
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
    },
  },
};
</script>
