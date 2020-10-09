import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import '@/styles/index.less'


//全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//全局引入vant图片懒加载
import {
  Lazyload
} from 'vant';

Vue.use(Lazyload);


//自动设置rem
import 'amfe-flexible'

// 引入 nprogress 样式文件
import "nprogress/nprogress.css";


import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')