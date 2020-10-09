<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in searchHistory"
        :key="index"
        class="history-item"
      >
        <van-button type="default" size="mini" icon="delete" dot>{{
          item | ellipsis(10)
        }}</van-button>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getItem } from "@/utils/storage";
export default {
  name: "SearchHistory",
  data() {
    return {
      searchHistory: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        //每行显示数量
        slidesPerView: "auto",
        //不自动贴合
        freeMode: true,
      },
    };
  },
  created() {
    this.loadSearchHistory();
  },
  mounted() {},
  methods: {
    loadSearchHistory() {
      let histories = getItem("search-history");
      this.searchHistory = histories ? histories : [];
    },
  },
};
</script>

<style scoped lang='less'>
.history-item {
  font-size: 12px;
  width: auto;
  margin: 5px;
}
</style>