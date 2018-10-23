import Vue from 'vue'
import Vuex from 'vuex'
import action from './actions'
import { state } from './state'
import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  action: action,
  mutations: {

    // count 测试数据
    [types.INCREMENT] (state, payload) {
      state.count += payload.count
    },

    // 答案记录
    [types.RECORD_ANSWER] (state, payload) {
      state.answerList.push(payload.answer)
    },

    // 题目索引
    [types.TOPIC_INDEX] (state, index) {
      state.topicIndex++
    }
  }
})

export default store
