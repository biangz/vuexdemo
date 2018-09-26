<template>
  <div class="container">
    <main-topic :parent="currentTopic"></main-topic>
  </div>
</template>

<script>
import mainTopic from '@/components/topicItem'

export default {
  data () {
    return {
      currentTopic: {
        answer: 1, // 正确的答案
        answerList: [
          {id: 0, con: '1111'},
          {id: 1, con: '正确答案2222'},
          {id: 2, con: '3333'},
          {id: 3, con: '4444'}
        ], // 选项
        answerTitle: '题目一' // 标题
      },

      currentTopicIndex: 0 // 第几题
    }
  },
  components: {
    mainTopic
  },
  methods: {
  }
}
</script>
