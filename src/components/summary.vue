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
    summary: {
      type: String,
      required: true,
    },
    showMore: {
      type: Boolean,
    },
  },
  name: "Summary",
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
</style>