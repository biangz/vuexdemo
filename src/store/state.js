const state = {
  count: 0,
  topicIndex: 0, // 当前题目索引值
  currentTopicAnswer: null, // 当前题目的答案
  answerList: [], // 答案集合
  topics: [
    {
      answer: 'correct1', // 正确的答案
      topicLists: [
        { id: '1111', con: '1111' },
        { id: 'correct1', con: '正确答案11111' },
        { id: '3333', con: '3333' },
        { id: '4444', con: '4444' }
      ], // 选项
      answerTitle: '你的睡衣是什么颜色的？' // 标题
    },
    {
      answer: 'correct2', // 正确的答案
      topicLists: [
        { id: '222', con: '1111' },
        { id: 'correct2', con: '正确答案222222' },
        { id: '555', con: '3333' },
        { id: '666', con: '4444' }
      ], // 选项
      answerTitle: '你喜欢什么动物？？？' // 标题
    },
    {
      answer: 'correct3', // 正确的答案
      topicLists: [
        { id: '7777', con: '1111' },
        { id: '888', con: '正确答案33333' },
        { id: '999', con: '3333' },
        { id: '1212', con: '4444' }
      ], // 选项
      answerTitle: '大海为什么是蓝色的？？' // 标题
    }
  ]
}

export {
  state
}
