import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入 nprogress 样式文件
import "nprogress/nprogress.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
