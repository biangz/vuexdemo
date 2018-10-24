import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 按需加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home'], resolve)
    },
    {
      path: '/topic',
      name: 'Topic',
      component: resolve => require(['@/pages/topic'], resolve)
    },
    {
      path: '/result',
      name: 'Result',
      component: resolve => require(['@/pages/result'], resolve)
    }
  ]
})
