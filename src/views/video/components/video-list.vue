<template>
  <div class="videoList-container">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :success-text="refreshSuccessText"
      success-duration="1500"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadVideoCateDetail"
      >
        <VideoItem
          :videoData="video"
          v-for="(video, index) in videoListData"
          :key="index"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { videoCateDetail } from "@/api/video";
import VideoItem from "@/components/video-item";
import { getTimeStamp } from "@/utils/timestamp.js";
export default {
  props: {
    cateId: {
      type: Number,
      required: true,
    },
  },
  name: "VideoList",
  components: { VideoItem },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      videoListData: [],
      offset: 0,
      refreshSuccessText: "",
    };
  },
  methods: {
    //获取视频分类下的详情
    async loadVideoCateDetail() {
      const { data } = await videoCateDetail(this.cateId, this.offset);
      this.videoListData.push(...data.datas);
      this.loading = false;
      if (data.hasmore === true) {
        this.offset++;
      } else {
        this.finished = true;
      }
    },
    async onRefresh() {
      const { data } = await videoCateDetail(this.cateId, 0, getTimeStamp());
      this.videoListData.unshift(...data.datas);
      this.refreshSuccessText = `更新了${data.rcmdLimit}条视频`;
      this.refreshing = false;
    },
  },
};
</script>

<style scoped lang='less'>
.videoList-container {
  width: 100%;
  height: 100%;
}
</style>