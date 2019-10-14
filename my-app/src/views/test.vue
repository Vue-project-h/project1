<template>
  <div>
    <button @click="f1">点击测试存储</button>
    <br />
    <button @click="f2">点击测试获取</button>
  </div>
</template>

<script>
  export default {
    methods: {
      f1() {
        localStorage.setItem("set", "设置的localstorge");
      },
      f2(){
        let a=localStorage.getItem('tok');
        console.log(a)
      }
    }
  };
</script>

<style>
</style>