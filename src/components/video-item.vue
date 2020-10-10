<template>
  <div class="videoItem-container">
    <img :src="videoData.data.coverUrl" class="video-cover" />
    <p class="video-title">{{ videoData.data.title }}</p>

    <div class="video-info">
      <div class="video-author">
        <img
          :src="videoData.data.creator ? videoData.data.creator.avatarUrl : ''"
          class="avatar"
        />
        <span class="author">{{
          videoData.data.creator ? videoData.data.creator.nickname : ""
        }}</span>
      </div>
      <div class="action">
        <van-icon name="thumb-circle-o" />
        <van-icon name="comment-o" />
        <van-icon name="ellipsis" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoData: {
      type: Object,
      required: true,
    },
  },
  name: "VideoItem",
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
.videoItem-container {
  padding: 0 20px;
  margin-top: 10px;
  .video-cover {
    width: 100%;
    border-radius: 5px;
    object-fit: contain;
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