<template>
  <div>
    <!-- 底部tabbar -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/rank" icon="fire-o">排行榜</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- Layout路由出口 -->
    <keep-alive>
      <router-view class="layout-container" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>

.layout-container {
  padding-bottom: 120px;

}

.van-tabbar {
  z-index: 99;
}
</style>