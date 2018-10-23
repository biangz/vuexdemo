import * as types from './mutation-types'

const nextTopic = ({commit, state}) => {
  // 记录答案
  commit(types.RECORD_ANSWER)

  // 是否是最后一题
  if (state.topicIndex < state.topics.length - 1) {
    commit(types.TOPIC_INDEX)
  }
}

export default{
  nextTopic
}
