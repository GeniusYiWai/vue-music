<template>
  <div>
    <!-- App路由出口 -->
<keep-alive>
    <router-view />

</keep-alive>
  </div>
</template>
<script>
import { login } from "@/api/my";
export default {
  created() {
    // this.login();
  },
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
</style>
