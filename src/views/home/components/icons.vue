<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(icon, index) in iconsData" :key="index">
        <div class="scroll-wrapper">
          <img :src="icon.iconUrl" />
          <p>{{ icon.name }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <van-divider />
  </div>
</template>

<script>
export default {
  props: {
    iconsData: {
      type: Array,
      required: true,
    },
  },
  name: "Icons",
  components: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 5,
        spaceBetween: 10,
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.scroll-wrapper {
  text-align: center;
  img {
    background-color: red;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  p {
    font-size: 12px;
  }
}
</style>