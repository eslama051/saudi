<template>
  <section
    :class="
      filterState == true
        ? 'filter_box_container show_filter_box'
        : 'filter_box_container'
    "
    @click="closeFilter"
  >
    <div class="fitler_box" @click.stop="closeDropdown">
      <button class="close-btn" @click="closeFilter">
        <i class="fa fa-xmark"></i>
      </button>
      <h3 class="filter_title">فلتر</h3>
      <div class="dropdown">
        <input
          type="text"
          placeholder="التصنيف"
          @click.stop="showDropdown"
          v-model="selecetedType"
        />
        <ul v-if="isDropDown">
          <li @click="selecetType('المضاف حديثا')">المضاف حديثا</li>
          <li @click="selecetType('الاكثر استخدما')">الاكثر استخدما</li>
        </ul>
      </div>
      <label for="" class="label">السعر</label>
      <multi-range-slider class="smth" />
      <h4 for="" class="label">التقييم</h4>
      <form class="rating" @submit.prevent>
        <label>
          <input
            @change="(e) => getRateValue(e.target.value)"
            type="radio"
            name="stars"
            value="1"
          />
          <span><i class="fa fa-star"></i></span>
        </label>
        <label>
          <input
            @change="(e) => getRateValue(e.target.value)"
            type="radio"
            name="stars"
            value="2"
          />
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
        </label>
        <label>
          <input
            @change="(e) => getRateValue(e.target.value)"
            type="radio"
            name="stars"
            value="3"
          />
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
        </label>
        <label>
          <input
            @change="(e) => getRateValue(e.target.value)"
            type="radio"
            name="stars"
            value="4"
          />
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
        </label>
        <label>
          <input
            @change="(e) => getRateValue(e.target.value)"
            type="radio"
            name="stars"
            value="5"
          />
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
        </label>
      </form>
      <div class="filter-control">
        <button class="main-btn white" @click="closeFilter">إلغاء</button>
        <button class="main-btn red">بحث</button>
      </div>
    </div>
  </section>
</template>

<script>
import MultiRangeSlider from "../../components/ui/MultiRangeSlider.vue";

export default {
  data() {
    return {
      isDropDown: false,
      selecetedType: "",
      rateValue: "",
    };
  },
  components: { MultiRangeSlider },

  computed: {
    filterState() {
      return this.$store.getters.filterState;
    },
  },
  methods: {
    closeFilter() {
      this.$store.dispatch("closeFilter");
      this.isDropDown = false;
    },
    showDropdown() {
      this.isDropDown = true;
    },
    closeDropdown() {
      this.isDropDown = false;
    },
    selecetType(type) {
      this.selecetedType = type;
      this.closeDropdown;
    },
    getRateValue(value) {
      this.rateValue = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter_box_container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  //   z-index: 10000;
  transform: translateX(-100%);
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0.3);
  .fitler_box {
    // width: 50%;
    max-width: 30rem;
    padding: 2rem;
    background: #fbf9f4;
    height: 100%;
    position: relative;
    text-align: right;
    .smth {
      width: 100%;
      margin-bottom: 2rem;
    }
    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
      border: none;
      transition: all 0.3s;
      &:hover {
        color: red;
        transform: rotate(180deg);
      }
    }
  }
}
.show_filter_box {
  transform: translateX(0);
}
.dropdown {
  position: relative;
  margin: 2rem 0rem;
  input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 2px solid gray;
    padding: 0.5rem;
    text-align: right;
    outline: none;
  }
  ul {
    margin-top: 0.2rem;
    position: absolute;
    top: 100%;
    z-index: 5;
    text-align: right;
    width: 100%;
    //   padding: 0.5rem 0rem;
    border: 1px solid rgba(156, 150, 150);
    overflow: hidden;
    border-radius: 10px;
    li {
      padding: 0.5rem 1rem;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      &:hover,
      &.active {
        background: #43290a;
        color: white;
      }
    }
  }
}
.label {
  color: gray;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.rating {
  display: inline-block;
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
}

.rating label {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  cursor: pointer;
}

.rating label:last-child {
  position: static;
}

.rating label:nth-child(1) {
  z-index: 5;
}

.rating label:nth-child(2) {
  z-index: 4;
}

.rating label:nth-child(3) {
  z-index: 3;
}

.rating label:nth-child(4) {
  z-index: 2;
}

.rating label:nth-child(5) {
  z-index: 1;
}

.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.rating label span {
  float: left;
  color: transparent;
}

.rating label:last-child span {
  color: gray;
}

.rating:not(:hover) label input:checked ~ span,
.rating:hover label:hover input ~ span {
  color: #ffbe0f;
}

.rating label input:focus:not(:checked) ~ span:last-child {
  color: gray;
  text-shadow: 0 0 5px #09f;
}
.filter-control {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
  row-gap: 1rem;
  .white {
    color: #43290a;
    background: white;
    // border-color: white;
  }
}
.filter_title {
  text-align: center;
  color: #43290a;
  font-weight: bold;
}
</style>
