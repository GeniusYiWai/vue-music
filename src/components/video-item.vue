<template>
  <div class="videoItem-container">
    <!-- 视频封面 -->

    <div class="video-cover-wrapper"  v-show="!isPlayVideo">
      <img
        :src="videoData.data.coverUrl"
        class="video-cover"
      />
      <p class="playTime">
        <!-- 播放次数 -->
        <van-icon name="fire-o" />
        {{ videoData.data.playTime }}
      </p>
      <van-icon name="play-circle-o" class="playIcon" @click="onPlay" />
    </div>

    <video
      v-show="isPlayVideo"
      :src="videoUrl"
      controls
      class="videoPlyer"
      ref="video"
    ></video>
    <!-- 视频标题 -->
    <p class="video-title">{{ videoData.data.title }}</p>
    <div class="video-info">
      <!-- 视频作者 -->
      <div class="video-author">
        <!-- 作者头像 -->
        <img
          :src="videoData.data.creator ? videoData.data.creator.avatarUrl : ''"
          class="avatar"
        />
        <!-- 作者昵称 -->
        <span class="author">{{
          videoData.data.creator ? videoData.data.creator.nickname : ""
        }}</span>
      </div>
      <!-- 视频操作 -->
      <div class="action">
        <van-icon name="thumb-circle-o" :badge="videoData.data.praisedCount" />
        <van-icon name="comment-o" :badge="videoData.data.commentCount" />
        <van-icon name="ellipsis" />
      </div>
    </div>
  </div>
</template>

<script>
import { videoUrl } from "@/api/video";
export default {
  props: {
    // 视频详情
    videoData: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  name: "VideoItem",
  data() {
    return {
      videoUrl: "",
      isPlayVideo: false,
    };
  },
  created() {
    this.onPlayVideo();
  },
  methods: {
    onPlay() {
      this.isPlayVideo = true;
      this.$emit("onPlay", this.index);
    },
    async onPlayVideo() {
      const { data } = await videoUrl(this.videoData.data.vid);
      this.videoUrl = data.urls[0] ? data.urls[0].url : "";
    },
    pause() {
      this.$refs.video.pause();
    },
    play() {
      this.$refs.video.play();
    },
  },
};
</script>

<style scoped lang='less'>
.videoItem-container {
  padding: 0 20px;
  margin-top: 10px;

  .videoPlyer {
    width: 100%;
    height: 250px;
  }
  .video-cover-wrapper {
    position: relative;
    .playTime {
      position: absolute;
      bottom: 50px;
      left: 10px;
      font-size: 14px;
      color: #fff;
      font-weight: bold;
    }
    .playIcon {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 50px;
      transform: translate(-50%, -50%);
      color: #fff;
    }
    .video-cover {
      width: 100%;
      height: 250px;
      border-radius: 5px;
      object-fit: contain;
    }
  }

  .video-title {
    font-size: 14px;
    margin-top: 5px;
  }
  .video-info {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .video-author {
      display: flex;
      align-items: center;
      .avatar {
        width: 30px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .author {
        font-size: 12px;
      }
    }
    .action {
      width: 100px;
      justify-content: space-around;
      display: flex;
      align-items: center;
    }
  }
}
</style>