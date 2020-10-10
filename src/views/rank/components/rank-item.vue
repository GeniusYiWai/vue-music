<template>
  <div class="rankItem-container">
    <div class="rankItem-cover">
      <img :src="rankData.coverImgUrl" />
      <p class="updateFrequency">{{ rankData.updateFrequency }}</p>
    </div>
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
    rankData: {
      type: Object,
      required: true,
    },
  },
  name: "RankItem",
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
.rankItem-container {
  padding: 0 10px;
  display: flex;
  align-items: center;
  .rankItem-cover {
    position: relative;
    img {
      width: 120px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .updateFrequency {
      position: absolute;
      bottom: 0;
      left: 3px;
      color: #fff;
      font-size: 12px;
    }
  }
  .rankItem-songs {
    p {
      font-size: 12px;
    }
  }
}
</style>