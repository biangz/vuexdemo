<template>
  <div class="topics">
    <p>{{parent.answerTitle}}</p>
    <ul>
      <li 
        v-for="(item, index) in parent.answerList"
        :key="item.id"
        @click="chooseOption(index, item.id)">
          <span class="option-item" :class="{'option-has-choosed': chooseNum == index}">{{index}}</span>
          {{item.con}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chooseNum: null, // 选择的答案
      chooseId: null, // 选择的答案的 id
    }
  }, 
  props: ['parent'],
  mounted () {
    console.log(this.parent)
  },
  methods: {
    // 选择答案
    chooseOption (index, id) {
      console.log('index==', index)
      // this.chooseNum = index
      // this.chooseId = id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.topics {
  // font-size: 20px;
  // text-align: left;
  // padding: .4rem 0 0 .5rem;
  // li {
  //   padding: .1rem 0;
  //   .option-item {
  //     &.option-has-choosed {
  //       border: .02rem solid red;
  //       border-radius: .15rem;
  //     }
  //   }
  // }
}
</style>
