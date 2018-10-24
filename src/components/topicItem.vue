<template>
  <div class="topics container">
    <p>{{parent.answerTitle}}</p>
    <ul>
      <li
        v-for="(item) in parent.topicLists"
        :key="item.id"
        @click="chooseOption(item.id)"
      >
        <span class="option-item">
          <v-icon :name="chooseAnswerId == item.id?'check-circle':'regular/circle'"/>
        </span>
        {{item.con}}
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  data () {
    return {
      chooseAnswerId: null // 选择的答案的 id
    }
  },
  props: ['parent'],
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
        color: $primary-grey;

        &.is-active {
          border: .02rem solid $primary-theme;
          border-radius: .15rem;
        }
      }
    }
  }
}
</style>
