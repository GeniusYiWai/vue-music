<template>
  <div class="wrapper">
    <div class="container" v-show="!loading">
      <!-- 顶部tabbar -->
      <van-nav-bar
        title="歌单"
        left-text="返回"
        left-arrow
        class="nav-bar"
        @click-left="onClickLeft"
      />
      <!-- 背景图片 -->
      <div
        class="bg-container"
        :style="{
          backgroundImage:
            'url(' + (songsheetInfo.coverImgUrl || albumInfo.picUrl) + ')',
        }"
      ></div>

      <div class="songsheet-container">
        <!-- 歌单封面 -->
        <div class="left-cover">
          <img :src="songsheetInfo.coverImgUrl || albumInfo.picUrl" />
        </div>
        <!-- 歌单信息 -->
        <div class="right-info">
          <!-- 歌单名称 -->
          <p class="name">{{ songsheetInfo.name || albumInfo.name }}</p>
          <!-- 歌单作者信息 -->
          <div class="author-wrapper">
            <img
              :src="
                songsheetInfo.creator ? songsheetInfo.creator.avatarUrl : ''
              "
              class="avatar"
              v-if="songsheetInfo.creator"
            />

            <span class="nickname" v-if="songsheetInfo.creator">{{
              songsheetInfo.creator ? songsheetInfo.creator.nickname : ""
            }}</span>

            <span class="nickname" v-if="albumInfo.artist"
              >歌手:{{ albumInfo.artist ? albumInfo.artist.name : "" }}</span
            >
          </div>
          <!-- 歌单描述 -->
          <p class="desc">
            {{ songsheetInfo.description || albumInfo.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- 歌单列表 -->
    <SongSheetList
      :songSheetList="songSheetList.length !== 0 ? songSheetList : albumList"
      class="songsheet-list"
      v-show="!loading"
      @onMusicPlay="onMusicPlay"
    />
    <van-loading
      type="spinner"
      color="#1989fa"
      v-show="loading"
      class="loading"
    />
  </div>
</template>

<script>
import { songSheetDetail, getAlbumDetail } from "@/api/songsheet";
import { musicDetail } from "@/api/music";
import { mapState } from "vuex";
import SongSheetList from "@/components/songsheet-list";
export default {
  name: "SongSheet",
  components: { SongSheetList },
  data() {
    return {
      songsheetInfo: {},
      songSheetList: [],
      albumInfo: {},
      albumList: [],
      loading: true,
    };
  },
  computed: {
    ...mapState(["songSheetId"]),
    from() {
      return this.$route.query.from;
    },
  },
  watch: {
    songSheetId() {
      this.loading = true;
      if (this.from === "songsheet") {
        this.loadSongSheetData();
      } else {
        this.loadAlbumData();
      }
    },
  },
  created() {
    if (this.from === "songsheet") {
      this.loadSongSheetData();
    } else {
      this.loadAlbumData();
    }
  },
  mounted() {},
  methods: {
    async loadAlbumData() {
      var { data } = await getAlbumDetail(this.songSheetId);
      console.log(data);
      this.albumInfo = data.album;
      let arr = [];

      data.songs.forEach((song) => {
        arr.push(song.id);
      });
      var { data } = await musicDetail(arr.join(","));
      this.albumList = data.songs;
      this.loading = false;
    },
    async loadSongSheetData() {
      var { data } = await songSheetDetail(this.songSheetId);
      this.songsheetInfo = data.playlist;
      let arr = [];
      data.playlist.trackIds.forEach((song) => {
        arr.push(song.id);
      });

      var { data } = await musicDetail(arr.join(","));
      this.songSheetList = data.songs;
      this.loading = false;
    },
    onClickLeft() {
      this.$router.back();
    },
    onMusicPlay(id) {
      this.$store.commit("setMusicId", id);
    },
  },
};
</script>

<style scoped lang='less'>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.songsheet-list {
  flex: 1;
}
.container {
  position: relative;
  height: 250px;
  .bg-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center center;
    filter: blur(30px);
  }
  .nav-bar {
    background-color: unset;
  }

  .van-hairline--bottom::after {
    border: none;
  }
  .songsheet-container {
    padding: 10px;
    display: flex;
    .left-cover {
      margin-right: 10px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
      }
    }
    .right-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .name {
        font-size: 16px;
      }
      .author-wrapper {
        display: flex;
        align-items: center;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 2px;
        }
        .nickname {
          font-size: 12px;
        }
      }
      .desc {
        overflow-y: auto;
        max-height: 60px;
        font-size: 12px;
      }
    }
  }
}
</style>