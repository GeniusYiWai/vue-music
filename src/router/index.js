import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import NProgress from 'nprogress'
const routes = [{
    path: '/',
    component: () => import('../views/layout/'),
    children: [{
        path: '',
        name: 'home',
        component: () => import('../views/home/'),
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('../views/video/'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/search/'),
      }, {
        path: 'my',
        name: 'my',
        component: () => import('../views/my/'),
      },
    ]
  }


]


const router = new VueRouter({
  routes
})
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



export default router