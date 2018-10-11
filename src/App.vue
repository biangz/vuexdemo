<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';
#app {
  min-height: 100%;
}
</style>
