<template>
  <div class="container">
    <button @click="goto">开始</button>
  </div>
</template>

<script>
export default {
  data () {
    return { 
    }
  },
  methods: {
    goto () {
      this.$router.push({path: '/topic'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #3D3D3D;
  text-align: center;
  padding-top: 3rem;
  button {
    padding: .02rem .1rem;
  }
}
</style>
