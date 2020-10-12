<template>
  <div>
    <van-loading
      type="spinner"
      color="#1989fa"
      v-if="loading"
      class="loading"
    />
    <div v-if="!loading" class="hotSearch-container">
      <div
        v-for="(hot, index) in hotSearch"
        :key="index"
        class="hotSearch-wrapper"
      >
        <p
          class="index"
          :class="{ hot: index == 0 || index == 1 || index == 2 }"
        >
          {{ index + 1 }}
        </p>
        <p class="name">{{ hot.searchWord }}</p>
        <img :src="hot.iconUrl" alt="" class="icon" />
      </div>
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
      loading: true,
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
      this.hotSearch = data.data;
      this.loading = false;
    },
  },
};
</script>

<style scoped lang='less'>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hotSearch-container {
  display: flex;
  padding: 0 15px;
  flex-wrap: wrap;
  .hotSearch-wrapper {
    width: 50%;
    height: 40px;
    line-height: 40px;
    display: flex;
    font-size: 14px;
    .index {
      width: 20px;
      // margin-left: 40px;
    }
    .icon {
      margin-top: 20px;
      margin-left: 2px;
      height: 10px;
    }
    .hot {
      color: #d43c33;
    }
  }
}
</style>