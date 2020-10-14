<template>
  <div>
    <div
      class="songsheet-wrapper"
      v-for="(item, index) in ResultSongSheet"
      :key="index"
      @click="onSongSheet(item.id)"
    >
      <div class="cover">
        <img :src="item.coverImgUrl" />
      </div>
      <div class="info">
        <p class="name">
          {{ item.name }}
        </p>
        <p class="author">by-{{ item.creator.nickname }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ResultSongSheet: {
      type: Array,
      required: true,
    },
  },
  name: "ResultSongSheet",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onSongSheet(id) {
      this.$router.push("/songsheet?from=songsheet");
      this.$store.commit("setSongSheetId", id);
    },
  },
};
</script>

<style scoped lang='less'>
.songsheet-wrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
  .cover {
    img {
      width: 50px;

      object-fit: cover;
      border-radius: 5px;
    }
  }
  .info {
    margin-left: 5px;
    .name {
      font-size: 16px;
    }
    .author {
      margin-top: 5px;
      font-size: 14px;
    }
  }
}
</style>