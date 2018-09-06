import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { INCREMENT } from './mutation-types'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    /**
     * @param {*} state store 的 state
     * @param {*} obj 可包含多个字段， mutation 更容易读
     */
    [INCREMENT] (state, obj) {
      // 变更状态
      if(typeof obj === 'object') {
        return state.count += obj.count
      }
      state.count += obj
    }
  }
})

export default store