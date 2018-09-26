<template>
  <div class="topics">
    <p>{{parent.answerTitle}}</p>
    <ul>
      <li
        v-for="(item, index) in parent.answerList"
        :key="item.id"
        @click="chooseOption(index, item.id)">
          <span class="option-item" :class="{'option-has-choosed': chooseNum == index}"> · </span>
          {{item.con}}
        </li>
    </ul>
    <button class="m-btn-md btn-primary" @click="next">下一题</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      chooseNum: null, // 选择的答案
      chooseId: null // 选择的答案的 id
    }
  },
  props: ['parent'],
  mounted () {
    console.log(this.parent)
  },
  computed: {},
  methods: {
    // 选择答案
    chooseOption (index, id) {
      this.chooseNum = index
      this.chooseId = id
    },

    // 下一题
    next () {
      // TODO: vuex
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.topics {
  font-size: 20px;
  text-align: left;
  padding: .4rem 0 0 .5rem;
  ul {
    margin-top: .2rem;
    li {
      line-height: .3rem;
      .option-item {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        box-sizing: border-box;
        &.option-has-choosed {
          border: .02rem solid $theme;
          border-radius: .15rem;
        }
      }
    }
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
