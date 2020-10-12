<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(song, index) in scrollData" :key="index">
        <div>
          <!-- 由于组件需要在不同地方使用 传入的数据不同 所以需要对传入数据进行判断 才能正常展示图片和文字 -->
          <!-- 显示歌曲 -->
          <template v-if="song.al">
            <div class="song-wrapper" @click="onMusicClick(song.id)">
              <img :src="song.al.picUrl" />
              <p class="name">
                {{ song.name | ellipsis(20) }}
                <span class="singer"
                  >-{{ song.ar[0].name | ellipsis(20) }}</span
                >
              </p>
            </div>
          </template>
          <!-- 显示新歌 -->
          <template v-if="song.album">
            <div class="song-wrapper" @click="onMusicClick(song.id)">
              <img :src="song.album.blurPicUrl" />
              <p class="name">
                {{ song.album.name | ellipsis(20) }}
                <span class="singer"
                  >-{{ song.album.artists[0].name | ellipsis(20) }}</span
                >
              </p>
            </div>
          </template>

          <template v-if="song.company">
            <div class="song-wrapper">
              <img :src="song.blurPicUrl" />
              <p class="name">
                {{ song.name | ellipsis(20) }}
                <span class="singer">-{{ song.company | ellipsis(20) }}</span>
              </p>
            </div>
          </template>
          <!-- 显示排行榜 -->
          <template v-if="song.updateFrequency">
            <div class="song-wrapper">
              <img :src="song.coverImgUrl" />
              <p class="name">
                {{ song.name | ellipsis(20) }}
              </p>
            </div>
          </template>
        </div>
      </swiper-slide> </swiper
    ><van-divider />
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
  name: "ScrollListColumn",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 2,
        slidesPerColumn: 3,
        slidesPerColumnFill: "row",
        updateOnImagesReady: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false,
        },
      },
    };
  },
  methods: {
    //播放音乐
    onMusicClick(id) {
      //触发音乐播放事件 传递点击音乐的id
      this.$emit("onMusicPlay", id);
    },
  },
};
</script>

<style scoped lang='less'>
.song-wrapper {
  display: flex;
  height: 70px;
  margin: 5px 10px;
  align-items: center;

  img {
    height: 70px;
    object-fit: cover;
    margin-right: 5px;
    border-radius: 5px;
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