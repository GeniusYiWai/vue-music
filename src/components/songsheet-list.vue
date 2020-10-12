<template>
  <div class="songSheet-list">
    <div
      class="item"
      v-for="(song, index) in songSheetList"
      :key="index"
      @click="onMusicPlay(song.id)"
    >
      <div class="index">
        {{ index + 1 }}
      </div>
      <div class="info">
        <p class="name">{{ song.name }}</p>
        <p class="artist">
          {{ song.ar[0].name | ellipsis(10) }}-
          <span class="album">{{ song.al.name | ellipsis(30) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songSheetList: {
      type: Array,
      required: true,
    },
  },
  name: "SongSheetList",
  methods: {
    //播放音乐
    onMusicPlay(id) {
      //触发音乐播放事件 传递点击音乐的id
      this.$emit("onMusicPlay", id);
    },
  },
};
</script>

<style scoped lang='less'>
.songSheet-list {
  padding-bottom: 100px;
  overflow-y: auto;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .item {
    display: flex;
    align-items: center;
    margin-top: 5px;
    .index {
      font-size: 16px;
      width: 30px;
      text-align: center;
    }
    .info {
      display: flex;
      flex-direction: column;
      .name {
        font-size: 16px;
      }
      .artist {
        font-size: 12px;
      }
    }
  }
}
</style>