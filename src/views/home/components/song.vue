<template>
  <div class="song-container" ref="wrapper"></div>
</template>

<script>
//引入better-scroll
import BScroll from "better-scroll";
export default {
  props: {
    songData: {
      type: Array,
      required: true,
    },
  },
  name: "Song",
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
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
    //     click: true,
    //     scrollX: true,
    //     scrollY: false,
    //     eventPassthrough: "vertical",
    //   });
    // });
  },
};
</script>

<style scoped lang='less'>
</style>