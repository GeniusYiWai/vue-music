<template>
  <div class="hotSearch-container">
    <div
      v-for="(hot, index) in hotSearch"
      :key="index"
      class="hotSearch-wrapper"
    >
      <p class="index">{{ index + 1 }}</p>
      <p class="name">{{ hot.searchWord }}</p>
      <img :src="hot.iconUrl" alt="" class="icon" />
    </div>
  </div>
</template>

<script>
import { hotSearch } from "@/api/search";
export default {
  name: "HotSearch",
  data() {
    return {
      hotSearch: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadHotSearch();
  },
  mounted() {},
  methods: {
    async loadHotSearch() {
      const { data } = await hotSearch();
      //   console.log(data);
      this.hotSearch = data.data;
    },
  },
};
</script>

<style scoped lang='less'>
.hotSearch-container {
  display: flex;
  flex-wrap: wrap;
  .hotSearch-wrapper {
    width: 50%;
    height: 40px;
    line-height: 40px;
    display: flex;
    font-size: 14px;

    .index {
      width: 20px;
      margin-left: 40px;
    }
    .icon {
      margin-top: 20px;
      margin-left: 2px;
      height: 10px;
    }
  }
}
</style>