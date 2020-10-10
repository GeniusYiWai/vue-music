<template>
  <div>
    <van-tabs sticky animated swipeable>
      <van-tab
        v-for="(item, index) in videoCategory"
        :key="index"
        :title="item.name"
      >
        <VideoList :cateId="item.id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { videoCategory } from "@/api/video";
import VideoList from "./components/video-list";
export default {
  name: "Video",
  components: { VideoList },
  data() {
    return {
      videoCategory: [],
      active: 0,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadVideoCategory();
  },
  methods: {
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