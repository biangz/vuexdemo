
<template lang="pug">
  div.home.container
    h1 vuex 里的 count {{count}}
    div.btn-group
      button.m-btn-md.btn-primary(@click="goto") 开始
      button.m-btn-md.btn-primary(@click="changeState") 改变 vuex 的 count 状态
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
      this.increment({
        count: 2
      })

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
.home {
  text-align: center;

  h1 {
    font-size: .2rem;
    line-height: 1rem;
  }

  .btn-group {
    margin-top: 1rem;

    button {
      padding: .1rem .3rem;
      background: $background-color;
    }
  }

  button {
    @include color($background-color, #fff)
  }
}
</style>
