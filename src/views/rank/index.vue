<template>
  <div class="rank-container">
    <Summary summary="特色榜" />

    <ScrollListColumn :scrollData="recRankList" />

    <Summary summary="官方榜" />
    <RankItem v-for="(rank, index) in rankList" :key="index" :rankData="rank" />
  </div>
</template>

<script>
import Summary from "@/components/summary";
import { rankBrief } from "@/api/rank";
import ScrollList from "@/components/scroll-list";
import ScrollListColumn from "@/components/scroll-list-column";
import RankItem from "./components/rank-item";
export default {
  name: "Rank",
  components: { ScrollList, RankItem, Summary, ScrollListColumn },
  data() {
    return {
      rankList: [],
      recRankList: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadRankBrief();
  },
  mounted() {},
  methods: {
    async loadRankBrief() {
      const { data } = await rankBrief();
      this.rankList = data.list.filter((x) => {
        return x.tracks.length != 0;
      });
      this.recRankList = data.list.filter((x) => {
        return x.tracks.length == 0;
      });
    },
  },
};
</script>

<style scoped lang='less'>
</style>