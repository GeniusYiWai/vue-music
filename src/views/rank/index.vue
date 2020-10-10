<template>
  <div class="rank-container">
    <Summary summary="榜单推荐" />
    <ScrollListColumn :scrollData="recRankList" />
    <Summary summary="官方榜" />
    <RankItem v-for="(rank, index) in rankList" :key="index" :rankData="rank" />
  </div>
</template>

<script>
import Summary from "@/components/summary";
//加载排行榜数据
import { rankBrief } from "@/api/rank";
import ScrollList from "@/components/scroll-list";
import ScrollListColumn from "@/components/scroll-list-column";
//官方榜展示组件
import RankItem from "./components/rank-item";
export default {
  name: "Rank",
  components: { ScrollList, RankItem, Summary, ScrollListColumn },
  data() {
    return {
      //官方榜数据
      rankList: [],
      //推荐榜数据
      recRankList: [],
    };
  },
  created() {
    //加载排行榜数据
    this.loadRankBrief();
  },
  methods: {
    async loadRankBrief() {
      const { data } = await rankBrief();
      //过滤出官方榜数据
      this.rankList = data.list.filter((x) => {
        return x.tracks.length != 0;
      });
      //过滤出推荐榜数据
      this.recRankList = data.list.filter((x) => {
        return x.tracks.length == 0;
      });
    },
  },
};
</script>

<style scoped lang='less'>
</style>