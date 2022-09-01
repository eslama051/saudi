<template>
  <div class="competitions-page">
    <title-header title="مسابقات و جوائز" link="/competitions"></title-header>
    <section class="competitions-section container" v-if="token && comData">
      <article class="question-container">
        <h2>سؤال الشهر</h2>
        <h1>{{ comData.question }}</h1>
      </article>
      <article class="answer-container">
        <input type="text" placeholder="اكتب الإجابة هنا" />
        <button>إرسال</button>
      </article>
      <article class="winners-container">
        <h2 class="winners-container-title">
          قائمة الفائزين بمسابقة شهر {{ comData.month }}
        </h2>
        <div class="winner-items-container">
          <div class="winner-item">
            <h4>المركز الأول</h4>
            <div class="winner-img-container">
              <img
                :src="comData.previous_month_winners.first_winner.image_url"
                alt=""
              />
            </div>
            <h2 class="winner-name">
              {{ comData.previous_month_winners.first_winner.name }}
            </h2>
            <h4 class="winner-prize">
              {{ comData.previous_month_winners.first_winner.prize }}
            </h4>
          </div>
          <div class="winner-item">
            <h4>المركز الثاني</h4>
            <div class="winner-img-container">
              <img
                :src="comData.previous_month_winners.second_winner.image_url"
                alt=""
              />
            </div>
            <h2 class="winner-name">
              {{ comData.previous_month_winners.second_winner.name }}
            </h2>
            <h4 class="winner-prize">
              {{ comData.previous_month_winners.second_winner.prize }}
            </h4>
          </div>
          <div class="winner-item">
            <h4>المركز الثالث</h4>
            <div class="winner-img-container">
              <img
                :src="comData.previous_month_winners.third_winner.image_url"
                alt=""
              />
            </div>
            <h2 class="winner-name">
              {{ comData.previous_month_winners.third_winner.name }}
            </h2>
            <h4 class="winner-prize">
              {{ comData.previous_month_winners.third_winner.prize }}
            </h4>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import server from "@/apis/server";
export default {
  data() {
    return {
      comData: "",
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
  created() {
    if (this.token) {
      server
        .get("client/competition", {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
            "Accept-Language": "ar",
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.comData = res.data.data;
        });
    }
  },
};
</script>
