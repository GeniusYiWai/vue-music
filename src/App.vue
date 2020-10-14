<template>
  <div class="container">
    <!-- App路由出口 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <Music
      class="music-container"
      v-if="$store.state.musicId"
      :class="{ hideTabbar: $route.meta.showTabbar === false }"
    />
  </div>
</template>
<script>
import { login } from "@/api/my";
import Music from "./views/music";
export default {
  created() {
    this.login();
  },
  data() {
    return {
      show: true,
    };
  },
  components: { Music },
  methods: {
    async login() {
      const res = await login({
        phone: "17630106846",
        password: "lpf123456788",
      });
    },
  },
};
</script>
<style lang="less">
.container {
  height: 100%;
  transition: all 0.3s;
}
.music-container {
  position: fixed;
  bottom: 45px;
  left: 0;
  z-index: 99;
  width: 100%;
  transition: all 0.3s;
}
.hideTabbar {
  bottom: 0px;
}
</style>
