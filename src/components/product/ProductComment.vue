<template>
  <section class="product_details_wrapper">
    <h1>تفاصيل المنتج</h1>
    <div class="container">
      <div class="product_details_taps">
        <button @click="openComments">التعليقات</button>
        <button class="active" @click="openDesc">عن المنتج</button>
      </div>
      <div class="product_details_window">
        <article
          v-if="product.review == null || product.review.length == 0"
          class="product-no-comments"
        >
          <img src="../../assets/images/products.a6f24877.svg" alt="" />
          <h1>لايوجد تعليقات</h1>
        </article>
        <article class="product_comments_window" v-else>
          <div class="comments_container">
            <div
              class="comment_item"
              v-for="item in product.review"
              :key="item.id"
            >
              <div class="comment_img_container">
                <img :src="item.client.image" alt="" />
              </div>
              <div class="comment_info">
                <h4>{{ item.client.user_name }}</h4>
                <h5>{{ item.comment }}</h5>
              </div>
              <div class="commnet_rate">
                <div v-if="item.rating_value == 1">
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div v-if="item.rating_value == 2">
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div v-if="item.rating_value == 3">
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div v-if="item.rating_value == 4">
                  <span><i class="fa-regular fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div v-if="item.rating_value == 5">
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="comment-input-container">
            <h4>أضف تقييمك</h4>
            <form class="rating">
              <label>
                <input type="radio" name="stars" value="1" />
                <span><i class="fa fa-star"></i></span>
              </label>
              <label>
                <input type="radio" name="stars" value="2" />
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
              </label>
              <label>
                <input type="radio" name="stars" value="3" />
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
              </label>
              <label>
                <input type="radio" name="stars" value="4" />
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
              </label>
              <label>
                <input type="radio" name="stars" value="5" />
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
                <span><i class="fa fa-star"></i></span>
              </label>
            </form>
            <label for="comment-input"><h4>أضف تعليقك</h4></label>

            <input type="text" id="comment-input" />
            <button class="main-btn">إرسال</button>
          </div>
        </article>
        <article>
          <h3>{{ product.desc }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    openComments(e) {
      e.target.classList.add("active");
      e.target.nextSibling.classList.remove("active");
      document
        .querySelector(".product_details_window")
        .classList.add("toggle_product_details_window");
    },
    openDesc(e) {
      e.target.classList.add("active");
      e.target.previousSibling.classList.remove("active");
      document
        .querySelector(".product_details_window")
        .classList.remove("toggle_product_details_window");
    },
  },
};
</script>
