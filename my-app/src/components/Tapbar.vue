<template>
 <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="search">附近</van-tabbar-item>
  <van-tabbar-item icon="friends-o">
    <router-link to="/login">我的</router-link>
  </van-tabbar-item>
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
