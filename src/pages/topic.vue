<template lang="pug">
  div.topic.container
    main-topic(
      :parent="topics[topicIndex]"
      @handleChooseAnswer="handleChooseAnswer"
    )
    button.next.m-btn-md(@click="next") 下一题
</template>

<script>
import mainTopic from '@/components/topicItem'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      answer: null
    }
  },
  components: {
    mainTopic
  },
  methods: {
    // 本题答案
    handleChooseAnswer (val) {
      this.answer = val
    },

    // 下一题
    next () {
      if (!this.answer) { return alert('请选择本题答案') }

      return this.nextTopic({
        answer: this.answer
      }).then(re => {
        if (!re) { return false }
        this.$router.replace({path: '/result'})
      })
    },

    ...mapActions([
      'nextTopic'
    ])
  },
  computed: {
    ...mapState([
      'topics',
      'topicIndex'
    ])
  }
}
</script>

<style lang="scss" scoped>
.topic {
  padding: .4rem;

  .next {
    margin-top: .4rem;
    @include color($background-color, #fff)
  }
}
</style>
