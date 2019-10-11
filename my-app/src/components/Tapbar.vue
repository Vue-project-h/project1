<template>
 <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="search">附近</van-tabbar-item>
  <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
  export default {
     data() {
    return {
      active: 0
    }
  }
  };
</script>

<style scoped lang="scss">

</style>
