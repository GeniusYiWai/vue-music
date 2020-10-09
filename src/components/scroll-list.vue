<template>
  <div class="scroll-container" ref="wrapper">
    <ul class="scroll-wrapper">
      <li v-for="(item, index) in scrollData" :key="index">
        <img :src="item.picUrl" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
//引入better-scroll
import BScroll from "better-scroll";
export default {
  props: {
    scrollData: {
      type: Array,
      required: true,
    },
  },
  name: "ScrollList",
  data() {
    return {
      scroll: null,
    };
  },
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
};
</script>

<style scoped lang='less'>
.scroll-container {
  .scroll-wrapper {
    display: flex;
    overflow-x: auto;
    li {
      width: 35%;
      text-align: center;
      img {
        height: 100px;
        border-radius: 5px;
        margin: 0 10px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>