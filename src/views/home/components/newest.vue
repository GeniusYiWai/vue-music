<template>
  <div>
    <van-tabs v-model="active" animated>
      <van-tab title="新歌">
        <!-- 2行3列 -->
        <ScrollListColumn
          :scrollData="newSongsData"
          @onMusicPlay="onMusicPlay"
        />
      </van-tab>
      <van-tab title="新碟">
        <!-- 1行1列 -->
        <ScrollList :scrollData="newAlbumsData" @onSongSheet="onSongSheet" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ScrollListColumn from "@/components/scroll-list-column";
import ScrollList from "@/components/scroll-list";
import { getNewAlbums, getNewSongs } from "@/api/home";
export default {
  name: "Newest",
  components: { ScrollListColumn, ScrollList },
  data() {
    return {
      active: 0,
      //新歌数据
      newSongsData: [],
      //推荐歌曲数据
      newAlbumsData: [],
    };
  },
  created() {
    //获取新歌
    this.loadNewSongs();
    //获取新碟
    this.loadNewAlbums();
  },
  methods: {
    onSongSheet(id) {
      console.log('album')
      console.log(id);
      this.$router.push("/songsheet?from=album");
      this.$store.commit("setSongSheetId", id);
    },
    onMusicPlay(id) {
      this.$store.commit("setMusicId", id);
    },
    async loadNewSongs() {
      const { data } = await getNewSongs();
      this.newSongsData = data.data.splice(0, 20);
    },
    async loadNewAlbums() {
      const { data } = await getNewAlbums();
      this.newAlbumsData = data.albums;
    },
  },
};
</script>

<style scoped lang='less'>
/deep/.van-tabs--line .van-tabs__wrap {
  width: 50%;
  margin-bottom: 10px;
}
</style>