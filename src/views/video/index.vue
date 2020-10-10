<template>
  <div>
    <!-- 视频分类选项卡 -->
    <van-tabs sticky animated swipeable @click="onClick">
      <van-tab
        v-for="(item, index) in videoCategory"
        :key="index"
        :title="item.name"
      >
        <!-- 视频列表组件 -->
        <VideoList :cateId="item.id" ref="videoList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//获取视频分类标签
import { videoCategory } from "@/api/video";
//获取视频列表组件
import VideoList from "./components/video-list";
export default {
  name: "Video",
  components: { VideoList },
  data() {
    return {
      //视频分类标签
      videoCategory: [],
    };
  },

  created() {
    //加载视频分类
    this.loadVideoCategory();
  },
  methods: {
    onClick() {
      this.$refs.videoList.forEach((x) => {
        x.videoClear();
      });
    },
    //获取视频分类
    async loadVideoCategory() {
      const { data } = await videoCategory();
      this.videoCategory = data.data;
    },
  },
};
</script>

<style scoped lang='less'>
</style>