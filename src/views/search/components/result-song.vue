<template>
  <div>
    <SongSheetList :songSheetList="ResultSong" @onMusicPlay="onMusicPlay" />
  </div>
</template>

<script>
import SongSheetList from "@/components/songsheet-list";
export default {
  props: {
    ResultSong: {
      type: Array,
      required: true,
    },
  },
  name: "ResultSong",
  components: { SongSheetList },
  methods: {
    onMusicPlay(id) {
      this.$store.commit("setMusicId", id);
    },
  },
};
</script>

<style scoped lang='less'>
</style>