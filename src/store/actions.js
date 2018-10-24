import * as types from './mutation-types'

const nextTopic = ({commit, state}, payload) => {
  return new Promise((resolve, reject) => {
    // 记录答案
    commit(types.RECORD_ANSWER, payload)
    // 是否是最后一题
    if (state.topicIndex < state.topics.length - 1) {
      commit(types.TOPIC_INDEX)
      resolve(false)
    } else {
      resolve(true)
    }
  })
}

export default{
  nextTopic
}
