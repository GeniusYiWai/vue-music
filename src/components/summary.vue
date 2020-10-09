<template>
  <div>
    <van-nav-bar
      :left-text="summary"
      :right-text="showMore ? '查看更多' : ''"
    />
  </div>
</template>

<script>
export default {
  props: {
    //描述
    summary: {
      type: String,
      required: true,
    },
    //是否展示 显示更多按钮
    showMore: {
      type: Boolean,
    },
  },
  name: "Summary",
};
</script>

<style scoped lang='less'>
</style>