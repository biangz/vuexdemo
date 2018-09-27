import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import { INCREMENT, RECORD_ANSWER, CURRENT_TOPIC_INDEX } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  mutations: {
    /**
     * @param {*} state store 的 state
     * @param {*} obj 可包含多个字段， mutation 更容易读
     */
    // count 测试数据
    [INCREMENT] (state, obj) {
      // 变更状态
      if (typeof obj === 'object') {
        state.count += obj.count
      }
      state.count += obj
    },

    // 答案记录
    [RECORD_ANSWER] (state, val) {
      state.currentTopicAnswer = val
      state.answerList[state.currentTopicIndex] = val
    },

    // 题目索引
    [CURRENT_TOPIC_INDEX] (state, index) {
      state.currentTopicIndex++
      state.currentTopicAnswer = null
    }
  }
})

export default store
