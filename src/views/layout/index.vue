<template>
  <div>
    <!-- 底部tabbar -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- Layout路由出口 -->
    <router-view class="layout-container" />
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
  padding-bottom: 50px;
}
.van-tabbar {
  z-index: 99;
}
</style>