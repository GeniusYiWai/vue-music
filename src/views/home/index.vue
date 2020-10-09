<template>
  <div>
    <Swiper :bannerData="bannerData" />
    <Summary summary="懂你的精选歌单" showMore />
    <ScrollList :scrollData="playlistData" />
    <Summary summary="懂你的精选歌曲" showMore />
    <Song :songData="songData" />
  </div>
</template>
<script>
import { getBanner, getRecommendPlayList, getRecommendSongs } from "@/api/home";
import Swiper from "./components/swiper";
import Song from "./components/song";
import Summary from "@/components/summary";
import ScrollList from "@/components/scroll-list";
export default {
  name: "Home",
  components: {
    Swiper,
    Song,
    ScrollList,
    Summary,
  },
  data() {
    return {
      //请求轮播图数据的类型
      // 0: pc
      // 1: android
      // 2: iphone
      // 3: ipad
      bannerType: 2,
      playlistCount: 20,
      //轮播图数据
      bannerData: [],
      //推荐歌单数据
      playlistData: [],
      //推荐歌曲数据
      songData: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadBanner();
    this.loadPlayList();
    this.loadSongs();
  },
  mounted() {},
  methods: {
    async loadBanner() {
      const { data } = await getBanner(this.bannerType);
      //取前5个
      this.bannerData = data.banners.splice(0, 5);
    },
    async loadPlayList() {
      const { data } = await getRecommendPlayList(this.playlistCount);
      this.playlistData = data.result;
    },
    async loadSongs() {
      const { data } = await getRecommendSongs();
      console.log(data);
      this.songData = data.data.dailySongs;
    },
  },
};
</script>

<style scoped lang='less'>
</style>