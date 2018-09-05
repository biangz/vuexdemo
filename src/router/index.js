import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Topic from '@/pages/topic/topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    }
  ]
})
