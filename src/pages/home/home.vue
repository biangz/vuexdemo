<template>
  <div class="container">
    <h1>vuex 里的 count {{count}}</h1>
    <button @click="goto">开始</button>
    <button @click="changeState">改变 vuex 的 count 状态</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return { 
    }
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
@import '@/assets/styles/variables.scss';
.container {
  width: 100%;
  height: 100%;
  background: #efefef;
  text-align: center;
  h1 {
    font-size: .2rem;
    line-height: 1rem;
  }
  button {
    margin-top: 2rem;
    padding: .1rem .3rem;
    background: $theme;
    border: none;
    outline: none;
  }
}
</style>
