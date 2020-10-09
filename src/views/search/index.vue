<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model.trim="keywords"
      shape="round"
      background="#d43c33"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- 历史记录 -->
    <Summary summary="历史搜索" />
    <SearchHistory ref="child" />
    <!-- 热搜榜 -->
    <Summary summary="热搜榜" />
    <HotSearch />
  </div>
</template>

<script>
//内容概要
import Summary from "@/components/summary";
import { getItem, setItem } from "@/utils/storage";

import SearchHistory from "./components/search-history";
import HotSearch from "./components/hot-search";

export default {
  name: "Search",
  components: {
    SearchHistory,
    HotSearch,
    Summary,
  },
  data() {
    return {
      keywords: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSearch() {
      if (this.keywords.trim().length === 0) {
        return;
      }
      const storageName = "search-history";
      let histories = getItem(storageName);
      if (!histories) {
        setItem(storageName, [this.keywords]);
      } else {
        if (histories.indexOf(this.keywords) > -1) {
          return;
        }

        histories.unshift(this.keywords);
        setItem(storageName, histories);
      }
      this.$refs.child.loadSearchHistory();
    },
    onCancel() {},
  },
};
</script>

<style scoped lang='less'>
</style>