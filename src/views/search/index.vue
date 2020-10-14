<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model.trim="keywords"
      shape="round"
      background="#d43c33"
      :placeholder="searchRec"
      clear-trigger="always"
      :show-action="isSearching"
      @search="onSearch"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @clear="onClear"
      @cancel="onCancel"
    />
    <!-- 当用户没有搜索时展示搜索历史和热搜榜 -->
    <div v-if="!isSearching">
      <!-- 历史记录 -->
      <Summary summary="历史搜索" />
      <SearchHistory ref="child" @search="onSearch" />
      <!-- 热搜榜 -->
      <Summary summary="热搜榜" />
      <HotSearch @search="onSearch" />
    </div>
    <!-- 当用户输入关键字时展示联想建议 -->
    <div v-else-if="isSearching">
      <van-tabs v-show="showSearchResult" animated @click="onTabsClick" sticky>
        <van-tab title="单曲">
          <ResultSong :ResultSong="songResult" />
        </van-tab>
        <van-tab title="歌单">
          <ResultSongSheet :ResultSongSheet="songSheetResult" />
        </van-tab>
        <van-tab title="视频">
          <ResultMv :ResultMv="mvResult" />
        </van-tab>
      </van-tabs>
    </div>

    <!-- 用户点击搜索按钮后展示搜索结果 -->
    <div v-else>reuslt</div>
    <van-loading
      type="spinner"
      color="#1989fa"
      class="loading"
      append-to-body
      v-show="loading"
    />
  </div>
</template>

<script>
//内容概要
import Summary from "@/components/summary";
import { getItem, setItem } from "@/utils/storage";

import SearchHistory from "./components/search-history";
import HotSearch from "./components/hot-search";
import ResultSong from "./components/result-song";
import ResultSongSheet from "./components/result-songsheet";
import ResultMv from "./components/result-mv";
import { searchDefault, Search } from "@/api/search";

export default {
  name: "Search",
  components: {
    SearchHistory,
    HotSearch,
    Summary,
    ResultSong,
    ResultSongSheet,
    ResultMv,
  },
  data() {
    return {
      //搜索关键字
      keywords: "",
      // 推荐搜索
      searchRec: "",
      //推荐搜索真实搜索词
      realkeyword: "",
      //是否显示搜索结果
      isSearching: false,
      //搜索歌曲的结果
      songResult: [],
      //搜索歌单的结果
      songSheetResult: [],
      //搜索mv的结果
      mvResult: [],
      //搜索结果加载动画
      loading: false,
      showSearchResult: false,
      searchType: 1,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadsearchDefault();
  },
  mounted() {},
  methods: {
    //输入框获得焦点时触发
    onFocus() {
      this.isSearching = true;
    },
    // 输入框失去焦点时触发
    onBlur() {},
    // 输入框内容变化时触发
    onInput() {
      this.isSearching = true;
    },
    // 清空输入框内容时触发
    onClear() {},
    //取消搜索时触发
    onCancel() {
      this.isSearching = false;
    },
    onSearch(search) {
      if (search) {
        this.keywords = search;
        this.isSearching = true;
      }

      //关键字为空 直接return
      if (this.keywords.trim().length === 0) {
        return;
      }
      this.showSearchResult = true;
      this.loading = true;
      this.loadsearchResult();
      this.setKeywordToLocal();
    },
    //切换搜索类型
    // 默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
    onTabsClick(index) {
      switch (index) {
        case 0:
          this.searchType = 1;
          break;
        case 1:
          this.searchType = 1000;
          break;
        case 2:
          this.searchType = 1004;
          break;

        default:
          this.searchType = 1;
          break;
      }
      this.loadsearchResult();
    },
    //获取推荐搜索
    async loadsearchDefault() {
      const { data } = await searchDefault();
      this.searchRec = data.data.showKeyword;
      this.realkeyword = data.data.realkeyword;
    },
    //获取搜索结果
    async loadsearchResult() {
      this.loading = true;

      const { data } = await Search(this.keywords, this.searchType, 50);
      this.songResult = data.result.songs ? data.result.songs : [];
      this.songSheetResult = data.result.playlists ? data.result.playlists : [];
      this.mvResult = data.result.mvs ? data.result.mvs : [];
      this.loading = false;
    },
    onMusicPlay(id) {
      this.$store.commit("setMusicId", id);
    },

    setKeywordToLocal() {
      const storageName = "search-history";
      //从缓存中获取搜索历史
      let histories = getItem(storageName);
      //没有搜索历史记录
      if (!histories) {
        //直接将本次搜索历史添加到数组中 存储到本地
        setItem(storageName, [this.keywords]);
      } else {
        //有搜索历史记录
        //判断是不是已经存在该关键字 存在直接return
        if (histories.indexOf(this.keywords) > -1) {
          return;
        }
        //不存在 添加到数据顶部
        histories.unshift(this.keywords);
        //持久化
        setItem(storageName, histories);
      }
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
</style>