import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import NProgress from 'nprogress'
const routes = [
  // {
  //   path: '/',
  //   component: () => import( '../views/About.vue')
  // }
]




//路由跳转添加nprogress进度条

router.beforeEach((to, from, next) => {
  //nprogress进度条显示
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  // nprogress进度条隐藏
  NProgress.done()

})






const router = new VueRouter({
  routes
})

export default router