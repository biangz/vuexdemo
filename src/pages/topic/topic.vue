<template>
  <div class="container-wrap">
    <main-topic
      :parent="topics[currentTopicIndex]"
      @handleChooseAnswer="handleChooseAnswer"
    ></main-topic>
    <button class="next m-btn-md" @click="next">下一题</button>
  </div>
</template>

<script>
import mainTopic from '@/components/topicItem'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  created () {},
  components: {
    mainTopic
  },
  methods: {
    // 本题答案
    handleChooseAnswer (val) {
      this.recordAnswer(val)
    },

    // 下一题
    next () {
      if (!this.currentTopicAnswer) {
        return alert('请选择一个答案才能进入下一题啊！')
      }

      if (!(this.topics.length > this.currentTopicIndex + 1)) {
        alert('这是最后一题啦')
        return this.$router.push({path: '/result'})
      }

      this.changeTopicIndex()
    },

    ...mapMutations({
      recordAnswer: 'RECORD_ANSWER',
      changeTopicIndex: 'CURRENT_TOPIC_INDEX'
    })
  },
  computed: {
    ...mapState([
      'topics',
      'currentTopicIndex',
      'currentTopicAnswer'
    ])
  }
}
</script>

<style lang="scss" scoped>
.container-wrap {
  margin: .4rem;
  .next {
    margin-top: .4rem;
    @include color($background-theme, #fff)
  }
}
</style>
