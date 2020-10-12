<template>
  <div class="rankItem-container">
    <div class="rankItem-cover">
      <!-- 排行榜封面 -->

      <img :src="rankData.coverImgUrl" />
      <!-- 排行榜更新时间 -->
      <p class="updateFrequency">{{ rankData.updateFrequency }}</p>
    </div>
    <!-- 排行榜歌曲 -->
    <div class="rankItem-songs">
      <p v-for="(song, index) in rankData.tracks" :key="index">
        {{ index + 1 }}.{{ song.first }}-{{ song.second }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //排行榜数据
    rankData: {
      type: Object,
      required: true,
    },
  },
  name: "RankItem",
};
</script>

<style scoped lang='less'>
.rankItem-container {
  padding: 0 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .rankItem-cover {
    position: relative;
    img {
      width: 120px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .updateFrequency {
      position: absolute;
      bottom: 10px;
      left: 3px;
      color: #fff;
      font-size: 12px;
    }
  }
  .rankItem-songs {
    p {
      font-size: 13px;
      margin-top: 10px;
    }
  }
}
</style>