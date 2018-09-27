<template>
  <div class="topics">
    <p>{{parent.answerTitle}}</p>
    <ul>
      <li
        v-for="(item) in parent.answerList"
        :key="item.id"
        @click="chooseOption(item.id)">
          <span class="option-item" :class="{'option-has-choosed': chooseAnswerId == item.id}"> · </span>
          {{item.con}}
        </li>
    </ul>

  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data () {
    return {
      chooseAnswerId: null // 选择的答案的 id
    }
  },
  props: ['parent'],
  mounted () {},
  computed: {},
  methods: {
    // 选择答案
    chooseOption (id) {
      this.$emit('handleChooseAnswer', id)
      this.chooseAnswerId = id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.topics {
  font-size: 20px;
  text-align: left;
  // padding: .4rem 0 0 .5rem;
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
