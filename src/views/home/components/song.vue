<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(song, index) in songData" :key="index">
        <div class="song-wrapper">
          <img :src="song.al.picUrl" />
          <p class="name">
            {{ song.al.name }}
            <span class="singer">-{{ song.ar[0].name }}</span>
          </p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
//引入better-scroll
import BScroll from "better-scroll";
export default {
  props: {
    songData: {
      type: Array,
      required: true,
    },
  },
  name: "Song",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 2,
        slidesPerColumn: 3,
        slidesPerColumnFill: "row",
        autoplay: true,

        // Some Swiper option/callback...
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style scoped lang='less'>
.song-wrapper {
  display: flex;
  height: 70px;
  margin: 5px 10px;
  img {
    height: 70px;
    object-fit: cover;
    margin-right: 5px;
  }
  .name {
    font-size: 12px;
    .singer {
      color: #666;
      font-size: 10px;
    }
  }
}
</style>