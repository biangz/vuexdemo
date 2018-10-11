<template>
  <div class="container">
    <h1>vuex 里的 count {{count}}</h1>
    <div class="btn-group">
      <button class="m-btn-md btn-primary" @click="goto">开始</button>
      <button class="m-btn-md btn-primary" @click="changeState">改变 vuex 的 count 状态</button>
    </div>
    <div class="test">
      <button class="m-btn-mini btn-primary">以后养一只边牧</button>
    </div>
    <div class="test">
      <button class="m-btn-sm">以后养一只边牧</button>
    </div>
    <div class="test">
      <button class="m-btn-md">以后养一只边牧</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    goto () {
      this.$router.push({path: '/topic'})
    },
    changeState () {
      // 一、mapMuattion 方式提交
      this.increment(2)

      /**
       * 二、没有用 mapMutation 方式
       * -----------------------
       *
       * 1. 对象提交方式
       *  this.$store.commit({
            type: 'INCREMENT',
            count: 2
          })
       * ----------------------
       *
       * 2. 单个数据提交方式
          this.$store.commit('INCREMENT', 2)
       * ----------------------
       */
    },
    ...mapMutations({
      increment: 'INCREMENT'
    })
  },
  computed: {
    ...mapState([
      'count'
    ])
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  h1 {
    font-size: .2rem;
    line-height: 1rem;
  }
  .btn-group {
    margin-top: 1rem;
    button {
      padding: .1rem .3rem;
      background: $primary-theme;
      border: none;
      outline: none;
    }
  }
  .test {
    margin-top: 20px;
  }
}
</style>
