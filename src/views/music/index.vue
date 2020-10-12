<template>
  <div>
    <aplayer
      v-if="this.music.src"
      autoplay
      :music="music"
      showLrc
      ref="music"
      @canplay="canPlay"
      :list="musicList"
      listFolded
      listMaxHeight="200"
      theme="#2775b6"
      class="aplayer"
    />
    <van-popup v-model="musicStatus" get-container="body" round>
      <div class="tip">抱歉,当前歌曲暂无音源</div>
    </van-popup>
  </div>
</template>
<script>
import {
  musicUrl,
  musicDetail,
  musicLyric,
  checkMusicStatus,
} from "@/api/music";
//导入aplayer
import Aplayer from "vue-aplayer";
Aplayer.disableVersionBadge = true;
//导入vuex的state数据
import { mapState } from "vuex";
export default {
  name: "Music",
  components: { Aplayer },
  data() {
    return {
      //当前播放音乐的基本信息
      music: {
        src: "",
      },
      //播放列表
      musicList: [],
      musicStatus: false,
    };
  },
  computed: {
    //监听vuex中的音乐id
    ...mapState(["musicId"]),
  },
  watch: {
    musicId() {
      //检测音乐是否可以播放
      this.checkMusicStaus();
    },
  },
  created() {
    //检测音乐是否可以播放
    this.checkMusicStaus();
  },
  mounted() {},
  methods: {
    //音乐可以播放时自动播放
    canPlay() {
      this.$refs.music.play();
    },
    async checkMusicStaus() {
      const { data } = await checkMusicStatus(this.musicId);
      if (data.success === true) {
        this.loadMusicInfo();
      } else {
        this.musicStatus = true;
      }
    },
    //加载音乐信息和播放地址
    async loadMusicInfo() {
      //获取歌曲url地址
      var { data } = await musicUrl(this.musicId);
      //赋值音乐地址
      let src = data.data[0].url;
      //获取歌曲详情
      var { data } = await musicDetail(this.musicId);
      //赋值音乐名称
      let title = data.songs[0].name;
      //赋值音乐作者
      let artist = data.songs[0].ar[0].name;
      //赋值音乐封面
      let pic = data.songs[0].al.picUrl;
      //获取歌词
      var { data } = await musicLyric(this.musicId);
      let lrc;
      if (data.nolyric === true) {
        lrc = "[00:00.000]纯音乐 敬请欣赏";
      } else if (data.lrc.lyric === "") {
        lrc = "[00:00.000]纯音乐 敬请欣赏";
      } else {
        lrc = data.lrc.lyric;
      }
      this.music = {
        src,
        title,
        artist,
        pic,
        lrc,
      };
      this.musicList.unshift(this.music);
    },
  },
};
</script>

<style scoped lang='less'>
.tip {
  font-size: 16px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
}
/deep/ .aplayer-list {
  max-height: 200px;
  overflow-y: auto;
}
/deep/.aplayer {
  margin: unset;
}
/deep/ .aplayer-icon {
  width: 22px;
  height: 22px;
}
/deep/ .aplayer-time-inner {
  font-size: 13px;
}
/deep/ .aplayer-pic {
  margin-top: 10px;
  width: 70px !important;
  height: 70px !important;
  border-radius: 5px;
}
/deep/ .aplayer-title {
  color: #2775b6;
}
/deep/ .aplayer-lrc-current {
  color: #d43c33;
}
</style>