<template>
  <div class="scroll-container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in scrollData" :key="index">
        <div class="scroll-wrapper">
          <img :src="item.picUrl" />
          <p>{{ item.name }}</p>
        </div>
      </swiper-slide>
    </swiper><van-divider />
  </div>
</template>
<script>
export default {
  props: {
    //滚动数据
    scrollData: {
      type: Array,
      required: true,
    },
  },
  name: "ScrollList",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        //每行显示数量
        slidesPerView: 3,
        //自动切换
        spaceBetween: 20,
        //不自动贴合
        freeMode: true,
        //自动播放
        autoplay: {
          //延迟
          delay: 3000,
          //最后一个是否停止播放
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>

<style scoped lang='less'>
.scroll-container {
  .scroll-wrapper {
    text-align: center;
    img {
      height: 100px;
      border-radius: 5px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>