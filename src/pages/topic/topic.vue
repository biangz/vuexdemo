<template>
  <div class="container">
    <main-topic :parent="topicList[topicIndex]"></main-topic>
  </div>
</template>

<script>
import mainTopic from '@/components/topicItem'

export default {
  data () {
    return{
      topicIndex: 0, // 第几题
      topicList: [
        {
          answer: 1,
          answerList: [
            {id: 0, con: 1111},
            {id: 1, con: 2222},
            {id: 2, con: 3333},
            {id: 3, con: 4444}
          ],
          answerTitle: '题目一'
        }
      ], // 题目总列表
    }
  },
  components: {
    mainTopic
  },
  methods: {
  }
}
</script>

