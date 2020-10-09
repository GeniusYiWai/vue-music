<template>
  <div class="playlist-container" ref="wrapper">
    <ul class="playlist-wrapper">
      <li v-for="(playlist, index) in playlistData" :key="index">
        <img :src="playlist.picUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
//引入better-scroll
import BScroll from "better-scroll";

export default {
  props: {
    playlistData: {
      type: Array,
      required: true,
    },
  },
  name: "PlayList",
  components: {},
  data() {
    return {
      scroll: null,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    //目前会报错 暂时将代码注释 解决了问题
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
        click: true,
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical",
      });
    });
  },
  methods: {},
};
</script>

<style scoped lang='less'>
.playlist-container {
  .playlist-wrapper {
    display: flex;
    overflow-x: auto;
    li {
      width: 35%;
      img {
        height: 100px;
        border-radius: 5px;
        margin: 10px;
      }
    }
  }
}
</style>