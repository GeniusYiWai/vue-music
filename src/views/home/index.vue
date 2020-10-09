<template>
  <div>
    <!-- 轮播图 -->
    <Swiper :bannerData="bannerData" />
    <!-- 图标 -->

    <Icons :iconsData="icons" />

    <!-- 人气歌单推荐
    1行1列
     -->
    <Summary summary="人气歌单推荐" showMore />
    <ScrollList :scrollData="hotPlaylistData" />
    <!-- 懂你的精选歌曲 
    2行3列
    -->
    <Summary summary="懂你的精选歌曲" showMore />
    <ScrollListColumn :scrollData="songData" />
    <!-- 懂你的精选歌单
    1行1列
     -->
    <Summary summary="懂你的精选歌单" />
    <ScrollList :scrollData="recPlaylistData" />
    <Newest />
  </div>
</template>
<script>
import {
  getBanner,
  getHotPlayList,
  getRecSongs,
  getRecPlayList,
  getCalendar,
  getIcons,
} from "@/api/home";
//顶部图标
import Icons from "./components/icons";
//轮播图
import Swiper from "./components/swiper";
//新歌 新碟
import Newest from "./components/newest";
//内容概要
import Summary from "@/components/summary";
//滚动列表 1行1列
import ScrollList from "@/components/scroll-list";
//滚动列表 2行3列
import ScrollListColumn from "@/components/scroll-list-column";
export default {
  name: "Home",
  components: {
    Swiper,
    ScrollList,
    Summary,
    Newest,
    ScrollListColumn,
    Icons,
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
      //热门歌单数据
      hotPlaylistData: [],
      //推荐歌单数据
      recPlaylistData: [],
      //推荐歌曲数据
      songData: [],
      //顶部图标入口
      icons: [],
    };
  },
  created() {
    //获取图片入口列表
    this.loadIcons();

    //获取轮播图
    this.loadBanner();
    //获取热门歌单
    this.loadHotPlayList();
    //获取每日推荐歌单
    this.loadRecPlayList();
    //获取每日推荐歌曲
    this.loadRecSongs();
    //获取音乐日历
    // this.loadCalendar("1596954303000", "1602224703000");
  },
  mounted() {},
  methods: {
    async loadIcons() {
      const { data } = await getIcons();
      this.icons = data.data;
    },
    async loadBanner() {
      const { data } = await getBanner(this.bannerType);
      //取前5个
      this.bannerData = data.banners.splice(0, 5);
    },
    async loadHotPlayList() {
      const { data } = await getHotPlayList(this.playlistCount);
      this.hotPlaylistData = data.result;
    },
    async loadRecPlayList() {
      const { data } = await getRecPlayList();

      this.recPlaylistData = data.recommend;
    },
    async loadRecSongs() {
      const { data } = await getRecSongs();
      this.songData = data.data.dailySongs;
    },

    async loadCalendar(startTime, endTime) {
      const { data } = await getCalendar(startTime, endTime);
    },
  },
};
</script>

<style scoped lang='less'>
</style>