<template>
  <div>
    <!-- 单个视频组件 -->
    <VideoItem
      :videoData="video"
      :index="index"
      v-for="(video, index) in ResultMv"
      :key="index"
      @onPlay="onVideoPlay"
      ref="videoItem"
    />
  </div>
</template>

<script>
import VideoItem from "@/components/video-item";
export default {
  props: {
    ResultMv: {
      props: Array,
      required: true,
    },
  },
  name: "ResultMv",
  components: { VideoItem },
  methods: {
    onVideoPlay(index) {
      this.$refs.videoItem.forEach((x) => {
        x.pause();
        x.isPlayVideo = false;
      });
      this.$refs.videoItem[index].play();
      this.$refs.videoItem[index].isPlayVideo = true;
    },
  },
};
</script>

<style scoped lang='less'>
</style>