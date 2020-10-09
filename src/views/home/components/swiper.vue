<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
      <van-swipe-item v-for="(banner, index) in bannerData" :key="index">
        <img v-lazy="banner.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    //轮播图数据
    bannerData: {
      type: Array,
      required: true,
    },
  },
  name: "Swiper",
};
</script>

<style scoped lang='less'>
.swiper {
  height: 150px;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>