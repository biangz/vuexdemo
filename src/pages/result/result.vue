<template>
  <div class="result">
    <p>你选择的答案是：</p>
    <ul>
      <li v-for="item in result" :key="item">{{item}}</li>
    </ul>
    <p>😆😆😆😆😆😆😆😆😆😆😆😆</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      result: null
    }
  },
  mounted () {
    this.result = this.answerList
    this.result = Object.values(this.result)
  },
  computed: {
    ...mapState([
      'answerList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.result {
  padding: .3rem;
  p {
    font-size: .2rem;
  }
  ul {
    margin-top: .1rem;
    li{
      list-style: circle;
      font-size: .16rem;
      line-height: .24rem;
      color: $primary-theme;
    }
  }
}
</style>
