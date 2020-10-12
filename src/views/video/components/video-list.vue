<template>
  <div class="videoList-container">
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :success-text="refreshSuccessText"
      success-duration="1500"
    >
      <!--视频列表 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadVideoCateDetail"
      >
        <!-- 单个视频组件 -->
        <VideoItem
          :videoData="video"
          :index="index"
          v-for="(video, index) in videoListData"
          :key="index"
          @onPlay="onVideoPlay"
          ref="videoItem"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
//加载视频详情
import { videoCateDetail } from "@/api/video";
//单个视频展示组件
import VideoItem from "@/components/video-item";
//获取当前时间戳函数
import { getTimeStamp } from "@/utils/timestamp.js";
export default {
  props: {
    //分类标签id
    cateId: {
      type: Number,
      required: true,
    },
  },
  name: "VideoList",
  components: { VideoItem },
  data() {
    return {
      // 是否显示正在加载
      loading: false,
      //是否全部加载完成
      finished: false,
      //是否正在刷新
      refreshing: false,
      //视频列表数据
      videoListData: [],
      //分页
      offset: 0,
      //刷新完成显示文本
      refreshSuccessText: "",
    };
  },
  methods: {
    videoClear() {
      //这里要加个判断不然会报错
      if (this.$refs.videoItem) {
        this.$refs.videoItem.forEach((x) => {
          x.pause();
          x.isPlayVideo = false;
        });
      }
    },
    onVideoPlay(index) {
      this.$refs.videoItem.forEach((x) => {
        x.pause();
        x.isPlayVideo = false;
      });
      this.$refs.videoItem[index].play();
      this.$refs.videoItem[index].isPlayVideo = true;
    },
    //获取视频分类下的详情
    async loadVideoCateDetail() {
      const { data } = await videoCateDetail(this.cateId, this.offset);
      let newArr = data.datas.filter((x) => {
        return x.type === 1;
      });
      //将获取的视频列表数据push到数组中
      this.videoListData.push(...newArr);
      //关闭loading
      this.loading = false;
      //判断是否还有更多数据
      if (data.hasmore === true) {
        //有 分页加一
        this.offset++;
      } else {
        //没有 结束加载
        this.finished = true;
      }
    },
    //下拉刷新
    async onRefresh() {
      //getTimeStamp() 返回当前时间戳 这样可以获取最新数据 不会从缓存中加载
      const { data } = await videoCateDetail(this.cateId, 0, getTimeStamp());
      //将加载的数据添加到顶部
      this.videoListData.unshift(...data.datas);
      //提示文本
      this.refreshSuccessText = `更新了${data.rcmdLimit}条视频`;
      //结束刷新状态
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